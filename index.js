import redirects from './redirects.json';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const path = new URL(request.url).pathname.substring(1);
  if (path in redirects) return new Response(null, {status: 308, headers: {location: redirects[path]}});
  else return new Response('404 not found', {status: 404});
}
