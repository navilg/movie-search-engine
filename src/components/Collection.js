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
    componentDidMount() {
        console.log(this.props.location.state);
    }

    state = {
        open: false,
        storage: []
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    }

    ExistingCategory = () => {
        for (var i = 0; i < localStorage.length; i++) {
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

    addtoCategory = (collectionName) => {
        console.log(collectionName);
        console.log(localStorage.getItem(collectionName));
        const { moviename } = this.props.location.state;
        let n = localStorage.getItem(collectionName);
        console.log(n);
        
        n = n + JSON.stringify(moviename);
        console.log(n);
        
        localStorage.setItem(collectionName, n);
    }


    handleCreateCollection = () => {
        let value = document.getElementById('name').value;
        const { moviename } = this.props.location.state;
        if (localStorage.getItem(value) != null) {
            let n = localStorage.getItem(value);
            n = n + JSON.stringify(moviename);
            localStorage.setItem(value, n);
        }
        else {
            localStorage.setItem(value, JSON.stringify(moviename));
        }
        this.handleClose();
    };

    render() {
        return (
            <div className="collection-list">
                <Button onClick={this.handleClickOpen} className="create-category">Create New Category</Button>
                <Button onClick={this.ExistingCategory} className="existing-category">Existing Category</Button>
                {listcat.map(data => data)}
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
                            Create
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default Collection;