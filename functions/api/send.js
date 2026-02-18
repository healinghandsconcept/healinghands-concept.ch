export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validation basic
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Champs manquants" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Send email using Resend API via fetch (since Node.js SDK might not fully work in Workers runtime without compatibility flags, fetch is safer)
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Healing Hands Contact <onboarding@resend.dev>', // Update this with your verified domain later
                to: ['contact@healinghands-concept.ch'], // The verified destination email
                reply_to: email,
                subject: `[Site Contact] ${subject} - de ${name}`,
                html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
            })
        });

        const data = await resendResponse.json();

        if (!resendResponse.ok) {
            return new Response(JSON.stringify(data), {
                status: resendResponse.status,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
