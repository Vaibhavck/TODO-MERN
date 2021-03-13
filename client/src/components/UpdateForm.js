import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Form} from 'react-bootstrap';

function UpdateForm(props) {
    const [title, setTitle] = React.useState(props.todoData.title);
    const [body, setBody] = React.useState(props.todoData.body);
    const [status, setStatus] = React.useState(props.todoData.status);

    const updateTodo = () => {
        props.updateTodo(props.todoData._id, {title, body, status});
        props.handleClose();
    }

    return (
        <div>
            <Dialog
        fullScreen={props.fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Update Todo Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Todo title..." />
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <Form.Control value={body} onChange={(e)=>setBody(e.target.value)} type="text" placeholder="Todo body..." />
                </Form.Group>
                <br/>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control value={status} as="select" onChange={(e)=>setStatus(e.target.value)}>
                        <option>Incomplete</option>
                        <option>Complete</option>
                    </Form.Control>
                </Form.Group>
                </Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateTodo} color="primary" autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}

export default UpdateForm;