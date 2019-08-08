import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <main role='main'>
            <header role='banner' className='aboutheader'>
                <h1>3aDay</h1>
                <h2>the vitamin for your soul</h2>
            </header>
            <section className='aboutsection'>
                <h3>About 3 Good Things</h3>
                <p className='aboutp'>3 Good Things is based on academic research on mental health, happiness, and resilience. Thinking about <a href="https://www.actionforhappiness.org/take-action/find-three-good-things-each-day" target="_blank" rel="noopener noreferrer">three good things</a> each day is proven to help with mental health.</p>
            </section>
            <section className='aboutsection'>
                <h3>About 3aDay</h3>
                <p className='aboutp'>3aDay is streamlined to help you focus on cultivating gratitude. Log your three good things each day, look back on your own entries, and see what others are grateful for (anonymously).</p>
            </section>        
        </main>
    );    
}

export default AboutPage;