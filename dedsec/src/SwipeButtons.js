import React from 'react'
import './SwipeButtons.css'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__thumbDown'>
                <ThumbDownIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__thumbUp'>
                <ThumbUpIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons