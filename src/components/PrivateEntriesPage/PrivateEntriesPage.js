import React from 'react';
import './PrivateEntriesPage.css';
import EntriesService from '../../services/entries-service';
import PrivateEntry from '../PrivateEntry/PrivateEntry';
import Header from '../Header/Header';

class PrivateEntriesPage extends React.Component {
    state = {
        entries: [],
        error: null,
    }

    componentDidMount() {
        EntriesService.getByUser()
            .then(res => this.setState({ entries: res }))
            .catch(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                } else {
                    this.setState({ error: 'Something went wrong! Please try again later.' })
                }
            })
    }

    handleAddEntries = e => {
        this.props.history.push('/addentries')
    }

    render() {
        const error = this.state.error;
        const entrydisplay = this.state.entries
            .map((entry, idx) => <PrivateEntry entry={entry} key={idx} />)
        ;

        return (
            <main role='main'>
                <Header>My Good Things</Header>
                <section className='bodysection scrollsnap'>
                    <div role='alert'>
                        <span className='formerror'>{error}</span>
                    </div>
                    <button 
                        type='button' 
                        className='addbutton'
                        onClick={this.handleAddEntries}
                    >
                        <h2>Add Entries</h2>
                    </button>
                </section>
                <section className='bodysection scrollsnap'>
                    <ul>
                        {entrydisplay}
                    </ul>
                </section>
            </main>
        );
    }
}

export default PrivateEntriesPage;