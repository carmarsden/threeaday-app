import React from 'react';
import './PrivateEntriesPage.css';
import STORE from '../dummystore';

class PrivateEntriesPage extends React.Component {
    handleAddEntries = e => {
        this.props.history.push('/addentries')
    }

    render() {
        const currentuser = 1;
        const entrydisplay = STORE
            .filter(entry => entry.user_id === currentuser)
            .sort(function(a, b) {
                return new Date(b.date_modified) - new Date(a.date_modified)
            })
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
                    <h1>My Good Things</h1>
                </header>
                <section className='aboutsection'>
                    <button 
                        type='button' 
                        className='addbutton'
                        onClick={this.handleAddEntries}
                    >
                        <h2>Add Entries</h2>
                    </button>
                </section>
                <section className='aboutsection'>
                    <ul>
                        {entrydisplay}
                    </ul>
                </section>
            </main>
        );
    }
}

export default PrivateEntriesPage;