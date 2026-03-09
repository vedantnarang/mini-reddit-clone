"use client";



import { useState } from 'react';
import React from 'react'

const create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({title,content});
    }
  return (
    <div>
        <h1 className='bold mt-2 text-3xl align-middle flex justify-center'> Create Posts</h1>
        <div className='bg-amber-500 w-50px h-90px flex flex-row justify-center'>
            <input className='border rounded-lg bg-amber-500 m-10' type='text' placeholder='eneter title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input className='border rounded-lg bg-amber-500 m-10' type='text' placeholder='enter content' value={content} onChange={(e)=>setContent(e.target.value)}></input>
            <button type='submit' className='border rounded-lg text-black bg-blue-500 hover:bg-blue-700' onClick={handleSubmit}>Create</button>
        </div>
    </div>
  )
}

export default create