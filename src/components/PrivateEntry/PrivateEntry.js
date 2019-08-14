import React from 'react';
import './PrivateEntry.css';

function PrivateEntry(props) {
    const entry = props.entry;
    
    const emotionsArr = [];
    const emotionBoolTags = [
        'tag_amusement',
        'tag_awe',
        'tag_contentment',
        'tag_gratitude',
        'tag_hope',
        'tag_inspiration',
        'tag_joy',
        'tag_love',
        'tag_pride',
        'tag_serenity'
    ];
    for (let tag of emotionBoolTags) {
        if (entry[tag]) {
            const emotionReadable = tag[4].toUpperCase() + tag.slice(5);
            emotionsArr.push(emotionReadable)
        }
    }
    if (entry.tag_other) {
        emotionsArr.push(entry.tag_other)
    }

    const emotionText = emotionsArr.join(', ')


    return (
        <li>
            <span className='entriesdate'>{entry.date_modified.slice(0,10)}</span>
            {entry.content}
            <span className='entriestags'>{emotionText}</span>
        </li>
    )

}

export default PrivateEntry;