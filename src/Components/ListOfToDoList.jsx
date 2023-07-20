import React from "react";
import { ListGroup, Button, Row, Col, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import { deleteList,addDone,removeDone } from "../redux/actions/listAction";

function ListOfToDoList() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todoItems);
  const { todoList, repeat } = data;
const handleDelete = (name)=> {
  dispatch(deleteList(name))
}
const handleComplete = (name)=> {
  dispatch(addDone(name))
}
const handleInComplete = (name)=> {
  dispatch(removeDone(name))
}
  if (todoList.length > 0) {
    return (
      <div>
        {repeat && (
          <Message variant="danger">
            This note is already added, please choose another one{" "}
          </Message>
        )}
        <ListGroup>
          {todoList.map((list) => (
            <ListGroup.Item variant={list.complete ? 'success' : 'danger'}>
              <Row>
                <Col md={8} sx={8}>
                  - {list.name}
                </Col>
                <Col md={2} sx={2}>
                  {
                    list.complete === true ? (     <Button variant="success" onClick={()=> handleInComplete(list.name)}>
                    <i className="fas fa-check"></i>
                  </Button>) : (     <Button variant="danger" onClick={()=> handleComplete(list.name)}>
                    <i className="fas fa-eraser"></i>
                  </Button>)
                  }
          
                </Col>
                <Col md={2} sx={2}>
                  <Button variant="secondary" onClick = {()=> handleDelete(list.name)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  } else {
    return (
      <ListGroup>
        <ListGroup.Item className="text-center">
          Nothing To Do Yet
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default ListOfToDoList;
