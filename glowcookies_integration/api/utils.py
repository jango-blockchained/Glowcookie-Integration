from __future__ import unicode_literals

import frappe


@frappe.whitelist(allow_guest=True)
def getSettings():
    return frappe.get_doc('GlowCookies Settings')
