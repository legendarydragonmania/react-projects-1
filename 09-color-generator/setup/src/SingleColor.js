import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const background = rgb.join(',')
  const hex = rgbToHex(...rgb)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${background})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
    >
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to the clipboard</p>}
    </article>
  )
}

export default SingleColor
