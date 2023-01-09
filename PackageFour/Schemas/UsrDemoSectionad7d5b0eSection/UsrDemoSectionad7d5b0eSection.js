define("UsrDemoSectionad7d5b0eSection", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "UsrDemoSection",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[

			/**
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "send",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"caption": "TEST BUTTON",
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"click": {"bindTo": "onCardAction"},
					"tag": "checkSenderBeforeSend",
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "OpenButton",
				"parentName": "SeparateModeActionButtonsLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": "OPEN buttin",
					"classes": {
						"textClass": ["actions-button-margin-right"]
					},
					"visible":true,
					"click": {"bindTo": "openItem"}
				}
			},
			{
				"operation": "insert",
				"name": "PrimaryContactButtonRed",
				"parentName": "CombinedModeActionButtonsCardLeftContainer", //INVISIBLE in section, visible on the page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.RED,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "Section Red Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "CombinedModeActionButtonsCardLeftContainer_Red"
				}
			},
			{
				"operation": "insert",
				"name": "PrimaryContactButtonGreen",
				"parentName": "ActionButtonsContainer", //visible in section and on a page
				"propertyName": "items",
				"values":{
					itemType: this.Terrasoft.ViewItemType.BUTTON,
					style: Terrasoft.controls.ButtonEnums.style.GREEN,
					classes: {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					caption: "Section Green Button",
					hint: "Section red button hint",
					click: {"bindTo": "onMyMainButtonClick"},
					tag: "ActionButtonsContainer_Red"
				}
			},
			*/
			{
				"operation": "insert",
				"name": "activeRowActionStart",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"tag": "start",
					"markerValue": "start",
					"caption": "START"
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionEnd",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.RED,
					"tag": "end",
					"markerValue": "end",
					"caption": "END"
				}
			}
			
		]/**SCHEMA_DIFF*/,
		methods: {



			onActiveRowAction: function(buttonTag, primaryColumnValue) {
				switch (buttonTag) {
					case "end":
						this.test(primaryColumnValue);
						break;
					case "start":
						this.start(primaryColumnValue);
						break;
				}
			},



			start: function(primaryColumnValue){


				var args = {
                    // The name of the process that needs to be launched.
                    sysProcessName: "UsrProcess_625b547",
                    // The object with the ContactParameter incoming parameter value for the CustomProcess process.
                    parameters: {
                        RecordId: primaryColumnValue
                    }
                };
                // Launch of the custom business process.
                ProcessModuleUtilities.executeProcess(args);
			},

			end: function(primaryColumnValue){
				debugger;
			},

			callCustomProcess: function() {
				
				
				// Receiving the identifier of the account primary contact.
                var contactParameter = this.get("PrimaryContact");
                // The object that will be transferred to the executeProcess() method as an argument.
                var args = {
                    // The name of the process that needs to be launched.
                    sysProcessName: "UsrCustomProcess",
                    // The object with the ContactParameter incoming parameter value for the CustomProcess process.
                    parameters: {
                        ProcessSchemaContactParameter: contactParameter.value
                    }
                };
                // Launch of the custom business process.
                ProcessModuleUtilities.executeProcess(args);
            }





		}
	};
});