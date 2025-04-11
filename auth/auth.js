const msalConfig = {
    auth: {
        clientId: "VOTRE_CLIENT_ID_AZURE",
        authority: "https://login.microsoftonline.com/VOTRE_TENANT_ID",
        redirectUri: window.location.origin + "/auth/auth.html"
    }
};

async function login() {
    const msalInstance = new msal.PublicClientApplication(msalConfig);
    const loginRequest = {
        scopes: ["Files.ReadWrite"]
    };
    
    try {
        await msalInstance.loginRedirect(loginRequest);
    } catch (err) {
        console.error("Erreur:", err);
    }
}
