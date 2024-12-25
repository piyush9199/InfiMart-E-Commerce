import { SignUpForm } from '../../components/sign-up/sign-up.component'
import { SignInForm } from '../../components/sign-in/sign-in.component'
import './authentication.styles.scss'

export function Authentication() {


    return (
        <div>
            <h2>Sign In Page</h2>
            {/* <button onClick={logGoogleUser}>Sign in with Google</button> */}
            <div className='sign-components'>
                <SignInForm />
                <SignUpForm />
            </div>
        </div>
    )
}


