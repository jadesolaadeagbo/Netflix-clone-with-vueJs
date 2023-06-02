<template>        
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-customRed text-4xl font-bold cursor-pointer'>
        NETFLIX
      </h1>
    </div>
  
      <div class="w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/3f3954fa-4c3d-4566-ace8-e7b9318bf30b/NG-en-20230529-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]  ">
  
        <div class ="w-full h-full bg-black/50 backdrop-brightness-75 pb-20">
          <div className=' w-1/3 mx-auto pt-24'>
            <div className='mx-auto bg-black/75 text-white  pt-16 px-14 pb-20 rounded '>
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
                <button className='bg-customRed py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='pt-20 '>
                  <span className='text-gray-600'>New to Netflix?</span>
                
                  <router-link to="/" class=""> Sign up now.</router-link>
                  </p>
                  <span className="pb-7 pt-4">
                  <p  className='text-gray-600 text-sm leading-tight'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                  <a href="#" class="text-blue-600">Learn more.</a>   </p>               
                  </span>
  
                </form>
              
            </div>
          </div>  
        </div>

        <div class="bg-black/90 z-[100] px-20 pt-5 pb-5">

                <a href="https://help.netflix.com/contactus" class="text-gray-500">Questions?Contact us.</a>

                <span class="flex gap-16 md:gap-48 pt-5 items-center pb-10 text-sm">
                    <div class="flex flex-col text-gray-500 space-y-4">
                        <a href="https://help.netflix.com/support/412">FAQ</a>
                        <a href="https://www.netflix.com/ng/#">Cookie Preferences</a>
                    </div>

                    <div class="flex flex-col text-gray-500 space-y-4 ">
                        <a href="https://help.netflix.com/">Help Center</a>                        
                        <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                        
                    </div>

                    <div class="flex flex-col text-gray-500 space-y-4">
                        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                    </div>                   
                </span>

               
            
        </div>
  
      </div>
    
  
  
  </template>
  
  <script>
  
  </script>
  
  <style>
  
  </style>