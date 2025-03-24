'use client'
import React, { useLayoutEffect, useRef } from 'react'
import CommonSection from '../common/CommonSection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Bookkeeping_Description, Bookkeeping_Description_Two, Insight_Description, Invoicing, Live_Tax_Blue_Description, Live_Tax_Blue_Description_Three, Live_Tax_Blue_Description_Two, Live_Tax_Pink_Description, Live_Tax_Pink_Description_Three, Live_Tax_Pink_Description_Two, Live_Tracking_Description, Multiple_Income_Description, Multiple_Income_Description_Three, Multiple_Income_Description_Two, Real_Time_Description, Real_Time_DescriptionFour, Real_Time_DescriptionThree, Real_Time_DescriptionTwo } from '@/utils/helper';
import Image from 'next/image';

const OpportunityOverview = () => {
    const componentRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const tl = gsap.timeline();
            mm.add("(min-width: 872.98px)", () => {
                ScrollTrigger.create({
                    trigger: ".this-section",
                    start: "top top",
                    end: "400% bottom",
                    scrub: 1,
                    pin: true,
                    animation: tl,
                    markers: true
                });

                tl.to(".heading", {
                    y: 0
                }, -0.2)

                tl.to(".animation-text", {
                    top: "-50%",
                }, 0)

                tl.to(".card-image", {
                    x: 0,
                    stagger: 0.2
                }, 0)

                tl.to(".card-image", {
                    rotate: 0,
                    stagger: 0.2
                }, 0.1)

                tl.to(".card-image-2", {
                    x: 0,
                    stagger: 0.2
                }, 0)

                tl.to(".card-image-2", {
                    rotate: 0,
                    stagger: 0.2
                }, 0.1)
            })

            mm.add("(max-width: 872.98px)", () => {
                tl.fromTo(".card-image", {
                    scale: 0
                }, {
                    scale: 1,
                    stagger: 0.4
                }, 0)
                tl.fromTo(".card-image-2", {
                    scale: 0
                }, {
                    scale: 1,
                    stagger: 0.4
                }, 0)
            })
        }, componentRef);
        return () => ctx.revert();
    }, [])
    return (
        <div ref={componentRef}>
            <div className='flex this-section px-3 justify-center min-h-screen items-center overflow-hidden py-10 max-sm:py-5 bg-light-black'>
                <div className='max-w-[1143px] max-xl:max-w-[848px] w-full container relative'>
                    <h3 className=' absolute top-1/2 left-1/2 -translate-x-1/2 animate-bounce text-center animation-text -translate-y-1/2 font-semibold max-[872px]:hidden text-4xl text-white leading-[130%]'>Scroll Down To Show Animation</h3>
                    <h2 className='font-semibold text-[46px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-[872px]:text-center text-white leading-[130%] [872px]:-translate-y-96 mb-9 max-lg:mb-8 max-md:mb-7 max-sm:mb-6 heading'>Opportunity Overview</h2>
                    <div className="w-full flex flex-col justify-center items-center gap-4 max-md:gap-2">
                        <div className='flex flex-wrap w-full gap-4 max-md:gap-2 max-xl:max-w-[848px] justify-center items-center'>
                            <Image className='card-image [872px]:translate-x-[1450px] max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:rotate-15' src={'/assets/image/opportunity.png'} alt='images' width={273} height={270} />
                            <Image className='card-image [872px]:translate-x-[1450px] max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:rotate-15' src={'/assets/image/status.png'} alt='images' width={273} height={270} />
                            <Image className='card-image [872px]:translate-x-[1450px] max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:rotate-15' src={'/assets/image/track-record.png'} alt='images' width={273} height={270} />
                            <Image className='card-image [872px]:translate-x-[1450px] max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:rotate-15' src={'/assets/image/leadership.png'} alt='images' width={273} height={270} />
                        </div>
                        <div className='flex flex-wrap w-full max-md:gap-2 flex-row-reverse justify-center items-center gap-4 max-xl:max-w-[848px]'>
                            <Image className='card-image-2 max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:-translate-x-[1450px] [872px]:-rotate-15' src={'/assets/image/vertically-integrated.png'} alt='images' width={273} height={270} />
                            <Image className='card-image-2 max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:-translate-x-[1450px] [872px]:-rotate-15' src={'/assets/image/design.png'} alt='images' width={273} height={270} />
                            <Image className='card-image-2 max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:-translate-x-[1450px] [872px]:-rotate-15' src={'/assets/image/pricing-innovation.png'} alt='images' width={273} height={270} />
                            <Image className='card-image-2 max-xl:w-[200px] max-[441px]:!size-[130px] max-[770px]:!size-[165px] max-xl:h-[220px] [872px]:-translate-x-[1450px] [872px]:-rotate-15' src={'/assets/image/scalable-growth.png'} alt='images' width={273} height={270} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunityOverview