import React from 'react'
import './songs.css'

function Songs(props) {
  return (
    <div className="row">
        <div className="id">{props.num}</div>
        <img src={props.image} alt="" />
        <div className="song_info">
            <div className="name">{props.name}</div>
            <div className="singer">{props.singer}</div>
        </div>
        <div className="album">{props.album}</div>
    </div>
  )
}

export default Songs