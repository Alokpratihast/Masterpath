import { NextRequest,NextResponse } from "next/server";
import { BlogService } from "@/services/blogs.service";
import { createBlogSchema } from "@/validation/blogs";





export async function POST(request:NextRequest) {

    try{

        const body=await request.json();

        const prased = createBlogSchema.safeParse(body);

        if(!prased.success){
            return NextResponse.json(
                {
                    success:false,
                    message:"blod validation failed",
                    erros:prased.error.issues,
                },

                {status:400}
            );

        }

        const blog =await  BlogService.createBlog(
            prased.data
        );

        return Response.json(
            {
                success:true,
                message:"Blog created successfully",
                data:blog
            },
            {status:201}
        )

    }catch(error){

        console.error(
      "Create blog error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      { status: 500 }
    );



    }
    
}




export async function GET(request: NextRequest) {
  try {
    const { searchParams } =
      new URL(request.url);

    const page = Number(
      searchParams.get("page") || 1
    );

    const limit = Number(
      searchParams.get("limit") || 10
    );

    const search =
      searchParams.get("search") || undefined;

    const status =
      searchParams.get("status") || undefined;

    const categoryId =
      searchParams.get("categoryId") || undefined;

    const result =
      await BlogService.getBlogs({
        page,
        limit,
        search,
        status: status as
          | "DRAFT"
          | "PUBLISHED"
          | undefined,
        categoryId,
      });

    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Get blogs error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
}