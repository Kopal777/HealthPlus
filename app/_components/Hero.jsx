import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src="/doctors.png"
                width={800}
                height={800}
                className="absolute inset-0 h-full rounded-3xl w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Your One-Stop Solution for <span className='text-primary'>Appointment</span> Booking</h2>

              <p className="my-4 text-gray-500">
                Booking an appointment has never been easier. With our user-friendly interface, patients can schedule their appointments in just a few clicks. The process is designed to be quick, straightforward, and hassle-free, ensuring a smooth experience from start to finish.
              </p>
              <Button>Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
