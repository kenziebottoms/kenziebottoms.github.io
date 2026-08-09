import React from 'react'

import Page from '../components/Page'
import TileGrid from '../components/TileGrid'

import restDb from '../services/restDB'

const Code = () => 
  <Page id='code'>
    <TileGrid fetchData={restDb.allCodePosts} linkHead='code' />
  </Page>


export default Code
