import React, {useState} from 'react'

import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap'
import  {addList} from '../redux/actions/listAction';

function TodoListForm() {
    const dispatch = useDispatch()
const [list,setList]=useState('');

    const handlerSubmit = (e)=>{
        e.preventDefault();
        dispatch(addList(list))
        setList('')
    }
  return (
    <Form className='mx-2 my-2' onSubmit={handlerSubmit}>
<Form.Group controlId='inputList'>
<Row>
    <Col md={8}>
<Form.Control type='text' placeholder='Enter your list' required value={list} onChange={e=>setList(e.target.value)}>

</Form.Control>
    </Col>
    <Col md={4}>
<Button type='submit' variant="secondary">
    Add Item To List
</Button>
    </Col>
</Row>
</Form.Group>
    </Form>
  )
}

export default TodoListForm