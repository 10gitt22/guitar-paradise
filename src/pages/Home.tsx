import React from 'react'
import PageLink from 'components/layouts/PageLink'
import storeImg from 'assets/images/store.jpg'
import builderImg from 'assets/images/builder.jpg'
import workshopImg from 'assets/images/workshop.jpg'


const Home: React.FC<{}> = () => {
  const links = [
    {label: 'store', path: '/store', img: storeImg},
    {label: 'builder', path: '/builder', img: builderImg},
    {label: 'workshop', path: '/workshop', img: workshopImg},
  ]

  return (
    <div className='page' id='home-page'>
      <div className='links-container'>
        {links.map(link => {
          return <PageLink label={link.label} path={link.path} img={link.img} key={link.label}/>
        })}
      </div>
    </div>
  )
}

export default Home
