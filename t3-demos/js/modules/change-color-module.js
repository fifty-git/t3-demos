Box.Application.addModule('change-color-module',function(context){
    
    'use strict';
    
    var colorService,moduleElement,changeButton,colorBox,newColor;
    
    return {
        
       behaviors: ['change-color-behavior'],
       
       messages: ['changecolor'],
        
        init: function () {
            // initialize the module here
            console.log("module-init");
            colorService = context.getService('change-color-service');
            moduleElement = context.getElement();
        },
        
        destroy: function () {
            // clean up the module here
            colorService = null;
            moduleElement = null;
            changeButton = null;
            colorBox = null;
            newColor = null;
        },
        
        onmessage: function (name, data) {

            switch (name) {
                case 'changecolor':
                    this.changeColor(data);
                    break;
            }

        },
        
        changeColor: function(data){
            colorService.changeColor(data.colorBox,data.newColor);
            this.setMessage("Color was changed");
            
        },
        
        /*onclick: function(event, element, elementType) {
            
            if (elementType === 'color-btn' ){
                
                changeButton = element.value;
                
                colorBox = moduleElement.querySelector(".box");
                newColor =  'pink';
                
                colorService.changeColor(colorBox,newColor);
                this.setMessage("Color was changed");
            }
            
             event.preventDefault();

        },*/
        
        setMessage: function(message){
            var messageElement = moduleElement.querySelector(".message");
            messageElement.innerHTML = message;
        }
    };
    
});


