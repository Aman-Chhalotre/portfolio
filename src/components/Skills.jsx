import React from 'react'
import '../css/skills.css'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'

function Skills() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from("#frontend > div",{
        y:50,
        duration:1.5,
        opacity:0,
    }),gsap.from("#backend > div",{
        y:-50,
        duration:1.5,
        opacity:0
    }),gsap.from("#frontend,#backend",{
        opacity:0,
        duration:1.5,
    })
  }
  )
  return () => ctx.revert();
},[])

  return (
    <>

      <div id='full' className='mobile:h-full tablet:h-full fold-screen:h-full h-full rounded-xl'>

        <div className='h-full pt-38 m-10'>

            <div id="frontend" className='p-16 w-full text-xl rounded-xl '>
              <h1 className='font-bold text-4xl  text-teal-700 mb-5 '>Frontend</h1>

              <div id='f-list' className='flex mt-10 tablet:inline mobile:inline fold-screen:inline'>

                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>HTML</h1>
                  </div>

                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>CSS</h1>
                  </div>
                
                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>Bootstrap</h1>
                  </div>

                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>Tailwind</h1>

                  </div>

                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>Javascript</h1>
                    
                  </div>

                  <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>React JS</h1>
                    
                  </div>
              </div>
            </div>

            <div  id="backend" className='w-full p-16 text-xl bg-white rounded-xl '>
              <h1 className='font-bold text-4xl   text-teal-700 mb-5'>Backend</h1>

              <div id='b-list' className='flex mt-10 tablet:inline mobile:inline fold-screen:inline'>

                <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2  mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                    <h1 className='font-bold text-slate-300 hover:text-black'>PHP</h1>
                </div>

                <div className=' duration-200 w-2/5 bg-gradient-to-r from-slate-700 rounded-xl p-2 mobile:mb-5 tablet:mb-5 fold-screen:mb-3'>
                <h1 className='font-bold text-slate-300 hover:text-black'>MY SQL</h1>
                </div>

              </div>
                
          
                
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Skills