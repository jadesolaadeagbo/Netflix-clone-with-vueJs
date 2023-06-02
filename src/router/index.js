import { createRouter, createWebHistory } from 'vue-router'
import LogIn from "../views/LogIn.vue"
import  SignUp from "../views/SignUp.vue"
import  HomeView from "../views/HomeView.vue"
import SignOut from "../views/SignOut.vue"
import ChoosePlan from "../views/ChoosePlan.vue"
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
 
  }, 
  {
    path: '/signout',
    name: 'SignOut',
    component: SignOut,
 
  }, 
  {
    path: '/chooseplan',
    name: 'ChoosePlan',
    component: ChoosePlan,
 
  }, 

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
