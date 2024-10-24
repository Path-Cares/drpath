import { NextRequest, NextResponse } from 'next/server';

type ResponseData = {
    message: string;
};

// Handler for GET request
export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'Hello from Next.js!' }, { status: 200 });
}
