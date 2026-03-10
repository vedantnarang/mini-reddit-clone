import { NextResponse } from "next/server";
import { posts } from "@/app/api/posts/route";

export async function GET(request:Request,{params}:any) {
    try {
        const {id}=await params;
        const post=posts.find((p=>p.id===parseInt(id)));
        if(!post){
            return NextResponse.json({success:false,data:"Post not found"},{status:404});
        }
        return NextResponse.json({success:true,data:post},{status:200});}
    catch (error) {
        return NextResponse.json({success:false,data:"Post not found"},{status:500});
    }

}


export async function PUT(request: Request, { params }: any) {
    try {
        const body = await request.json(); 
        console.log(body);

        const { id } = await params;
        const postIndex = posts.findIndex((p) => p.id == id);
        if (postIndex === -1) {
            return NextResponse.json({ success: false, data: "Post not found" }, { status: 404 });
        }
        posts[postIndex] = {
            ...posts[postIndex], 
            title: body.title,   
            content: body.content 
        };
        return NextResponse.json({ success: true, data: posts[postIndex] }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ success: false, data: "Failed to update post" }, { status: 500 });
    }
}