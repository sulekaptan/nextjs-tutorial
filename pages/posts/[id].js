//localhost:3000/posts/1 burda her ne gelirse buraya yönlendirir.
import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`
    )
    const posts = await res.json()

    const paths = posts.map(post =>{
        return {
            params: {id: post.id.toString()}
        }
    })

    return{
        paths, 
        fallback: false //gittiği urlde veri yoksa 404 döndürür.
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )
    const post = await res.json()

    return{
        props: {
            post,
        }
    }
}
export default PostDetails

