import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/store/useAuth'

import FormField from 'components/controls/FormField'
import { AuthFormProps } from 'types/types'
import { FcGoogle } from 'react-icons/fc'

const LoginForm: React.FC<AuthFormProps> = ({setHasAccount}) => {
  const { loginWithEmail } = useAuth()
  const navigation = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailRef.current && passwordRef.current) {
      loginWithEmail({email: emailRef.current.value, password: passwordRef.current.value})
      navigation('/')
    }
    return false
  }

  return (
    <div className='form-block'>
        {/* <h1>GUITAR-PARADISE</h1> */}
        <form className='auth-form' onSubmit={handleLogin}>
            <FormField type='email' label='Email' name='email' innerRef={emailRef}/>
            <FormField type='password' label='Password' name='password' innerRef={passwordRef}/>
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