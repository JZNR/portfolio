import React from 'react'

function About() {
  return (
    <>
        <div className='about' id='about'>
            <div className='about-wrapper'>
                <div className="about-content">
                  <h1>About Me</h1>
                  <p>I am a Full-Stack developer who is passionate about <span className="white-text">
                    creating beautiful
                    and joyful digital experiences.
                     Besides coding, I love playing the guitar, sports and travelling.
                  </span> </p>
                </div>
                 <div className='about-horizontal'>
                    <img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1681989690/projects/pexels-isaac-weatherly-2156327_yv2w96.jpg" alt="" />
                 </div>
                 <div className='about-vertical'>
                    <img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1681989696/projects/pexels-pixabay-46798_bhecjz.jpg" alt="" />
                    <img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1681989695/projects/pexels-alfonso-escalante-2533090_z1o85x.jpg" alt="" />
                 </div>
            </div>
        </div>
    </>
  )
}

export default About