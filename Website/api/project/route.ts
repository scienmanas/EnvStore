import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { db } from "@/db/index";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { JWTPayloadType } from "@/app/lib/definitions";
import { z } from "zod";

// This function will act as getting individual as well as details of all the entries - encrypted descrypted in form of URL
export async function GET(req: NextRequest) {
  const { userId, status, message } = await authMiddleware();
  if (status === "fail")
    return NextResponse.json({ message: message }, { status: 401 });
  // Check if userId is available
  if (!userId)
    return NextResponse.json({ message: "User ID not found" }, { status: 400 });

  // Get the search params from the request URL
  const { searchParams } = new URL(req.url);
  // Example: get 'apikey' and 'pass' from query params
  const query = searchParams.get("q");

  return NextResponse.json(
    {
      message: "Received query params",
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {}

export async function PATCH(req: NextRequest) {}

export async function DELETE(req: NextRequest) {}

// Auth Middleware
async function authMiddleware(): Promise<{
  status: "success" | "fail";
  message: string;
  userId: string | null;
}> {
  const cookieStore = cookies();
  const authToken = (await cookieStore).get("auth-token")?.value;
  if (!authToken)
    return {
      status: "fail",
      message: "No session token found",
      userId: null,
    };

  try {
    // Verify the JWT
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);
    if (!decoded) {
      (await cookieStore).delete("auth-token");
      return {
        status: "fail",
        message: "Invalid session token",
        userId: null,
      };
    }

    // If the token is valid, return the decoded user data
    const id = (decoded as JWTPayloadType).id;
    return {
      status: "success",
      message: "Session is valid",
      userId: id,
    };
  } catch (error) {
    (await cookieStore).delete({
      name: "auth-token",
      domain:
        process.env.NODE_ENV === "production"
          ? process.env.DOMAIN
          : "localhost",
      path: "/",
    });
    return {
      status: "fail",
      message: "Invalid session token",
      userId: null,
    };
  }
}
