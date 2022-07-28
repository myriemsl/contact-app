const validator = require("validator");


const isEmpty = (value) => 
value === null || value === undefined
|| typeof(value) === "object" && Object.keys(value).length === 0
|| typeof(value) === "string" && value.trim().length === 0



const contactValidation = (data) => {
    let errors = {};
    data.Fname = !isEmpty(data.Fname) ? data.Fname : "";
    data.Lname = !isEmpty(data.Lname) ? data.Lname : "";
    data.Job = !isEmpty(data.Job) ? data.Job : "";
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Mobile = !isEmpty(data.Mobile) ? data.Mobile : "";
  
   
    
    if (validator.isEmpty(data.Fname)) {
      errors.Fname = "Required Fname";
    }
    if (validator.isEmpty(data.Lname)) {
      errors.Lname = "Required Lname";
    }
    if (validator.isEmpty(data.Job)) {
      errors.Job = "Required Job";
    }
    if (validator.isEmpty(data.Email)) {
      errors.Email = "Required Email";
    }
    if (!validator.isEmail(data.Email)) {
      errors.Email = "Format Email required";
    }
    if (validator.isEmpty(data.Mobile)) {
      errors.Mobile = "Required Phone";
    }
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
}



module.exports = contactValidation;