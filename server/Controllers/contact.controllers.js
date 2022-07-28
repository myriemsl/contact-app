const Contact = require('../Models/contact.model.js');
const contactValidation = require ('../Validations/contact.validations')


// Post Contact 
const addContact = async (req, res) => {
  const { errors, isValid } = contactValidation(req.body)
  try {
     if(!isValid) {
      res.status(404).json(errors)
    } else {
      await Contact.findOne({Email: req.body.Email})
      .then(async (email) => {
        if(email){
            errors.Email = "Contact Already Added"
            res.status(404).json(errors)
        } else {
           await Contact.create(req.body)
           res.status(201).json({message:'New Contact Added'})   
           }
    })
    }
  } catch (error) { 
      console.log(error.messsage)
  }
} 



// Get All Contacts 
const getAllContacts = async(req,res) => {

  try {
    const data = await Contact.find()
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

// Get One Contact By ID
const getOneContact = async(req, res) => {
  try {
    const data = await Contact.findOne({_id: req.params.id})
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}

// Update Contact
const updateContact = async(req, res) => {
  const { errors, isValid } = contactValidation(req.body)
  try {
       if (!isValid) {
      res.status(404).json(errors);
      } else {
       const data = await Contact.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
      );
      res.status(201).json(data); 
      }
  } catch (error) {
    console.log(error.message)
  }
}

// Delete One Contact 
const deleteOneContact = async (req,res) => {
  try {
    await Contact.deleteOne({_id: req.params.id})
    res.status(201).json({message: 'Contact Deleted'})
  } catch (error) {
    console.log(error.message)
  }
}

// Delete All Contacts
const deleteAllContacts = async (req,res) => {
  try {
    await Contact.deleteMany({})
    res.status(201).json({message: 'All Contacts Deleted'})
  } catch (error) {
    console.log(error.message)
  }
}



module.exports =  { addContact, getAllContacts, getOneContact, updateContact, deleteOneContact, deleteAllContacts };
