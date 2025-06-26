import React from 'react'

const Choose = () => {
  return (
    <div className='linear-gradient-1 h-fit w-[98vw] m-2 rounded-4xl mt-[400px]'>

        <div className='w-full h-full flex pt-[150px] justify-center text-center'>
            <h1 className='text-gray-400 text-5xl capitalize w-[60%] font-semibold tracking-tighter'>Measurable Improvements in productivity, cost savings, and operational efficiency within the first <span className='italic text-white'>90 days</span>.</h1>
        </div>
        <div className='h-fit flex flex-col space-y-4 items-center mt-[120px]'>
             {[...Array(4)].map((_,i)=>(
                <div className='h-[500px] bg-gray-500 w-[55vw] rounded-4xl flex items-center' key={i} >
                    <div className='h-[95%] w-1/3 my-4 ml-4 mr-2 border-2 border-black'></div>
                    <div className='h-[95%] w-2/3 my-4 mr-4 ml-2 bg-black rounded-3xl'></div>
                </div>
             ))}
        </div>
    </div>
  )
}

export default Choose