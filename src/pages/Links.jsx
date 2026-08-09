import React from 'react'

import Page from '../components/Page'

import '../styles/pages/Links.scss'

import email from '../img/email.svg'
import github from '../img/github.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'
import codepen from '../img/codepen.svg'
import visualstudiomarketplace from '../img/visualstudiomarketplace.png'
import artstation from '../img/artstation.svg'
import artistsclients from '../img/artistsclients.png'
import zazzle from '../img/zazzle.svg'

let images = {
  email,
  github,
  twitter,
  linkedin,
  codepen,
  visualstudiomarketplace,
  artstation,
  artistsclients,
  zazzle,
}

const links = [
  {
    name: 'Email',
    href: 'mailto:kenzie.ripley@pm.me',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kenziebottoms',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kenzie-bottoms',
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/kenziebottoms/',
  },
  {
    name: 'Visual Studio Marketplace',
    href: 'https://marketplace.visualstudio.com/publishers/kenziebottoms',
  },
  {
    name: 'ArtStation',
    href: 'https://kenziebottoms.artstation.com/',
  },
  {
    name: 'Zazzle',
    href: 'https://www.zazzle.com/store/judgmentalgiraffe',
  },
]

const Links = () => 
  <Page id='links'>
    {links.map(link => 
      <a
        href={link.href} target='blank'
        key={link.name} className='block'
      >
        <img
          src={images[link.name.toLowerCase().replace(/[\s&]/g, '')]}
          alt={link.name}
        />
        {link.name}
      </a>
    )}
  </Page>


export default Links
