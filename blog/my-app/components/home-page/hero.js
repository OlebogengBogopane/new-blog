import Image from 'next/image'

import classes from '../hero.module.css'

function Hero() {
  return (
  <section className={classes.hero}>
<div className={classes.image}>
 <Image 
 src="/images/site/Ole.jpg" 
 alt='an image showing Ole'
  width={300} 
  height={300}
  />
</div>
<h1>Hi, I'm Olebogeng</h1>
  <p>
    I am a junior Software dwvwloper and this is a new blog for anything tech related 
  </p>
  </section>
  )
}

export default Hero