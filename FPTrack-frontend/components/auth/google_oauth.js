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
        console.log("Login Tap Success");
        // fetch user from server
        fetch(
            "http://localhost:3000/api/auth",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: googleData.credential
                })
            })
            .then((response) => {
                console.log(response);
                console.log("Second request...");
                var request = new Request('http://localhost:3000/api/playground/session-check', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: "include",
                    redirect: 'follow',
                    headers: new Headers({
                        'Content-Type': 'text/plain'
                    })
                });
                /* TESTING - fetch with cookie */
                fetch(request).then((response) => { console.log(response); })
            })
            .catch((error) => {
                console.log("Error" + error);
            });
    };

    // response contains user data --- email, name, etc. 
    // TODO: Redirect to signup page  (Component ready)
    // TODO: Construct user creation request with the form data and `response`
    // TODO: Hit POST:/api/user to create the user

    const onFailure = async (response) => {
        console.log("Failed: ");
        console.log(response.error);
        console.log(response.details);
    }

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
            useOneTap
        />
    );

}

