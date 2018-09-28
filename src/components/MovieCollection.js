/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

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
    this.showCollection = this.showCollection.bind(this);
  }

  componentDidMount() {
    listcat = [];
    for (var i = 0; i < localStorage.length; i += 1) {
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
  showCollection(keyValue) {
    lists = [];
    var { collection } = this.state;
    collection = [];
    collection.push(localStorage.getItem(keyValue).split(','));
    for(let i=0; i<collection[0].length;i += 1){
      let v = i;  
      lists.push(
        <div key={v}>{collection[0][v]}</div>
      )
    }
    this.setState({

    });
  }
  render() {
    return (
      <div className="collection">
        <div className="list-collection">{listcat.map(data => data)}</div>
        <div>{lists.map(data => data)}</div>
      </div>
    )
  }
}

export default MovieCollection;
