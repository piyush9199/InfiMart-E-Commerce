import { useState } from "react"
import { signUpWithEmailPassword } from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component"
import './sign-up.styles.scss'
import { Button } from "@mui/material"


export function SignUpForm() {
    const [formFields, setFormFields] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    function resetFormFields() {
        setFormFields({ displayName: '', email: '', password: '', confirmPassword: '' })
    }
    function handleChange(e) {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })              //spread op=copy prev fields, [e.t.name]=dynamic
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (formFields.password !== formFields.confirmPassword) {
            alert('Passwords do not match')
            return;
        }


        try {
            const response = await signUpWithEmailPassword(formFields.email, formFields.password)
            await createUserDocumentFromAuth(response.user, formFields.displayName);  //pass 'displayName' param
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already created')
            } else {
                console.log("error creating user", error);
            }

        }
    }


    return (
        <div className="sign-up-container">
            <h2>Sign up using Email and Password</h2>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" name="displayName" onChange={handleChange} value={formFields.displayName} required />

                <FormInput label="Email" type="email" name="email" onChange={handleChange} value={formFields.email} required />

                <FormInput label="Password" type="password" name="password" onChange={handleChange} value={formFields.password} required />

                <FormInput label="Confirm Password" type="password" name="confirmPassword" onChange={handleChange} value={formFields.confirmPassword} required />
                <Button variant="contained" className="custom-black-button" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}