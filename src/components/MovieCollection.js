import React from 'react';
import { Button } from '@material-ui/core';

import CollectioList from './CollectionList';

var listcat = [];
class MovieCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }

  componentDidMount() {
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
    this.state.collection = [];
    this.state.collection.push(localStorage.getItem(keyValue));
    console.log(this.state.collection);
  }

  render() {
    const collection = this.state.collection;
    return (
      <div className="collection">
        <div className="list-collection">{listcat.map(data => data)}</div>
        <div></div>
      </div>
    )
  }
}

export default MovieCollection;