import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/data');

            setProducts(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing' + nameToDelete);
    }

    const outOfFrame = async (dir, name) => {
        console.log(name + "left the screen");
        const bool = dir === 'left' ? false : true;

        try {
            const response = await fetch('http://localhost:8001/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({bool: bool, value: name })
            });

            if (response.ok) {
                console.log('Value sent successfully!');
            } else {
                console.error('Error sending value:', response.status);
            }
        } catch (error) {
            console.error('Error sending value:', error);
        }
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {products.map((product) => (
                    <TinderCard
                        className='swipe'
                        key={product.product_name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, product.product_name)}
                        onCardLeftScreen={(dir) => outOfFrame(dir, product.product_name)}>
                        <div className='card' style={{
                            backgroundImage: `url(${JSON.parse(product.image)[0]})`,
                        }}>
                            <div className='cardHeading'>
                                <h3>{product.product_name} - ${product.retail_price}</h3>
                            </div>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards