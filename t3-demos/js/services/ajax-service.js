Box.Application.addService('ajax-service',function(){
   
     'use strict';
     // private methods here
     
     function doChangeColor(elementClass,elementColor){
         elementClass.style.backgroundColor = elementColor;
     };
     
     function doAjax(processUrl, method, sendData){
      
            var ajaxObj = {
                url: processUrl,
                type: method,
                data: sendData,
                success: function (data) { // you made need a unique service here, this uses a utility-service
                    context.broadcast('ajaxSuccess',{data: data});
                },
                failure: function (){
                    context.broadcast('ajaxFailure');
                }
            };
        
     };
     
     return{
        
         // public methods here
        
       changeColor: function(elementClass,elementColor){
           return doChangeColor(elementClass,elementColor);
       },
       
        asyncRequest: function (ajaxObj) {
            $.ajax(ajaxObj);
        },
        
        insertText: function (element, data) {
            $(element).html(data);
        }
        
     };
        
        
     
});