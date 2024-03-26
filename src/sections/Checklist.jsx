import react from 'react'
import './checklist.scss'
import pochacco from '../assets/pochacco.jpg'




const Checklist = () => {
    // const track = document.getElementById("image--track")

    // window.onmousedown = e => {
    //     track.dataset.mouseDownAt = e.clientX
    // }

    // window.onmousemove = e => {
    //     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    //         maxDelta = window.innerWidth / 2

    //     const percentage = (mouseDelta / maxDelta) * 100
    // }

    return < section id='checklist' >
        <div className="image--track" data-mouse-down-at="0">
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
            <img src={pochacco} alt="" />
        </div>
    </section >
}
export default Checklist