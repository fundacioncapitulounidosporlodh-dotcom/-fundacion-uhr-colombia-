import { createHash, timingSafeEqual } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import path from 'node:path';

const CLAVE_HASH = '5ce66208449b5c1e97393db7cf4265640834a8e741092d7c8efd22158c4469d3';
const ARCHIVO = path.join(process.cwd(), 'private', 'manual-veedurias.pdf');

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response('Método no permitido', {
      status: 405,
      headers: { Allow: 'POST' },
    });
  }

  let clave;
  try {
    const body = await request.json();
    clave = typeof body.clave === 'string' ? body.clave : '';
  } catch {
    return new Response('Solicitud inválida', { status: 400 });
  }

  const claveRecibida = createHash('sha256').update(clave, 'utf8').digest();
  const claveEsperada = Buffer.from(CLAVE_HASH, 'hex');

  if (!timingSafeEqual(claveRecibida, claveEsperada)) {
    return new Response('Clave incorrecta', {
      status: 401,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const archivo = createReadStream(ARCHIVO);

  return new Response(Readable.toWeb(archivo), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="manual-veedurias.pdf"',
      'Cache-Control': 'private, no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex, noarchive, nosnippet',
    },
  });
};

export const config = {
  path: '/descargar-manual-veedurias',
  method: 'POST',
};
