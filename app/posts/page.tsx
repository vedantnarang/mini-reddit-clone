

import React from 'react'

export const dynamic = 'force-dynamic';

const PostsPage = async () => {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  const posts = await res.json();

  return (
    <div>
        <div className='mt-3 max-h-screen max-width-screen'>
            <h1 className='bold text-3xl align-middle flex justify-center'>POSTS</h1>
            <div className='bg-amber-500'>
                {posts.map((post:any) => (
                    <div key={post.id} className='flex flex-col p-2 m-2'>
                        <h2 className='font-bold text-xl text-cyan-200'>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PostsPage