import React from 'react';
import ColorChanger from '../High-Order-Components/ColorChanger'
const About = () => {
    return (
        <div>
            <div className='center container'>
                <h4>About page</h4>
                <p>This is my About Page</p>
            </div>
        </div>
    )
}
export default ColorChanger(About);