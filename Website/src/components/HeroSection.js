import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>THOMAS T. C. VU</h1>
            <p>Computer Engineer</p>
            <div className="hero-btns">
                <Button to='/aboutMe' className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    About Me
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    VIDEOS <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
