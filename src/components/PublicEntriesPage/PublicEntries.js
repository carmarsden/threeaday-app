import React from 'react';
import './PublicEntries.css';
import EntriesService from '../../services/entries-service';
import Header from '../Header/Header';

class PublicEntries extends React.Component {
    state = {
        entries: [],
        error: null,
    }

    componentDidMount() {
        EntriesService.getSomePublic(10)
            .then(res => this.setState({ entries: res }))
            .catch(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                } else {
                    this.setState({ error: 'Something went wrong! Please try again later.' })
                }
            })
    }

    render() {
        const error = this.state.error;
        const entrydisplay = this.state.entries
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
                <Header>Good Things from the community</Header>
                <section className='bodysection scrollsnap'>
                    <div role='alert'>
                        <span className='formerror'>{error}</span>
                    </div>
                    <ul>
                        {entrydisplay}
                    </ul>
                </section>
            </main>
        );
    }
}

export default PublicEntries;