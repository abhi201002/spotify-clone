import React from 'react'
import './body.css'
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDatavalue } from './datalayer';
import Songs from './Songs'

function Body() {
    const [{user,discover_weekly},dispatch] = useDatavalue();
    console.log(discover_weekly);
  return (
    <>
    <div className="body">
        <div className="header">
            <div className="header_left">
                <SearchIcon/>
                <input type="text" placeholder='Search Song, Artist and Album'/>
            </div>
            <div className="header_right">
                <img src={user?.images[0].url} alt="" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
        <div className="main">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="discover">
                <h5>PLAYLIST</h5>
                <h1>Discover Weekly</h1>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className="play">
            <PlayCircleFilledIcon id='green'/>
            <FavoriteBorderIcon/>
            <MoreHorizIcon/>
        </div>
        <div className="songrow">
            {discover_weekly?.tracks?.items?.map((songs,index) => {
                return <Songs name = {songs?.track?.name} album = {songs?.track?.album?.name} singer = {songs?.track?.artists[0]?.name} image = {songs?.track?.album?.images[0].url} num = {index+1}/>
            })}
        </div>
    </div>
    </>
)
}

export default Body