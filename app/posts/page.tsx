

import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";

export const dynamic = 'force-dynamic';

const PostsPage = async () => {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  const posts = await res.json();

  return (
    <div>
        <div className='mt-3 max-h-screen max-width-screen'>
            <h1 className='bold text-3xl align-middle flex justify-center'>POSTS</h1>
            <div className='bg-amber-500 flex flex-col items-center'>
                {posts.map((post:any) => (
                    <div key={post.id} className='flex flex-col p-2 m-2 max-w-3xl w-full'>
                        <h2 className='font-bold text-xl text-cyan-200'>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link href={`/posts/${post.id}/edit`} className="flex flex-row items-center gap-2 mt-2 text-indigo-700 hover:text-indigo-900 w-fit">
                            <FaEdit />
                            <span>Edit post</span>
                        </Link>
                    </div>
                ))}
                <Link href="/posts/create" className='rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 '>Create new post</Link >
            </div>
        </div>
    </div>
  )
}

export default PostsPage