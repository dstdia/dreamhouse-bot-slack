"use strict";

let numeral = require("numeral");

let color = "#009cdb";

let formatProperties = properties => {

    if (properties && properties.length>0) {
        let attachments = [];
        properties.forEach(property => {
            let fields = [];
            fields.push({title: "Address", value: `${property.get("Address__c")}, ${property.get("City__c")} ${property.get("State__c")}`, short:true});
            fields.push({title: "Link", value: "https://login.salesforce.com/" + property.getId(), short:true});
            fields.push({title: "Bedrooms", value: property.get("Beds__c"), short:true});
            fields.push({title: "Price", value: `${numeral(property.get("Price__c")).format('$0,0')}`, short:true});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

exports.formatProperties = formatProperties;