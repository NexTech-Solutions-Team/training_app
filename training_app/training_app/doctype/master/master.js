// Copyright (c) 2023, Mohamed Abdulsalam and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master', {
	enable: function(frm) {
		$.each(frm.doc.child_field || [], function(i, d) {
			// let row = locals[cdt][cdn];
			let quantity = Math.random();
			d.item_name = quantity;
		});
		refresh_field("child_field");
	},
	item_group: function(frm){
		let item_group = frm.doc.item_group;
		 if(item_group){
			frappe.call({
				method: "training_app.training_app.doctype.master.master.get_items",
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
	refresh: function (frm){
		frm.set_query('item_code', 'child_field', function() {
			return {
				filters: {
					item_group: 'Services'
				}
			}
		});

		cur_frm.set_query("user", function() {
			return {
				query: "training_app.training_app.doctype.master.master.get_system_manager_users"
				
			};
		});



	},
	discount_percentage: function(frm) {
		$.each(frm.doc.child_field , function(i, cd) {
			if(!cd.discount_percentage) {
				cd.discount_percentage = frm.doc.discount_percentage;
			}
		});
		refresh_field("child_field");
	}	
});

frappe.ui.form.on("ParentDoctype", {
    discount_percentage: function(frm) {
		$.each(frm.doc.child_field || [], function(i, d) {
			if(!d.discount_percentage) d.discount_percentage = frm.doc.discount_percentage;
		});
		refresh_field("child_field");
	}	
});


frappe.ui.form.on('Child', {
	item_code: function(frm,cdt,cdn) {
		let row = locals[cdt][cdn];
		let quantity = Math.round(+new Date()/1000);
		row.quantity = quantity;
		refresh_field("child_field")
	},
	// child_field_add: function(frm,cdt,cdn) {
	// 	let row = locals[cdt][cdn]
	// 	row.quantity = 5
	// 	refresh_field("child_field")
	// },
	// quantity: function (frm, cdt, cdn) {
	// 	let row = locals[cdt][cdn]
	// 	let amount = flt(row.quantity * row.rate);
	// 	row.amount = amount
	// 	refresh_field("child_field"); 
	// }, 
	rate: function(frm,cdt,cdn) {
		let row = locals[cdt][cdn]
		frappe.model.set_value (cdt, cdn, 'amount',row.quantity *row.rate );
		frm.doc.total = frm.doc.total + row.rate
		// frm.set_value("total", frm.doc.total + row.rate);
		frm.refresh_field("total");
	}

	


});
