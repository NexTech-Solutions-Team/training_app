import frappe
from hotel_ms.hotel_ms.doctype.rooms.rooms import Rooms
from erpnext.stock.doctype.item.item import Item


class CustomRooms(Rooms):
	def before_save(self):
		frappe.msgprint("Overriiiiiides")
		# super().before_save()
		
	def validate(self):
		if self.capacity ==0:
			frappe.throw("Aliiiii >> plese set capacity")

class CustomItem(Item):
	def validate(self):
		if not self.item_name:
			self.item_name = "Aliiiiiiiiiii"
		# super().validate()


# def after_insert_all(doc, method=None):
#     frappe.msgprint("Overriiiiiides after_insert")