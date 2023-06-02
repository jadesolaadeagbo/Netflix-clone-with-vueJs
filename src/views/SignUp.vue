<template>
  <div class="w-full">
    <div class="flex items-center justify-between px-10 py-5 border-b w-full">
      <h1 class="text-customRed text-5xl font-bold">NETFLIX</h1>
      <router-link to="/login" class="text-black text-xl font-medium">Sign In</router-link>
    </div>

    <div class="mx-auto mt-10 w-1/3">
      <span class="">
        <p class="text-sm">STEP 1 OF 3</p>
        <p class="text-4xl font-medium mt-1">Welcome back!</p>
        <p class="text-4xl font-medium mt-2">Joining Netflix is easy.</p>
        <p class="text-lg mt-4">Enter your password and you'll be watching in no time.</p>
        <p class="mt-5">Email</p>
        <p class="font-medium">{{ inputValue }}</p>

        <form class="w-full">
          <input class="border border-gray-500 w-full my-4 py-4 pl-2" type="password" placeholder="Enter your password"/>
        </form>
        <a href="https://www.netflix.com/LoginHelp" class="text-blue-600">Forgot your password?</a><br>
        <button class="my-5 bg-customRed w-full py-5 text-white text-2xl rounded" type="submit">Next</button>
      </span>
    </div>

    <div class="bg-gray-100 border-t mt-40 z-[100] px-20 pt-5">

<a href="https://help.netflix.com/contactus" class="text-gray-500">Questions?Contact us.</a>

<span class="flex gap-16 md:gap-48 pt-5 items-start pb-10 text-sm">
    <div class="flex flex-col text-gray-500 space-y-3">
        <a href="https://help.netflix.com/support/412">FAQ</a>
        <a href="https://help.netflix.com/legal/privacy">Privacy</a>
    </div>

    <div class="flex flex-col text-gray-500 space-y-3 ">
        <a href="https://help.netflix.com/">Help Center</a> 
        <a href="https://www.netflix.com/signup/password?locale=en-NG#">Cookie Preferences</a>                       
    </div>

    <div class="flex flex-col text-gray-500 space-y-3">
        <a href="https://netflix.shop/">Netflix Shop</a>
        <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
    </div>    
    
    <div class="flex flex-col text-gray-500 space-y-3">
        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
    </div>      

</span>



</div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default{
  computed:{
    inputValue(){
      const store = useStore();
      return store.state.inputValue;
    }
  }
}
</script>