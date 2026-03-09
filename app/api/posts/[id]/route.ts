import { NextResponse } from "next/server";
import { posts } from "@/app/api/posts/route";

export async function GET(request:Request,{params}) {
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