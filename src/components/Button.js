import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

//two constant arrays
const STYLES=['btn--primary','btn--outline'];

const SIZES=['btn--medium','btn--large'];

//functional React Component named Button
export const Button=({
    children, //used to display whatever you include between the opening and closing tags 
    type, // type of the button, such as "button", "submit", or "reset".
    onClick,
    buttonStyle,
    buttonSize

    //The buttonStyle and buttonSize are used to decide the style and size of the button.The developer can specify these,but if the values provided aren't in the predefined arrays of STYLES and SIZES,it defaults to 'btn--primary' for buttonStyle and 'btn--medium' for buttonSize.
})=>{
    //checkButtonStyle and checkButtonSize are variables that check if the passed-in buttonStyle and buttonSize are included in STYLES and SIZES arrays. If they are, the values are accepted; if not, it defaults to the first value in the respective array.
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];

    const checkButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} 
                type={type}
> 

                {children}
            </button>
        </Link>

        //Inside the Link component, there is a button HTML element with a class of btn, checkButtonStyle, and checkButtonSize (which can have multiple values based on the conditions mentioned earlier). The onClick event is assigned to whatever is passed as the onClick prop.{children} is where the text or any content passed between the opening and closing button tags when the component is used will be displayed.
    );
}