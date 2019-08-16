import React from 'react';
import Modal from 'react-modal';
import './NewEntriesPage.css';
import NewEntryForm from '../NewEntryForm/NewEntryForm';
import NewEntry from '../NewEntry/NewEntry';
import EntriesService from '../../services/entries-service';
import Header from '../Header/Header';

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

class NewEntriesPage extends React.Component {
    state = {
        totalEntries: 1,
        entryArray: [],
        showConfirmation: false,
    }

    componentDidMount() {
        const defaultObject = {
            content: '',
            public: true,
            tag_amusement: false,
            tag_awe: false,
            tag_contentment: false,
            tag_gratitude: false,
            tag_inspiration: false,
            tag_joy: false,
            tag_hope: false,
            tag_love: false,
            tag_pride: false,
            tag_serenity: false,
            tag_other: '',            
        };

        for (let i = 0; i < this.state.totalEntries; i++) {
            if (!this.state.entryArray[i]) {
                const newEntryArray = this.state.entryArray;
                newEntryArray[i] = defaultObject;
                this.setState({
                    entryArray: newEntryArray
                })
            }
        }
    }

    addEntry = e => {
        const defaultObject = {
            content: '',
            public: true,
            tag_amusement: false,
            tag_awe: false,
            tag_contentment: false,
            tag_gratitude: false,
            tag_inspiration: false,
            tag_joy: false,
            tag_hope: false,
            tag_love: false,
            tag_pride: false,
            tag_serenity: false,
            tag_other: '',            
        };
        const newEntryArray = this.state.entryArray;
        newEntryArray.push(defaultObject);

        this.setState({
            totalEntries: this.state.totalEntries + 1,
            entryArray: newEntryArray,
        })
    }

    removeEntry = e => {
        if (this.state.totalEntries > 1) {
            this.setState({
                totalEntries: this.state.totalEntries - 1,
                entryArray: this.state.entryArray.slice(0,-1),
            })    
        }
    }

    handleInputChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        const idx = e.target.dataset.index;

        const newEntryArray = this.state.entryArray;
        newEntryArray[idx] = {
            ...newEntryArray[idx],
            [name]: value
        }

        this.setState({
            entryArray: newEntryArray
        })
    }

    handleShowConfirmation = e => {
        this.setState({ showConfirmation: true })
    }

    handleCloseConfirmation = e => {
        this.setState({ showConfirmation: false })
        this.props.history.push('/mygoodthings')
    }

    handleSubmit = e => {
        e.preventDefault();
        const newEntries = this.state.entryArray;
        newEntries.forEach(entry => entry.date_modified = new Date());

        EntriesService.postEntries(newEntries)
            .then(entries => {
                this.setState({
                    entryArray: [],
                });
                this.handleShowConfirmation();
            })
            .catch(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                } else {
                    this.setState({ error: 'Something went wrong! Please try again later.' })
                }
            })
    }

    handleCancel = e => {
        this.props.history.push('/mygoodthings')
    }

    render() {
        const entryComponents = [];
        for (let i = 0; i < this.state.totalEntries; i++) {
            entryComponents.push(<NewEntry key={i} index={i} handleInputChange={this.handleInputChange} />)
        }

        return (
            <main role='main'>
                <Header>Add Good Things</Header>
                <section>
                    <Modal 
                        isOpen={this.state.showConfirmation}
                        onRequestClose={this.handleCloseConfirmation}
                        overlayClassName='modaloverlay'
                        className='modalcontent'
                    >
                        Success! Your new entries have been added to your list of My Good Things.
                        <button className='modalbutton' onClick={this.handleCloseConfirmation}>Okay!</button>                        
                    </Modal>
                </section>
                <section className='bodysection scrollsnap'>
                    <NewEntryForm 
                        addEntry={this.addEntry}
                        removeEntry={this.removeEntry}
                        totalEntries={this.state.totalEntries}
                        handleSubmit={this.handleSubmit}
                        handleCancel={this.handleCancel}
                    >
                        {entryComponents}
                    </NewEntryForm>
                </section>
            </main>
        );
    }
}

export default NewEntriesPage;