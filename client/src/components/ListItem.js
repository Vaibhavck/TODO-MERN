import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import UpdateForm from './UpdateForm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SnackBar from './SnackBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function ListItem(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [openSnack, setSnackOpen] = React.useState(false);

  const handleSnackClick = () => {
    setSnackOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTodo = () => {
    if(props.todoData.status === "Complete")
      props.deleteTodo(props.todoData._id);
    else
      handleSnackClick();
  }

  return (
    <div className={classes.root}>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">
              Status :  <span style={{color: props.todoData.status === "Complete" ? "green" : "#FFBF00"}} >{props.todoData.status}</span>
            </Typography>
            <Typography color="inherit">Date Added : {moment(props.todoData.createdAt).format('LLL')} </Typography>
            <Typography color="inherit">Last Updated : {moment(props.todoData.updatedAt).format('LLL')} </Typography>
          </React.Fragment>
        }
        placement="right"
      >
        <div className="card border-primary mb-3">
            <div className="card-header" style={{float: 'left'}}>
              <Row>
                <Col>
                  <h5 className="card-title" style={{paddingTop: 10}} >{props.todoData.title}</h5>
                </Col>
                <Col>
                <span style={{float: 'right', paddingLeft: 10}}>
                    <Button>
                      { props.todoData.status === "Complete"
                        ?
                        <CheckCircleOutlineIcon style={{color: 'green'}} />
                        :
                       <AccessTimeIcon style={{color: '#FFBF00'}} />}
                    </Button>
                  </span> 
                  <span style={{float: 'right', paddingLeft: 10}}>
                    <Button onClick={deleteTodo}>
                      <DeleteIcon/>
                    </Button>
                  </span> 
                <span style={{float: 'right', paddingLeft: 10}}>
                  <Button onClick={handleClickOpen}>
                    <EditIcon/>
                  </Button>
                </span>
                </Col>
              </Row>
            </div>
            {props.todoData.body ? <div className="card-body text-primary">
              <p className="card-text">{props.todoData.body}</p>
            </div> : null}
          </div>
        </HtmlTooltip>
        <UpdateForm open={open} handleClose={handleClose} fullScreen={fullScreen} todoData={props.todoData} updateTodo={props.updateTodo} />
        <SnackBar openSnack={openSnack} handleSnackClose={handleSnackClose} handleClickOpen={handleClickOpen} />
    </div>
  );
}
