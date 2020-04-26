import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPage = (props) => {
   
  const {
    buttonLabel,
    className
  } = props;


  console.log(props, "PROPS in MODAL");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <a href ="#"  className="ReadMore"><h5 onClick={toggle}>Read More...</h5></a>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.name} Test</ModalHeader>
        <ModalBody>
      jfjf
    
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalPage;