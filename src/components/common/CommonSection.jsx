import Image from 'next/image'
import React from 'react'

const CommonSection = ({ description, sectionImage, bgImage, descriptionClass, titleClass, descriptionTwo, descriptionThree, descriptionFour, titleOne, titleTwo, secondDescription, secondDescriptionTwo, secondDescriptionThree, secondDescriptionFour, dataClass, sectionClass }) => {
    return (
        <div className={`max-xl:py-3 max-lg:py-5 flex justify-center items-center min-h-screen ${sectionClass}`}>
            <div className='max-w-[1140px] w-full mx-auto container'>
                <div className='flex justify-center min-h-[600px] gap-4 items-center !h-full w-full max-lg:flex-col'>
                    <div className={`py-4 px-[26px] max-md:px-4 max-sm:px-4 min-h-[600px] max-w-[519px] max-lg:max-w-[unset] max-lg:min-h-[unset] w-full gap-[26px] max-xl:gap-4 flex flex-col bg-green rounded-2xl ${dataClass}`}>
                        <h2 className={`text-[26px] max-xl:text-xl text-light-black font-semibold ${titleClass}`}>{titleOne}</h2>
                        <div className='flex gap-2 max-xl:gap-1 flex-col'>
                            <p className={`leading-[150%] text-light-black ${descriptionClass}`}>{description}</p>
                            {descriptionTwo && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{descriptionTwo}</p>}
                            {descriptionThree && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{descriptionThree}</p>}
                            {descriptionFour && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{descriptionFour}</p>}
                        </div>
                        <h2 className={`text-[26px] max-xl:text-xl text-light-black font-semibold ${titleClass}`}>{titleTwo}</h2>
                        <div className='flex gap-2 max-xl:gap-1 flex-col'>
                            <p className={`leading-[150%] text-light-black ${descriptionClass}`}>{secondDescription}</p>
                            {secondDescriptionTwo && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{secondDescriptionTwo}</p>}
                            {secondDescriptionThree && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{secondDescriptionThree}</p>}
                            {secondDescriptionFour && <p className={`leading-[150%] max-xl:text-sm text-light-black ${descriptionClass}`}>{secondDescriptionFour}</p>}
                        </div>
                    </div>
                    <div className={`max-lg:max-w-[unset] min-h-[600px] max-lg:min-h-[unset] max-lg:py-3 rounded-2xl max-xl:px-4 bg-cover max-w-[603px] w-full h-full flex justify-center items-center ${bgImage}`}>
                        <Image src={sectionImage} width={523} height={482} alt='mobile image' className='max-lg:h-[350px] max-lg:object-contain' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CommonSection