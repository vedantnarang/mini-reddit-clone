"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { NextResponse } from 'next/server';
const Edit = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const router = useRouter();
    const params = useParams();
    const id = params?.id; 
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/posts/${id}`);
                const data = await response.json();
                if (data.success) {
                    setTitle(data.data.title);
                    setContent(data.data.content);
                }
            } catch (error) {
                return NextResponse.json({success:false,data:"failed"},{status:404})
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);
    const handleSubmit = async (e:any) => {
        console.log("vedant") ; 
        e.preventDefault();
        
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content })
            });

            if (response.ok) {
                router.push('/posts');
            } else {
                console.error("Failed to update post");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <h1 className='bold mt-2 text-3xl align-middle flex justify-center'>Edit Post</h1>
            <div className='bg-amber-500 w-50px h-90px flex flex-row justify-center'>
                <textarea 
                    className='border w-70 h-50 rounded-lg bg-amber-500 m-10' 
                    placeholder='Enter Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    className='border w-70 h-50 rounded-lg bg-amber-500 m-10' 
                    placeholder='Enter content' 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className='bg-amber-500 w-50px h-90px flex flex-row justify-center pb-10'>
                <button 
                    type='submit' 
                    className='border rounded-lg text-black bg-blue-500 hover:bg-blue-700 p-3' 
                    onClick={handleSubmit}
                >
                    Update Post
                </button>
            </div>
        </div>
    );
};

export default Edit;