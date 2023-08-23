import React from 'react'
import { ButtonProps } from './types'
const Button: React.FC<ButtonProps> = ({text, bgColor, width, height, borderRadius}) => {
  return (
    <button style={{width, height, borderRadius}} className={`${bgColor === "black" ? "bg-[#313032] text-white" : "transparent text-black border-[1px] border-black"} text-2xl`}>{text}</button>
  )
}

export default React.memo(Button)