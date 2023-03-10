const url = "https://accounts.spotify.com/authorize";
const id = "50da7861c657421a829516c648d65b99";
const redirect_url = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const access = `${url}?client_id=${id}&redirect_uri=${redirect_url}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const Token=() =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
}

