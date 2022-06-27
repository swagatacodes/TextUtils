import { useState } from "react";




export function Box(props) {
    const [text, setText] = useState("Enter text here")

    const ConvertUpperCase = () => {
        setText(text.toUpperCase())
    }

    const ConvertLowerCase = () => {
        setText(text.toLowerCase())
    }

    /* const ConvertFirstUpCase = () => {
        var wordarr = text.split(/( |\.)/)
        var converted = []
        for (const word of wordarr) {
            if (word.length < 1) continue;
            let ca = word.split("") //[q,e,y]
            console.log("ca[0] is", ca[0])
            ca[0] = ca[0].toUpperCase() //[Q,e,y]
            ca = ca.join("")
            converted.push(ca)
        }
        let result = converted.join("")
        setText(result)
    } */

    const ConvertFirstUpCase = () =>{                            //use Alt+Shift+a for commenting a block of code 
        var wordarr = text.split(/( |\.)/)
        const converted=[]
        for (const word of wordarr){
           // if (word.length < 1) continue;
            let char=word.split("")
            char[0]=char[0].toUpperCase()
            char=char.join("")
            converted.push(char)
        }
        setText(converted.join(""))
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handlespaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleCopy = () => {
        let text = document.getElementsByClassName("form-control");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const ToEnterTextandUpdate = (e) => {
        setText(e.target.value)
    }
    console.log(props.mode)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Enter text to preview here </h1>

                <div className="container mb-3" >
                    <textarea onChange={ToEnterTextandUpdate} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
                    color: props.mode==='dark'?'white':'black'}} rows="8" type="Text" className="form-control" id="TextArea" value={text}  />
                </div>

                <button onClick={ConvertUpperCase} type="UpperCase" className="btn btn-primary mx-1">Convert to UpperCase</button>
                <button onClick={ConvertLowerCase} type="LowerCase" className="btn btn-primary mx-1">Convert to LowerCase</button>
                <button onClick={ConvertFirstUpCase} type="FirstUpCase" className="btn btn-primary mx-1">Convert first letter to UpperCase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button onClick={handlespaces} type="removespace" className="btn btn-primary mx-1">Remove extra spaces</button>
                <button onClick={handleCopy} className="btn btn-primary mx-1">Copy to clipboard</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Text Information</h2>
                <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
                <p>Your text was read in {0.008 * (text.split(" ").length)} minutes</p>
                <h3 className="my-2">Text Preview</h3>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>

        </form >
    )
}

