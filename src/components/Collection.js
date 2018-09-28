/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

var listcat = [];
var useMask = [];
var prevMoviename = " ";
class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSnack: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseSnack = this.handleCloseSnack.bind(this);
    this.showExistingCategory = this.showExistingCategory.bind(this);
    this.addtoCategory = this.addtoCategory.bind(this);
    this.handleCreateCollection = this.handleCreateCollection.bind(this);
  }


  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  }

  handleCloseSnack(){
    this.setState({ openSnack:false });
  }

  showExistingCategory() {
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
    const { location } = this.props;
    var storage;
    storage = localStorage.getItem(collectionName);
    var storageArray = storage.split(',');
    if (storageArray.indexOf(location.state.moviename) === -1) {
      storage += ',';
      storage += location.state.moviename;
      localStorage.setItem(collectionName, storage);
      this.setState({ openSnack: true });
    }

  }
  handleCreateCollection() {
    let { value } = document.getElementById('name');
    var storage = [];
    const { location } = this.props;
    if (localStorage.getItem(value) != null) {
      storage.push(localStorage.getItem(value));
      storage.push(location.state.moviename);
      localStorage.setItem(value, storage);
    }
    else {
      storage.push(location.state.moviename);
      localStorage.setItem(value, storage);
    }
    this.setState({ openSnack:true });
    this.handleClose();
  };

  render() {
    const { location } = this.props;
    var { open, openSnack } = this.state;
    if (prevMoviename !== location.state.moviename) {
      useMask = new Array(localStorage.length);
      useMask.fill(false);
      prevMoviename = location.state.moviename;
    }
    return (
      <div className="collection-list">
        <Button onClick={this.handleClickOpen} className="create-category">Create New Category</Button>
        <Button onClick={this.showExistingCategory} className="existing-category">Existing Category</Button>
        <div className="list-collection">{listcat.map(data => data)}</div>
        <Dialog
          open={open}
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

        <Snackbar
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
          open={openSnack}
          onClose={this.handleCloseSnack}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Added to collection</span>}
        />
      </div>
    )
  }

}

export default Collection;
