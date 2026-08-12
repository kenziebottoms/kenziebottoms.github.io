import React from 'react'

import Page from '../components/Page'

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
  <Page>
    <h1>Links</h1>
    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {links.map(link => 
        <a
          href={link.href} 
          key={link.name}
          className='p-4 flex flex-col gap-4 items-center justify-center text-center leading-5 bg-white dark:bg-black-hl'
          target='_blank' 
          rel='noopener noreferrer'
        >
          <img
            src={images[link.name.toLowerCase().replace(/[\s&]/g, '')]}
            className='h-8 w-8 dark:invert'
            alt={link.name}
          />
          {link.name}
        </a>
      )}
    </div>
  </Page>


export default Links
