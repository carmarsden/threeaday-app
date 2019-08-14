import React from 'react';
import './NewEntriesPage.css';
import NewEntryForm from '../NewEntryForm/NewEntryForm';
import NewEntry from '../NewEntry/NewEntry';
import EntriesService from '../../services/entries-service';

class NewEntriesPage extends React.Component {
    state = {
        totalEntries: 1,
        entryArray: [],
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

    handleSubmit = e => {
        e.preventDefault();
        const newEntries = this.state.entryArray;
        newEntries.forEach(entry => entry.date_modified = new Date());

        EntriesService.postEntries(newEntries)
            .then(entries => {
                this.setState({
                    entryArray: [],
                })
                this.props.history.push('/mygoodthings')
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
                <header role='banner' className='aboutheader'>
                    <h1>Add Good Things</h1>
                </header>
                <section className='aboutsection'>
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