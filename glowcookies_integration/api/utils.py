from __future__ import unicode_literals
from frappe import _

from frappe.utils import get_site_name

import frappe
import json

# ------ INIT FRAPPE4
frappe.init(site=get_site_name)
frappe.connect()


@frappe.whitelist()
def getSettings():
    settings = frappe.get_doc('GlowCookies Settings')
    return settings