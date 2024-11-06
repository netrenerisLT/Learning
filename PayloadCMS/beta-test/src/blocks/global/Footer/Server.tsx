import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'


export default async function FooterServer() {
  const payload = await getPayloadHMR({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <div>
      <div className="w-full h-40 mx-auto flex justify-between items-center">
        <div className='w-48 h-20 relative'>
          <Image src={footer.logo.url} fill className="object-contain" alt="website logo"></Image>
        </div>
        <div>
          {footer.nav.map((item, index) => {
            return (
              <Link key={index} href={item.link} className="text-emerald-400 text-lg mx-4">
                {item.label}
              </Link>
            )
          })}
        </div>
        <div>{footer.copywright}</div>
      </div>

    </div>
  )
}
