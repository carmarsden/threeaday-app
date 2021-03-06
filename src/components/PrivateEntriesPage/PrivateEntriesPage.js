import React from 'react';
import './PrivateEntriesPage.css';
import EntriesService from '../../services/entries-service';
import PrivateEntry from '../PrivateEntry/PrivateEntry';
import Header from '../Header/Header';

class PrivateEntriesPage extends React.Component {
    state = {
        entries: [],
        loading: true,
        error: null,
    }

    componentDidMount() {
        document.getElementById('primaryfocus').scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    
        EntriesService.getByUser()
            .then(res => this.setState({ 
                entries: res,
                loading: false, 
            }))
            .catch(res => {
                if (res.error) {
                    this.setState({ 
                        error: res.error,
                        loading: false,
                    })
                } else {
                    this.setState({ 
                        error: 'Something went wrong! Please try again later.',
                        loading: false,
                    })
                }
            })
    }

    handleAddEntries = e => {
        this.props.history.push('/addentries')
    }

    render() {
        const error = this.state.error;
        const loadingdisplay = this.state.loading ? <span className='formerror'>Loading your Good Things...</span> : '';
        const entrydisplay = this.state.entries
            .map((entry, idx) => <PrivateEntry entry={entry} key={idx} />)
        ;

        return (
            <main role='main'>
                <Header>My Good Things</Header>
                <section className='bodysection' id='primaryfocus'>
                    <button 
                        type='button' 
                        className='addbutton'
                        onClick={this.handleAddEntries}
                    >
                        Add New Good Things!
                    </button>
                    <p>Users see the most benefit from consistently noticing three good things, every day.</p>
                    <p>Try to get in a 3aDay Daily Habit!</p>
                </section>
                <section className='bodysection'>
                    <div role='alert'>
                        <span className='formerror'>{error}</span>
                        {loadingdisplay}
                    </div>
                    <ul className='privateentries-list'>
                        {entrydisplay}
                    </ul>
                </section>
            </main>
        );
    }
}

export default PrivateEntriesPage;