import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/featured-posts"; 

const DUMMY_POSTS = [
  {
    slug:'getting-started-with-nextjs',
   title:'Getting Started With Nextjs',
   image:'getting-started-nextjs.png',
   excerpt:'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
   date:'2022-02-10',
  },
  {
    slug:'getting-started-with-nextjs2',
   title:'Getting Started With Nextjs',
   image:'getting-started-nextjs.png',
   excerpt:'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
   date:'2022-02-10',
  },
  {
    slug:'getting-started-with-nextjs3',
   title:'Getting Started With Nextjs',
   image:'getting-started-nextjs.png',
   excerpt:'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
   date:'2022-02-10',
  },
  {
    slug:'getting-started-with-nextjs4',
   title:'Getting Started With Nextjs',
   image:'getting-started-nextjs.png',
   excerpt:'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
   date:'2022-02-10',
  },
];

 function HomePage() {

  return ( 
    <Fragment>
      <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default HomePage;