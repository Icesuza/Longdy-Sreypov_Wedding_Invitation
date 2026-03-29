import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const messages =
      await sql`SELECT * FROM guestmssg ORDER BY created_at DESC`;

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const { name, message } = await request.json();

    const result =
      await sql`     INSERT INTO guestmssg (guest_name, guest_wish)
      VALUES (${name}, ${message})
      RETURNING *;
    `;
    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to post message" },
      { status: 500 },
    );
  }
}
