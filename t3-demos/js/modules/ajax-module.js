Box.Application.addModule('information-module',function(context){
    
    'use strict';
    
    var ajaxService,
    moduleElement,
    data,
    ajaxObj,
    processUrl,
    method,
    sendData;
    
    
    return {
        
       behaviors: ['ajax-behavior'],
       
       messages: ['ajaxSuccess','ajaxFailure'],
        
        init: function () {
            // initialize the module here
            console.log("module-init");
            ajaxService = context.getService('ajax-service');
            moduleElement = context.getElement();
            data={};
            processUrl = '../50-test/ajax1.php';
            method = 'POST';
            
           
        },
        
        destroy: function () {
            // clean up the module here
            ajaxService = null;
            moduleElement = null;
            data={};
            processUrl = null;
            method = null;
            sendData = null;
           
        },
        
        onclick: function (event, element, elementType) {

            if (elementType === 'submit-btn') {

                // you can also use 'element.id' instead of the name of the input
                data.firstName = moduleElement.querySelector('[name="fname"]').value;
                data.lastName = moduleElement.querySelector('[name="lname"]').value;
                data.userEmail = moduleElement.querySelector('[name="email"]').value;
                
                sendData = {formValues: JSON.stringify(data)};
                
                ajaxObj = {
                    url: processUrl,
                    type: method,
                    data: sendData,
                    success: function (data) { // you made need a unique service here, this uses a utility-service
                        ajaxService.insertText(".message",data);
                    },
                    failure: function () {
                        console.log('AJAX FAILURE');
                    }
                };

                /**
                 * push the prepared JSON data into a var to send to PHP
                 * the name "formValues" is like action in the old way
                 */
               
                ajaxService.asyncRequest(ajaxObj);
                event.preventDefault();
            }
        },
        
        onmessage: function (name, data) {

            switch (name) {
                case 'ajaxSuccess':
                    this.showInformation(data);
                    break;
                case 'ajaxFailure':
                    this.showError();
                    break;
            }

        },
        
        setMessage: function(message){
            var messageElement = moduleElement.querySelector(".message");
            messageElement.innerHTML = message;
        }
    };
    
});
