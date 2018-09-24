import React from 'react';

class MovieCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }

  componentDidMount() {
    // write code here to retrieve your data from Local Storage or JSON server
  }

  compponentDidUpdate(prevProps, prevState) {
    // write code here to save your data to Local Storage or JSON server
  }

  render() {
    return <div>This is movie collection view</div>
  }
}

export default MovieCollection;