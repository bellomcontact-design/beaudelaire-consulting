// /api/pays — le pays du visiteur, lu par Vercel sur son adresse (05/11/2026).
// La page /exrienneux s'en sert pour choisir le paiement : Afrique → mobile money
// en F CFA, ailleurs → carte en euros. Rien n'est enregistré.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const pays = String(req.headers['x-vercel-ip-country'] || '').slice(0, 2).toUpperCase();
  res.end(JSON.stringify({ pays }));
};
