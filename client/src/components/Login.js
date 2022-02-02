import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
import './Login.css';
 
export default function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e){
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

  return (
    <Container className="align-items-center">
        <Form onSubmit={handleSubmit} className='form'>
            <Form.Group>
                <Form.Label>Enter Your ID</Form.Label>
                <Form.Control type="text" ref={idRef} required /> 
            </Form.Group>
            <Button type="submit">Login</Button>
            <Button onClick={createNewId} variant="secondary">Create New ID</Button>
        </Form>
    </Container>
  )
}
