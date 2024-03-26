import react from 'react'
import './checklist.scss'




const Checklist = () => {

    return < section id='checklist' >
        <div className="checklist--wrapper">
            <div className="checklist--title">
                <h1>Projects</h1>
            </div>
            <div className="column-1">
                Project name
            </div>
            <div className="column-2">
                <img src="https://www.smokonow.com/cdn/shop/products/ecCr_pTc.jpg?v=1669926078" alt="" />
            </div>
            <div className="column-3">
                <p>
                    Project description
                </p>
            </div>
        </div>

    </section >
}
export default Checklist