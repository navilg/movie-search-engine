/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import { Button } from '@material-ui/core';


var listcat = [];
var lists = [];
class MovieCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }

  componentDidMount() {
    listcat = [];
    for (var i = 0; i < localStorage.length; i++) {
      let v = i;
      listcat.push(
        <Button key={v} onClick={() => this.showCollection(localStorage.key(v))}>
          {localStorage.key(v)}
        </Button>
      )
    }
    this.setState({

    });
  }
  showCollection = (keyValue) => {
    lists = [];
    this.state.collection = [];
    this.state.collection.push(localStorage.getItem(keyValue).split(','));
    for(var i=0; i<this.state.collection[0].length;i++){
      let v=i;
      console.log("entered to loop");   
      lists.push(
        <div key={v}>{this.state.collection[0][v]}</div>
      )
    }

    this.setState({

    });


    console.log(this.state.collection);
    console.log(this.state.collection[0].length);
  }

  render() {
    const collection = this.state.collection;
    return (
      <div className="collection">
        <div className="list-collection">{listcat.map(data => data)}</div>
        <div>{lists.map(data => data)}</div>
      </div>
    )
  }
}

export default MovieCollection;