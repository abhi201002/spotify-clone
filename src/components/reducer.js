// import React from 'react'
// import { findAllByDisplayValue } from "@testing-library/react"
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: 'BQD5UlKEd4LEArg9MA1mw0sy2L9DXhIu334usNho59QylhRbtZAbUtPJyMZRimvjDflwANm7HcdhMUPJ9_XBJSoywqnBXUF4AIgLSE_DasKmP-y-e2kZU8WxW0YbduTpqHvSenU72ZK97gNoobiX40xb0HUbvSz7rmYLIDIiKcTJOTZ0BAHOHAhxLz99eOwpH1WAjQ9Rr3YwMUYP-E7dP111_c6hiUQoC9DVBahUfrjGWYaRwx2C1PCU4a5IPHRlX79NnCmWi4GRQTAULA2GcZgQ54XvITzP2CgYIIhNskb8PIG90AKQlVAejLy2SZs12glrfWrQQYF0df_y-bNzNVFB',
    token: null,
};
// console.log(initialState);
export const reducer = (state,action) => {
    switch(action.type){
        case "SET_TOKEN":
            return{
                ...state,
                token : action.token,
            };
        case "SET_USER":
            return{
                ...state,
                user : action.user,
            };
        case "SET_PLAYLIST":
            return{
                ...state,
                playlists : action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly : action.discover_weekly,
            };
        default:
            return state;
    }
};
// export default reducer;