import React from 'react';
import './PrivateEntry.css';

function PrivateEntry(props) {
    const entry = props.entry;
    const idx = props.idx;

    return (
        <li key={idx}>
            {entry.content} <span className='entriesdate'>{entry.date_modified.slice(0,10)}</span>
        </li>
    )

}

export default PrivateEntry;