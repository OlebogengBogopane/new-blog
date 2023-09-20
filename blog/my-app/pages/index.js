import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/featured-posts"; 

 function HomePage() {

  return ( 
    <Fragment>
      <Hero />
        <FeaturedPosts />
    </Fragment>
  )
}

export default HomePage;