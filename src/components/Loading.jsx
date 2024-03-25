import react from 'react'
import './loading.scss'

const Loading = () => {

    return <div className="loading">
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