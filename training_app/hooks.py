from . import __version__ as app_version

app_name = "training_app"
app_title = "Training App"
app_publisher = "Mohamed Abdulsalam"
app_description = "Training App]"
app_email = "moha2016it@gmail.com"
app_license = "MIT"
# =============

my_var = "Mohamed"



# Includes in <head>    {insert static JS and CSS assets in various parts of your site.}
# ------------------
# include js, css files in header of desk.html
# {These hooks allow you to inject JS / CSS in desk.html which renders the Desk.}
# app_include_css = "/assets/training_app/css/training_app.css"
# app_include_js = "/assets/training_app/js/training_app.js"

# include js, css files in header of web template
# {These hooks allow you to inject JS / CSS in web.html which renders the Portal..}
# web_include_css = "/assets/training_app/css/training_app.css"
# web_include_js = "/assets/training_app/js/training_app.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "training_app/public/scss/website"

# include js, css files in header of web form
# {These hooks allow you to add inject static JS and CSS assets in "web_form.html" which is used to render Web Forms. These will work only for Standard Web Forms.}
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# {to inject JS assets in Standard Desk Pages.0}
# page_js = {"page" : "public/js/file.js"}
# page_js = {"backups" : "public/js/file.js"}
# page_js = {"backups" : "public/js/backups.js"}

# include js in doctype views >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
# doctype_js = {"Item" : "public/js/item.js"}
# doctype_js = {
	# "Sales Order" : "public/js/doctype_js/sales_order.js",
	# "Rooms" : "public/js/doctype_js/rooms.js",
	# "*" : "public/js/doctype_js/rooms.js",

# }
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "training_app.utils.jinja_methods",
#	"filters": "training_app.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "training_app.install.before_install"
# after_install = "training_app.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "training_app.uninstall.before_uninstall"
# after_uninstall = "training_app.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "training_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }
# override_doctype_class = {
	# "Rooms": "training_app.overrides.CustomRooms",
	# "Item": "training_app.overrides.CustomItem"
# }
# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		# "after_insert": "training_app.overrides.after_insert_all"
# 		# "on_update": "method",
# 		# "on_cancel": "method",
# 		# "on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"training_app.tasks.all"
#	],
#	"daily": [
#		"training_app.tasks.daily"
#	],
#	"hourly": [
#		"training_app.tasks.hourly"
#	],
#	"weekly": [
#		"training_app.tasks.weekly"
#	],
#	"monthly": [
#		"training_app.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "training_app.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "training_app.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "training_app.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["training_app.utils.before_request"]
# after_request = ["training_app.utils.after_request"]

# Job Events
# ----------
# before_job = ["training_app.utils.before_job"]
# after_job = ["training_app.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"training_app.auth.validate"
# ]


# fixtures = [
#     {
#         "Master":{"name": ["=",["PD-44", "PD-43"]] }
#     },
#     {
#         "Custom Field": {"name": "Item-is_room"}
#     }
    # {
    #     "Property Setter":{}
    # }

# ]

# fixtures =[
# 	{
# 		"doctype": "Master", 
# 		"filters": { 
# 			"name": [ "in", ["PD-44", "PD-43"] ] 
# 			}

# 	},
#     {
# 		"doctype": "Master", 
# 		"filters": { 
# 			"name": [ "in", ["PD-44", "PD-43"] ] 
# 			}

# 	},


# ]