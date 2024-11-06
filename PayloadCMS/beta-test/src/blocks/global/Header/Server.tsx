import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <div>
      <div className="w-full h-40 mx-auto flex justify-between items-center">
        <div className='w-48 h-20 relative'>
          <Image src={header.logo.url} fill className="object-contain" alt="website logo"></Image>
        </div>
        <div>
          {header.nav.map((item, index) => {
            return (
              <Link key={index} href={item.link} className="text-emerald-400 text-lg mx-4">
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
