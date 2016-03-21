Box.Application.addBehavior('change-color-behavior', function (context) {

    var colorService,moduleElement;
    
    return{
        /**
         * Initializes the module. Caches a data store object to todos
         * @returns {void}
         */
        init: function () {
           console.log("init-behaivor");
           colorService = context.getService('change-color-service');
           moduleElement = context.getElement();
        },
        /**
         * Destroys the module.
         * @returns {void}
         */
        destroy: function () {
            colorService = null;
        },
        
        onclick: function (event, element, elementType) {

            if (elementType === 'color-btn') {
                var colorBox = moduleElement.querySelector(".box");
                var newColor = 'pink';
                
                //call the broadcast 
                context.broadcast('changecolor', {
                    colorBox: colorBox,
                    newColor: newColor
                });
            };
             event.preventDefault();
            
        }
    };
});