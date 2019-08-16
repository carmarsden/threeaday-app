import React from 'react';
import './AboutPage.css';
import Header from '../Header/Header';

function AboutPage() {
    return (
        <main role='main'>
            <Header>the vitamin for your soul</Header>
            <section className='bodysection scrollsnap'>
                <h2 className='section-header'>About 3 Good Things</h2>
                <p className='aboutp'>3 Good Things is based on academic research on mental health, happiness, and resilience. Thinking about <a href="https://www.actionforhappiness.org/take-action/find-three-good-things-each-day" target="_blank" rel="noopener noreferrer">three good things</a> each day is proven to help with mental health.</p>
            </section>
            <section className='bodysection scrollsnap'>
                <h2 className='section-header'>About 3aDay</h2>
                <p className='aboutp'>3aDay is streamlined to help you focus on cultivating gratitude. Log your three good things each day, look back on your own entries, and see what others are grateful for (anonymously).</p>
            </section>        
        </main>
    );    
}

export default AboutPage;