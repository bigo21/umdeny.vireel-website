/* global process */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const PDF_PATH = '/Guide_Investisseur_BVMAC_Vireel_2026_Final.pdf';

export default async function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    null;

  const source = req.query?.src || 'direct';

  try {
    await supabase.from('downloads').insert({
      ip,
      user_agent: req.headers['user-agent'] || null,
      referer: req.headers['referer'] || null,
      source,
    });
  } catch (err) {
    console.error('[download] Supabase insert failed:', err);
  }

  res.redirect(302, PDF_PATH);
}
