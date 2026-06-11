import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const PDF_URL = 'https://vireel.umdeny.com/Guide_Investisseur_BVMAC_Vireel_2026_Final.pdf';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, lang } = req.body ?? {};
  if (!name || typeof name !== 'string' || name.trim().length < 2)
    return res.status(400).json({ error: 'invalid name' });
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email))
    return res.status(400).json({ error: 'invalid email' });

  const isFr = lang !== 'en';

  // Email au prospect avec lien de téléchargement
  await resend.emails.send({
    from: 'VIREEL <formation@umdeny.com>',
    to: email.trim(),
    subject: isFr
      ? "Votre Guide de l'Investisseur en Bourse — VIREEL"
      : "Your Investor's Guide to the Stock Market — VIREEL",
    html: isFr
      ? `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A">
           <p style="font-size:16px">Bonjour ${name.trim()},</p>
           <p>Voici votre <strong>Guide de l'Investisseur en Bourse</strong> :</p>
           <p style="margin:24px 0">
             <a href="${PDF_URL}" target="_blank"
                style="display:inline-block;background:#E8500A;color:#fff;padding:14px 28px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none">
               Télécharger le guide (PDF)
             </a>
           </p>
           <p>Ce guide couvre les bases indispensables pour comprendre, accéder et investir sur les marchés boursiers d'Afrique centrale — à votre rythme.</p>
           <p><a href="https://vireel.umdeny.com" style="color:#E8500A;font-weight:600">Notre site</a> sera de nouveau disponible bientôt avec nos formations complètes.</p>
           <p style="margin-top:32px;color:#8C8479;font-size:13px">— Vireel<br>formation@umdeny.com</p>
           <p style="font-size:11px;color:#aaa;margin-top:24px">Les performances citées sont basées sur des cas réels et ne constituent pas une garantie de résultats. Tout investissement comporte des risques.</p>
         </div>`
      : `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A">
           <p style="font-size:16px">Hello ${name.trim()},</p>
           <p>Here is your <strong>Investor's Guide to the Stock Market</strong>:</p>
           <p style="margin:24px 0">
             <a href="${PDF_URL}" target="_blank"
                style="display:inline-block;background:#E8500A;color:#fff;padding:14px 28px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none">
               Download the guide (PDF)
             </a>
           </p>
           <p>This guide covers everything you need to understand, access, and invest in Central African stock markets — at your own pace.</p>
           <p><a href="https://vireel.umdeny.com" style="color:#E8500A;font-weight:600">Our site</a> will be back up soon with our complete training programs.</p>
           <p style="margin-top:32px;color:#8C8479;font-size:13px">— Vireel<br>formation@umdeny.com</p>
           <p style="font-size:11px;color:#aaa;margin-top:24px">Performance examples cited are based on real cases and do not constitute a guarantee of results. All investments involve risk.</p>
         </div>`,
  });

  // Notification interne à l'équipe
  await resend.emails.send({
    from: 'VIREEL Leads <noreply@umdeny.com>',
    to: 'formation@umdeny.com',
    subject: `Nouveau lead : ${name.trim()}`,
    html: `<div style="font-family:sans-serif;color:#1A1A1A">
             <p><b>Nom :</b> ${name.trim()}</p>
             <p><b>Email :</b> ${email.trim()}</p>
             <p><b>Téléphone :</b> ${phone?.trim() || '—'}</p>
             <p><b>Langue :</b> ${lang || 'fr'}</p>
             <p><b>Date :</b> ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Libreville' })}</p>
           </div>`,
  });

  return res.status(200).json({ ok: true });
}
