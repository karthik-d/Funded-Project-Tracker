import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleSignin() {
    return (
        <GoogleOAuthProvider
            clientId="103603048152-42oo200pr067ahtntminh5m6kc88m618.apps.googleusercontent.com">
            <LoginOneTapCrux />
        </GoogleOAuthProvider>
    )
}

export function LoginOneTapCrux() {

    const onSuccess = async (googleData) => {

        console.log("Success: " + googleData);

        console.log("Handling...");
        const res = await fetch(
            "/api/v1/auth/google",
            {
                method: "POST",
                body: JSON.stringify({
                    token: googleData.tokenId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

        const data = await res;
        console.log(data);
    }

    const onFailure = async (response) => {
        console.log("Failed: ");
        console.log(response.error);
        console.log(response.details);
    }

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />
    );

}

