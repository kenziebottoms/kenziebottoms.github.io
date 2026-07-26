import React from 'react'

import Page from '../components/Page'
import Feat from '../elements/Feat'

import '../styles/pages/Achievements.scss'

const Achievements = () =>
  <Page id='achievements'>
    <h1>Achievements</h1>
    <Feat
      title='MVJ'
      icon='military_tech'
    >
      Win Most Valuable{' '}
      <a
        key={1}
        href='https://en.wikipedia.org/wiki/Roller_derby#Basics_of_play'
        target='_blank'
        rel='noopener noreferrer'
      >
        Jammer
      </a> in a derby bout.
    </Feat>
    <Feat
      title='Mater Magic'
      icon='agriculture'
    >
      Grow 100 tomatoes in a season.
    </Feat>
    <Feat
      title='1,667 Words A Day'
      icon='chrome_reader_mode'
    >
      Beat{' '}
      <a
        href='https://nanowrimo.org/about'
        target='_blank'
        rel='noopener noreferrer'
      >
        NaNoWriMo
      </a>.
    </Feat>
    <Feat
      title='1,667 Words A Day'
      icon='chrome_reader_mode'
    >
      Beat{' '}
      <a
        href='https://nanowrimo.org/about'
        target='_blank'
        rel='noopener noreferrer'
      >
        NaNoWriMo
      </a>.
    </Feat>
    <Feat
      title='Color Coded'
      icon='brush'
    >
      Write 5 custom color themes for a text editor.
    </Feat>
    <Feat
      title='Hacker Mode'
      icon='keyboard'
    >
      Write 50 aliases for{' '}
      <a
        href='https://ohmyz.sh/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Zsh
      </a>.
    </Feat>
    <Feat
      title='Bug Box'
      icon='yard'
    >
      Build a{' '}
      <a
        key={1}
        href='https://en.wikipedia.org/wiki/Bioactive_terrarium'
        target='_blank'
        rel='noopener noreferrer'
      >
        bioactive enclosure
      </a> for a pet.
    </Feat>
    <Feat
      title='Bulletproof'
      icon='security'
    >
      Write 100% test coverage for a unit of code.
    </Feat>
    <Feat
      title='Jam On'
      icon='stars'
    >
      Score 20 points in{' '}
      <a
        href='https://en.wikipedia.org/wiki/Roller_derby#Jams'
        target='_blank'
        rel='noopener noreferrer'
      >
        one jam
      </a>.
    </Feat>
    <Feat
      title='Finders Keepers'
      icon='healing'
    >
      Find a bug by writing automated tests.
    </Feat>
    <Feat
      title='Goodwill Hunting'
      icon='toys'
    >
      Earn 5000 points in the{' '}
      <a
        href='https://www.gish.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Greatest International Scavenger Hunt
      </a>.
    </Feat>
    <Feat
      title='Voila'
      icon='cast'
    >
      Demo a feature you built for a client.
    </Feat>
    <Feat
      title={'It\'s Pronounced "Oiler"'}
      icon='functions'
    >
      Solve 25 problems on{' '}
      <a
        key={1}
        href='https://projecteuler.net/about'
        target='_blank'
        rel='noopener noreferrer'
      >
        Project Euler
      </a>.
    </Feat>
    <Feat
      title='Perfectionist'
      icon='access_time'
    >
      Spend more than 80 hours on a single piece of art.
    </Feat>
    <Feat
      title='Mother May I?'
      icon='merge_type'
    >
      Write 300 pull requests.
    </Feat>
    <Feat
      title='Sweat It Out'
      icon='forward_10'
    >
      Skate 10 miles in one go.
    </Feat>
    <Feat
      title='Buckle Up'
      icon='send'
    >
      Merge 300 branches into master.
    </Feat>
    <Feat
      title='Pushover'
      icon='assignment_turned_in'
    >
      Approve 200 pull requests.
    </Feat>
    <Feat
      title='Shrug Emoji'
      icon='tag_faces'
    >
      Create 30 Slack emojis.
    </Feat>
  </Page>


export default Achievements
