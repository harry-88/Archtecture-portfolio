import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='footer'>
      <div class="d-flex flex-wrap justify-content-between container pt-3">
        <div>M. Fraz</div>
        <div style={{fontSize:'23px'}}><FaFacebook /> <FaInstagram /> <FaLinkedin /></div>
        <div>farazjamil12@gmail.com</div>
      </div>
    </div>
  )
}
