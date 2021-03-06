Ext.data.JsonP.Ext_form_field_Field({
  "tagname": "class",
  "name": "Ext.form.field.Field",
  "doc": "<p>This mixin provides a common interface for the logical behavior and state of form fields, including:</p>\n\n<ul>\n<li>Getter and setter methods for field values</li>\n<li>Events and methods for tracking value and validity changes</li>\n<li>Methods for triggering validation</li>\n</ul>\n\n\n<p>*NOTE**: When implementing custom fields, it is most likely that you will want to extend the <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\ncomponent class rather than using this mixin directly, as BaseField contains additional logic for generating an\nactual DOM complete with <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">label and error message</a> display and a form input field,\nplus methods that bind the Field value getters and setters to the input field's value.</p>\n\n<p>If you do want to implement this mixin directly and don't want to extend <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>, then\nyou will most likely want to override the following methods with custom implementations: <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">getValue</a>,\n<a href=\"#/api/Ext.form.field.Field-method-setValue\" rel=\"Ext.form.field.Field-method-setValue\" class=\"docClass\">setValue</a>, and <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">getErrors</a>. Other methods may be overridden as needed but their base\nimplementations should be sufficient for common cases. You will also need to make sure that <a href=\"#/api/Ext.form.field.Field-method-initField\" rel=\"Ext.form.field.Field-method-initField\" class=\"docClass\">initField</a>\nis called during the component's initialization.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "disabled",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>True to disable the field (defaults to false). Disabled Fields will not be\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>.</p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 43,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-disabled"
    },
    {
      "tagname": "cfg",
      "name": "name",
      "member": "Ext.form.field.Field",
      "type": "String",
      "doc": "<p>The name of the field (defaults to undefined). By default this is used as the parameter\nname when including the <a href=\"#/api/Ext.form.field.Field-method-getSubmitData\" rel=\"Ext.form.field.Field-method-getSubmitData\" class=\"docClass\">field value</a> in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.\nTo prevent the field from being included in the form submit, set <a href=\"#/api/Ext.form.field.Field-cfg-submitValue\" rel=\"Ext.form.field.Field-cfg-submitValue\" class=\"docClass\">submitValue</a> to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 37,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-name",
      "shortDoc": "The name of the field (defaults to undefined). By default this is used as the parameter\nname when including the field..."
    },
    {
      "tagname": "cfg",
      "name": "submitValue",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Setting this to <tt>false</tt> will prevent the field from being\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a> even when it is not disabled. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 49,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-submitValue"
    },
    {
      "tagname": "cfg",
      "name": "validateOnChange",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to <tt>true</tt>. If the validation results in a change in the field's validity, a\n<a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will be fired. This allows the field to show feedback about the\nvalidity of its contents immediately as the user is typing.</p>\n\n\n<p>When set to <tt>false</tt>, feedback will not be immediate. However the form will still be validated\nbefore submitting if the <tt>clientValidation</tt> option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is\nenabled, or if the field or form are validated manually.</p>\n\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a>for controlling how changes to the field's value are detected.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 55,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-validateOnChange",
      "shortDoc": "Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to ..."
    },
    {
      "tagname": "cfg",
      "name": "value",
      "member": "Ext.form.field.Field",
      "type": "Mixed",
      "doc": "<p>A value to initialize this field with (defaults to undefined).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 33,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-cfg-value"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "batchChanges",
      "member": "Ext.form.field.Field",
      "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent excessive firing of <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change</a> events. This is useful for instance\nif the field has sub-fields which are being updated as a group; you don't want the container\nfield to check its own changed state for each subfield change.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "fn",
          "doc": "<p>A function containing the transaction code</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 348,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-batchChanges",
      "shortDoc": "A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent e..."
    },
    {
      "tagname": "method",
      "name": "checkChange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:</p>\n\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Field-cfg-validateOnChange\" rel=\"Ext.form.field.Field-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Field--validationchange\" rel=\"Ext.form.field.Field--validationchange\" class=\"docClass\">validationchange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 235,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-checkChange",
      "shortDoc": "Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:\n\n..."
    },
    {
      "tagname": "method",
      "name": "checkDirty",
      "member": "Ext.form.field.Field",
      "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time\nit was checked, fires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 286,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-checkDirty",
      "shortDoc": "Checks the isDirty state of the field and if it has changed since the last time\nit was checked, fires the dirtychange..."
    },
    {
      "tagname": "method",
      "name": "clearInvalid",
      "member": "Ext.form.field.Field",
      "doc": "<p>Clear any invalid styles/messages for this field. Components using this mixin should implement\nthis method to update the components rendering to clear any existing messages.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>true</code> if the value does not <i>pass</i> validation. So simply clearing a field's errors\nwill not necessarily allow submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 395,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-clearInvalid",
      "shortDoc": "Clear any invalid styles/messages for this field. Components using this mixin should implement\nthis method to update ..."
    },
    {
      "tagname": "method",
      "name": "extractFileInput",
      "member": "Ext.form.field.Field",
      "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Field-method-isFileUpload\" rel=\"Ext.form.field.Field-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference\nto the file input DOM element holding the user's selected file. The input will be appended into\nthe submission form and will not be returned, so this method should also create a replacement.</p>\n",
      "params": [

      ],
      "return": {
        "type": "HTMLInputElement",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 373,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-extractFileInput",
      "shortDoc": "Only relevant if the instance's isFileUpload method returns true. Returns a reference\nto the file input DOM element h..."
    },
    {
      "tagname": "method",
      "name": "getErrors",
      "member": "Ext.form.field.Field",
      "doc": "<p>Runs this field's validators and returns an array of error messages for any validation failures.\nThis is called internally during validation and would not usually need to be used manually.</p>\n\n\n<p>Each subclass should override or augment the return value to provide their own errors.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to get errors for (defaults to the current field value)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>All error messages for this field; an empty Array if none.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 306,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getErrors",
      "shortDoc": "Runs this field's validators and returns an array of error messages for any validation failures.\nThis is called inter..."
    },
    {
      "tagname": "method",
      "name": "getModelData",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when\n<a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value\npair, the name being this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More\nadvanced field implementations may return more than one name-value pair. The returned values will be\nsaved to the corresponding field names in the Model.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 190,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getModelData",
      "shortDoc": "Returns the value(s) that should be saved to the Ext.data.Model instance for this field, when\nExt.form.Basic.updateRe..."
    },
    {
      "tagname": "method",
      "name": "getName",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a> attribute of the field. This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>name The field <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 128,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getName",
      "shortDoc": "Returns the name attribute of the field. This is used as the parameter\nname when including the field value in a form ..."
    },
    {
      "tagname": "method",
      "name": "getSubmitData",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the\nvalue being its current stringified value. More advanced field implementations may return more than one\nname-value pair.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 169,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getSubmitData",
      "shortDoc": "Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an o..."
    },
    {
      "tagname": "method",
      "name": "getValue",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>).</p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>value The field value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 137,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-getValue",
      "shortDoc": "Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular f..."
    },
    {
      "tagname": "method",
      "name": "initField",
      "member": "Ext.form.field.Field",
      "doc": "<p>Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during their own initialization process.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 73,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-initField",
      "shortDoc": "Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during thei..."
    },
    {
      "tagname": "method",
      "name": "isDirty",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nthen the <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> is updated when the values are loaded by\n<a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this field has been changed from its original value (and\nis not disabled), false otherwise.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 271,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isDirty",
      "shortDoc": "Returns true if the value of this Field has been changed from its originalValue.\nWill always return false if the fiel..."
    },
    {
      "tagname": "method",
      "name": "isEqual",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override\nthis to provide custom comparison logic appropriate for the particular field's data type.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value1",
          "doc": "<p>The first value to compare</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value2",
          "doc": "<p>The second value to compare</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the values are equal, false if inequal.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 158,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isEqual",
      "shortDoc": "Returns whether two field values are logically equal. Field implementations may override\nthis to provide custom compa..."
    },
    {
      "tagname": "method",
      "name": "isFileUpload",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If this returns true, the <a href=\"#/api/Ext.form.field.Field-method-extractFileInput\" rel=\"Ext.form.field.Field-method-extractFileInput\" class=\"docClass\">extractFileInput</a>\nmethod must also be implemented to return the corresponding file input element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 362,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isFileUpload",
      "shortDoc": "Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for submitti..."
    },
    {
      "tagname": "method",
      "name": "isValid",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value. The <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will not be fired; use <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a>\ninstead if you want the event to fire. <b>Note</b>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Implementations are encouraged to ensure that this method does not have side-effects such as\ntriggering error message display.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is valid, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 317,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-isValid",
      "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value. The validitychange..."
    },
    {
      "tagname": "method",
      "name": "markInvalid",
      "member": "Ext.form.field.Field",
      "doc": "<p>Associate one or more error messages with this field. Components using this mixin should implement\nthis method to update the component's rendering to display the messages.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>false</code> if the value does <i>pass</i> validation. So simply marking a Field as invalid\nwill not prevent submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "errors",
          "doc": "<p>The error message(s) for the field.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 383,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-markInvalid",
      "shortDoc": "Associate one or more error messages with this field. Components using this mixin should implement\nthis method to upd..."
    },
    {
      "tagname": "method",
      "name": "reset",
      "member": "Ext.form.field.Field",
      "doc": "<p>Resets the current field value to the originally loaded value and clears any validation messages.\nSee <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 212,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-reset",
      "shortDoc": "Resets the current field value to the originally loaded value and clears any validation messages.\nSee Ext.form.Basic...."
    },
    {
      "tagname": "method",
      "name": "resetOriginalValue",
      "member": "Ext.form.field.Field",
      "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">value</a>.\nThis is called by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 225,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-resetOriginalValue",
      "shortDoc": "Resets the field's originalValue property so it matches the current value.\nThis is called by Ext.form.Basic.setValues..."
    },
    {
      "tagname": "method",
      "name": "setValue",
      "member": "Ext.form.field.Field",
      "doc": "<p>Sets a data value into the field and runs the change detection and validation.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to set</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.field.Field",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 146,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-setValue",
      "shortDoc": "<p>Sets a data value into the field and runs the change detection and validation.</p>\n"
    },
    {
      "tagname": "method",
      "name": "validate",
      "member": "Ext.form.field.Field",
      "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value, and fires the <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has\nchanged since the last validation. <b>Note</b>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error\nmessage display. To validate without side-effects, use <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is valid, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 330,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-method-validate",
      "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value, and fires the vali..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "isFormField",
      "member": "Ext.form.field.Field",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this component is a Field. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 26,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-property-isFormField"
    },
    {
      "tagname": "property",
      "name": "originalValue",
      "member": "Ext.form.field.Field",
      "type": "Mixed",
      "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Field-cfg-value\" rel=\"Ext.form.field.Field-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by\nthe last form load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nsetting is <code>true</code>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 113,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-property-originalValue",
      "shortDoc": "The original value of the field as configured in the value configuration, or as loaded by\nthe last form load operatio..."
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "change",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "newValue",
          "doc": "<p>The new value</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "oldValue",
          "doc": "<p>The original value</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 79,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-change",
      "shortDoc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n"
    },
    {
      "tagname": "event",
      "name": "dirtychange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isDirty",
          "doc": "<p>Whether or not the field is now dirty</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 94,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-dirtychange",
      "shortDoc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n"
    },
    {
      "tagname": "event",
      "name": "validitychange",
      "member": "Ext.form.field.Field",
      "doc": "<p>Fires when a change in the field's validity is detected.</p>\n",
      "params": [
        {
          "type": "Ext.form.field.Field",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "isValid",
          "doc": "<p>Whether or not the field is now valid</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
      "linenr": 87,
      "html_filename": "Field.html",
      "href": "Field.html#Ext-form-field-Field-event-validitychange",
      "shortDoc": "<p>Fires when a change in the field's validity is detected.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/Field.js",
  "linenr": 1,
  "html_filename": "Field.html",
  "href": "Field.html#Ext-form-field-Field",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [
    "Ext.form.CheckboxGroup",
    "Ext.form.field.Base",
    "Ext.form.field.HtmlEditor"
  ],
  "allMixins": [

  ]
});