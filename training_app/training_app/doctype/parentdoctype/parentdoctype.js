// Copyright (c) 2023, Mohamed Abdulsalam and contributors
// For license information, please see license.txt

// Filter & Auto Fill Child Table =========
frappe.ui.form.on('ParentDoctype', {
    enable:function(frm){
        let txt = frappe.model.get_doc("Company","TechSolutions-Next").chart_of_accounts;
        console.log(txt)
        // frappe.model.set_value("") 
        frm.set_value("txt",txt);
    },
    item_group: function(frm){
		let item_group = frm.doc.item_group;
		 if(item_group){
			frappe.call({
				method: "training_app.training_app.doctype.parentdoctype.parentdoctype.get_items",
				args: {item_group: item_group},
				callback: function(r) {
                    console.log(r.message);
					frm.doc.child_field = []
					$.each(r.message, function(_i, e){
						let row = frm.add_child("child_field");
						row.item_code = e.name;
						})
						refresh_field("child_field");
					}
					});
		   }
	},
    child_field:function(frm){
        var total = 0.0;
        $.each(frm.doc.child_field || [], function(i, d) {
            total += flt(d.rate);
        });
        console.log(total)
        frm.set_value("total", total);
    },
    customer:function(frm){
        frappe.call({
            method:'erpnext.accounts.party.get_party_account',
            args: {
                party_type: "Customer",
                party: frm.doc.customer,
                company:frm.doc.company
            },
            callback: function(r){
                let items = r.message
                frm.doc.account = items

                refresh_field("account");
            }    

        });
        frappe.call({
            method:'erpnext.accounts.doctype.journal_entry.journal_entry.get_exchange_rate',
            args: {
                posting_date: frm.doc.date,
                account: frm.doc.account,
                account_currency: frm.doc.currency,
                company: frm.doc.company
            },
            callback: function(r){
                let items = r.message
                frm.doc.exchange = items
                console.log(items)
                refresh_field("exchange");
            }    

        })
    }
	
});


frappe.ui.form.on("ChildTable", {
	item_code: function(frm,cdt,cdn) {

		var row = locals[cdt][cdn];
		if(row.item_code){
        frappe.call({
            method:'frappe.client.get_value',
            args: {
                doctype: 'Item Price',
                filters: {'item_code': row.item_code},
                fieldname: ['price_list_rate','currency'],
            },
            callback: function(r){
                // let items = r.message;
                row.rate = r.message.price_list_rate;
                refresh_field("child_field");
            }
		});		
		}
	},
});

///////
frappe.ui.form.on('ParentDoctype', {
	discount_percentage: function(frm) {
		$.each(frm.doc.child_field , function(i, cd) {
			if(!cd.discount_percentage) {
				cd.discount_percentage = frm.doc.discount_percentage;
			}
		});
		refresh_field("child_field");
	},
	refresh: function(frm) {
	    frm.fields_dict.file_attachment.$wrapper.find('.close-btn').hide();
        $.each(frm.doc.child_field || [], function (i, row) {
            if (row.file_attachment) {
                row.file_attachment.$wrapper.find('.close-btn').hide();
            }
        });
    },
	enable:function(frm){
	   // let frm.doc.date = today()
	   // frm.set_value("date",today())
	},
});


frappe.ui.form.on('ChildTable',{
    item_code: function (frm, cdt, cdn) {
        let row = locals[cdt][cdn]
        row.file_attachment.$wrapper.find('[data-action="clear_attachment"]').hide();
        row.discount_percentage = frm.doc.discount_percentage;
        frm.doc.total = 50;
        refresh_field("child_field");
        refresh_field("total");
    },
	quantity: function (frm, cdt, cdn) {
	    console.log( locals[cdt][cdn])
		let row = locals[cdt][cdn]
// 		let amount = flt(row.quantity * row.rate);
		row.amount = flt(row.quantity * row.rate);
		frappe.model.set_value(cdt, cdn, 'item_name', 'Aliiiiii');
		refresh_field("child_field"); 
	},
	rate: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn]
		let amount = flt(row.quantity * row.rate);
		row.amount = amount
// 		refresh_field("child_field"); 
	}    
});	

frappe.ui.form.on('ChildTable',{
	form_render:function (frm, cdt, cdn) {
	    let row = locals[cdt][cdn]
	    let name = "Mohammed";
	    row.item_name =name;
	    frm.refresh_field('child_field');
	},
});

// setup dynamic_field_label
frappe.ui.form.on('ParentDoctype', {
    setup: function(frm) {
        frm.set_query("party_type", function() {
            return{
                "filters": {
                    "name": ["in", ["Customer", "Supplier", "Employee"]],
                }
            }
        });
    },
    // setup dynamic_field_label
    party_type: function(frm) {
        frm.trigger('set_dynamic_field_label');
        frm.set_value("party", "");
    },

    set_dynamic_field_label: function(frm){
        if (frm.doc.party_type) {
            frm.set_df_property("party", "label", frm.doc.party_type);
        }
    },
    
});
// End: setup dynamic_field_label