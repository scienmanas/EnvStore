import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { JWTPayloadType } from "@/app/lib/definitions";
import { db } from "@/db/index";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  // Get the auth token from cookies
  const cookieStore = cookies();
  const authToken = (await cookieStore).get("auth-token")?.value;

  // If no auth Token
  if (!authToken)
    return NextResponse.json(
      { message: "No session token found" },
      { status: 401 }
    );

  try {
    // Verify the JWT and decode it
    const jwtDecoded = jwt.verify(authToken, process.env.JWT_SECRET ?? "");
    if (!jwtDecoded) {
      // Clear the invalid session token cookie
      (await cookieStore).delete({
        name: "auth-token",
        domain:
          process.env.NODE_ENV === "production"
            ? process.env.DOMAIN
            : "localhost",
        path: "/",
      });
      return NextResponse.json(
        { message: "Invalid session token" },
        { status: 401 }
      );
    }

    // If the JWT is verified, query the database and return user data
    const id: string = (jwtDecoded as JWTPayloadType).id;
    const userData = await db
      .select()
      .from(user)
      .where(eq(user.id, id))
      .limit(1);

    // Checking if user exists, delete the cookie if no user is defined for the jwt
    if (userData.length === 0) {
      // Clear the invalid session token cookie
      (await cookieStore).delete({
        name: "auth-token",
        domain:
          process.env.NODE_ENV === "production"
            ? process.env.DOMAIN
            : "localhost",
        path: "/",
      });
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const userInfo = userData[0];
    return NextResponse.json(
      { name: userInfo.name, email: userInfo.email },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    // Clear the invalid auth token cookie
    (await cookieStore).delete({
      name: "auth-token",
      domain:
        process.env.NODE_ENV === "production"
          ? process.env.DOMAIN
          : "localhost",
      path: "/",
    });

    console.log("Error: ", error);
    return NextResponse.json(
      { message: "Invalid auth token" },
      { status: 500 }
    );
  }
}
