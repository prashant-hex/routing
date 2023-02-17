import React from 'react'

export default function ProfileF(props) {
const veerf = () => {
    alert('hello function')
}

  return (
    <>
      <h1 onClick={veerf}>Hello function <br/> {props.text}</h1>
    </>
  )
}
