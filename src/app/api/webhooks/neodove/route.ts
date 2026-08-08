import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("x-neodove-secret");

    if (secret !== process.env.NEODOVE_WEBHOOK_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized webhook request.",
        },
        { status: 401 }
      );
    }

    const payload = await request.json();

    console.log("========== NEODOVE WEBHOOK ==========");
    console.log(JSON.stringify(payload, null, 2));
    console.log("=====================================");

    return NextResponse.json(
      {
        success: true,
        message: "NeoDove webhook received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("NeoDove Webhook Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid webhook payload.",
      },
      { status: 400 }
    );
  }
}