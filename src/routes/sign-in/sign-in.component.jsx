import { useContext, useState } from "react"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithEmailPassword } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component"
import { Button } from "@mui/material"
import './sign-in.styles.scss'
import { UserContext } from "../../contexts/user.context"


export function SignInForm() {
    const [formFields, setFormFields] = useState({ email: '', password: '' })

    const {setCurrentUser} = useContext(UserContext)     //useContext(UserContext) returns an object { currentUser, setCurrentUser }
                                                         //the braces extract only {setCurrentUser} by destructuring

    function resetFormFields() {
        setFormFields({ email: '', password: '' })
    }
    function handleChange(e) {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })              //spread op=copy prev fields, [e.t.name]=dynamic
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await signInWithEmailPassword(formFields.email, formFields.password)
            setCurrentUser(response.user)
            resetFormFields();
        }
        catch (error) {
            if(error.code === 'auth/invalid-credential' ){
                alert('Wrong Credentials')
            }
            console.log('Cannot sign in', error);
            
        }
    }

    async function logGoogleUser() {
        try {
            const loggedData = await signInWithGooglePopup()
            createUserDocumentFromAuth(loggedData.user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Sign in using Email and Password</h2>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" name="email" onChange={handleChange} value={formFields.email} required />
                <FormInput label="Password" type="password" name="password" onChange={handleChange} value={formFields.password} required />

                <div className="buttons-container">
                    <div><Button variant="contained" className="custom-black-button" type="submit">Sign In</Button></div>
                    <div><Button variant="contained" className="custom-blue-button" type="button" onClick={logGoogleUser} >Google sign in</Button></div>
                </div>
            </form>
        </div>
    )
}