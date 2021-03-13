import React from 'react';
import 'bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './Form';
import Search from './Search';
import ListItem from './ListItem';
import './home.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
require('dotenv').config();


function Home(props) {

    const [todos, setTodos] = React.useState([]);
    const [queryString, setQueryString] = React.useState('');

    React.useEffect(async ()=>{

        await fetchData();

    }, []);

    const  fetchData = async () => {
        axios({
            url: process.env.REACT_APP_API + '/todos/getTodos',
            method: 'GET',
        }).then((res, err)=>{
            if(err) throw err;
            setTodos(res.data);
        })
        .catch(err=>console.log("errrr!", err));
    }

    const addNewTodo = (title, body) => {
        axios({
            url: process.env.REACT_APP_API + '/todos/addTodo',
            method: 'POST',
            data: {
                title, body,
                status : "Incomplete"
            }
        }).then((res, err)=>{
            if(err) throw err;
            fetchData();
        })
        .catch(err=>console.log("errrr!", err));
    }

    const deleteTodo = (id) => {
        axios({
            url: process.env.REACT_APP_API + '/todos/deleteTodo',
            method: 'POST',
            data: {
                id
            }
        }).then((res, err)=>{
            if(err) throw err;
            fetchData();
        })
        .catch(err=>console.log("errrr!", err));
    }

    const updateTodo = (id, updates) => {
        axios({
            url: process.env.REACT_APP_API + '/todos/updateTodo',
            method: 'POST',
            data: {
                id, ...updates
            }
        }).then((res, err)=>{
            if(err) throw err;
            fetchData();
        })
        .catch(err=>console.log("errrr!", err));
    }

    const filteredTodos = () => {
        var newTodos = todos.filter(todo=>{
            var title = todo.title.toLocaleLowerCase();
            if(queryString.isEmpty || queryString.length < 3) return true;
            if(title.includes(queryString)) return true;
            return false;
        });

        return newTodos;
    }

    const items = todos && todos.length > 0 ? filteredTodos().map(item=>{
        return (
            <li key={item._id}>
                <ListItem todoData={item} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            </li>
        )
    }) : <h1 style={{paddingTop: 100}} >Nothing is Pending.</h1>;

    return (
        <div>
            <div className="jumbotron d-flex align-items-center min-vh-100">
                <Container className="text-center">
                    <h1 style={{color: 'blue', marginTop: 40, marginBottom: -85, fontFamily: 'Trebuchet MS'}} >TODO APP</h1>
                    <Row>
                    <Col sm={4}>
                            <Form addNewTodo={addNewTodo}/>
                        </Col>
                        <Col sm={8}>
                            <Container style={{top: 10}} ><Search setQueryString={setQueryString} /></Container>
                            <ul className="list-group">
                                {items}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default withRouter(Home);