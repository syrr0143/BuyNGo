import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import prismadb  from '../../../lib/prismadb'
export async function POST(req: NextRequest , res : NextResponse) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name } = body;
        if (!userId) {
            return new NextResponse("Unauthorised", { status:401})
        }
        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }
        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })
        return NextResponse.json({
            message: "Store created success",
            store: store
        }, {
            status:201
        })
    } catch (error) {
        console.log('[STORES POST]: ',error);
        return new NextResponse('Internal server error ',{status:500 })
    }
}