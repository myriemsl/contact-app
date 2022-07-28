import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactList from '../Components/ContactList';
import AlertText from '../Components/AlertText';
import Table from 'react-bootstrap/Table';
import AddContact from '../Components/AddContact';

const Dashboard = () => {

  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);


  /*/ Get All Contacts /*/
  useEffect(() => {
    const getData = async () => {
      await axios.get('/contacts').then(res => {
        setContacts(res.data);
      })
    }
    getData();
  });

  /*/ Delete Contact /*/
  const   DeleteContact = (id__) => {
    if(window.confirm('Are you sure to delete this contact?')) {
      axios.delete(`/contact/${id__}`)
      .then(res => {
        setMessage(res.data.message)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
    }
  }


  return (

    <>
  <AlertText message={message} show={show}/>
  
    <div className='dashboard'>
      <div className="contacts">
        <AddContact/>
      </div>
      <div className='list'>
      <Table bordered hover>
        <thead>
          <tr className='listoperations'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({Fname, Lname, Job, Email, Mobile, Image, _id}) => (
            <ContactList Fname={Fname} Lname={Lname} Job={Job} Email={Email} Mobile={Mobile} Image={Image} Id={_id} DeleteContact={DeleteContact}/>
          ))}
        </tbody>
      </Table>
      </div>
      
    </div>
    </>
  )
}

export default Dashboard;













































