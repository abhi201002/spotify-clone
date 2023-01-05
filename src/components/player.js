import React from 'react'
import './player.css'
import Icon from './icon'
import Footer from './footer'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDatavalue } from './datalayer';
import Body from './Body'

function Player() {
  const [state,dispatch] = useDatavalue();
  // console.log(playlists);
  dispatch({
    type: "lll",
  });
  return (
    <>
    <div className='all'>
    <div className="player">
        <div className="side">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <Icon title = "Home" icon = {HomeIcon}/>
            <Icon title = "Search" icon = {SearchIcon}/>
            <Icon title = "Your Library" icon = {LibraryBooksIcon}/>
            <br />
            <Icon title = "Create Playlist" icon = {AddBoxOutlinedIcon}/>
            <Icon title = "Liked Songs" icon = {FavoriteIcon}/>
            <hr />
            {(state.playlists)?.items?.map((playlist) =>(
              <Icon title = {playlist.name} />
            ))}
        </div>
        <Body/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Player