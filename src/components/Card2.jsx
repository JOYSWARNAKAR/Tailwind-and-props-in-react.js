import React from 'react'

function Card2({username}){
    
// function Card({username, btnText="visit me"}) {
//     console.log(username);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="\src\assets\my imgh.jpg"
    alt=""
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Joy Swarnakar</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <blockquote>
        <figcaption className='font-medium'>
        <div className='text-sky-500 dark:text-sky-400'>
       {username}
        </div>
        <div>
            Product Enginner, India
        </div>
        </figcaption>
    </blockquote>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
 visit me
    </button>
  </div>
</div>
  )
}

export default Card2