<template>
  <div class="w-full">
    <div class="flex items-center justify-between px-10 py-5 border-b w-full">
      <h1 class="text-customRed text-5xl font-bold">NETFLIX</h1>
      <router-link to="/login" class="text-black text-xl font-medium">Sign In</router-link>
    </div>

    <div class="mx-auto mt-10 w-1/3">
      <span class="">
        <p class="text-sm">STEP 1 OF 3</p>
        <p class="text-4xl text-gray-800 font-medium mt-1">Welcome back!</p>
        <p class="text-4xl font-medium mt-2 text-gray-800">Joining Netflix is easy.</p>
        <p class="text-lg mt-4 text-gray-800">Enter your password and you'll be watching in no time.</p>
        <p class="mt-5 text-gray-800">Email</p>
        <p class="font-medium text-gray-800">{{ inputValue }}</p>

        <form class="w-full mt-4" @submit="handleSubmit">
          <input @input="enterInput" class="border border-gray-500 w-full  py-4 pl-2" type="password" v-model="passwordValue" :class="{'border-customRed': showError}" placeholder="Enter your password"/>
          <p class="text-sm text-customRed " v-if="showError">{{ PasswordError }}</p>
        
        <p class="mt-4">
          <a href="https://www.netflix.com/LoginHelp" class="text-blue-600 ">Forgot your password?</a><br>
        </p>
        <button class="my-5 bg-customRed w-full py-5 text-white text-2xl rounded hover:bg-red-600" type="submit">Next</button></form>
      </span>
    </div>

    <SignupFooter/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import SignupFooter from "@/components/SignupFooter.vue"
export default{
  components:{
    SignupFooter
  },
  computed:{
    inputValue(){
      const store = useStore();
      return store.state.inputValue;
    }
  },
  data(){
    return{
      showError: false,
      passwordValue:'',
      PasswordError:''
    }
  },
  methods:{
    enterInput(event){
      event.preventDefault(event);
      if(this.passwordValue.length < 8){
        this.showError = true;
        this.PasswordError = "Password should be at least 8 characters long"
      }
      else{
        this.showError = false;
      }
    },
    handleSubmit(event){
      event.preventDefault();
      if(this.passwordValue===''){
        this.showError = true;
        this.PasswordError = 'Password is required!'
      }
      if(!/[a-z]/.test(this.passwordValue)){
        this.showError = true;
        this.PasswordError = 'Password should contain at least one lower case letter'
      }
      if (!/[A-Z]/.test(this.passwordValue)) {
        this.showError = true;
        this.PasswordError = "Password should contain at least one uppercase letter.";
  }

      if (!/\d/.test(this.passwordValue)) {
        this.showError = true;
        this.PasswordError ="Password should contain at least one digit.";
  }

      if (!/[!@#$%^&*]/.test(this.passwordValue)) {
        this.showError = true;
        this.PasswordError ="Password should contain at least one special character (!, @, #, $, %, ^, &, *).";
  }
      else{
        this.showError= false;
        this.$router.push('/chooseplan')
      }
    }
  },
}
</script>