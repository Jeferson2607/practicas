import { useState } from 'react';
import clipTranspatent from '/clipTransparent.png'

const SingleColor = ({ hexColor }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {
            setCopy(false)
        }, 300);
    }
  return (
    <div className="single-card" style={{backgroundColor: `#${hexColor}`}}>
        <div className="content">
            <p># {hexColor}</p>
            <button onClick={ handleCopy(hexColor)}>
                <img src={clipTranspatent} alt="copy" />
            </button>
        </div>
        {copy ? <p className="copy-alert">Copied to clipboard</p> : null}
        
    </div>
  )
}

export default SingleColor
