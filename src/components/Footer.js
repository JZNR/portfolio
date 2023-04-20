import React from 'react'

function Footer() {
  return (
    <>
        <div className="footer" id='contact'>
            <h1>Get <span className="white-text">in Touch.</span></h1>
            <p>So we can talk more about...</p>
            <div className='cta-button'>
                <a href="https://www.linkedin.com/in/jose-zuccon/" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1682013099/projects/LI-Logo_vwzpuv.png" alt="" id="in-logo"/></a>
                <a href="mailto:joseff.zuccon@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/duuwrswcs/image/upload/v1682013495/projects/unnamed_kmeptd.png" alt="" id="gmail-logo"/></a>
            </div>
            <p className='footer-sign'>Made with <span style={{color: 'red', width: '10px'}}>&#x2763;</span> by José Zuccon.</p>
        </div>
    </>
  )
}

export default Footer