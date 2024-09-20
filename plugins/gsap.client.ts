import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(ScrollTrigger)
    return{
        provide: {
            gsap,
            scrollTrigger: ScrollTrigger
        }
    }
})