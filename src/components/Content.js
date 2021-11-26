import React from 'react'
import { Routes, Route } from 'react-router-dom'

import '../styles/components/Content.scss'

import Home from '../pages/Home'
import Art from '../pages/Art'
import ArtPost from '../pages/ArtPost'
import Pronouns from '../pages/Pronouns'
import Code from '../pages/Code'
import CodePost from '../pages/CodePost'
import Resume from '../pages/Resume'
import Achievements from '../pages/Achievements'
import Links from '../pages/Links'
import JsDocTypes from '../pages/JsDocTypes'

const Content = () => 
  <section id='content'>
    <Routes>
      <Route
        exact path='/'
        element={<Home />}
      />
      <Route
        exact path='/art'
        element={<Art />}
      />
      <Route path='/art/:hash' element={<ArtPost />} />
      <Route
        exact path='/code'
        element={<Code />}
      />
      <Route path='/code/:hash' element={<CodePost />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/achievements' element={<Achievements />} />
      <Route path='/links' element={<Links />} />
      <Route path='/pronouns' element={<Pronouns />} />
      <Route path='/cheatsheets/jsdoc' element={<JsDocTypes />} />
    </Routes>
  </section>

export default Content
