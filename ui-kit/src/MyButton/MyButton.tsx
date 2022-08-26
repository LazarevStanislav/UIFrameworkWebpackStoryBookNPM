import React, { Children, FC } from 'react'

export interface MyButtonProps
{
  color: string;
}


const MyButton: FC<MyButtonProps> = ({ color, ...props }) =>
{
  return (
    <button {...props} style={{ color }}>
      children
    </button>
  )
}

export default MyButton;
