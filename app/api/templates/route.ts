import { NextResponse } from 'next/server'
import templateList from './templates.json'

export async function GET(request: Request) {
  return NextResponse.json(templateList)
}