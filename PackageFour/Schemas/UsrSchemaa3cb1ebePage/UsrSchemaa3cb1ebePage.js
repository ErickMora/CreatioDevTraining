define("UsrSchemaa3cb1ebePage", [], function() {
	return {
		entitySchemaName: "UsrTimeTracking",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "TabTimeTrackingTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabTimeTrackingTabLabelTabCaption"
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
				"name": "TabTimeTrackingTabLabelGroupbd451eba",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabTimeTrackingTabLabelGroupbd451ebaGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabTimeTrackingTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabTimeTrackingTabLabelGroupbd451eba",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIMEa11b1a94-089e-44e1-b2fc-1811f36d947f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrStartTime",
					"enabled": true
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME10e1ccd0-e6a3-4bb6-b1b7-b416ccbf5139",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrEndTime",
					"enabled": true
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIME217cbe48-d28f-4d2a-9162-8d34885e46ce",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrDuration",
					"enabled": false
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP82978066-ef07-4813-ac84-3ff58e3124c7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrContact",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "INTEGER26bcc421-a5c4-4523-b3ca-505b661179cc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrDurationInSeconds",
					"enabled": false
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "STRING2ccf4912-f43d-4828-9b41-40c0e5629c0d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabTimeTrackingTabLabelGridLayout2c68c25e"
					},
					"bindTo": "UsrDurationFormated",
					"enabled": false
				},
				"parentName": "TabTimeTrackingTabLabelGridLayout2c68c25e",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_DIFF*/
	};
});
