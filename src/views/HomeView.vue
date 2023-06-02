<template>
    <div class="w-full flex flex-col ">
        <div class="w-full lg:h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/3f3954fa-4c3d-4566-ace8-e7b9318bf30b/NG-en-20230529-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover md:bg-auto bg-center">
            <div class="w-full h-full bg-black/60 ">
                <div class="lg:px-40 py-5 flex justify-between items-center px-10">
                    <h1 class="text-customRed lg:text-5xl text-2xl sm:text-4xl font-bold">NETFLIX</h1>
                    <router-link to="/login" class="text-white bg-customRed px-4 py-1.5 text-sm rounded-md flex font-medium flex-shrink-0 hover:bg-red-700">Sign In</router-link>         
                </div>
                

                <div class="flex justify-center lg:mt-48 sm:mt-28 mt-16">
                    <span class="text-white sm:pb-20 ">
                        <h1 class="lg:text-5xl font-extrabold text-3xl text-center">Unlimited movies, TV shows, and more</h1>
                        <p class="lg:text-2xl lg:my-8 flex justify-center text-xl my-4">Watch anywhere. Cancel anytime.</p>
                        <p class="flex justify-center lg:text-2xl sm:text-xl px-10 text-center">Ready to watch? Enter your email to create or restart your membership.</p>
                        <div class="flex justify-center pt-5">
                            <form @submit="handleSubmit" class="flex gap-2 items-center w-full justify-center  sm:flex-row flex-col">

                                <input :class="{'border-customRed' :showError}"  @focus="isFocused =true" 
                                @blur="isFocused = false"
                                class="sm:w-1/2 w-3/4 bg-black/50 sm:h-14 h-14 pl-5 text-lg border border-gray-500 border-solid rounded text-gray-100 outline-offset-2 outline-2"
                                type="email" v-model="inputValue"
                                @input="updateInputValue" name="email" placeholder="Email address"/>

                                <button type="submit" class="bg-customRed sm:text-2xl text-xl px-5 rounded flex items-center sm:h-full h-12 gap-2">Get Started<i class="fa-solid fa-chevron-right"></i></button>
                            </form>
                            
                        </div>
                        <p v-if="showError" class="text-customRed text-sm pl-36 font-medium"><i class="fa fa-times-circle-o" aria-hidden="true"></i>{{ErrorMessage}} </p>
                        
                    </span> 

                </div>

                
            </div>       
        </div>  

        <div class="border-t-8 border-customGray bg-black text-white">
            <div class="flex lg:flex-row justify-between items-center pt-20 lg:px-36 px-10 pb-16 border-b-8 border-customGray flex-col">
                <span class="text-center lg:text-start w-full lg:w-1/2">
                    <h1 class="lg:text-5xl text-3xl font-extrabold">Enjoy on your TV</h1>
                    <p class="lg:text-2xl text-lg lg:font-medium pt-5 w-full">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>                    
                </span>

                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="">
            </div>
            
            <div class="flex justify-between items-center pt-12 lg:pl-36 lg:pr-12 pb-12 border-b-8 border-customGray lg:flex-row flex-col-reverse">
                <img class="lg:w-1/2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>

                <span class="lg:pr-36 lg:text-start text-center">
                    <h1 class="font-bold lg:text-5xl text-3xl ">Download your shows to watch offline</h1>
                    <p class="lg:text-2xl text-lg pt-6">Save your favorites easily and always have something to watch.</p>
                </span>
            </div>

            <div class="flex lg:justify-start justify-center lg:pt-20 pt-16 lg:px-40 lg:pb-12 pb-28 border-b-8 border-customGray w-full">
                <span class="lg:w-1/2 w-full">
                    <h1 class="lg:text-5xl text-3xl font-bold lg:w-1/2 text-center lg:text-start">Watch everywhere</h1>
                    <p class="lg:text-2xl text-xl lg:w-3/4 lg:pt-8 pt-4 text-center lg:px-0 px-8 lg:text-start">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>                    
                </span>

            </div>

            <div class="flex justify-between items-center pt-12 lg:pl-36 lg:pr-12 pb-12 border-b-8 border-customGray lg:flex-row flex-col-reverse">
                <img src="https://occ-0-299-1168.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABRFH-vdJSR0qkt72Fgqx45jsKfXao7Ds3YDvdyrPvl7kJHMxfm-9aKjlb4EY3ezBGDQdt0WhJOxOOeMcvDfgTw_cg-XWV8mt8AUk.png?r=b36" alt="">

                <span class="lg:pr-20 lg:text-start text-center">
                    <h1 class="font-bold lg:text-5xl text-4xl">Create profiles for kids</h1>
                    <p class="lg:text-2xl pt-6 text-lg lg:px-0 px-8">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </span>
            </div>
            
            <div class=" ">
                <h1 class="lg:text-5xl text-3xl font-bold flex justify-center pt-16">Frequently Asked Questions</h1>

                <div class="lg:ml-40 ml-10">
                        <AccordionComponent/>
                </div>

            </div>

            <div class="pt-10 sm:px-0 px-10 border-b-8 border-customGray">
                <p class="text-center text-xl ">Ready to watch? Enter your email to create or restart your membership.</p>

                <div class="flex justify-center p-5">
                    <form class="flex items-center w-full justify-center sm:flex-row flex-col gap-2 pb-10">
                        
                        <input class="w-3/4 lg:w-4/12 sm:w-1/2 bg-black/50 sm:h-14 h-14 pl-4 text-lg border border-solid rounded bg-gray-800 text-gray-100 border-green-600 ::placeholder text-sm pb-6" placeholder="Email address" type="email" name="email"/>
                        

                        <button class="bg-customRed sm:text-2xl text-xl px-5 rounded flex items-center sm:h-full h-12 gap-2 font-medium">Get Started<i class="fa-solid fa-chevron-right"></i></button>
                    </form>                            
                </div>
            </div>


            <div class="pl-10 pt-5 md:pl-36 md:pt-16 text-md pb-20">
                <a href="https://help.netflix.com/contactus" class="underline text-gray-300 font-medium">Questions?Contact us.</a>

                <span class="flex gap-16 md:gap-48 pt-5 items-center pb-10">
                    <div class="flex flex-col underline text-gray-300 space-y-4">
                        <a href="https://help.netflix.com/support/412">FAQ</a>
                        <a href="https://media.netflix.com/">Media Center</a>
                        <a href="https://www.netflix.com/watch">Ways to Watch</a>
                        <a href="https://www.netflix.com/ng/#">Cookie Preferences</a>
                        <a href="https://fast.com/">Speed Test</a>
                    </div>

                    <div class="flex flex-col underline text-gray-300 space-y-4 ">
                        <a href="https://help.netflix.com/">Help Center</a>
                        <a href="http://ir.netflix.com/">Investor Relations</a>
                        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                        <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                        <a href="https://help.netflix.com/legal/notices/">Legal Notices</a>
                    </div>

                    <div class="flex flex-col underline text-gray-300 space-y-4">
                        <a href="https://www.netflix.com/youraccount">Account</a>
                        <a href="https://jobs.netflix.com/jobs">Jobs</a>
                        <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                        <a href="https://help.netflix.com/contactus">Contact Us</a>
                        <a href="https://www.netflix.com/ng/browse/genre/839338">Only on Netflix</a>
                    </div>                   
                </span>

                <button class=" border border-gray-300 rounded px-3"><i class="fa fa-globe" aria-hidden="true"></i> English <i class="fa-solid fa-caret-down"></i></button>

                <p class="text-gray-300 pt-5">Netflix Nigeria</p>
            </div>


        </div>            
    </div>


</template>

<script>
import AccordionComponent from '@/components/AccordionComponent.vue';
import {mapMutations} from 'vuex'

export default{
    components:{
        AccordionComponent
    },
    data(){
        return{
            inputValue:'',
            showError: false,
            ErrorMessage:''
        }
    },
    computed:{
        inputFieldValue:{
            get(){
                return this.$store.state.inputValue;
            },
            set(value){
                this.updateInputValue(value);
            },
        },
    },
    methods:{
        handleSubmit(event){

            event.preventDefault();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if(this.inputValue.trim()===''){
                this.showError = true;
                this.ErrorMessage = 'Email is required!'
            } else if(!emailRegex.test(this.inputValue)) {
                this.showError = true;
                this.ErrorMessage = 'Please enter a valid email address'
            }
            else{
                this.showError = false;

                this.$router.push('/signup')
            }
        },
        ...mapMutations(['setInputValue']),
        updateInputValue(event){
            const value = event.target.value;
            this.setInputValue(value)
        },
    },
}
</script>