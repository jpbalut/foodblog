import React from 'react'
import { Header } from './'


export const Layout = (props) => {
  return (
    <>
        <Header />
        {props.children}
    </>
  )
}
