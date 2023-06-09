sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("hexathon.emotionsreport.controller.App", {
            onInit: function () {
								this.getData();
                var object = {
                    "stackedColumn": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.Analytical",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Analytical",
                            "header": {
                                "type": "Numeric",
                                "data": {
                                    "json": {
                                        "n": "89.2",
                                        "u": "%",
                                        "trend": "Up",
                                        "valueColor": "Good"
                                    }
                                },
                                "title": "Hapiness percentage by March",
                                "mainIndicator": {
                                    "number": "{n}",
                                    "unit": "{u}",
                                    "trend": "{trend}",
                                    "state": "{valueColor}"
                                }
                            },
                            "content": {
                                "chartType": "StackedColumn",
                                "legend": {
                                    "visible": true,
                                    "position": "Bottom",
                                    "alignment": "Left"
                                },
                                "plotArea": {
                                    "dataLabel": {
                                        "visible": false,
                                        "showTotal": false
                                    },
                                    "categoryAxisText": {
                                        "visible": false
                                    },
                                    "valueAxisText": {
                                        "visible": false
                                    }
                                },
                                "title": {
                                    "visible": false
                                },
                                "measureAxis": "valueAxis",
                                "dimensionAxis": "categoryAxis",
                                "data": {
                                    "json": {
                                        "list": [
                                            {
                                                "Category": "Happy",
                                                "Morning": 14,
                                                "Noon": 50,
                                                "Afternoon": 83,
                                                "Budget": 210000
                                            },
																						{
																							"Category": "Neutral",
																							"Morning": 2,
																							"Noon": 5,
																							"Afternoon": 8,
																							"Budget": 224000
																						},
                                            {
                                                "Category": "Sad",
                                                "Morning": 0,
                                                "Noon": 4,
                                                "Afternoon": 21,
                                                "Budget": 210000
                                            },
                                            {
                                                "Category": "Angry",
                                                "Morning": 4,
                                                "Noon": 3,
                                                "Afternoon": 0,
                                                "Budget": 210000
                                            },
                                            {
                                                "Category": "Fearful",
                                                "Morning": 5,
                                                "Noon": 2,
                                                "Afternoon": 2,
                                                "Budget": 210000
                                            },
                                            {
                                                "Category": "Disgusted",
                                                "Morning": 2,
                                                "Noon": 0,
                                                "Afternoon": 0,
                                                "Budget": 210000
                                            },
                                            {
                                                "Category": "Surprised",
                                                "Morning": 7,
                                                "Noon": 1,
                                                "Afternoon": 0,
                                                "Budget": 238000
                                            }
                                        ]
                                    },
                                    "path": "/list"
                                },
                                "dimensions": [
                                    {
                                        "label": "Categories",
                                        "value": "{Category}"
                                    }
                                ],
                                "measures": [
                                    {
                                        "label": "Morning",
                                        "value": "{Morning}"
                                    },
                                    {
                                        "label": "Noon",
                                        "value": "{Noon}"
                                    },
                                    {
                                        "label": "Afternoon",
                                        "value": "{Afternoon}"
                                    }
                                ]
                            }
                        }
                    },
                    "donut": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.donut",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Analytical",
                            "header": {
                                "title": "Gender distribution of Hapiness"
                            },
                            "content": {
                                "chartType": "Donut",
                                "legend": {
                                    "visible": true,
                                    "position": "Bottom",
                                    "alignment": "Left"
                                },
                                "plotArea": {
                                    "dataLabel": {
                                        "visible": true,
                                        "showTotal": true
                                    }
                                },
                                "title": {
                                    "visible": false
                                },
                                "measureAxis": "size",
                                "dimensionAxis": "color",
                                "data": {
                                    "json": {
                                        "measures": [
                                            {
                                                "measureName": "Female hapiness",
                                                "value": 76
                                            },
                                            {
                                                "measureName": "Male hapiness",
                                                "value": 73
                                            }
                                        ]
                                    },
                                    "path": "/measures"
                                },
                                "dimensions": [
                                    {
                                        "label": "Measure Name",
                                        "value": "{measureName}"
                                    }
                                ],
                                "measures": [
                                    {
                                        "label": "Value",
                                        "value": "{value}"
                                    }
                                ]
                            }
                        }
                    },
                    "object": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.object",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Object",
                            "data": {
                                "json": {
                                    "firstName": "Donna",
                                    "lastName": "Mendez",
                                    "position": "Managing Partner",
                                    "mobile": "+1 202 34869-0",
                                    "phone": "+1 202 555 5555",
                                    "email": "donna@peachvalley.com"
                                }
                            },
                            "header": {
                                "icon": {
                                    "text": "DM"
                                },
                                "title": "{firstName} {lastName}",
                                "subTitle": "{position}",
                                "actions": [
                                    {
                                        "type": "Navigation",
                                        "parameters": {
                                            "url": "users/donnaMendez"
                                        }
                                    }
                                ]
                            },
                            "content": {
                                "groups": [
                                    {
                                        "title": "Peach Valley Inc.",
                                        "items": [
                                            {
                                                "label": "Mobile",
                                                "value": "{mobile}",
                                                "actions": [
                                                    {
                                                        "type": "Navigation",
                                                        "parameters": {
                                                            "url": "tel:{mobile}"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Phone",
                                                "value": "{phone}",
                                                "actions": [
                                                    {
                                                        "type": "Navigation",
                                                        "parameters": {
                                                            "url": "tel:{phone}"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Email",
                                                "value": "{email}",
                                                "actions": [
                                                    {
                                                        "type": "Navigation",
                                                        "parameters": {
                                                            "url": "mailto:{email}"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "actions": [
                                    {
                                        "type": "Navigation",
                                        "parameters": {
                                            "url": "users/donnaMendez"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "list1": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.list",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "List",
                            "header": {
                                "title": "Emotions on March to help improve",
                                "status": {
                                    "text": "3 of 3"
                                }
                            },
                            "content": {
                                "data": {
                                    "json": [
                                        {
                                            "name": "Sadness",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Case1.png",
                                            "description": "More common at the Afternoon",
                                            "info": "20 felt sad",
                                            "infoState": "None"
                                        },
                                        {
                                            "name": "Fear",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Case2.png",
                                            "description": "More common at the Morning",
                                            "info": "7 felt fearful",
                                            "infoState": "None"
                                        },
                                        {
                                            "name": "Angry",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Case3.png",
                                            "description": "More common at Noon",
                                            "info": "12 felt angry",
                                            "infoState": "None"
                                        }
                                    ]
                                },
                                "item": {
                                    "icon": {
                                        "src": "{icon}"
                                    },
                                    "title": {
                                        "value": "{name}"
                                    },
                                    "description": {
                                        "value": "{description}"
                                    },
                                    "info": {
                                        "value": "{info}",
                                        "state": "{infoState}"
                                    }
                                }
                            }
                        }
                    },
                    "component": "./componentCard/manifest.json",
                    "list2": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.list2",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "List",
                            "header": {
                                "title": "Incidents in the last 24 hours",
                                "subTitle": "Suddent storm wind damaged 3 polinating hives",
                                "icon": {
                                    "src": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/CompanyLogo.png"
                                }
                            },
                            "content": {
                                "data": {
                                    "json": [
                                        {
                                            "name": "Alain Chevalier",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_1.png",
                                            "description": "On Site"
                                        },
                                        {
                                            "name": "Yolanda Barrueco",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_2.png",
                                            "description": "Travelling to Idaho"
                                        },
                                        {
                                            "name": "Arend Pellewever",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_3.png",
                                            "description": "Travelling to Idaho"
                                        },
                                        {
                                            "name": "Lean Pulp",
                                            "icon": "./test-resources/sap/ui/integration/demokit/sample/CardsLayout/images/Avatar_4.png",
                                            "description": "Headquaters Support"
                                        }
                                    ]
                                },
                                "item": {
                                    "icon": {
                                        "src": "{icon}"
                                    },
                                    "title": {
                                        "value": "{name}"
                                    },
                                    "description": {
                                        "value": "{description}"
                                    },
                                    "actions": [
                                        {
                                            "type": "Navigation",
                                            "parameters": {
                                                "url": "/users/{name}"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "table": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.table",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Table",
                            "data": {
                                "json": [
                                    {
                                        "salesOrder": "5000010050",
                                        "customerName": "Robert Brown Entertainment",
                                        "netAmount": "2K USD",
                                        "status": "Delivered",
                                        "statusState": "Success"
                                    },
                                    {
                                        "salesOrder": "5000010051",
                                        "customerName": "Entertainment Argentinia",
                                        "netAmount": "127k USD",
                                        "status": "Canceled",
                                        "statusState": "Error"
                                    },
                                    {
                                        "salesOrder": "5000010052",
                                        "customerName": "Brazil Technologies",
                                        "netAmount": "8K USD",
                                        "status": "In Progress",
                                        "statusState": "Warning"
                                    },
                                    {
                                        "salesOrder": "5000010053",
                                        "customerName": "Quimica Madrilenos",
                                        "netAmount": "25K USD",
                                        "status": "Delivered",
                                        "statusState": "Success"
                                    },
                                    {
                                        "salesOrder": "5000010054",
                                        "customerName": "Development Para O Governo",
                                        "netAmount": "7K USD",
                                        "status": "Delivered",
                                        "statusState": "Success"
                                    },
                                    {
                                        "salesOrder": "5000010050",
                                        "customerName": "Robert Brown Entertainment",
                                        "netAmount": "2K USD",
                                        "status": "Delivered",
                                        "statusState": "Success"
                                    },
                                    {
                                        "salesOrder": "5000010051",
                                        "customerName": "Entertainment Argentinia",
                                        "netAmount": "127k USD",
                                        "status": "Canceled",
                                        "statusState": "Error"
                                    },
                                    {
                                        "salesOrder": "5000010052",
                                        "customerName": "Brazil Technologies",
                                        "netAmount": "8K USD",
                                        "status": "In Progress",
                                        "statusState": "Warning"
                                    },
                                    {
                                        "salesOrder": "5000010052",
                                        "customerName": "Brazil Technologies",
                                        "netAmount": "8K USD",
                                        "status": "In Progress",
                                        "statusState": "Warning"
                                    }
                                ]
                            },
                            "header": {
                                "title": "Sales Orders for Key Accounts",
                                "subTitle": "Today",
                                "status": {
                                    "text": "{headerData/statusText}"
                                }
                            },
                            "content": {
                                "row": {
                                    "columns": [
                                        {
                                            "title": "Sales Order",
                                            "value": "{salesOrder}",
                                            "identifier": true
                                        },
                                        {
                                            "title": "Customer",
                                            "value": "{customerName}"
                                        },
                                        {
                                            "title": "Net Amount",
                                            "value": "{netAmount}"
                                        },
                                        {
                                            "title": "Status",
                                            "value": "{status}",
                                            "state": "{statusState}"
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "timeline": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.timeline",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Timeline",
                            "header": {
                                "title": "Schedule for today",
                                "subTitle": "9:32 AM",
                                "status": {
                                    "text": "3 of 3"
                                },
                                "actions": [
                                    {
                                        "type": "Navigation",
                                        "parameters": {
                                            "url": "/quickLinks"
                                        }
                                    }
                                ]
                            },
                            "content": {
                                "data": {
                                    "json": [
                                        {
                                            "Title": "Call Donna Mendez",
                                            "Icon": "sap-icon://outgoing-call",
                                            "Time": "9:15 AM"
                                        },
                                        {
                                            "Title": "Incidents Status - Online",
                                            "Icon": "sap-icon://my-view",
                                            "Time": "10:00 - 11:00"
                                        },
                                        {
                                            "Title": "Site Visit - Peach Valley",
                                            "Description": "San Joaquin valley",
                                            "Icon": "sap-icon://appointment-2",
                                            "Time": "12:00 - 17:00"
                                        }
                                    ]
                                },
                                "item": {
                                    "dateTime": {
                                        "value": "{Time}"
                                    },
                                    "description": {
                                        "value": "{Description}"
                                    },
                                    "title": {
                                        "value": "{Title}"
                                    },
                                    "icon": {
                                        "src": "{Icon}"
                                    }
                                }
                            }
                        }
                    },
                    "calendar": {
                        "sap.app": {
                            "id": "sample.CardsLayout.model.calendar",
                            "type": "card"
                        },
                        "sap.card": {
                            "type": "Calendar",
                            "data": {
                                "json": {
                                    "item": [
                                        {
                                            "visualization": "blocker",
                                            "start": "2019-09-02T09:00",
                                            "end": "2019-09-02T10:00",
                                            "title": "Payment reminder",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type06"
                                        },
                                        {
                                            "visualization": "blocker",
                                            "start": "2019-09-02T17:00",
                                            "end": "2019-09-02T17:30",
                                            "title": "Private appointment",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type07"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-02T12:00",
                                            "end": "2019-09-02T13:00",
                                            "title": "Lunch",
                                            "text": "working",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type03"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-01T08:30",
                                            "end": "2019-09-03T17:30",
                                            "title": "Workshop",
                                            "text": "Out of office",
                                            "icon": "sap-icon://sap-ui5",
                                            "type": "Type07"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-02T14:00",
                                            "end": "2019-09-02T16:30",
                                            "title": "Discussion with clients",
                                            "text": "working",
                                            "icon": "sap-icon://desktop-mobile"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-02T11:00",
                                            "end": "2019-09-02T12:00",
                                            "title": "Team meeting",
                                            "text": "online meeting",
                                            "icon": "sap-icon://sap-ui5",
                                            "type": "Type04"
                                        },
                                        {
                                            "visualization": "blocker",
                                            "start": "2019-09-03T17:00",
                                            "end": "2019-09-03T17:30",
                                            "title": "Private appointment",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type07"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-03T12:00",
                                            "end": "2019-09-03T13:00",
                                            "title": "Lunch",
                                            "text": "working",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type03"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-03T10:00",
                                            "end": "2019-09-03T12:30",
                                            "title": "Board meeting",
                                            "icon": "sap-icon://desktop-mobile"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-04T12:00",
                                            "end": "2019-09-04T13:00",
                                            "title": "Lunch",
                                            "text": "working",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type03"
                                        },
                                        {
                                            "visualization": "blocker",
                                            "start": "2019-09-04T17:00",
                                            "end": "2019-09-04T17:30",
                                            "title": "Private appointment",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type07"
                                        },
                                        {
                                            "visualization": "appointment",
                                            "start": "2019-09-05T11:00",
                                            "end": "2019-09-05T12:00",
                                            "title": "Team meeting",
                                            "text": "online meeting",
                                            "icon": "sap-icon://sap-ui5",
                                            "type": "Type04"
                                        },
                                        {
                                            "visualization": "blocker",
                                            "start": "2019-09-06T09:00",
                                            "end": "2019-09-06T10:00",
                                            "title": "Payment reminder",
                                            "icon": "sap-icon://desktop-mobile",
                                            "type": "Type06"
                                        }
                                    ],
                                    "specialDate": [
                                        {
                                            "start": "2019-09-13",
                                            "end": "2019-09-14",
                                            "type": "Type08"
                                        },
                                        {
                                            "start": "2019-09-24",
                                            "end": "2019-09-24",
                                            "type": "Type13"
                                        }
                                    ],
                                    "legendItem": [
                                        {
                                            "category": "calendar",
                                            "text": "Team building",
                                            "type": "Type08"
                                        },
                                        {
                                            "category": "calendar",
                                            "text": "Public holliday",
                                            "type": "Type13"
                                        },
                                        {
                                            "category": "appointment",
                                            "text": "Reminder",
                                            "type": "Type06"
                                        },
                                        {
                                            "category": "appointment",
                                            "text": "Private appointment",
                                            "type": "Type07"
                                        },
                                        {
                                            "category": "appointment",
                                            "text": "Out of office",
                                            "type": "Type03"
                                        },
                                        {
                                            "category": "appointment",
                                            "text": "Collaboration with other team members",
                                            "type": "Type07"
                                        }
                                    ]
                                }
                            },
                            "header": {
                                "title": "My calendar",
                                "subTitle": "Team Balkan",
                                "status": {
                                    "text": {
                                        "format": {
                                            "translationKey": "i18n>CARD.COUNT_X_OF_Y",
                                            "parts": [
                                                "parameters>/visibleItems",
                                                "parameters>/allItems"
                                            ]
                                        }
                                    }
                                }
                            },
                            "content": {
                                "date": "2019-09-02",
                                "maxItems": 5,
                                "maxLegendItems": 3,
                                "noItemsText": "You have nothing planned for that day",
                                "item": {
                                    "template": {
                                        "visualization": "{visualization}",
                                        "startDate": "{start}",
                                        "endDate": "{end}",
                                        "title": "{title}",
                                        "text": "{text}",
                                        "icon": "{icon}",
                                        "type": "{type}"
                                    },
                                    "path": "/item"
                                },
                                "specialDate": {
                                    "template": {
                                        "startDate": "{start}",
                                        "endDate": "{end}",
                                        "type": "{type}"
                                    },
                                    "path": "/specialDate"
                                },
                                "legendItem": {
                                    "template": {
                                        "category": "{category}",
                                        "text": "{text}",
                                        "type": "{type}"
                                    },
                                    "path": "/legendItem"
                                },
                                "moreItems": {
                                    "actions": [
                                        {
                                            "type": "Navigation",
                                            "enabled": true,
                                            "url": "http://sap.com"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                };
                var oModel = new JSONModel(object);
                this.getView().setModel(oModel, "manifests");

            },
						getData: function() {
							var settings = {
								"url": "https://api.appery.io/rest/1/apiexpress/api/People?apiKey=6a7d771a-2d3e-4348-b3e6-de8938ec96f2",
								"method": "GET",
								"timeout": 0,
								"headers": {
									"Content-Type": "application/json"
								},
							};
							$.ajax(settings)
							.done(function (response) {
								// debugger;
								console.log('RESPONSE:',response);
								this.prepareInformation(response);
							}.bind(this));
						},

						prepareInformation: function(response){
							response.json().then(json => {
								var totalAmount = json.length;
								var happyAmount = json.filter(e => e.expressions === "happy").length	// id, gender
								var sadAmount = json.filter(e => e.expressions === "sad").length	// id, gender
								var angryAmount = json.filter(e => e.expressions === "angry").length	// id, gender
								var neutralAmount = json.filter(e => e.expressions === "neutral").length	// id, gender
								var surprisedAmount = json.filter(e => e.expressions === "surprised").length	// id, gender
								var fearfulAmount = json.filter(e => e.expressions === "fearful").length	// id, gender
								var disgustedAmount = json.filter(e => e.expressions === "disgusted").length	// id, gender
								console.log('Amounts:',totalAmount);
							});
						//	this.setEmotionModel(<objeto>);
						},

						setEmotionModel: function(object){
							var objeto = {};

							this.getView().getModel('emotionData').setData(objeto);
						}
        });
    });
