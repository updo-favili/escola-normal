import { NextResponse } from 'next/server';

// TODO: enviar o lead para o destino definido (RD Station, que identifica o lead pelo e-mail).
export async function POST(request: Request) {
  const lead = await request.json();
  if (!lead?.responsavel || !lead?.whatsapp || !lead?.email) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  console.log('[lead escola-normal]', lead);
  return NextResponse.json({ ok: true });
}
