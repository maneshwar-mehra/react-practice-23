import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState("Write Here...")

    // making the text "CAPITAL" on click of the btn
    const clickBtn = () => {
        console.log("btnclicked");
        let newTxt = text.toUpperCase()
        setText(newTxt)
    }
    const clickBtn2 = () => {
        console.log("btnclicked");
        let newTxt = text.toLowerCase()
        setText(newTxt)
    }
    // handling the event
    const onChangeFunc = (event) => {
        console.log("onChangeFunc");
        setText(event.target.value)
    }
    // const [counter, usecounter] = useState(1)
    // const mouseEnter = () => {
    //     usecounter(counter + 1)
    // }

    return (
        <>
            <div className="container">
                <h1>{prop.heading}</h1>
                {/* <h1 onMouseEnter={mouseEnter}>{counter}</h1> */}
                <div>
                    <textarea id="txt-id" value={text} onChange={onChangeFunc} name="text-area" rows="10" cols="100"></textarea>
                </div>
                {/* <div>
                    <button className="btn btn-primary" onClick={clickBtn}>Convert to uppercase</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={clickBtn2}>Convert to uppercase</button>
                </div> */}
                <button className="btn btn-primary mx-1" onClick={clickBtn}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={clickBtn2}>Convert to Lowercase</button>

            </div>
            <div className="container my-3">
                <h1>Hi!</h1>
                <p>You have written <span color='blue'>{text.length}</span> letters & <span color='yellow'> {text.split(" ").length} </span> words</p>
                <h1>Live preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
