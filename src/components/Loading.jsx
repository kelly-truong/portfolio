import react, { useEffect, useRef } from 'react'
import './loading.scss'
import vid from '../assets/video.webm'

const Loading = ({ init }) => {

    return <div className={"loading " + (init ? "" : "loading-done")}>
        <div className="loading-name">
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
        <div className="cinnamoroll">
            <video width="900" height="700" autoPlay loop muted >
                <source src={vid} type="video/mp4" />
            </video>
        </div>

    </div>
}

export default Loading