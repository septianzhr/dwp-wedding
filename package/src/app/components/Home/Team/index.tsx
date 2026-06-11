import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <h2 className='text-center max-w-5xl mx-auto'>
          Menciptakan Momen Pernikahan yang Tak Terlupakan
        </h2>
        <h5 className='font-medium text-center pt-10 text-black/50 max-w-3xl mx-auto'>
          Dari dekorasi pernikahan hingga perlengkapan acara lengkap, kami siap membantu menciptakan suasana yang indah, meriah, dan berkesan.
        </h5>
        <div className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/team.webp'
            alt='office-image'
            height={684}
            width={1296}
            className='relative z-1 rounded-3xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
