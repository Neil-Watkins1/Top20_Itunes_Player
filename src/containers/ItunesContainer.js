import React, {Component} from 'react';
import SongList from '../component/SongList'
import SongItem from '../component/SongItem'
import './ItunesContainer.css'



class ItunesContainer extends Component {

constructor(props){
  super(props);
  this.state = {
    songs: []
  }
}

componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({songs: data.feed.entry}))
}

render(){
  return (
    <div className="container">
      <h1>Itunes Current Top 20</h1>
      <SongList songs={this.state.songs}/>

    </div>
  );
}


};
export default ItunesContainer;
