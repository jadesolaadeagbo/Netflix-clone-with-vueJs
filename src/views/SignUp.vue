<template>
  <div>
    <div class="flex items-center justify-between px-10 py-5 border-b">
      <h1 class="text-customRed text-5xl font-bold">NETFLIX</h1>
      <router-link to="/login" class="text-black text-xl font-medium">Sign In</router-link>
    </div>

    <span>
      <p>STEP 1 OF 3</p>
      <p>Welcome back!</p>
      <p>Joining Netflix is easy.</p>
      <p>Enter your password and you'll be watching in no time.</p>
      <p>Email</p>
      <p class="font-medium">{{ inputValue }}</p>

      <form>
        <input type="password" placeholder="Enter your password"/>
      </form>
      <a href="https://www.netflix.com/LoginHelp">Forgot your password?</a>
      <button type="submit">Next</button>
    </span>
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