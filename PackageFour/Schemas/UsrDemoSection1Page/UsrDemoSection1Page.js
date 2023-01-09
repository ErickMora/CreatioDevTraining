define("UsrDemoSection1Page", [], function() {
	return {
		entitySchemaName: "UsrDemoSection",
		attributes: {

			"CreatedBy": {
				lookupListConfig: [
					{
						columns: ["Email", "Phone", "Account.Name"],
					}
				]
			},


			"MyEvents": {
				dependencies: [
					{
						columns: ["UsrName"],
						methodName: "onUsrNameChanged"
					},
					{
						columns: ["UsrStatus"],
						methodName: "onUsrStatusChanged"
					}
				]
			},

			/**
			 * Object with current account information.
			 */
			"MyVirtualColumn": {
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"dataValueType": Terrasoft.DataValueType.TEXT,
				"caption": "My virtual column",
				"value": "Unset value"
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrDemoSectionFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrDemoSection"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			/**
			 * Checks, if UsrNameTwo contains more than 5 symbols.
			 * @return {Boolean} Menu item enabled.
			 */
			/* isUsrNameTwoEnabled: function() {
				debugger;
				//var name = this.get("UsrName");
				var name = this.$UsrName;

				if(name & name.length>5)
				{
					return true;
				}
				else{
					return false;
				}
			} */

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#init
			 * @overridden
			 */
			init: function() {
				this.callParent(arguments);
				debugger;
			},

			/**
			 * @inheritdoc Terrasoft.BasePageV2#onEntityInitialized
			 * @overridden
			 * @protected
			 */
			onEntityInitialized: function() {
				this.callParent(arguments);
				debugger;
				var name = this.get("UsrName");
			},	

			onUsrNameChanged: function(a, columnChange){
				this.set(
					"MyVirtualColumn",
					Ext.String.format("The length is {0}", this.$UsrName.length)
				);
			},

			onUsrStatusChanged: function(){
				var dv = this.$UsrStatus.displayValue;
				this.set("MyVirtualColumn",dv);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#setValidationConfig
			 * @override
			 */
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("UsrName", this.usrNameValidator);
			},

			/**
			 * validator name, no less than 7 characters.
			 * @protected
			 * @return {Object} Validation result info.
			 */
			usrNameValidator: function() {
				var invalidMessage = "";
				if (this.$UsrName.length < 7) {
					//invalidMessage = "Name has to be 7 characters long or longer";
					invalidMessage = this.get("Resources.Strings.InvalidNameMessage");
				}
				else{
					invalidMessage = "";
				}
				return {
					invalidMessage: invalidMessage
				};
			},


		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName9ec58ce3-5040-4b0f-b4da-2cc5c3c9f023",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP0a22920d-8c0b-4a75-8887-f291fe563489",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMyTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMyTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabMyTabLabelMyFieldGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMyTabLabelMyFieldGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabMyTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMyTabLabelGridLayout23a2aa7b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabMyTabLabelMyFieldGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNameTwo",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 6,
						"row": 1,
						"layoutName": "TabMyTabLabelGridLayout23a2aa7b"
					},
					"visible": true,
					"enabled": {
						bindTo: 'isUsrNameTwoEnabled'
					},
					"bindTo": "UsrName"
				},
				"parentName": "TabMyTabLabelGridLayout23a2aa7b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "VirtualColumn",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "TabMyTabLabelGridLayout23a2aa7b"
					},
					"bindTo": "MyVirtualColumn"
				},
				"parentName": "TabMyTabLabelGridLayout23a2aa7b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
