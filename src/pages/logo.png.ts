const LOGO_SOURCE = 'https://raw.githubusercontent.com/mariamussaofficial/isaya-muunganisha-wachumba/main/Logo.png';

export async function GET() {
  const response = await fetch(LOGO_SOURCE);

  if (!response.ok) {
    return new Response('Logo unavailable', { status: 502 });
  }

  const contentType = response.headers.get('content-type') || 'image/png';
  const body = await response.arrayBuffer();

  return new Response(body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
