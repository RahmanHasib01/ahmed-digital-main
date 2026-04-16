import React from 'react'

const OurPromise = () => {
    return (
        <div className='h-[77dvh] w-full flex'>
            <div className="left-section w-[40%]">
                <div className="text mt-[5dvh] lg:mt-[10dvh]">
                    <h1 className='text-[6dvw] lg:text-[3dvw]'>My Promise</h1>
                    <button className='text-[2dvw] lg:text-[1.2dvw] lg:mt-[5dvh] border-1 border-tertiary rounded-3xl px-[1dvw]'>More About Me</button>
                </div>
            </div>

            <div className="right-section w-[60%]">
                <div className="texts mt-[5dvh] lg:mt-[10dvh] ml-[5dvw] lg:ml-0">
                    <p className='text-[3dvw] lg:text-[1.75dvw] font-poppins font-extralight tracking-wider'>I promise to deliver honest and high-quality video editing every time. You can count on me to listen closely, meet deadlines, and make sure the final video truly represents your vision.
                    <br /><br />I am here to make the process simple and stress-free so you can focus on what matters most—your business.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurPromise
