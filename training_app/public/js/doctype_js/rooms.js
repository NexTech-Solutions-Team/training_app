frappe.ui.form.on('Rooms', {
	button: function(frm) {
        frm.set_value("capacity", 1111111)
		// frappe.msgprint("Aliii>>>>> Override Rooms Button>>> ")
	}
});


frappe.ui.form.on('*', {
	refresh: function(frm) {
        // frm.set_value("capacity", 1111111)
		frappe.msgprint("Aliii>>>>> Override Rooms Button>>> ")
	}
});
