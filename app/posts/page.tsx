

import React from 'react'

const posts = [
    { id: 1, title: "First Post", content: "Hello world" },
    { id: 2, title: "Next.js is cool", content: "Learning routing" }
]

const PostsPage = async () => {
  return (
    <div>
        <div className='mt-3 max-h-screen max-width-screen'>
            <h1 className='bold text-3xl align-middle flex justify-center'>POSTS</h1>
            <div className='bg-amber-500'>
                {posts.map((post) => (
                    <div key={post.id} className='flex flex-col p-2 m-2'>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PostsPage