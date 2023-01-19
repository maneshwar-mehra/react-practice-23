import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState("I am usestate text")

    // making the text "CAPITAL" on click of the btn
    const clickBtn = () => {
        console.log("btnclicked");
        let newTxt = text.toUpperCase()
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
            <div className="mb-3">
                <h1>{prop.heading}</h1>
                {/* <h1 onMouseEnter={mouseEnter}>{counter}</h1> */}
                <div>
                    <textarea id="txt-id" value={text} onChange={onChangeFunc} name="text-area" rows="10" cols="100"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={clickBtn}>Convert to uppercase</button>
                </div>
            </div>
        </>
    )
}
