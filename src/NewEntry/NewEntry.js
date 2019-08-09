import React from 'react';
import './NewEntry.css';

class NewEntry extends React.Component {

    render() {

        return (
            <section className='aboutsection' data-index={this.props.index}>
                <div>
                    <label htmlFor="content"><h3>New Good Thing</h3></label>
                    <textarea name='content' id='content' rows='3' cols='50' required></textarea>
                </div>
                <div>
                    <label><input type="checkbox" name='public' id='public' defaultChecked /> Share publicly?</label>
                    <p className="form-explanation">Public entries are posted "anonymously", not associated with any username</p>
                </div>
                <div>
                    <fieldset>
                    <legend>What did it make you feel?</legend>
                        <label><input type="checkbox" id="tag_amusement" name="tag_amusement" /> Amusement</label>
                        <label><input type="checkbox" id="tag_awe" name="tag_awe" /> Awe</label>
                        <label><input type="checkbox" id="tag_contentment" name="tag_contentment" /> Contentment</label>
                        <label><input type="checkbox" id="tag_gratitude" name="tag_gratitude" /> Gratitude</label>
                        <label><input type="checkbox" id="tag_inspiration" name="tag_inspiration" /> Inspiration</label> 
                        <label><input type="checkbox" id="tag_joy" name="tag_joy" /> Joy</label>
                        <label><input type="checkbox" id="tag_hope" name="tag_hope" /> Hope</label>
                        <label><input type="checkbox" id="tag_love" name="tag_love" /> Love</label>
                        <label><input type="checkbox" id="tag_pride" name="tag_pride" /> Pride</label>
                        <label><input type="checkbox" id="tag_serenity" name="tag_serenity" /> Serenity</label>
                        <label><input type="checkbox" id="tag_other" name="tag_other" /> Other</label>
                        <input type="text" name="tag_other_text" id="tag_other_text" />
                    </fieldset>
                </div>
            </section>
        );
    }
}

export default NewEntry;