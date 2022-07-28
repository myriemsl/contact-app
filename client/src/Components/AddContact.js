import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { AiOutlineUserAdd } from "react-icons/ai";
import AlertText from './AlertText';


const AddContact = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showalert, setShowAlert] = useState(false)


  /*/ Add Contact /*/
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const addNewContact = (e) => {
    e.preventDefault();
    axios.post('/contact', form)
    .then(res => {
      setMessage(res.data.message)
      setShowAlert(true)
      setTimeout(() => {
        setShow(false)
      }, 4000)
      handleClose(false)
    })
    .catch(err => setErrors(err.response.data))
  }





  return (
    <>
    <AlertText message={message} showalert={showalert}/>
    <button className='icon' id='addicon' onClick={handleShow}>Add Contact <AiOutlineUserAdd/></button>

     <Modal show={show} onHide={handleClose}  >
     <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Input label='First Name' name="Fname" type="text" onChange={onChange} errors={errors.Fname}/>
    <Input label='Last Name' name="Lname" type="text" onChange={onChange} errors={errors.Lname}/>
    <Input label='Job' name="Job" type="text" onChange={onChange} errors={errors.Job}/>
    <Input label='Email' name="Email"  type="email" onChange={onChange} errors={errors.Email}/>
    <Input label='Mobile' name="Mobile" type="number" onChange={onChange} errors={errors.Mobile}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewContact} >
            Save Changes
          </Button>
        </Modal.Footer>
         
        
      </Modal>
      
    </>
  )
}

export default AddContact;