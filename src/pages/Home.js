import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

import '../styles/pages/Home.scss'

const Home = () => 
  <Page id='home'>
    <div id='bio' className='block wide'>
      <p>
        Kenzie Bottoms is a feminist, anti-racist, artist, and
        developer based in Nashville, the original homeland of the{' '}
        <a
          href='http://www.naiatn.org/support/naia-circle-of-life-donations/'
          target='_blank'
          rel='no-referrer'
        >
          Cherokee, Chickasaw, Shawnee, and Yuchi tribal nations
        </a>.{' '}
        <Link to='/pronouns'>Their pronouns are he/they</Link> and they are
        passionate about making all spaces, professional and otherwise, safe
        and accessible for women, people of color, trans and nonbinary people,
        disabled people, and neurodivergent people.
      </p>
      <p>
        They jam with{' '}
        <a
          href='https://www.nashvillerollerderby.com/' 
          target='_blank'
          rel='no-referrer'
        >
          Nashville Roller Derby
        </a>{' '}
        under the name{' '}
        <a
          href='https://en.wikipedia.org/wiki/Ellen_Ripley' 
          target='_blank'
          rel='no-referrer'
        >
          R.I.P.ley
        </a>{' '}
        (Rip for short). They are a full-stack Node.js{' '}
        <a
          href='http://nashvillesoftwareschool.com/' 
          target='_blank'
          rel='no-referrer'
        >
          Nashville Software School
        </a>{' '}
        graduate, and they are currently helping schools support their teachers
        and students at{' '}
        <a
          href='https://www.everydaylabs.com/'
          target='_blank'
          rel='no-referrer'
        >
          EveryDay Labs
        </a>
        .
      </p>
    </div>
    <Link className='block' to='/art'>
      <i className='material-icons'>color_lens</i>
      Art
    </Link>
    <Link className='block' to='/code'>
      <i className='material-icons'>code</i>
      Code
    </Link>
    <Link className='block' to='/resume'>
      <i className='material-icons'>assignment_ind</i>
      Resume
    </Link>
    <Link className='block' to='/links'>
      <i className='material-icons'>launch</i>
      Links
    </Link>
    <Link className='block wide' to='/achievements'>
      <i className='material-icons'>stars</i>
      Achievements
    </Link>
  </Page>


export default Home
