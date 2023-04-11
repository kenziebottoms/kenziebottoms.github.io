import React from 'react'

import Page from '../components/Page'
import Feat from '../elements/Feat'

import '../styles/pages/Achievements.scss'

const feats = [
  {
    title: 'MVJ',
    icon: 'military_tech',
    description: [
      'Win Most Valuable ',
      <a
        key={1}
        href='https://en.wikipedia.org/wiki/Roller_derby#Basics_of_play'
        target='_blank' 
        rel='noopener noreferrer'
      >
        Jammer
      </a>,
      ' in a derby bout.',
    ],
  },
  {
    title: '1,667 Words A Day',
    icon: 'chrome_reader_mode',
    description: [
      'Beat ',
      <a
        key={1}
        href='https://nanowrimo.org/about'
        target='_blank' 
        rel='noopener noreferrer'
      >
        NaNoWriMo
      </a>,
      '.',
    ],
  },
  {
    title: 'Color Coded',
    icon: 'brush',
    description: 'Write a custom color theme for a text editor.',
  },
  {
    title: 'Hacker Mode',
    icon: 'keyboard',
    description: [
      'Write 20 aliases for ',
      <a
        key={1}
        href='https://ohmyz.sh/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Zsh
      </a>,
      '.',
    ],
  },
  {
    title: 'Bug Box',
    icon: 'yard',
    description: [
      'Build a ',
      <a
        key={1}
        href='https://en.wikipedia.org/wiki/Bioactive_terrarium'
        target='_blank'
        rel='noopener noreferrer'
      >
        bioactive enclosure
      </a>,
      ' for a pet.'
    ]
  },
  {
    title: 'Bulletproof',
    icon: 'security',
    description: 'Write 100% test coverage for a unit of code.',
  },
  {
    title: 'Jam On',
    icon: 'stars',
    description: [
      'Score 20 points in ',
      <a
        key={1}
        href='https://en.wikipedia.org/wiki/Roller_derby#Jams'
        target='_blank'
        rel='noopener noreferrer'
      >
        one jam
      </a>,
      '.',
    ],
  },
  {
    title: 'Finders Keepers',
    icon: 'healing',
    description: 'Find a bug by writing automated tests.',
  },
  {
    title: 'Goodwill Hunting',
    icon: 'toys',
    description: [
      'Earn 5000 points in the ',
      <a
        key={1}
        href='https://www.gish.com/'
        target='_blank' 
        rel='noopener noreferrer'
      >
        Greatest International Scavenger Hunt
      </a>,
      '.',
    ],
  },
  {
    title: 'Voila',
    icon: 'cast',
    description: 'Demo a feature you built for a client.',
  },
  {
    title: 'It\'s Pronounced "Oiler"',
    icon: 'functions',
    description: [
      'Solve 25 problems on ',
      <a
        key={1} 
        href='https://projecteuler.net/about'
        target='_blank' 
        rel='noopener noreferrer'
      >
        Project Euler
      </a>,
      '.',
    ],
  },
  {
    title: 'Perfectionist',
    icon: 'access_time',
    description: 'Spend more than 50 hours on a single piece of art.',
  },
  {
    title: 'Mother May I?',
    icon: 'merge_type',
    description: 'Write 100 pull requests.',
  },
  {
    title: 'Sweat It Out',
    icon: 'forward_10',
    description: 'Skate 10 miles in one go.',
  },
  {
    title: 'Buckle Up',
    icon: 'send',
    description: 'Merge 100 branches into master.',
  },
  {
    title: 'Pushover',
    icon: 'assignment_turned_in',
    description: 'Approve 50 pull requests.',
  },
  {
    title: 'Shrug Emoji',
    icon: 'tag_faces',
    description: 'Create 30 Slack emojis.',
  },
]

const Achievements = () => 
  <Page id='achievements'>
    <h1>Achievements</h1>
    {feats.map((feat, i) => 
      <Feat
        key={i}
        title={feat.title}
        description={feat.description}
        icon={feat.icon}
      />
    )}
  </Page>


export default Achievements
