import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Header from '../Header/Header';

function AboutPage() {
    return (
        <main role='main'>
            <Header>the vitamin for your soul</Header>
            <section className='bodysection'>
                <h2 className='section-header aboutheader'>About 3 Good Things</h2>
                <p className='aboutp'>"3 Good Things" is based on academic research on mental health, happiness, and resilience. Thinking about <a href="https://www.actionforhappiness.org/take-action/find-three-good-things-each-day" target="_blank" rel="noopener noreferrer">three good things</a> each day is proven to help with mental health.</p>
                <h2 className='section-header aboutheader'>About 3aDay</h2>
                <p className='aboutp'>3aDay is streamlined to help you focus on cultivating gratitude. Log your three good things each day, look back on your own entries, and get inspired by seeing what others are grateful for.</p>
            </section>
            <section className='bodysection'>
                <h2 className='section-header aboutheader'>Get Started</h2>
                <p className='aboutp'>Ready to improve your mental health by finding the good things in life?</p>
                <p className='aboutp'>Get started by <Link to='/register'>creating an account</Link>.</p>
                <p className='aboutp'>Just want to take a look? <Link to='/login'>Log in</Link> with username 'demo', password 'demo'.</p>
            </section> 
        </main>
    );    
}

export default AboutPage;