import React from 'react';
import './NewEntry.css';

class NewEntry extends React.Component {

    render() {
        const idx = this.props.index;

        return (
            <fieldset className='aboutsection' data-index={idx}>
                <legend><h3>New Good Thing</h3></legend>
                <div>
                    <textarea name='content' id='content' rows='3' cols='50' data-index={idx} required></textarea>
                </div>
                <div>
                    <label><input type="checkbox" name='public' id='public' data-index={idx} defaultChecked /> Share publicly?</label>
                    <p className="form-explanation">Public entries are posted "anonymously", not associated with any username</p>
                </div>
                <div>
                    <fieldset>
                    <legend>What did it make you feel?</legend>
                        <label><input type="checkbox" id="tag_amusement" name="tag_amusement" data-index={idx} /> Amusement</label>
                        <label><input type="checkbox" id="tag_awe" name="tag_awe" data-index={idx} /> Awe</label>
                        <label><input type="checkbox" id="tag_contentment" name="tag_contentment" data-index={idx} /> Contentment</label>
                        <label><input type="checkbox" id="tag_gratitude" name="tag_gratitude" data-index={idx} /> Gratitude</label>
                        <label><input type="checkbox" id="tag_inspiration" name="tag_inspiration" data-index={idx} /> Inspiration</label> 
                        <label><input type="checkbox" id="tag_joy" name="tag_joy" data-index={idx} /> Joy</label>
                        <label><input type="checkbox" id="tag_hope" name="tag_hope" data-index={idx} /> Hope</label>
                        <label><input type="checkbox" id="tag_love" name="tag_love" data-index={idx} /> Love</label>
                        <label><input type="checkbox" id="tag_pride" name="tag_pride" data-index={idx} /> Pride</label>
                        <label><input type="checkbox" id="tag_serenity" name="tag_serenity" data-index={idx} /> Serenity</label>
                        <label><input type="checkbox" id="tag_other" name="tag_other" data-index={idx} /> Other</label>
                        <input type="text" name="tag_other_text" id="tag_other_text" data-index={idx} />
                    </fieldset>
                </div>
            </fieldset>
        );
    }
}

export default NewEntry;