import React from 'react'

export default function CoverBlockServer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-5xl py-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h4 className="text-lg">{subtitle}</h4>
    </div>
  )
}
