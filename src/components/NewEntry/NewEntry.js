import React from 'react';
import './NewEntry.css';

class NewEntry extends React.Component {

    render() {
        const idx = this.props.index;

        return (
            <fieldset data-index={idx}>
                <legend><h2 className='section-header'>New Good Thing</h2></legend>
                <div>
                    <textarea 
                        name='content'
                        id='content'
                        rows='3'
                        cols='50'
                        data-index={idx} 
                        onChange={e => this.props.handleInputChange(e)}
                        required 
                    />
                </div>
                <div>
                    <label>
                        <input 
                            type="checkbox" 
                            name='public' 
                            id='public' 
                            data-index={idx} 
                            onChange={e => this.props.handleInputChange(e)}
                            defaultChecked 
                        /> Share publicly?
                    </label>
                    <p className="form-explanation">Public entries are posted "anonymously", not associated with any username</p>
                </div>
                <div>
                    <fieldset>
                    <legend>What did it make you feel?</legend>
                        <label><input type="checkbox" id="tag_amusement" name="tag_amusement" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Amusement</label>
                        <label><input type="checkbox" id="tag_awe" name="tag_awe" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Awe</label>
                        <label><input type="checkbox" id="tag_contentment" name="tag_contentment" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Contentment</label>
                        <label><input type="checkbox" id="tag_gratitude" name="tag_gratitude" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Gratitude</label>
                        <label><input type="checkbox" id="tag_inspiration" name="tag_inspiration" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Inspiration</label> 
                        <label><input type="checkbox" id="tag_joy" name="tag_joy" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Joy</label>
                        <label><input type="checkbox" id="tag_hope" name="tag_hope" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Hope</label>
                        <label><input type="checkbox" id="tag_love" name="tag_love" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Love</label>
                        <label><input type="checkbox" id="tag_pride" name="tag_pride" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Pride</label>
                        <label><input type="checkbox" id="tag_serenity" name="tag_serenity" data-index={idx} onChange={e => this.props.handleInputChange(e)} />Serenity</label>
                        <label>
                            <input type="checkbox" id="tag_other_check" name="tag_other_check" data-index={idx} onChange={e => this.props.handleInputChange(e)} />
                            Other
                            <input type="text" name="tag_other" id="tag_other" data-index={idx} onChange={e => this.props.handleInputChange(e)} />
                        </label>
                        
                    </fieldset>
                </div>
            </fieldset>
        );
    }
}

export default NewEntry;