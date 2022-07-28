import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineUserDelete } from "react-icons/ai";

const ContactList = ({Fname, Lname, Job, Email, Mobile, Id, DeleteContact}) => {
  return (
    <>
      <tr>
      <td>{Fname}</td>
      <td>{Lname}</td>
      <td>{Job}</td>
      <td>{Email}</td>
      <td>{Mobile}</td>
      <td>
        <Link to={`/${Id}`}><span class><AiOutlineEdit className='operationicons'/></span></Link>
        <span><AiOutlineUserDelete className='operationicons' onClick={() => DeleteContact(Id)}/></span>
     </td>
      </tr>
    </>
  )
}

export default ContactList;