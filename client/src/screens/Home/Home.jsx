import React from 'react'
import './Home.css'
import PostDisplay from '../../components/PostDisplay/PostDisplay'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostDisplay />
      </div>
    </Layout>
  )
}

export default Home