from __future__ import unicode_literals

import frappe


@frappe.whitelist(allow_guest=True)
def getSettings():
    message = frappe.get_doc('GlowCookies Settings')
    return message
