Box.Application.addModule('m_form', function (context) {

  'use strict'; // please use strict

  var moduleEl, utilService, data, sendData, processUrl, method, outputTarget;

  var failureFunction = function () {
    console.log('AJAX FAILURE');
  };

  return {

    behaviors: ['b_form-validation'],

    init: function () {
      utilService = context.getService('utility-services'); // common utility services
      moduleEl = context.getElement();
      data = {};
      processUrl = '../php/ajax1.php';
      method = 'POST';
      outputTarget = moduleEl.querySelector('[id="message"]');
    },
    destroy: function () {
      moduleEl = null;
      utilService = null;
      data = null;
      processUrl = null;
      method = null;
    },

    onclick: function (event, element, elementType) {

      if (elementType === 'submit-btn') {

        // you can also use 'element.id' instead of the name of the input
        data.firstName = moduleEl.querySelector('[name="fname"]').value;
        data.lastName = moduleEl.querySelector('[name="lname"]').value;
        data.userEmail = moduleEl.querySelector('[name="user-email"]').value;

        /**
        * push the prepared JSON data into a var to send to PHP
        * the name "formValues" is like action in the old way
        */
        var sendData = {formValues: JSON.stringify(data)};

        var ajaxObj = {
          url: processUrl,
          type: method,
          data: sendData,
          success: function (data) { // you made need a unique service here, this uses a utility-service
            utilService.insertHtml(outputTarget, data);
          },
          failure: failureFunction
        }

        utilService.asyncRequest(ajaxObj);

        event.preventDefault();
      }
    }

  };


});
