Box.Application.addService('change-color-service',function(){
   
     'use strict';
     // private methods here
     
     function doChangeColor(elementClass,elementColor){
         elementClass.style.backgroundColor = elementColor;
     };
     
     return{
        
         // public methods here
        
       changeColor: function(elementClass,elementColor){
           return doChangeColor(elementClass,elementColor);
       }
       
     };
     
});
        