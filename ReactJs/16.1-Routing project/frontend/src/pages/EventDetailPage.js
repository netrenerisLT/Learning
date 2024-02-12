import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams()
  return (
    <>
    <h1>EventDetailPage</h1>
    <h3>{params.id}</h3>
    </>

  )
}

export default EventDetailPage