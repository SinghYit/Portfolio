import image2 from './picture.jpg'
import { useState } from 'react'
//useState to change the text depending on what button is clicked
export const About = () => {
    const [atext, setPage] = useState('Click on the buttons to change the text')

    function showPage() {
        setPage('This is a Text. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
    }
    function showOtherPage() {
        setPage('This is another Text. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' +
            'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
    }



    return <div className="mainContent">
        <h1 className="mainHeader">This is the About page</h1>

        <img src={image2} alt="A picture" />

        <p>
            {atext}
        </p>
        <button onClick={showPage}>Show another text</button>
        <button onClick={showOtherPage}>Show CV</button>

        <div className="grid-container">
            <h2 className="anotherHeader">
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
            </h2>
            <h2 className="anotherHeader">lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
            </h2>
        </div>
    </div >

}