export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  const url = new URL(req.url);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: 'URL parameter is required' }), {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  // The API token is securely hidden here on the Edge
  const apiToken = 'bb0082e0ede156f2a39bf274f943aa567155b660';
  const vplinkUrl = `https://vplink.in/api?api=${apiToken}&url=${encodeURIComponent(targetUrl)}`;

  try {
    const response = await fetch(vplinkUrl);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to communicate with VPLINK' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
