
let gc_options = {};

frappe.db.get_single_value('GlowCookies Settings','active')
	.then(active => {
		if (active) {
			frappe.db.get_single_value('GlowCookies Settings','language_flag')
				.then(language_flag => {gc_options.language_flag = language_flag});
			frappe.db.get_single_value('GlowCookies Settings','style')
				.then(style => {gc_options.style = style});
			frappe.db.get_single_value('GlowCookies Settings','policy_url')
				.then(policy_url => {gc_options.policy_url = policy_url});
			// --
			glowCookies.start(gc_options.language_flag, { 
				style: gc_options.style,
				policyLink: gc_options.policy_url
			});
		}
	}
);