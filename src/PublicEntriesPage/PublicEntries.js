import React from 'react';
import './PublicEntries.css';
import STORE from '../dummystore';

class PublicEntries extends React.Component {
    render() {
        const entrydisplay = STORE
            .filter(entry => entry.public === true)
            .sort(function(a, b) {
                return new Date(b.date_modified) - new Date(a.date_modified)
            })
            .slice(0,10)
            .map((entry, i) => {
                return (
                    <li key={i}>
                        {entry.content} <span className='entriesdate'>{entry.date_modified.slice(0,10)}</span>
                    </li>
                )
            })
        ;

        return (
            <main role='main'>
                <header role='banner' className='aboutheader'>
                    <h1>3aDay</h1>
                    <h2>Good Things from the community</h2>
                </header>
                <section className='aboutsection'>
                    <ul>
                        {entrydisplay}
                    </ul>
                </section>
            </main>
        );
    }
}

export default PublicEntries;