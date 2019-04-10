import React from 'react';
import SongItem from './SongItem';

const SongList = (props) => {
if(!props) return null;
    const listOfSongs = props.songs.map((song, index) => {
      return <SongItem value ={index} key={index} song={song} position={ index +1 }>
      </SongItem>
    })
    return(
      <div className ="full-list">
      {listOfSongs}
      </div>
    )

}

export default SongList;
