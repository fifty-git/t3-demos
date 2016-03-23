Box.Application.addBehavior('parameters-behavior', function (context) {

    var ajaxService,moduleElement;
    
    return{
        /**
         * Initializes the module. Caches a data store object to todos
         * @returns {void}
         */
        init: function () {
           console.log("behavior-init");
            ajaxService = context.getService('common-service');
            moduleElement = context.getElement();
        },
        /**
         * Destroys the module.
         * @returns {void}
         */
        destroy: function () {
            //colorService = null;
        },
        
        
    };
});