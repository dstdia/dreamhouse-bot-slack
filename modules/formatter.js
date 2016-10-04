"use strict";

let http = require('http');

let numeral = require("numeral");

let color = "#84BF41";

exports.formatProperties = properties => {

    if (properties && properties.length>0) {
        let attachments = [];
        properties.forEach(property => {
            let fields = [];
            fields.push({title: "Address", value: `${property.get("Address__c")}, ${property.get("City__c")} ${property.get("State__c")}`, short:true});
            fields.push({title: "Price", value: `${numeral(property.get("Price__c")).format('$0,0')}`, short:true});
            fields.push({title: "Bedrooms", value: property.get("Beds__c"), short:true});
            fields.push({title: "Bathrooms", value: property.get("Baths__c"), short:true});
            fields.push({title: "Open in Salesforce", value: "https://login.salesforce.com/" + property.getId(), short:false});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

exports.formatPriceChanges = priceChanges => {
    if (priceChanges && priceChanges.length>0) {
        let attachments = [];
        priceChanges.forEach(priceChange => {
            let property = priceChange.get("Parent");
            let fields = [];
            fields.push({title: "Address", value: `${property.Address__c}, ${property.City__c} ${property.State__c}`, short:false});
            fields.push({title: "Old Price", value: `${numeral(priceChange.get("OldValue")).format('$0,0')}`, short:true});
            fields.push({title: "New Price", value: `${numeral(priceChange.get("NewValue")).format('$0,0')}`, short:true});
            fields.push({title: "Open in Salesforce", value: "https://login.salesforce.com/" + property.Id, short:false});
            attachments.push({color: color, fields: fields});
        });
        return attachments;
    } else {
        return [{text: "No records"}];
    }

};

// To keep Heroku awake
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Ok, dyno is awake.');
}).listen(process.env.PORT || 5000);
