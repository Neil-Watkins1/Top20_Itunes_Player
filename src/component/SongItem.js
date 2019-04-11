import React from 'react';
import './SongItem.css'
const SongItem = (props) => {


  return (
    <div className="song-item">
    <h2 className="position" >Chart Position: {props.position}</h2>
  <h2  className="title" >Title: {props.song["im:name"]["label"]}</h2>
  <h3>Artist: {props.song["im:artist"]["label"]}</h3>
  <img src={props.song["im:image"][2]["label"]} alt="Artwork"/>
  
  <audio className="controls" controls="play" src={props.song.link[1].attributes.href}></audio>
    </div>

  )
}
export default SongItem;
