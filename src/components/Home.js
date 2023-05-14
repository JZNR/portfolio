import React from 'react'
import Navbar from './Navbar';

function Home() {
  return (
    <>
    <section className='home' id='home'>
        <div className='home-content'>
        <Navbar/>
            <div className='intro-container'>
              <p className='home-intro'>Hi &#128075;, I'm a Full-Stack developer based in Lisbon, Portugal.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home;