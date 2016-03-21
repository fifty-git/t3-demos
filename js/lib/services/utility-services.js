
Box.Application.addService('utility-services', function(application) {

  'use-strict';

  return {

    // -------------------------------------------------------------------------
    setAttributeValue: function (element, attribute, AttributeValue) {
      $(element).attr(attribute, AttributeValue);
    },

    // ---------------------------------------
    getAttributeValue: function (element, attribute) {
        return $(element).attr(attribute);
    },

    // --------------------------------------
    insertHtml: function (element, data) {
        return $(element).html(data);
    },

    // ------------------------------------
    asyncRequest: function (ajaxObj) {
      $.ajax(ajaxObj);
    },

    // --------------------------------------
    setCss: function (element, cssAttr, cssValue) {
      $(element).css(cssAttr, cssValue);
    },

    // --------------------------------------------
    // returns true or false
    inArray: function (searchString, array) {
      return $.inArray(searchString, array) !== -1;
    },

    // --------------------------------------------
    arrayRemoveItem: function (item, array) {
      return array.splice($.inArray(item, array),1);
    },

    // -----------------------------------------
    getById: function (element) {
      return $(element).get(0);
    },

    // -----------------------------------------
    getByClass: function (element) {
      return $(element).get(); // gets the true array of elements
    },

    // ------------------------------------------
    getByTag: function (tagName) {
      return $(tagName).get();
    },

    // ------------------------------------------
    addClass: function (element, className) {
    	$(element).addClass(className);
    },

    // -------------------------------------------
    removeClass: function (element, className) {
    	$(element).removeClass(className);
    },

    // --------------------------------------------
    toggleClass: function (element, className) {
    	$(element).toggleClass(className);
    },

    // --------------------------------------------
    hasClass: function (element, className) {
    	$(element).hasClass(className);
    },

    // ---------------------------------------------
    validateEmail:  function (emailAddress) {
    	var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	var isMatch = pattern.test(emailAddress);
    	return isMatch;
    },

    // ----------------------------------------------
    replaceUrlParam: function (url, paramName, paramValue) {
        var pattern = new RegExp('('+paramName+'=).*?(&|$)');
        var newUrl=url;
        if(url.search(pattern)>=0){
            newUrl = url.replace(pattern,'$1' + paramValue + '$2');
        }
        else{
            newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
        }
        return newUrl;
    },

    // ------------------------------------------------
    getCss: function (element, cssPropertyArray) {
    	return $(element).css(cssPropertyArray);
    },

    // -------------------------------------------------
    append: function (element, newHtml) {
    	$(element).append(newHtml);
    },

    // --------------------------------------------------
    is:  function (element, selector) {
      return $(element).is(selector);
    },

    // ---------------------------------------------------
    trigger: function (element, eventType) {
    	$(element).trigger(eventType);
    },

    // -----------------------------------------------------
    closestId: function (element, searchId) {
    	return $(element).closest(searchId).get(0);
    },

    // -----------------------------------------------------
    closestClass: function (element, searchClass) {
    	return $(element).closest(searchClass).get(0);
    },

    // ------------------------------------------------------
    findById: function (element, searchId) {
    	return $(element).find(searchId).get(0);
    },

    // ------------------------------------------------------
    findByClass: function (element, searchClass) {
    	return $(element).find(searchClass).get();
    },

    // --------------------------------------------------------
    findByAttr: function (element, searchAttr) {
    	return $(element).find(searchAttr).get();
    },

    // ---------------------------------------------------------
    findByAttrValue: function (attrName, attrValue) {
    	return $("["+attrName+"="+attrValue+"]");
    },

    // ---------------------------------------------------------
    getElementIdByClosestAttr: function (element, containerType, attr) {
        return $(element).closest(containerType).attr(attr);
    },

    // --------------------------------------------------------------
    isCapsLockOn: function (e) {
        e = (e) ? e : window.event;

        var charCode = false;
        if (e.which) {
            charCode = e.which;
        } else if (e.keyCode) {
            charCode = e.keyCode;
        }

        var shifton = false;
        if (e.shiftKey) {
            shifton = e.shiftKey;
        } else if (e.modifiers) {
            shifton = !!(e.modifiers & 4);
        }

        if (charCode >= 97 && charCode <= 122 && shifton) {
            return true;
        }

        if (charCode >= 65 && charCode <= 90 && !shifton) {
            return true;
        }

        return false;
    },

    // ----------------------------------------------------------------
    pressEnterToSubmit: function (e, submitButtonElement) {
    	if (e.keyCode == 13) {
    		e.preventDefault();
    		this.trigger(submitButtonElement, 'click');
    	}
    },

    // ----------------------------------------------------------------
    children: function (element) {
    	return $(element).children();
    },

    // -----------------------------------------------------------------
    isEmpty: function (str) {
    	if (str) {
    		return false;
    	}
    	else {
    		return true;
    	}
    },

    // ------------------------------------------------------------------
    before: function (element, newHtml) {
    	$(htmlElement_p).before(newHtml);
    },

    // -------------------------------------------------------------------------
    getNext: function (element, pointer) {
      return $(element).next(pointer);
    },

    // -------------------------------------------------------------------
    prev: function (element) {
    	return $(element).prev().get(0);
    },

    // --------------------------------------------------------------------
    prevAll: function (element, selector) {
    	if (selector === undefined || selector === null) {
    		return $(element).prevAll().get(); // returns an array of the actual DOM elements
    	}
    	else {
    		return $(element).prevAll(selector).get(); // returns an array of the actual DOM elements
    	}
    },

    // -----------------------------------------------------------------------
    remove: function (element) {
    	$(element).remove();
    },

    // ------------------------------------------------------------------------
    fadeIn: function (element, fadeSpeed, callbackFunction) {
    	$(element).fadeIn(fadeSpeed, callbackFunction);
    },

    // ------------------------------------------------------------------------
    fadeOut: function (element, fadeSpeed, callbackFunction) {
    	$(htmlElement_p).fadeOut(fadeSpeed, callbackFunction);
    },

    // -------------------------------------------------------------------------
    isNumber: function (numberToTest) {
    	return !isNaN(parseFloat(numberToTest)) && isFinite(numberToTest);
    },

    // -------------------------------------------------------------------------
    getHostProtocol: function() {
    	return window.location.protocol;
    },

    // -------------------------------------------------------------------------
    getHostname: function() {
    	return window.location.hostname;
    },

    // -------------------------------------------------------------------------
    getParent: function (element) {
      return $(element).parent();
    }


  }; // END return

});
