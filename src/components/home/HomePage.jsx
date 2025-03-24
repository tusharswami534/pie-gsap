'use client'
import React, { useLayoutEffect, useRef } from 'react'
import CommonSection from '../common/CommonSection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Live_Tracking_Description, Real_Time_Description, Real_Time_DescriptionFour, Real_Time_DescriptionThree, Real_Time_DescriptionTwo } from '@/utils/helper';

const HomePage = () => {
    const componentRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const tl = gsap.timeline();
            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: ".pin-section",
                    start: "top , top",
                    end: "800% bottom",
                    scrub: 1,
                    pin: true,
                    animation: tl,
                    markers: true,
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
            mm.add("(max-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: ".pin-section",
                    start: "top , top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: true,
                    animation: tl,
                    markers: true,
                });
                tl.to(".pin-section", {
                    yPercent: -50
                })
            })
        }, componentRef);
        return () => ctx.revert();
    }, [])
    return (
        <div ref={componentRef}>
            <div className='pin-section min-h-screen relative max-xl:px-4 overflow-hidden'>
                <CommonSection sectionClass={'section-one lg:absolute left-1/2 lg:-translate-x-1/2 w-full'} titleOne={'Real Time Tax'} description={Real_Time_Description} descriptionTwo={Real_Time_DescriptionTwo} descriptionThree={Real_Time_DescriptionThree} descriptionFour={Real_Time_DescriptionFour} titleTwo={'Live tracking of the tax return'} secondDescription={Live_Tracking_Description} />
                <CommonSection sectionClass={'section-two lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Real Time Tax'} dataClass={'!bg-purple'} titleClass={'!text-gray'} descriptionClass={'!text-white'} description={Real_Time_Description} descriptionTwo={Real_Time_DescriptionTwo} descriptionThree={Real_Time_DescriptionThree} descriptionFour={Real_Time_DescriptionFour} titleTwo={'Live tracking of the tax return'} secondDescription={Live_Tracking_Description} />
                <CommonSection sectionClass={'section-three lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Real Time Tax'} dataClass={'!bg-pink'} description={Real_Time_Description} descriptionTwo={Real_Time_DescriptionTwo} descriptionThree={Real_Time_DescriptionThree} descriptionFour={Real_Time_DescriptionFour} titleTwo={'Live tracking of the tax return'} secondDescription={Live_Tracking_Description} />
                <CommonSection sectionClass={'section-four lg:absolute left-1/2 top-full lg:-translate-x-1/2 w-full'} titleOne={'Real Time Tax'} dataClass={'!bg-blue'} titleClass={'!text-gray'} descriptionClass={'!text-white'} description={Real_Time_Description} descriptionTwo={Real_Time_DescriptionTwo} descriptionThree={Real_Time_DescriptionThree} descriptionFour={Real_Time_DescriptionFour} titleTwo={'Live tracking of the tax return'} secondDescription={Live_Tracking_Description} />
            </div>
        </div>
    )
}

export default HomePage