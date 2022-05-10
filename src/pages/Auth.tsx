import SignupForm from 'components/layouts/SignupForm'
import LoginForm from 'components/layouts/LoginForm'
import React from 'react'
import { useState } from 'react'

const Auth: React.FC<{}> = () => {
    const [hasAccount, setHasAccount] = useState(true)

    return (
        <div className='page' id='auth-page'>
            {hasAccount ? 
                <LoginForm setHasAccount={setHasAccount}/>:
                <SignupForm setHasAccount={setHasAccount}/>
            }
        </div>
    )
}

export default Auth