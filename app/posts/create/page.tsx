"use client";
import { useState } from 'react';
import React from 'react'
import { useRouter } from 'next/navigation';

const create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content })
        });

        if (response.ok) {
            router.push('/posts');
            router.refresh();
        } else {
            console.error("Failed to create post");
        }
    }
  return (
    <div>
        <h1 className='bold mt-2 text-3xl align-middle flex justify-center'> Create Posts</h1>
        <div className='bg-amber-500 w-50px h-90px flex flex-row justify-center'>
            <textarea className='border w-70 h-50 rounded-lg bg-amber-500 m-10' type='text' placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}></textarea>
            <textarea className='border w-70 h-50 rounded-lg bg-amber-500 m-10' type='text' placeholder='Enter content' value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
        <div className='bg-amber-500 w-50px h-90px flex flex-row justify-center'>
            <button type='submit' className='border rounded-lg text-black bg-blue-500 hover:bg-blue-700 p-3' onClick={handleSubmit}>Create</button>
        </div>
    </div>
  )
}

export default create