import React from 'react'
import "./footer.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="left">
            <img src="https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c" alt="" />
            <div className="left_info">
              <h5>Animals</h5>
              <p>Maroon 5</p>
            </div>
        </div>
        <div className="mid">
          <div className="mid_icon">
            <ShuffleIcon className='one'/>
            <SkipPreviousIcon className='one'/>
            <PlayCircleFilledIcon className='two'/>
            <SkipNextIcon className='one'/>
            <RepeatIcon className='one'/>
          </div>
        </div>
        <div className="right">
            right part
        </div>
    </div>
    </>
  )
}

export default Footer