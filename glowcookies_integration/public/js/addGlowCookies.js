/**
 * @author: jango_blockchained
 */
frappe.call("glowcookies_integration.api.utils.getSettings").then((r) => {
  if (r && r.active) {
    glowCookies.start(r.language_flag, {
      style: r.style,
      policyLink: r.policy_url,
    });
  }
});
