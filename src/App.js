import './App.css';
import Login from './components/login'
import {Token} from './components/spotify'
import Player from './components/player'
import { useEffect } from 'react';
import { useDatavalue } from './components/datalayer';
import SpotifyWebApi from "spotify-web-api-js";
const s = new SpotifyWebApi();
function App() {
  console.log(s);
  const [token,dispatch] = useDatavalue();
  useEffect(() => {
    const hash = Token();
    const _token = hash.access_token;
    window.location.hash = "";
    if(_token){
      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      s.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user : user,
        })
      })
      s.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLIST",
          playlists : playlists,
        })
      })
      s.getPlaylist("37i9dQZEVXcPTL4dkmFIkN").then((response) =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });
    }
  },[])
  return (
    <>
    {/* {console.log(token?.token)} */}
    {!(token?.token) && <Login/>}
    {(token?.token) && <Player/>}
    </>
  );
}

export default App;
