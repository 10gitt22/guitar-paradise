import React from 'react'
import { Link } from 'react-router-dom'

type PageLinkProps = {
  label: string
  path: string
  img: string
}

const PageLink: React.FC<PageLinkProps> = ({label, path, img}) => {
  return (
    <Link to={path} className='page-link'>
      <div className='page-link__internal' style={{"backgroundImage": `url(${img})`}}>
        <h1>
          {label}
        </h1> 
      </div>
    </Link>
  )
}

export default PageLink