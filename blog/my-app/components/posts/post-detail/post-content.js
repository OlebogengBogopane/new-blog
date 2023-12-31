import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css"

const DUMMY_POSTS = {
        slug:'getting-started-with-nextjs',
       title:'Getting Started With Nextjs',
       image:'getting-started-nextjs.png',
       date:'2022-02-10',  
       content:'# This is a first post'
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`

  return (
    <article className={classes.content}>
    <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>  
    <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent