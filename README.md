# short-links

from <https://github.com/pxeger/url-shortener>

```
$ yarn
$ code package.json # 10 - replace with your own ntl funtion endpoint
$ code wrangler.toml # 7 - replace your account id [env.production]
$ yarn deploy # profit!

cloudflare worker short links redirects 엣지 컴퓨팅!

예시)
https://l.mozo.kr/up => https://github.com/mozodev/ubuntu-provision

1. Redirects pattern
https://github.com/mozodev/short-links/blob/main/redirects.json

2. Generate data
https://github.com/mozodev/short-links/blob/main/package.json#L10
gsheet>short-links 탭에 있는 정보를 해시로 만들어 사용
https://hugo-tailpine-dev.netlify.app/.netlify/functions/gsheet/short-links
ntl function 재활용

3. Redirects
https://github.com/mozodev/short-links/blob/main/index.js
요청에 넘어오는 path를 해시 키로 조회해서 값이 있으면 그 값으로 리다이렉트 없으면 404

4. CF DNS CNAME record 추가 
CNAME l.mozo.kr => short-links-production.m0z0.workers.dev

5. 프로비저닝 스크립트 URL 대체 ㅎ
https://github.com/mozodev/ubuntu-provision/commit/79d668b6dc6d98a13b28d5297992c1226a3b4423

https://git.io/
Sorry, we're no longer accepting new links to shorten.
ㅎㅎ
```
