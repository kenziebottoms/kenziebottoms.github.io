import React from 'react'

import Page from '../components/Page'
import Job from '../components/Job'
import '../styles/pages/Resume.scss'

/*eslint { 'max-len': 0 }*/

const Resume = () =>
  <Page id='resume'>
    <div className='grow'>
      <div id='green-border' />
      <h1 className='lane-1'>Full-time</h1>
      <h1 className='lane-2'>Freelance</h1>
      <div className='year'>2026</div>
      <Job
        classes='lane-1 length-8'
        company='EveryDay Labs'
        jobTitle='Lead React Developer'
        startDate='February 2022'
        description={[
          'Full ownership of all front-end development including planning, implementation, testing, and support of client-facing features for flagship attendance and communications platform using React and TypeScript.',
          'Reusable custom input components for use with React Hook Form that provide type safety, validation, and keyboard accessibility.',
          'An email and PDF builder made with Tiptap, complete with text styling, links, lists, pre-built content blocks, image uploads, and QR code insertion.',
          'Incremental conversion of JavaScript React codebase into TypeScript.',
          'Student search tool with 20+ individually configurable filter types using type-safe generics.',
          'Cache management using GraphQL and Apollo, favoring direct cache updates over refetching.',
          'Automatic build-and-test CI/CD pipeline using Docker, AWS (ECR), and CircleCI.',
          'Controlled feature rollouts and feature targeting using LaunchDarkly\'s feature flags.',
          'Bug triage and resolution using DataDog\'s session recordings and error aggregation.',
          'Integration with Auth0 and FrontEgg for multi-tenant user account management, JWT authentication, and single sign-on.',
          'Colorblind-safe data visualization dashboard using Apex Charts.',
        ]}
        tech={[
          'Git',
          'React',
          'TypeScript',
          'Docker',
          'AWS',
          'GraphQL & Apollo',
          'Webpack',
          'Nginx',
          'Jest',
          'TailwindCSS',
          'Terraform',
          'CircleCI',
          'Tiptap',
          'React Hook Form'
        ]}
      />
      <div className='year'>2025</div>
      <div className='year'>2024</div>
      <div className='year'>2023</div>
      <Job
        classes='lane-2 length-6 align-self-center'
        company='Galactic Polymath'
        jobTitle='React Developer'
        startDate='November 2020'
        endDate='April 2023'
        description={[
          'A directory of modular lesson plans.',
          'A responsive, SEO-supportive Next.js website.'
        ]}
        tech={[
          'Git',
          'React',
          'Next.js',
          'Strapi',
          'SCSS',
        ]}
      />
      <div className='year'>2022</div>
      <Job
        classes='lane-1 length-3'
        company='Celero Commerce'
        jobTitle='Lead React Developer'
        startDate='June 2020'
        endDate='February 2022'
        description={[
          'Feature development and maintenance of customer management dashboard built in React.',
          'Asynchronous, event-driven state management with Redux and Redux-Saga.',
          'Drag-and-drop scheduling tools for managing multiple fieldworkers.',
          'Incremental continuous improvement of a large legacy codebase in active development, including strategic migration away from unreliable dependencies.',
          'Automated tests using Jest for components and business logic.',
        ]}
        tech={[
          'Git',
          'React',
          'Redux',
          'Jest',
          'Webpack',
          'SCSS',
          'Azure DevOps',
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
          'Searchable student directory built in React on a Node.js API featuring sortable tables, form-driven data entry, and report generation.',
          'Custom reusable responsive WordPress themes using jQuery, Bootstrap, and SCSS.',
          'Interactive, filterable map app with AWS S3 file storage and SendGrid email integrations built in Leaflet and React on an Elixir/Phoenix API.',
          'Music directory app built in Vue.js on an Elixir/Phoenix API.',
          'Automated testing, QA processes, and bug fixes for large legacy Java codebase.',
          'Balancing the needs and priorities of multiple simultaneous projects in an agency environment.',
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
          'SCSS',
          'Java',
        ]}
      />
      <div className='placeholder lane-2' />
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
            '.',
          ],
        ]}
        tech={[
          'HTML',
          'SCSS',
          'jQuery',
          'JavaScript',
          'WordPress',
          'PHP',
        ]}
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
          'Schema design, database organization, and API construction.',
        ]}
        tech={[
          'Git',
          'JavaScript',
          'jQuery',
          'NPM',
          'Node.js & Express',
          'AngularJS',
          'SCSS',
          'HTML/HAML',
          'Grunt/Gulp',
          'Mocha & Chai testing',
          'MySQL',
        ]}
      />
      <Job
        classes='lane-2 align-self-center length-1'
        company='Vantedge'
        jobTitle='Freelance Developer'
        startDate='January 2018'
        endDate='August 2018'
        description={[
          'Design and implementation of custom archive pages.', 'Optimization, modification, and maintenance of a custom WordPress theme.',
        ]}
        tech={[
          'HTML',
          'jQuery',
          'JavaScript',
          'WordPress',
          'PHP'
        ]}
      />
      <div className='year'>2018</div>
      <Job
        classes='lane-2 length-1'
        company='IASIS Healthcare'
        jobTitle='Freelance Developer'
        startDate='June 2017'
        endDate='September 2017'
        description={[
          'Repair and optimization of existing WordPress sites.', 'Design and implementation of custom landing pages.',
        ]}
        tech={['HTML',
          'jQuery',
          'JavaScript',
          'SCSS',
          'WordPress',
          'PHP']}
      />

      <Job
        classes='lane-1 length-3'
        company='G/O Digital'
        jobTitle='Web Maintenance Specialist'
        startDate='January 2016'
        endDate='April 2017'
        description={[
          'Implementation and maintenance of custom responsive WordPress themes using HTML, SCSS, and JavaScript.',
          'Management, organization, and facilitation of inter-server migration of 100+ WordPress sites using Python scripting.',
          'DNS and domain name configuration, troubleshooting, and management for 100+ sites.',
          'Service-minded customer correspondence regarding content management.',
        ]}
        tech={[
          'Python',
          'HTML',
          'jQuery',
          'SCSS',
          'WordPress',
          'PHP',
          'ExpressionEngine',
          'Git',
        ]}
      />
      <div className='year'>2017</div>
      <div className='year'>2016</div>
      <Job
        classes='lane-1 length-2'
        company='Acxiom Corporation'
        jobTitle='Digital Content Specialist Intern'
        startDate='July 2015'
        endDate='December 2015'
        description={[
          'Construction, modification, and QA of HTML email marketing templates.',
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
          'Stripe e-commerce subscriptions and payments with jQuery/Ajax.',
        ]}
        tech={[
          'HTML',
          'CSS',
          'PHP',
          'MySQL',
          'JavaScript',
          'jQuery',
          'Stripe e-Commerce',
        ]}
      />
      <Job
        classes='lane-1 align-self-end length-1'
        company='Centre College IT Services'
        jobTitle='Junior Developer'
        startDate='September 2014'
        endDate='January 2015'
        description={[
          'Construction, modification, and enhancement of student dashboard features.',
        ]}
        tech={['C#']}
      />
      <div className='year'>2014</div>
      <div className='year'>2013</div>
    </div>
  </Page>


export default Resume
