import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/store/useAuth'

import FormField from 'components/controls/FormField'
import { AuthFormProps } from 'types/types'
import { FcGoogle } from 'react-icons/fc'

const SignupForm: React.FC<AuthFormProps> = ({setHasAccount}) => {
  const { signUpWithEmail, loginWithGoogle } = useAuth()
  const navigation = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailRef.current && passwordRef.current) {
      signUpWithEmail({email: emailRef.current.value, password: passwordRef.current.value})
      navigation('/')
    }
    return false
  }

  return (
    <div className='form-block'>
    {/* <h1>GUITAR-PARADISE</h1> */}
    <form className='auth-form' onSubmit={handleSignup}>
        <FormField type='email' label='Email' name='email' innerRef={emailRef}/>
        <FormField type='password' label='Password' name='password' innerRef={passwordRef}/>
        {/* <FormField type='password' label='Confirm password' name='confirm_password'/> */}
        <button className='form-submit'>Signup</button>
        <button className='form-submit google' onClick={() => { 
          loginWithGoogle()
          navigation('/')
        }}>
            <span>Signup with Google</span>
            <FcGoogle />
        </button>
        <div className="form-has_account" onClick={() => setHasAccount(true)}>Already have account? Login!</div>
    </form>
</div>
  )
}

export default SignupForm