import React from 'react';

class Collection extends React.Component{
   componentDidMount(){
       console.log(this.props.location.state);
   }
    render(){
        return(
            <div className="collection-list">Movie Passed {this.props.match.params.title}</div>
        )
    }

}

export default Collection;