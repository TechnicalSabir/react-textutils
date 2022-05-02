
import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const textInput = (e) => {
        setText(e.target.value)
    }

    const textUpper = () => {
        setText(text.toUpperCase());
    }

    const textClear = () => {
        setText('');
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
    }
    const textLower = () => {
        setText(text.toLocaleLowerCase());
    }

    const rmExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    return (
        <>
            <div className='container'>
                <h6>{props.heading}</h6>
                <div className="mb-3">
                    <textarea className={`form-control ${props.darkMode === 'light' ? 'bg-white text-dark' : 'bg-dark text-white'}`} id="myBox" rows="8" value={text} onChange={textInput}></textarea>
                </div>
                <div className='footer-end'>
                    <button className="btn btn-primary mx-1" onClick={textUpper}>Upper Text</button>
                    <button className="btn btn-info mx-1" onClick={textLower}>Lower Text</button>
                    <button className="btn btn-danger mx-1" onClick={textClear}>Clear Text</button>
                    <button className="btn btn-success mx-1" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-warning mx-1" onClick={rmExtraSpaces}>rm Extra Spaces</button>
                </div>
                <hr />
            </div>
            <div className='container my-4'>
                <h6>Your tax summary</h6>
                <ul>
                    <li>{text.split(/[ ]+/).length}Words.</li>
                    <li>{text.length} Characters.</li>
                </ul>
            </div>
        </>
    )
}