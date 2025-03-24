'use client'
import React, { useLayoutEffect, useRef } from 'react'
import CommonSection from '../common/CommonSection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Bookkeeping_Description, Bookkeeping_Description_Two, Insight_Description, Invoicing, Live_Tax_Blue_Description, Live_Tax_Blue_Description_Three, Live_Tax_Blue_Description_Two, Live_Tax_Pink_Description, Live_Tax_Pink_Description_Three, Live_Tax_Pink_Description_Two, Live_Tracking_Description, Multiple_Income_Description, Multiple_Income_Description_Three, Multiple_Income_Description_Two, Real_Time_Description, Real_Time_DescriptionFour, Real_Time_DescriptionThree, Real_Time_DescriptionTwo } from '@/utils/helper';

const HomePage = () => {
    const componentRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const tl = gsap.timeline();
            mm.add("(min-width: 1023.98px)", () => {
                ScrollTrigger.create({
                    trigger: ".sm-pin",
                    start: "top top",
                    end: "800% bottom",
                    scrub: 1,
                    pin: true,
                    animation: tl,
                });

                tl.to(".section-two", {
                    top: "0%",
                }, 0)
                tl.to(".section-three", {
                    top: "0%",
                }, 1)
                tl.to(".section-four", {
                    top: "0%",
                }, 2)
            })
        }, componentRef);
        return () => ctx.revert();
    }, [])
    return (
        <div ref={componentRef}>
            <div className='lg:px-4 sm-pin max-[1023px]:h-screen max-[1023px]:overflow-hidden' >
                <div className='pin-section min-h-screen relative max-xl:px-4 overflow-hidden'>
                    <CommonSection sectionImage={'/assets/image/first-section-image.png'} bgImage={'bg-[url("/assets/image/first-section-bg-image.png")]'} sectionClass={'section-one lg:absolute left-1/2 lg:-translate-x-1/2 w-full'} titleOne={'Real Time Tax'} description={Real_Time_Description} descriptionTwo={Real_Time_DescriptionTwo} titleTwo={'Live tracking of the tax return'} secondDescription={Live_Tracking_Description} />
                    <CommonSection sectionImage={'/assets/image/second-section-image.png'} bgImage={'bg-[url("/assets/image/second-section-bg-image.png")]'} sectionClass={'section-two lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Multiple Incomes in one place'} dataClass={'!bg-purple'} titleClass={'!text-gray'} descriptionClass={'!text-white'} description={Multiple_Income_Description} descriptionTwo={Multiple_Income_Description_Two} descriptionThree={Multiple_Income_Description_Three} titleTwo={'Live tax admin support'} secondDescription={Live_Tax_Blue_Description} />
                    <CommonSection sectionImage={'/assets/image/third-section-image.png'} bgImage={'bg-[url("/assets/image/third-section-bg-image.png")]'} sectionClass={'section-three lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Bookkeeping'} dataClass={'!bg-pink'} description={Bookkeeping_Description} descriptionTwo={Bookkeeping_Description_Two} titleTwo={'Live tax admin support'} secondDescription={Live_Tax_Pink_Description} secondDescriptionTwo={Live_Tax_Pink_Description_Two} />
                    <CommonSection sectionImage={'/assets/image/fourth-section-image.png'} bgImage={'bg-[url("/assets/image/fourth-section-bg-image.png")]'} sectionClass={'section-four lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Invoicing'} dataClass={'!bg-blue'} titleClass={'!text-gray'} descriptionClass={'!text-white'} description={Invoicing} titleTwo={'Insights on your income'} secondDescription={Insight_Description} />
                </div>
            </div>
        </div>
    )
}

export default HomePage