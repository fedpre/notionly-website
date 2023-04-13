import { NextResponse } from 'next/server'
import testimonialsList from './testimonials.json'

export async function GET(request: Request) {
  return NextResponse.json(testimonialsList)
}