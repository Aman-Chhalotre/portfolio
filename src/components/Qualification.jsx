import React from 'react'
import image from '../images/verticle-design.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'

function Qualification() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".heading", {
        y: -50,
        opacity: 0,
        duration: 1.5,
      }), gsap.from('#degrees > div', {
        x: -30,
        duration: 1.5,
        opacity: 0
      }), gsap.from('#certificates > div', {
        x: 30,
        duration: 1.5,
        opacity: 0
      })
    }
    )
    return () => ctx.revert();
  }, [])

  return (
    <div className='h-full flex justify-around text-center text-gray-200 rounded-2xl'>

      {/* <div id='education' className=' p-2 rounded-xl '>
        <h1 className='heading text-3xl tablet:text-2xl mobile:text-xl text-teal-700 font-bold'><FontAwesomeIcon icon={faGraduationCap} style={{ color: "gray", }} /> Education</h1>
        <div id='degrees' className='mt-16 tablet:w-52 mobile:w-36 relative '>

          <div>
            <h1 className='text-xl tablet:text-lg mobile:text-sm font-bold fold-screen:text-lg'>Bachelors of Business Administration</h1>
            <h1 className='tablet:text-sm mobile:text-xs fold-screen:text-sm'>From Barkatullah University</h1>
          </div>

          <div className='absolute top-56 fold-screen:top-28'>
            <h1 className='text-xl tablet:text-lg mobile:text-sm font-bold fold-screen:text-lg'>Post Graduation Diploma in Computer Application</h1>
            <h1 className='tablet:text-sm mobile:text-xs fold-screen:text-sm'>From Barkatullah University</h1>
          </div>

        </div>
      </div> */}

      <div className='mt-28 '>
        <img src={image} alt="" className='h-11/12 mobile:w-5 fold-screen:hidden' />
      </div>

      <div id='certification' className='fold-screen:mt-52  p-2 rounded-xl'>
        <h1 className='heading text-3xl tablet:text-2xl mobile:text-xl text-teal-700 font-bold'><FontAwesomeIcon icon={faCircleCheck} style={{ color: "gray", }} /> Certificate</h1>
        <div id='certificates' className='mt-48 fold-screen:mt-16 tablet:w-52 mobile:w-36'>
          <div>
            <h1 className='text-xl tablet:text-lg mobile:text-sm font-bold fold-screen:text-lg'>Web development online training</h1>
            <h1 className='tablet:text-sm mobile:text-xs fold-screen:text-sm'>From Internshala Trainings</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification