/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint camelcase: 0 */
/* eslint react/jsx-filename-extension:0 */
/* global document localStorage alert:true */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

var listcat = [];

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.ExistingCategory = this.ExistingCategory.bind(this);
    this.addtoCategory = this.addtoCategory.bind(this);
    this.handleCreateCollection = this.handleCreateCollection.bind(this);
  }


  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  }

  ExistingCategory() {
    listcat = [];
    for (var i = 0; i < localStorage.length; i += 1) {
      let v = i;
      listcat.push(
        <Button key={v} onClick={() => this.addtoCategory(localStorage.key(v))}>
          {localStorage.key(v)}
        </Button>
      )
    }
    this.setState({

    });
  }

  addtoCategory(collectionName) {
    const { moviename } = this.props.location.state;
    var storage = [];
    storage.push(localStorage.getItem(collectionName));
    storage.push(moviename);
    localStorage.setItem(collectionName, storage);
    alert('Added to selected category');
  }


  handleCreateCollection() {
    let value = document.getElementById('name').value;
    var storage = [];
    const { moviename } = this.props.location.state;
    if (localStorage.getItem(value) != null) {
      storage.push(localStorage.getItem(value));
      storage.push(moviename);
      localStorage.setItem(value, storage);
    }
    else {
      storage.push(moviename);
      localStorage.setItem(value, storage);
    }
    this.handleClose();
    alert('Created and added to collection');
  };

  render() {
    return (
      <div className="collection-list">
        <Button onClick={this.handleClickOpen} className="create-category">Create New Category</Button>
        <Button onClick={this.ExistingCategory} className="existing-category">Existing Category</Button>
        <div className="list-collection">{listcat.map(data => data)}</div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Add New Collection</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new collection, please enter the collection name here and click on create.
                        </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Collection Name"
              type="text"

            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
                        </Button>
            <Button onClick={this.handleCreateCollection} color="primary">
              Create and Add
                    </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

}

export default Collection;
