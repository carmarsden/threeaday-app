import React from 'react';
import './NewEntriesPage.css';
import NewEntryForm from '../NewEntryForm/NewEntryForm';
import NewEntry from '../NewEntry/NewEntry';

class NewEntriesPage extends React.Component {
    state = {
        totalEntries: 1,
    }

    addEntry = e => {
        this.setState({
            totalEntries: this.state.totalEntries + 1,
        })
    }

    removeEntry = e => {
        if (this.state.totalEntries > 1) {
            this.setState({
                totalEntries: this.state.totalEntries - 1,
            })    
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        window.alert('You submitted the form!');
        this.props.history.push('/mygoodthings')
    }

    handleCancel = e => {
        this.props.history.push('/mygoodthings')
    }

    render() {
        const entryComponents = [];
        for (let i = 0; i < this.state.totalEntries; i++) {
            entryComponents.push(<NewEntry key={i} index={i} />)
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