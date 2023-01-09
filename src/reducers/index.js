import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "New moon song", duration: "4:00" },
    { title: "Food for us", duration: "3:00" },
    { title: "Mind your own", duration: "4:30" },
    { title: "Solve it soon", duration: "2:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
// Other files now have access to the combined set of reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
