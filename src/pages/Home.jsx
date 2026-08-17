import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

const Home = () =>
  <Page id='home' className='lg:p-4'>
    <div className='grow grid grid-cols-1 md:grid-cols-2 gap-4 h-full'>
      <div className='p-4 flex flex-col gap-4 justify-center bg-white dark:bg-black-hl'>
        <p>
          Kenzie Bottoms is an artist and front-end-leaning full-stack
          web developer based in Tennessee, the original homeland of{' '}
          <a
            href='https://naiatn.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            many displaced, still unrecognized Native people
          </a> including the Cherokee, Chickasaw, Shawnee, and Yuchi tribal
          nations.

          Their pronouns are <Link to='/pronouns'>they/he</Link> and they are
          passionate about making more spaces safe and accessible to women,
          people of color, trans and nonbinary people, disabled people, and
          neurodivergent people.
        </p>
        <p>
          They jam with{' '}
          <a
            href='https://www.nashvillerollerderby.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Nashville Roller Derby
          </a>{' '}
          under the name{' '}
          <a
            href='https://en.wikipedia.org/wiki/Ellen_Ripley'
            target='_blank'
            rel='noopener noreferrer'
            className='small-caps'
          >
            R.I.P.ley
          </a>{' '}
          (Rip for short). They are a{' '}
          <a
            href='http://nashvillesoftwareschool.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Nashville Software School
          </a>{' '}
          graduate (cohort 23, Angular and Node.js), and they are currently
          helping schools support their teachers and students at{' '}
          <a
            href='https://www.everydaylabs.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            EveryDay Labs
          </a>
          .
        </p>
      </div>

      <div className='flex flex-row flex-wrap gap-4'>
        {[
          ['Art',
            '/art',
            'color_lens'],
          ['Code',
            '/code',
            'code'],
          ['Resume',
            '/resume',
            'assignment_ind'],
          ['Links',
            '/links',
            'launch'],
          ['Achievements',
            '/achievements',
            'stars']
        ].map(([label,
          link,
          icon]) => 
          <Link
            key={label} 
            to={link}
            className='w-1/3 p-4 grow flex flex-col gap-2 items-center justify-center bg-white dark:bg-black-hl'
          >
            <i className='material-icons text-4xl text-black-hl dark:text-white'>
              {icon}
            </i>
            {label}
          </Link>
        )}
      </div>
    </div>
  </Page>


export default Home
