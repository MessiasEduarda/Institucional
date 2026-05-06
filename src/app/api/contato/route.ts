import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { nome, email, telefone, assunto, mensagem } = await req.json()

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // use este enquanto não tiver domínio próprio
      to: process.env.EMAIL_DESTINO!,
      subject: `Contato: ${assunto} - ${nome}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 })
  }
}