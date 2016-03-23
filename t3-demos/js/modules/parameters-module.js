Box.Application.addModule('parameters-module',function(context){
    
    'use strict';
    
    var commonService,moduleElement,customerId,data,processUrl,method,ajaxObj,sendData;
    
    //private functions
    function getCustomerInfo(customerId) {

        sendData = {formValues: JSON.stringify(customerId)};

        ajaxObj = {
            url: processUrl,
            type: method,
            data: sendData,
            success: function (data) {
                commonService.buildGrid(data);
            },
            failure: function () {
                console.log('AJAX FAILURE');
            }
        };
        
        commonService.asyncRequest(ajaxObj);

    };
    
    
    //public
    return {
        
       behaviors: ['parameters-behavior'],
       
       messages: ['submit','getCustomerInformation','buildDataTable'],
        
        init: function () {
            
            // initialize the module here
            console.log("module-init");
            commonService = context.getService('common-service');
            moduleElement = context.getElement();
            
            //define some constants
            data={};
            processUrl = '../t3-demos/ajax1.php';
            method = 'POST';
            
            //get the init parameters
            var parameters = context.getConfig();
            customerId = parameters.customerId;
            
            
            //after sibmited the form I get the result data of the post
            if (customerId !== ''){
                context.broadcast('getCustomerInformation',{data: customerId}); 
            }
            
            
        },
        
        destroy: function () {
            // clean up the module here
            commonService = null;
            moduleElement = null;
            customerId = null;
            data = null;
            processUrl =null;
            method = null;
            ajaxObj = null;
            sendData = null;
           
        },
        
        onclick: function (event, element, elementType) {

            if (elementType === 'submit-btn') {
               
                var email = moduleElement.querySelector('[name="email"]').value;
                var password = moduleElement.querySelector('[name="password"]').value;
                        
                //Data Validation
                if (commonService.isValid(email, password)) {
                    //this.setMessage("Data is valid!");
                    context.broadcast('submit');
                } 
                else {
                    this.setMessage("Data is invalid!");   
                }
            }; 
        },
         
        onmessage: function (name, data) {

            switch (name) {
                case 'submit':
                    var myForm = moduleElement.querySelector('[name="myForm"]');
                    commonService.execsubmit(myForm);
                    break;
                case 'getCustomerInformation':
                    getCustomerInfo(data);
                    break;
            }

        },
        
        
        setMessage: function(message){
           
            var messageElement = moduleElement.querySelector(".message");
            messageElement.innerHTML = message;
            
            setTimeout(function () {
                messageElement.innerHTML = '';
            }, 2000);
            
            
        }
    };
    
});



