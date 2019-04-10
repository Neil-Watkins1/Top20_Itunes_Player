import React from 'react';

const SongItem = (props) => {


  return (
    <div className="song-item">
  <h2>Title: {props.song["im:name"]["label"]}</h2>
  <h3>Chart Position: {props.position}</h3>
  <h3>Artist: {props.song["im:artist"]["label"]}</h3>
  <img src={props.song["im:image"][2]["label"]} alt="Artwork"/>
  <br/>
  <audio controls="play" src={props.song.link[1].attributes.href}></audio>
    </div>

  )
}
export default SongItem;
