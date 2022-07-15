from __future__ import unicode_literals
from frappe.utils import get_site_name

import frappe

@frappe.whitelist()
def getSettings():
    return frappe.get_doc('GlowCookies Settings')