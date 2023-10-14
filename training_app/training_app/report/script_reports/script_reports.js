// Copyright (c) 2023, Mohamed Abdulsalam and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Script Reports"] = {
	"filters": [
        {
            "fieldname": "party_type",
            "fieldtype": "Select",
            "label": "Party Type",
            "mandatory": 0,
            "options": "Customer\nSupplier",
            "wildcard_filter": 0
           },
           {
            "fieldname": "party",
            "fieldtype": "Dynamic Link",
            "label": "Party",
            "mandatory": 0,
            "options": "party_type",
            "wildcard_filter": 0
           },
           {
            "fieldname": "company",
            "fieldtype": "Link",
            "label": "company",
            "mandatory": 0,
            "options": "Company",
            "wildcard_filter": 0
           },
           {
            "fieldname": "account",
            "fieldtype": "Link",
            "label": "Account",
            "mandatory": 0,
            "options": "Account",
            "wildcard_filter": 0
           },
           {
            "fieldname": "currency",
            "fieldtype": "Link",
            "label": "Currency",
            "mandatory": 0,
            "options": "Currency",
            "wildcard_filter": 0
           },
           {
            "fieldname": "item_group",
            "fieldtype": "Link",
            "label": "Item Group",
            "mandatory": 0,
            "options": "Item Group",
            "wildcard_filter": 0
           },
           {
            "fieldname": "sales_partner",
            "fieldtype": "Link",
            "label": "Sales Partner",
            "mandatory": 0,
            "options": "Sales Partner",
            "wildcard_filter": 0
           }
	]
};
