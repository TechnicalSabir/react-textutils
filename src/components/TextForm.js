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

    const handleCopy = ()=>{
        let textBox = document.getElementById('myBox')
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been successfully copied.", 'success');
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed successfully", 'success');

    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text successfully Removed", 'success');
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
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Text to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>Text to lower</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <input type="color" className="form-control-color" onChange={handleChangeColor} />
            

        </div>
        <div className="container my-2">
            <h3 style={{color: "red"}}>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read.</p>
            <h4>Preview</h4>
            <p>{text.length>0? text: 'Noting to preview'}</p>
        </div>
        </>
    )
}




