import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'


export function SignIn() {
    async function logGoogleUser() {
        try {
            const loggedData = await signInWithGooglePopup()
            // console.log(loggedData.user.uid)
            createUserDocumentFromAuth(loggedData.user)
        } catch (error) {
            console.log("error is", error.message)
        }
    }

    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}


