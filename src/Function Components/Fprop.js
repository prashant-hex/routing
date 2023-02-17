import React from 'react'

export default function Fprop(props) {
  return (
    <div>
        <h1>{props.text}</h1>
        <h2>{props.data.name}</h2>
    </div>
  )
}
