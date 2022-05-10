import React from 'react'
import FormField from 'components/controls/FormField'
import { FcGoogle } from 'react-icons/fc'
import { AuthFormProps } from 'types/types'

const SignupForm: React.FC<AuthFormProps> = ({setHasAccount}) => {
  return (
    <div className='form-block'>
    {/* <h1>GUITAR-PARADISE</h1> */}
    <form className='auth-form'>
        <FormField type='email' label='Email' name='email'/>
        <FormField type='password' label='Password' name='password'/>
        <FormField type='password' label='Confirm password' name='confirm_password'/>
        <button className='form-submit'>Signup</button>
        <button className='form-submit google'>
            <span>Signup with Google</span>
            <FcGoogle />
        </button>
        <div className="form-has_account" onClick={() => setHasAccount(true)}>Already have account? Login!</div>
    </form>
</div>
  )
}

export default SignupForm