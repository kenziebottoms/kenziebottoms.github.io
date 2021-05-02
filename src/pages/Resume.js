import React from 'react'

import Page from '../components/Page'
import Job from '../components/Job'
import '../styles/pages/Resume.scss'

/*eslint { 'max-len': 0 }*/

const Resume = () => 
  <Page id='resume'>
    <div id='green-border' />
    <h1 className='lane-1'>Full-time</h1>
    <h1 className='lane-2'>Freelance</h1>
    <Job
      classes='lane-1 length-2'
      company='Celero Commerce'
      jobTitle='React Developer'
      startDate='June 2020'
      description={[
        'A dynamic dashboard for customer management using Redux and Redux-Saga.',
        'A dynamic customer experience based on persistent user-defined settings.',
        'Automated testing for components, sagas, and logic.',
        'Establishment and documentation of new best practices for a large legacy codebase.'
      ]}
      tech={[
        'Git',
        'React',
        'React Redux',
        'Redux-Saga',
        'Jest',
        'Webpack',
        'CSS/SCSS'
      ]}
    />
    <Job
      classes='lane-2 length-1'
      company='Galactic Polymath'
      jobTitle='React Developer'
      startDate='November 2020'
      description={[
        'A directory of lesson plans that can be modularly assembled from sections.'
      ]}
      tech={[
        'Git',
        'React',
        'Strapi',
        'CSS/SCSS'
      ]}
    />
    <div className='year'>2021</div>
    <Job
      classes='lane-1 length-4'
      company='FortyAU'
      jobTitle='Software Developer'
      startDate='July 2018'
      endDate='June 2020'
      description={[
        'Dynamic single-page React app built on a Node.js API, featuring sortable dynamic data tables and form-driven data input.',
        'Dynamic single-page Vue.js app built on an Elixir/Phoenix API.',
        'Responsive, interactive custom WordPress themes using jQuery, Bootstrap, and SCSS, featuring secondary custom user dashboard functionality.',
        'Interactive, filterable map views on an Elixir/Phoenix app using Leaflet and React.',
        'AWS S3 file storage and SendGrid email integration with an Elixir/Phoenix app.',
        'Automated testing, QA processes, and bug fixes for large legacy Java codebase.'
      ]}
      tech={[
        'Git',
        'React',
        'Vue',
        'WordPress',
        'Elixir & Phoenix',
        'JavaScript',
        'Webpack',
        'Leaflet',
        'AWS S3',
        'SendGrid',
        'CSS/SCSS',
        'Java',
        'JUnit'
      ]}
    />
    <div className='year'>2020</div>
    <div className='placeholder' />
    <div className='year'>2019</div>
    <Job
      classes='align-self-end lane-2 length-1'
      company='MERGE Digital'
      jobTitle='Freelance Developer'
      startDate='July 2018'
      endDate='August 2018'
      description={[
        [
          'Responsive custom WordPress themes built with ',
          <a
            key={1} href='https://roots.io/'
            target='blank'
          >
            Roots.io
          </a>,
          '.'
        ]
      ]}
      tech={['HTML',
        'CSS/SCSS',
        'jQuery',
        'WordPress',
        'PHP']}
    />
    <Job
      classes='lane-1 length-1'
      company='Nashville Software School'
      jobTitle='Apprentice Software Developer'
      startDate='November 2017'
      endDate='May 2018'
      description={[
        'Source control and collaboration with Git & GitHub.',
        'Collaboration with GitHub projects and Trello using Agile/Scrum processes.',
        'Responsive HTML & CSS with and without preprocessors like Sass and Haml as well as frameworks like Bootstrap and Materialize.',
        'Single-page applications using JavaScript, jQuery, and AngularJS.',
        'Task management using Grunt with JSHint, Browserify, SCSS, etc.',
        'Server-side, test-driven Node development using Express, Chai, and Mocha.',
        'Schema design, database organization, and API construction.'
      ]}
      tech={[
        'Git',
        'JavaScript',
        'jQuery',
        'NPM',
        'Node.js & Express',
        'AngularJS',
        'CSS/SCSS',
        'HTML/HAML',
        'Grunt/Gulp',
        'Mocha & Chai testing',
        'MySQL'
      ]}
    />
    <Job
      classes='lane-2 align-self-center length-1'
      company='Vantedge'
      jobTitle='Freelance Developer'
      startDate='January 2018'
      endDate='August 2018'
      description={[
        'Design and implementation of custom archive pages.', 'Optimization, modification, and maintenance of a custom WordPress theme.'
      ]}
      tech={['HTML',
        'jQuery',
        'WordPress',
        'PHP']}
    />
    <div className='year'>2018</div>
    <Job
      classes='lane-2 length-1'
      company='IASIS Healthcare'
      jobTitle='Freelance Developer'
      startDate='June 2017'
      endDate='September 2017'
      description={[
        'Repair and optimization of existing WordPress sites.', 'Design and implementation of custom landing pages.'
      ]}
      tech={['HTML',
        'jQuery',
        'CSS/SCSS',
        'WordPress',
        'PHP']}
    />

    <Job
      classes='lane-1 length-2'
      company='G/O Digital'
      jobTitle='Web Development Maintenance Specialist'
      startDate='September 2016'
      endDate='April 2017'
      description={[
        'Responsive custom WordPress themes using HTML, SCSS, and JavaScript.',
        'Organization and facilitation of inter-server migration of 100+ sites.',
        'Direct customer correspondence regarding site maintenance and updates.',
        'Maintenance, repair, and modification of custom WordPress themes.',
        'Server organization and maintenance using Python scripting.'
      ]}
      tech={[
        'Python',
        'HTML',
        'jQuery',
        'CSS/SCSS',
        'WordPress',
        'PHP',
        'ExpressionEngine',
        'Git'
      ]}
    />
    <div className='year'>2017</div>
    <Job
      classes='lane-1 length-1'
      company='G/O Digital'
      jobTitle='Web Development Associate'
      startDate='January 2016'
      endDate='September 2016'
      description={[
        'Maintenance, repair, and modification of custom WordPress themes.'
      ]}
      tech={[
        'HTML',
        'jQuery',
        'CSS/SCSS',
        'WordPress',
        'PHP',
        'ExpressionEngine',
        'Git'
      ]}
    />
    <div className='year'>2016</div>
    <Job
      classes='lane-1 length-2'
      company='Acxiom Corporation'
      jobTitle='Digital Content Specialist Intern'
      startDate='July 2015'
      endDate='December 2015'
      description={[
        'Construction, modification, and QA of HTML email marketing templates.'
      ]}
      tech={['HTML',
        'JavaScript',
        'Photoshop']}
    />
    <div className='year'>2015</div>
    <Job
      classes='lane-2 length-5'
      company='Hereit.org'
      title='Freelance Developer'
      startDate='June 2013'
      endDate='May 2015'
      description={[
        'Custom HTML5 audio player using jQuery.',
        'Repair and expansion of user-facing and administrative features with PHP and MySQL.',
        'Implementation of a front-end redesign with CSS3.',
        'Stripe e-commerce subscriptions and payments with jQuery/Ajax.'
      ]}
      tech={[
        'HTML',
        'CSS',
        'PHP',
        'MySQL',
        'JavaScript',
        'jQuery',
        'Stripe e-Commerce'
      ]}
    />
    <Job
      classes='lane-1 align-self-end length-1'
      company='Centre College IT Services'
      jobTitle='Junior Developer'
      startDate='September 2014'
      endDate='January 2015'
      description={[
        'Construction, modification, and enhancement of student dashboard features.'
      ]}
      tech={['C#']}
    />
    <div className='year'>2014</div>
    <div className='year'>2013</div>
  </Page>


export default Resume
