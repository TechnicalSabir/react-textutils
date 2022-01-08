import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        // console.log("UpperCase was clicked");
        setText(text.toUpperCase())
        props.showAlert("Coverted to uppercase", 'success');
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was clicked");
        setText(text.toLowerCase())
        props.showAlert("Coverted to lowercase", 'success');
    }
    const handlOnChange = (e) =>{
        // console.log("On change");
        setText(e.target.value)

    }

    const handleChangeColor = (e)=>{
        document.getElementById('myBox').style.color = e.target.value;
    }

    
    return (
        <>
        <div className='container my-3'>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handlOnChange} id="myBox" rows="5" value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Text to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Text to lower</button>
            <input type="color" className="form-control-color" onChange={handleChangeColor} />

        </div>
        <div className="container my-2">
            <h3 style={{color: "red"}}>Your text summary</h3>
            <p>{text.split(' ').length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read.</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}




