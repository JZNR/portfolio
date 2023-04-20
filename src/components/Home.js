import React from 'react'
import Navbar from './Navbar';

function Home() {
  return (
    <>
    <section className='home' id='home'>
        <Navbar/>
        <div className='home-content'>
            <p className='home-intro'>Hi &#128075;, I'm a Full-Stack developer based in Lisbon, Portugal.</p>
        </div>
    </section>
    </>
  )
}

export default Home;