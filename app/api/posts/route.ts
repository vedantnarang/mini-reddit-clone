import { NextResponse } from "next/server";

export let posts = [
  {
    id: 1,
    title: "Why I Started Learning Next.js",
    content: "I wanted to understand how modern full-stack frameworks work and how routing, APIs, and UI can live in the same project.",
    votes: 5,
    createdAt: "2026-01-01"
  },
  {
    id: 2,
    title: "React vs Next.js",
    content: "React is a library for building UI while Next.js is a framework that adds routing, server rendering, and backend capabilities.",
    votes: 8,
    createdAt: "2026-01-02"
  },
  {
    id: 3,
    title: "Understanding Server Components",
    content: "Server components run on the server and allow us to fetch data directly without sending extra JavaScript to the browser.",
    votes: 12,
    createdAt: "2026-01-03"
  },
  {
    id: 4,
    title: "My First Route Handler",
    content: "Today I created my first GET and POST route handler in Next.js. It felt like building a mini backend inside the same project.",
    votes: 3,
    createdAt: "2026-01-04"
  },
  {
    id: 5,
    title: "Why File Based Routing Is Powerful",
    content: "Instead of manually defining routes, Next.js lets us create routes using folders. It keeps the project organized.",
    votes: 9,
    createdAt: "2026-01-05"
  },
  {
    id: 6,
    title: "Learning Full Stack Development",
    content: "Full stack development requires understanding both frontend UI and backend logic like APIs and databases.",
    votes: 6,
    createdAt: "2026-01-06"
  },
  {
    id: 7,
    title: "Building My First Mini Reddit Clone",
    content: "I’m building a simple Reddit clone using Next.js, route handlers, and MongoDB to understand real world architecture.",
    votes: 11,
    createdAt: "2026-01-07"
  },
  {
    id: 8,
    title: "Why Developers Love MongoDB",
    content: "MongoDB stores data in flexible JSON-like documents which works well with JavaScript based applications.",
    votes: 4,
    createdAt: "2026-01-08"
  },
  {
    id: 9,
    title: "Understanding API Design",
    content: "Good API design uses REST principles like GET for reading, POST for creating, PUT for updating and DELETE for removing data.",
    votes: 7,
    createdAt: "2026-01-09"
  },
  {
    id: 10,
    title: "The Challenge of Learning Frameworks",
    content: "The hardest part of learning frameworks is not the syntax but understanding the architecture and data flow.",
    votes: 10,
    createdAt: "2026-01-10"
  }
];

export async function POST(request:Request){
    try {
        const body=await request.json();

        const newPost={
            id:posts.length+1,
            title:body.title,
            content:body.content,
            votes:0,
            createdAt:new Date().toISOString().split('T')[0]
        };
        posts.push(newPost);
        return NextResponse.json(
            {message:"post craeted!!"},
            {status:201}
        )
        
    } catch (error) {
        return NextResponse.json({
            error:"Failed"},
            {status:500}
        );
        
    }
}