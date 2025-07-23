import React, {useState,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [touched, setTouched] = useState(false);

    const textAreaRef = useRef(); 

    const handleUpClick = ()=> {
        // console.log(text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearClick =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange = (event)=>{
        if (!touched) setTouched(true);
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        // var text =document.getElementsByClassName('myText')[0];
        // console.log(text)
        // text.select();
        // text.setSelectionRange(0, 9999);
        textAreaRef.current.select();
        navigator.clipboard.writeText(textAreaRef.current.value);
        document.getSelection().removeAllRanges();
        props.showAlert("copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const wordCount = touched ? text.trim().split(/\s+/).filter(Boolean).length : 0; 
    // const wordCount = touched ? text.split(" ").filter((element)=>{return element.length!==0}).length : 0;
    const charCount = touched ? text.length : 0;
    return (
        <>
        <div className='container my-1' style={{color: props.mode ==='dark'?'white':'black'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontSize:'25px', fontWeight: 'bold' }}>{props.heading}</Form.Label>
                <Form.Control as="textarea" ref={textAreaRef} value={text} className='myText' onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#9b9595ff':'white',color: props.mode ==='dark'?'white':'black'}} rows={5} />
            </Form.Group>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h3>Your text Summary</h3>
            <p>{wordCount} words and {charCount} characters</p>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <h3>Preview</h3>
                <p>{text.length>0 && touched ? text:'Nothing to preview'}</p>

        </div>
        </>
    );
}