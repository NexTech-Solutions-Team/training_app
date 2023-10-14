# Copyright (c) 2023, Mohamed Abdulsalam and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import pretty_date, now, add_to_date, today

from frappe.model.document import Document

class ParentDoctype(Document):
	# @frappe.whitelist()
	# def execute_function(*args,**kwargs):
	# 	print('Hello World')
	# 	# The data is transmitted via keyword argument
	# 	print(kwargs)

	def validate (self):
		self.date = today()

@frappe.whitelist()
def test_call (customer, msg):
	# frappe.msgprint(msg + customer)
	msg = "Aliiiiiiiiiiiii"
	return msg 

@frappe.whitelist()
def get_items(item_group):
	items_details = frappe.db.sql(f""" 
	SELECT name FROM `tabItem` WHERE item_group='{item_group}' """, as_dict=True)
	# items_details = frappe.db.get_all("Item", filters={"item_group": item_group}, fields=["name"])

	return items_details

@frappe.whitelist()
def execute_function(*args,**kwargs):
    frappe.msgprint('Hello World')
    # The data is transmitted via keyword argument
    print(kwargs)