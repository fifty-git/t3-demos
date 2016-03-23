Box.Application.addService('common-service',function(){
   
     'use strict';
     // private methods here
     
     function doChangeColor(elementClass,elementColor){
         elementClass.style.backgroundColor = elementColor;
     };
     
     function doSubmit(myForm) {
        // Prevent form submission
        document.myForm.submit();
     };
     
     function verifyIsValidData (email, password){
         if ((email !== '') && (password !== '')){
             return true;
         }
         else{
             return false;
         }
     };
     
     function verifyIsValidCustomerId (customerId){
         if ((customerId !== '') || (customerId > 0)){
             return true;
         }
         else{
             return false;
         }
     }
     
     function doGrid(data) {
        var info = JSON.parse(data);
        
        var transform = {"tag": "table", "children": [
                        {"tag": "thead", "children": [
                                {"tag": "tr", "children": [
                                        {"tag": "th", "html": "ID"},
                                        {"tag": "th", "html": "First Name"},
                                        {"tag": "th", "html": "Last Name"},
                                        {"tag": "th", "html": "Address"},
                                        {"tag": "th", "html": "City"}
                                ]}
                        ]},
                        
                        {"tag": "tbody", "children": [
                            {"tag": "tr", "children": [
                                {"tag": "td", "html": "${id}"},
                                {"tag": "td", "html": "${fname}"},
                                {"tag": "td", "html": "${lname}"},
                                {"tag": "td", "html": "${address}"},
                                {"tag": "td", "html": "${city}"}
                            ]}
                        ]}
            ]};
        
        var data = [
            {'id': info.customer_id, 'fname': info.first_name,'lname':info.last_name,'address':info.address1,'city':info.city},
        ];
        
        $('#target_div').html(json2html.transform(data,transform));
        
     };
     return{
        
         // public methods here
        
       changeColor: function(elementClass,elementColor){
           return doChangeColor(elementClass,elementColor);
       },
       
       execsubmit: function(myForm){
         return doSubmit(myForm); 
       },
       
       asyncRequest: function (ajaxObj) {
            $.ajax(ajaxObj);
        },
        
       isValid: function (email, password){
           return verifyIsValidData(email, password);
       },
       
       isvalidCustomerId: function (customerId){
           return verifyIsValidCustomerId(customerId);
       },
       
        buildGrid: function (data) {
           return doGrid(data);
        },
       
     };
     
});
