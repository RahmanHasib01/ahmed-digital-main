import React from 'react'

const OurMission = () => {
    return (
        <div className='h-[77dvh] w-full flex'>
            <div className="left-section w-[40%]">
                <div className="text mt-[5dvh] lg:mt-[10dvh]">
                    <h1 className='text-[6dvw] lg:text-[3dvw]'>Our Mission</h1>
                    <button className='text-[2dvw] lg:text-[1.2dvw] lg:mt-[5dvh] border-1 border-tertiary rounded-3xl px-[1dvw]'>More About Us</button>
                </div>
            </div>

            <div className="right-section w-[60%]">
                <div className="texts mt-[5dvh] lg:mt-[10dvh] ml-[5dvw] lg:ml-0 ">
                    <p className='text-[3dvw] lg:text-[1.75dvw] font-poppins font-extralight tracking-wider'>We aim to make video editing simple and stress-free for businesses by handling the creative side with care and consistency. <br /><br /> Our goal is to help clients share their message clearly through clean, effective, and well-edited content.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
