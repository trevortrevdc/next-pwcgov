import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi there</h1>
    <p>This is the new Prince William site.</p>
    <p>Now we have to actually build it.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
