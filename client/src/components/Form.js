import React from 'react';
import {Button, Form } from 'react-bootstrap';
var S = require('string');

const bodyModifier = (bodyText) => {
  var modifiedString = S(bodyText).stripPunctuation().s;
  modifiedString = S(modifiedString).collapseWhitespace().s;
  return modifiedString;
}

function ToDOForm(props) {

    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        setBody('');
        props.addNewTodo(title, bodyModifier(body));
    }

    const handleBodyInput = (e) => {
        var bodyText = e.target.value.toString();
        var trimmedBody = S(bodyText).replaceAll(' ', '').s;
        if(bodyText.length <= 140 && S(trimmedBody).isAlphaNumeric())
            setBody(e.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} style={{paddingTop: '100px'}} >
                <Form.Group controlId="formBasicEmail">
                <Form.Label>ADD NEW TODO</Form.Label>
                    <Form.Control required value={title} type="text" placeholder="Add Todos here..." onChange={(e)=>setTitle(e.target.value)} />
                    <br/>
                    <Form.Control value={body} type="text" placeholder="Add Body here..." onChange={handleBodyInput} />
                    <br/>
                    <Button type="submit">
                        Add
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default ToDOForm;