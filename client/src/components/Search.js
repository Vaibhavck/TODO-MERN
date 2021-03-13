import React from 'react';
import {Button, Container, Form } from 'react-bootstrap';

function Search(props) {
    return (
        <div>
            <Form onSubmit={(e)=>e.preventDefault()} style={{paddingTop: '130px'}}>
                <Form.Group>
                    <Form.Control onChange={(e)=>{
                        props.setQueryString(e.target.value.toString().trim().toLocaleLowerCase());
                    }} type="text" placeholder="Search here..." />
                    <br/>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Search;