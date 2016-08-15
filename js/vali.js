var frmvalidator = new Validator("contact_form");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation("email","email", "Please enter a valid email address");
frmvalidator.addValidation("subject","req", "Please provide your subject");
frmvalidator.addValidation("message", "req", "Please provide your thoughts");