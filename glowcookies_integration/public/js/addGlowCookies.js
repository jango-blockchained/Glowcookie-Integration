/**
 * @author: jango_blockchained 
 */
xcall('glowcookies_integration.api.utils.getSettings')
.then(r => {
    if (r.active) {
        glowCookies.start(r.language_flag, { 
            style: r.style,
            policyLink: r.policy_url
        });
    }
});
