import react, { useEffect, useRef } from 'react'
import './loading.scss'

const Loading = ({ init }) => {

    return <div className={"loading " + (init ? "" : "loading-done")}>
        <div className="first-name">
            {["K", "e", "l", "l", "y"].map((x, i) => {
                return <span className="letter" key={i}>
                    {x}
                </span>
            })}

        </div>
        <div className="last-name">
            {["T", "r", "u", "o", "n", "g"].map((x, i) => {
                return <span className="letter" key={i}>
                    {x}
                </span>
            })}
        </div>
    </div>
}

export default Loading