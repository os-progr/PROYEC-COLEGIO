fetch('https://proyec-colegio-backend.vercel.app/auth/seed', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'admin@colegio.com', password: 'admin123', role: 'ADMIN' })
}).then(res => res.json()).then(console.log).catch(console.error);
