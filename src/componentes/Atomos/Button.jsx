import React, { Children } from 'react'
import '../Atomos/Button.css'

const Button = () => {
  return (
    <div>
      <button>Pulsar
        {Children}
      </button>
    </div>
  )
}

export default Button