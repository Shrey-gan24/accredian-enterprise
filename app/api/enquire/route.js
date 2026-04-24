import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'leads.json');

function readLeads() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const leads = readLeads();
    const newLead = { 
      id: Date.now(), 
      ...body, 
      timestamp: new Date().toISOString() 
    };
    leads.push(newLead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process lead' }, { status: 500 });
  }
}
