import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import TextField from 'material-ui/TextField';


const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: theme.spacing.unit * 50,
    marginLeft: -theme.spacing.unit * 25,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
});

class NewChatButton extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      open: false,
      title: {
        value: '',
        isValid: true,
      }
    }
  }

  handlerOpen = () =>
  this.setState({open: true});

  handleClose = () =>
    this.setState({open: false});

  handleTitleChange = (event) => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true,
      }
    });
  }

  handleCreateClick = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false,
        }
      })

      return;
    }

    this.props.onClick(title.value);
    this.setState({
      open: !this.state.open,
      title: {
        value: '',
        isValid: true,
      },
    });
  }

  render() {
    const { classes } = this.props;
    const { open, title } = this.state;

    return (
      <React.Fragment>
        <Button
        variant="fab"
        color="primary"
        className={classes.newChatButton}
        onClick={this.handlerOpen}
        onClose={this.handleClose}
        >
          <AddIcon />
        </Button>
        <Modal
        open={open}
        onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" id="modal-title">
            Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              label="New chat"
              placeholder="Type the title..."
              className={classes.textField}
              margin="normal"
              value={title.value}
              autoComplete="new-chat"
              onChange={this.handleTitleChange}
              error={!title.isValid}
            />
            <Button
              color="primary"
              className={classes.button}
              onClick={this.handleCreateClick}
            >
              CREATE
            </Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NewChatButton);
