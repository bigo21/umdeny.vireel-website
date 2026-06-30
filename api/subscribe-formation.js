/* global process */
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, country, currency, plan, product_id, amount } = req.body ?? {};
  if (!name || typeof name !== 'string' || name.trim().length < 2)
    return res.status(400).json({ error: 'invalid name' });
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email))
    return res.status(400).json({ error: 'invalid email' });

  const isAccompagnement = plan === 'accompagnement';
  const planLabel = isAccompagnement ? 'Formation + Accompagnement' : 'Formation Bourse BVMAC';

  // Enregistrement du lead dans Supabase
  try {
    await supabase.from('formation_leads').insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      country: country?.trim() || null,
      currency: currency || 'USD',
      plan: isAccompagnement ? 'accompagnement' : 'formation',
      product_id: product_id || null,
      amount: amount || null,
    });
  } catch (err) {
    console.error('[subscribe-formation] Supabase insert failed:', err);
  }

  // Email de confirmation au prospect
  await resend.emails.send({
    from: 'VIREEL <formation@umdeny.com>',
    to: email.trim(),
    subject: 'Votre inscription — Formation Bourse BVMAC',
    html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A">
             <p style="font-size:16px">Bonjour ${name.trim()},</p>
             <p>Nous avons bien reçu votre demande d'inscription à la <strong>${planLabel}</strong>.</p>
             <p>Notre équipe vous recontactera <strong>sous 24h</strong> à cette adresse pour finaliser votre inscription et vous communiquer les instructions de paiement (Mobile Money, virement, crypto ou paiement en ligne).</p>
             <p>Des questions en attendant ? Écrivez-nous : <a href="mailto:formation@umdeny.com" style="color:#E8500A;font-weight:600">formation@umdeny.com</a></p>
             <p style="margin-top:32px;color:#8C8479;font-size:13px">— Vireel<br>formation@umdeny.com</p>
           </div>`,
  });

  // Notification interne à l'équipe
  await resend.emails.send({
    from: 'VIREEL Leads <noreply@umdeny.com>',
    to: 'formation@umdeny.com',
    subject: `Nouvelle inscription Formation Bourse : ${name.trim()} (${planLabel})`,
    html: `<div style="font-family:sans-serif;color:#1A1A1A">
             <p><b>Nom :</b> ${name.trim()}</p>
             <p><b>Email :</b> ${email.trim()}</p>
             <p><b>Téléphone :</b> ${phone?.trim() || '—'}</p>
             <p><b>Pays :</b> ${country?.trim() || '—'}</p>
             <p><b>Formule :</b> ${planLabel}</p>
             <p><b>Devise :</b> ${currency || 'USD'}</p>
             <p><b>Date :</b> ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Libreville' })}</p>
           </div>`,
  });

  return res.status(200).json({ ok: true });
}
