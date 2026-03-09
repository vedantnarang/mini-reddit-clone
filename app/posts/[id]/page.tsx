import React from 'react'

const PostPage =async  ({params}) => {
    const {id}=await params;
    console.log(id);
    const res=await fetch(`http://localhost:3000/api/posts/${id}`);
    const data=await res.json();

  return (
    <div>
        <div className='mt-3 max-h-screen max-width-screen'>
            <h1 className='bold text-3xl align-middle flex justify-center'>POST ID: {id}</h1>
            <div className='bg-amber-500'>
                <h2 className='text-bold text-cyan-200 text-2xl m-2'>{data.data.title}</h2>
                <p className='m-2'>{data.data.content}</p>
                
            </div>

        </div>        
    </div>
  )
}

export default PostPage