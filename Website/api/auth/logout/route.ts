import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Clear the cookies to logout the user
  try {
    const cookieStore = cookies();
    const authToken = (await cookieStore).get("auth-token")?.value;

    // Check if auth token is present or not
    if (!authToken)
      return NextResponse.json(
        { message: "No active session found" },
        { status: 200 }
      );

    // If auth token is present then delete it
    (await cookieStore).delete({
      name: "auth-token",
      domain:
        process.env.NODE_ENV === "production"
          ? process.env.DOMAIN
          : "localhost",
      path: "/",
    });

    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging out:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
