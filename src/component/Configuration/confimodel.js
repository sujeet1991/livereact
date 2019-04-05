import React from 'react';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const confimodel =React.memo(function MyComponent(props){
    console.log(props)
    return(
        <div show={props.show} onHide={props.handlehide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handlehide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handlehide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    )
});

export default confimodel;