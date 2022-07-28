const express = require('express');
const router = express.Router();


const { addContact, getAllContacts, getOneContact, updateContact, deleteOneContact, deleteAllContacts } = require('../Controllers/contact.controllers');

// Post Contact
router.post('/contact', addContact)

// Get All Contacts 
router.get('/contacts', getAllContacts)

// Get One Contact
router.get('/contact/:id', getOneContact)

// Update Contact
router.put('/contact/:id', updateContact)

// Delete One Contact
router.delete('/contact/:id', deleteOneContact)

// Delete All Contacts
router.delete('/contacts', deleteAllContacts)



module.exports = router;
