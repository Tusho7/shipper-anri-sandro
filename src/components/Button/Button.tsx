import React from 'react'
import { ButtonProps } from './types'
const Button: React.FC<ButtonProps> = ({text, bgColor}) => {
  return (
    <button className={`${bgColor === "black" ? "bg-[#313032] text-white" : "transparent text-black border-[1px] border-black"} text-2xl rounded-3xl px-10 py-2`}>{text}</button>
  )
}

export default React.memo(Button)