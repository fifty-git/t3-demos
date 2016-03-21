Box.Application.addBehavior('b_form-validation', function(context) {

	var moduleEl,
			utilService,
			outputTarget,
			cssType,
			cssClearSetting,
			cssErrorSetting,
			elementStatus,
			errorElmArray,
			nameValue;

	return {

		init: function () {
			utilService = context.getService('utility-services'); // common utility services
			moduleEl = context.getElement();
			elementStatus = null;
			errorElmArray = [];
		},

		destroy: function () {
			moduleEl = null;
			utilService = null;
			outputTarget = null
			elementStatus = null;
			nameValue = null;
		},

		onfocusout: function (event, element, elementType) {
			if (elementType === 'form-input') {
				nameValue = element.name;
				elementStatus = utilService.inArray(nameValue, errorElmArray);

				if (element.value.length === 0) {
					utilService.addClass(element, 'setErrorStyle');
					elementStatus = false;
					errorElmArray.push(nameValue);
				}
				else if (element.value.length > 0 && elementStatus === true) {
						utilService.arrayRemoveItem(nameValue, errorElmArray); // remove from error array
				}

			}
		},

		onfocusin: function (event, element, elementType) {
			if (elementType === 'form-input') {
				nameValue = element.name;
				elementStatus = utilService.inArray(nameValue, errorElmArray);

				if (element.value.length === 0 && elementStatus === true) {
					utilService.removeClass(element, 'setErrorStyle');
				}

			}
		}

	};
});







// -----------------------------------------------------------------------------
