import React from 'react'
import { Formik } from 'formik'
import { FcGoogle } from 'react-icons/fc'
import FormField from 'components/controls/FormField'
import { AuthFormProps } from 'types/types'

const LoginForm: React.FC<AuthFormProps> = ({setHasAccount}) => {
  return (
    <div className='form-block'>
        {/* <h1>GUITAR-PARADISE</h1> */}
        <form className='auth-form'>
            <FormField type='email' label='Email' name='email'/>
            <FormField type='password' label='Password' name='password'/>
            <button className='form-submit'>Login</button>
            <button className='form-submit google'>
                <span>Login with Google</span>
                <FcGoogle />
            </button>
            <div className="form-has_account" onClick={() => setHasAccount(false)}>Doesn't have account yet? Signup!</div>
        </form>
    </div>
  )
}

export default LoginForm