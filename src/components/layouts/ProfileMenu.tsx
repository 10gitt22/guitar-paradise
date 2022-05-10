import React, { useState } from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'
import avatar from 'assets/images/avatar.jpg'
import { Link } from 'react-router-dom'

type ProfileMenuChildProps = {
    isAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthenticatedTemplate: React.FC<ProfileMenuChildProps> = ({isAuth, setIsAuth}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false) 

    return (
        <>
          <div className='profile-menu__dropdown' onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                <div className='profile-menu__username'>Yevhen Gitt</div>
                <div className='profile-menu__avatar' style={{"backgroundImage": `url(${avatar})`}}></div>
                <IoMdArrowDropdown />

                {isOpenDropdown && (
                    <div className='dropdown-options'>
                        <div className='dropdown-options__item'>my details</div>
                        <div className='dropdown-options__item' onClick={() => setIsAuth(!isAuth)}>logout</div>
                    </div>
                )}
          </div>  
        </>
    )
}

const UnauthenticatedTemplate: React.FC<ProfileMenuChildProps> = ({isAuth, setIsAuth}) => {
    return (
        <Link to='/auth'>
            <div className='btn-login' onClick={() => setIsAuth(!isAuth)}>Login</div>
        </Link>
    )
}

const ProfileMenu: React.FC<{}> = () => {
    const [isAuth, setIsAuth] = useState(false)

  return (
    <div className='profile-menu'>
        {isAuth ? 
        <AuthenticatedTemplate isAuth={isAuth} setIsAuth={setIsAuth}/> : 
        <UnauthenticatedTemplate isAuth={isAuth} setIsAuth={setIsAuth}/>} 
    </div>
  )
}

export default ProfileMenu