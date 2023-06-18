const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const Cors = require('cors');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(Cors());

app.get('/data', (req, res) => {
    const results = [];

    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const json = results.slice(0, 50); // Get first 10 items

            res.json(json);
        });
});

app.post('/data', (req, res) => {
    const jsonData = req.body;

    if (!jsonData) {
        return res.status(400).json({ message: 'No JSON data provided' });
    }

    const csvPath = __dirname + '/converted_data.csv';

    console.log(jsonData);
    // Convert JSON to CSV
    const csvWriterInstance = createCsvWriter({
        path: csvPath,
        header: [{ id: "value", title: "value" },
        { id: "bool", title: "bool" }
        ]
    });

    csvWriterInstance.writeRecords([jsonData])
        .then(() => {
            console.log('CSV file created:', csvPath);
            res.status(200).json({ message: 'CSV file created' });
        })
        .catch(error => {
            console.error('Error while writing CSV:', error);
            res.status(500).json({ message: 'Error while converting JSON to CSV' });
        });
});

app.get("/recommendations", (req, res) => {
    fetch('https://vaq23okljl.execute-api.eu-west-1.amazonaws.com/recommendation')
        .then(response => response.json())
        .then(data => {
            const jsonData = data;

            // Array to store the matched data
            const matchedData = [];

            // Read the CSV file
            fs.createReadStream('data.csv')
                .pipe(csv())
                .on('data', (row) => {
                    const pid = row.uniq_id;

                    // Find the matching item in the JSON data
                    const match = jsonData.find(item => item.itemId === pid);
                    if (match) {
                        // Add the matched data to the array
                        matchedData.push({
                            id: match.itemId,
                            title: row.product_name,
                            price: row.retail_price,
                            description: row.description,
                            category: JSON.parse(row.product_category_tree)[0].split(">>").map(item => item.trim())[1],
                            image: JSON.parse(row.image)[0],
                            rating: {
                                rate: 3.9,
                                count: 120
                            }
                        });
                    }
                })
                .on('end', () => {
                    // Process the matched data
                    res.json(matchedData);
                    // console.log(matchedData);
                });
            // console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });



})

// listen 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});