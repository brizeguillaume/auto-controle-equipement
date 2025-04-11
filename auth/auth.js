const msalConfig = {
    auth: {
        clientId: "94e72251-f0b5-4a3f-9da7-7c711736b634",
        authority: "https://login.microsoftonline.com/VOTRE_TENANT_ID",
        redirectUri: window.location.origin + "/auth/auth.html"
    }
};


// Dans auth.js
async function getToken() {
    const msalInstance = new msal.PublicClientApplication(msalConfig);
    const accounts = msalInstance.getAllAccounts();
    
    if (accounts.length > 0) {
        const silentRequest = { account: accounts[0] };
        try {
            const response = await msalInstance.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch {
            return await login();
        }
    }
    return null;
}
