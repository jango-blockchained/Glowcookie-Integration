frappe.call('glowcookies_integration.api.utils.getSettings')
.then(r => {
  	let gc_opt = r.message;
	if (gc_opt.active) {
		glowCookies.start(gc_opt.language_flag, { 
				style: gc_opt.style,
				policyLink: gc_opt.policy_url
		});
	} else {
		console.log('inactive cookie')
	}
});
