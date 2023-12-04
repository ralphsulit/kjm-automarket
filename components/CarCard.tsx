'use client'

// React imports
import { useState } from 'react';

// Next imports
import Image from 'next/image';

// Custom imports
import { CustomButton, CarDetails } from '.';
import { CarProps } from '@/types';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make}
        </h2>
      </div>

      <p className='flex mt-2 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>{model}</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src='/hero.png' alt='car model' className='object-contain' fill priority/>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          {/* Transmission */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px]'>
              { transmission === 'a' ? "Automatic" : 'Manual'}
            </p>
          </div>
          {/* Tire */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='tire' />
            <p className='text-[14px]'>
              { year }
            </p>
          </div>
          {/* Miles per gallon */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='gas' />
            <p className='text-[14px]'>
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => {setIsOpen(true)}}
          />
        </div>

      </div>

      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}

export default CarCard