'use client'
// Next Imports
import Image from 'next/image';

// Components
import { CustomButton } from '.';



const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Buy or Sell Used Cars Online
        </h1>

        <p className='hero__subtitle'>Home of Quality Second Hand Cars</p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
          btnType='button'
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
        </div>
          
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero