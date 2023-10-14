# Copyright (c) 2023, Mohamed Abdulsalam and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Master(Document):
	pass


@frappe.whitelist()
def get_items(item_group):
	items_details = frappe.db.sql(f""" 
	SELECT name FROM `tabItem` WHERE item_group='{item_group}' """, as_dict=True)
	# items_details = frappe.db.get_all("Item", filters={"item_group": item_group}, fields=["name"])

	return items_details


@frappe.whitelist()
def get_system_manager_users(doctype, txt, searchfield, start, page_len, filters):
	return frappe.db.sql("""
		select u.name, concat(u.first_name, ' ', u.last_name)
		from tabUser u, `tabHas Role` r
		where u.name = r.parent and r.role = 'System Manager' 
		and u.enabled = 1 and u.name like %s
	""", ("%" + txt + "%"))
