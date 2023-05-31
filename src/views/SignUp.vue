<template>        
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
        NETFLIX
      </h1>
  
      <div>
        <button className='text-white pr-4'>Sign Up</button>
        <button
        className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
        >
          Sign Up
        </button>
      </div>
    </div>
  
      <div class="w-full h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ceb3b1eb-2673-4dd9-a6e3-0cd7a5e130ee/8b9932b0-a2a9-4226-b129-5dd7c8eba66a/NG-en-20230522-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center ">
  
        <div class ="w-full h-full bg-black/50 backdrop-brightness-75">
          <div className=' w-1/3 mx-auto pt-24'>
            <div className='mx-auto bg-black/75 text-white  pt-16 px-14 pb-3'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form className='w-full flex flex-col py-4'>
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='pt-8'>
                  <span className='text-gray-600'>New to Netflix?</span>
                
                  <router-link to="/signup" class="text-blue-600">Sign up now.</router-link>
                  </p>
                  <span className="pb-7 pt-4">
                  <p  className='text-gray-600 text-sm leading-tight'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                  <a href="#" class="text-blue-600">Learn more.</a>   </p>               
                  </span>
  
                </form>
              
            </div>
          </div>  
        </div>
  
      </div>
    
  
  
  </template>
  
  <script>
  
  </script>
  
  <style>
  
  </style>