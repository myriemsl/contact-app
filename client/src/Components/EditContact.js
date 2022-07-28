import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Input from '../Components/Input';

const EditContact = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
 const {id} = useParams();
 const navigate = useNavigate();


 /* Update Contact */
 const onChange=(e) => {
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
 }

 const onSubmit = (e) => {
  e.preventDefault();
  axios.put(`/contact/${id}`, form)
  .then(res => {
    navigate('/')
  })
  .catch(err => setErrors(err.response.data))
 }

/*/ Find One Contact /*/
useEffect(() => {
  const getData = async () => {
     await axios.get(`/contact/${id}`).then(res=> {
         setForm(res.data)
      })
   }
 getData();
}, []);




  return (
    <>
     <form onSubmit={onSubmit}>
       <Input label="First Name" name="Fname" type="text" onChange={onChange} errors={errors.Fname} value={form.Fname}/>
       <Input label="Last Name" name="Lname" type="text" onChange={onChange} errors={errors.Lname} value={form.Lname}/>
       <Input label="Job" name="Job" type="text" onChange={onChange} errors={errors.Job} value={form.Job}/>
       <Input label="Email" name="Email" type="email" onChange={onChange} errors={errors.Email} value={form.Email}/>
       <Input label="Mobile" name="Mobile" type="number" onChange={onChange} errors={errors.Mobile} value={form.Mobile}/>
       <button type='submit'>Edit Contact</button>
     </form>
    </>
  )
}

export default EditContact;