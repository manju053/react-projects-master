import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  const copyClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])
  return (
    <article className={`color ${index > 10 ? 'color-light' : null}`} style={{backgroundColor: `rgb(${bcg})`}}
    onClick={() => copyClipboard()}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
