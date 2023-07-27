import React, { ReactNode } from "react";
import styled from "styled-components";


export default function ButtonLayout (props:{children: ReactNode}) {
  return (
    <Button> {props.children}</Button>
  )
}


export const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 10px auto;
  background-color: pink;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 2px solid coral;
  }
`

