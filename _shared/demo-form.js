const WEB3FORMS_ACCESS_KEY = 'e06d54ca-4593-4bf6-b1d4-2b6c9cf99460';

document.getElementById('demo-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('demo-status');
  const btn = form.querySelector('button[type="submit"]');
  const data = new FormData(form);

  const firstName = (data.get('first_name') || '').toString().trim();
  const lastName = (data.get('last_name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();

  if (!firstName || !lastName || !email) {
    status.textContent = 'Please fill in all required fields.';
    status.className = 'error';
    return;
  }

  btn.disabled = true;
  status.textContent = 'Sending...';
  status.className = '';

  const messageParts = [
    data.get('message') || '',
    data.get('company') ? `Company: ${data.get('company')}` : '',
    data.get('role') ? `Role: ${data.get('role')}` : '',
    data.get('buyer_type') ? `Buyer type: ${data.get('buyer_type')}` : '',
    data.get('product_interest') ? `Product: ${data.get('product_interest')}` : '',
  ].filter(Boolean).join('\n\n');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Demo request from kWh preview site',
        from_name: `${firstName} ${lastName}`.trim(),
        email,
        message: messageParts || '(no message)',
        botcheck: data.get('botcheck') || '',
      }),
    });
    const json = await res.json();
    if (res.ok && json.success) {
      status.textContent = 'Thank you. We will be in touch shortly to schedule your demo.';
      status.className = 'success';
      form.reset();
    } else {
      status.textContent = json.message || 'Something went wrong. Please email arham@kwhelectric.io.';
      status.className = 'error';
    }
  } catch {
    status.textContent = 'Network error. Please try again or email arham@kwhelectric.io.';
    status.className = 'error';
  }
  btn.disabled = false;
});
