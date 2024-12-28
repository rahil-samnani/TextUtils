import React, { useState } from 'react'
import copy from "copy-to-clipboard";
import copyicon from './copy.png'

export default function Text(props) {
    const [text, setText] = useState("Enter any text.") 

    const copyToClipboard = () => {
        copy(text);
        props.showAlert("Text copied to clipboard","success")
    };

    let textToUpper = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text converted to upper case","success")
    }

    let textToLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text converted to lower case","success")
    }

    let textClear = () => {
        setText("")
        props.showAlert("Text cleared","success")
    }

    let textCapiltalize = () => {
        setText(text.split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
            .join('. '))
            props.showAlert("Text auto capitalized","success")
    }

    let textTrim = () => {
        setText(text.split('\n')
            .map(line => line.trim())
            .map(line => line.replace(/\s+/g, ' '))
            .join('\n'))
        props.showAlert("Trimmed extra spaces","success")
    }

    let wordCount = () => {
        if(text === "")
            return 0;
        return (text.split(/\s+/).filter(word => word !== "" && word !== ".   ").length)
    }

    let textChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="input-group">
                <div className={`textarea_div text-${props.mode  === "light" ? "dark" : "light"}`} style={{borderColor :  props.mode === "light" ? "black" : "white"}}>
                    <h5>Text Analyzer</h5>
                    <div className="copybutton">
                        <button
                            type="button"
                            className="copy_img"
                            aria-label="Copy to clipboard"
                            data-bs-original-title="Copy to clipboard"
                            onClick={copyToClipboard}
                        >
                            <img id="copy" src={copyicon} alt="copy" width={24} height={24}/>
                        </button>
                    </div>
                </div>
                <textarea className="form-control" value={text} onChange={textChange} aria-label="With textarea" rows="8" style={{backgroundColor : props.mode === "light" ? "white" : "#1a1818" , color : props.mode  === "light" ? "black" : "white" , borderColor :  props.mode === "light" ? "black" : "white"}}>
                </textarea>
            </div>
            <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-3`} onClick={textToUpper}>to UpperCase</button>
            <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-2 my-3`} onClick={textToLower}>to LowerCase</button>
            <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-2 my-3`} onClick={textCapiltalize}>Auto Capitalize</button>
            <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-2 my-3`} onClick={textTrim}>Trim text</button>
            <button className={`btn btn-${props.mode === "light" ? "primary" : "dark"} mx-2 my-3`} onClick={textClear}>Clear Text</button>
            <div className="comatiner my-3" style={{color : props.mode  === "light" ? "black" : "white"}}>
                <h2>Your Text Summary</h2>
                <p>{wordCount()} Words, {text.length} Characters</p>
                <p>{0.008 * wordCount()} Minutes to read</p>
                <br />
                <h2>Preview text</h2>
                <p>{text.length === 0 ? "Nothing to preview here." : text}</p>
            </div>
        </>
    )
}