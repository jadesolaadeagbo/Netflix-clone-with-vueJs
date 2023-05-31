<template>
    <div class="mt-6">
      <div v-for="(section, index) in accordionSections" :key="index" class="border-b-8 border-black lg:w-10/12 w-11/12">
        <button @click="toggleSection(index)" class="flex items-center justify-between p-7 w-full bg-customGray hover:bg-gray-500/50 text-white">
          <h3 class="lg:text-2xl text-xl">{{ section.title }}</h3>
          
          <svg v-if="section.isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" y1="18" x2="18" y2="6"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>


        </button>
        <div v-show="section.isOpen" class="p-4 lg:text-2xl text-lg bg-customGray border-t border-black">
          <p>{{ section.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accordionSections: [
          { title: 'What is Netflix?', content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial- all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week! ', isOpen: false },
          { title: 'How much does netflix cost?', content: 'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range form #1200 to #4400 a month. No extra costs, no contracts.', isOpen: false },
          { title: 'Where can I watch?', content: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.', isOpen: false },
          { title: 'How do I cancel?', content: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees- start or stop your account anytime.', isOpen: false },
          { title: 'What can I watch on Netflix', content: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.', isOpen: false },
          { title: 'Is Netflix good for kids', content: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you do not want kids to see.', isOpen: false },
        ],
      };
    },
    methods: {
      toggleSection(index) {
        this.accordionSections[index].isOpen = !this.accordionSections[index].isOpen;
      },
    },
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes or your custom styles here */
  </style>
  