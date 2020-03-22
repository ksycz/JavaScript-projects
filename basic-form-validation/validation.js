(function () {
    class Validator {
        constructor(form) {
            this.form = form;
            this.fields = this.form.querySelectorAll("[required]");
            this.errors = [];
            this.errorsList = document.querySelector(".alert-danger ul");
            this.email = document.querySelector("email");

            if(!this.fields.length) return;

            this.form.onsubmit = function(e) {
                e.preventDefault();

                var formValid = this.validate();

                if(formValid) {
                    this.form.submitt();
                } else {
                    return false;
                }
            }.bind(this);
        }
    }

    Validator.prototype.validate = function() {
        this.clearErrors();

        for(var i = 0; i < this.fields.length; i++) {
            this.validateField(this.fields[i]);
        }
        
        if(!this.fields.length) {
            return true;
        } else {
            this.displayErrors();
            return false;
        }
    };
    
    Validator.prototype.validateField = function(field) {
        var fieldValid = field.validity.valid;

        if(fieldValid) {
            this.markAsValid(field);
        } else {
            this.errors.push(field.dataset.errorMsg);
            this.markAsInvalid(field);
        }
    };

    Validator.prototype.markAsValid = function(field) {
        field.classList.remove("invalid");
        field.classList.add("valid");
    };

    Validator.prototype.markAsInvalid = function(field) {
        field.classList.remove("valid");
        field.classList.add("invalid");
    };

    Validator.prototype.displayErrors = function() {
        var errorsListElements = document.createDocumentFragment();

        for(var i = 0; i < this.errors.length; i++) {
            listElement = document.createElement("li");

            listElement.textContent = this.errors[i];
            errorsListElements.appendChild(listElement);
        }

        this.errorsList.appendChild(errorsListElements);
        this.errorsList.parentNode.style.display = "block";
    };
    
    Validator.prototype.clearErrors = function() {
        this.errors.length = 0;
        this.errorsList.parentNode.style.display = "none";
        this.errorsList.innerHTML = "";
    }

var validator1 = new Validator(document.querySelector("#submission-form"));
})();