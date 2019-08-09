import React from 'react';
import './NewEntryForm.css';

class NewEntryForm extends React.Component {

    render() {
        let removeEntryDisabled = this.props.totalEntries > 1 ? false : true;

        return (
            <form className='newentries-form' onSubmit={this.props.handleSubmit}>
                {this.props.children}
                <div>
                    <button 
                        type='button'
                        onClick={this.props.removeEntry}
                        disabled={removeEntryDisabled}
                    >
                        Remove Entry
                    </button>
                    <button type='button' onClick={this.props.addEntry}>Add Another Entry</button>
                </div>
                <button type='button' onClick={this.props.handleCancel}>Cancel</button>
                <button type='submit'>Submit</button>
            </form>

        );
    }
}

export default NewEntryForm;