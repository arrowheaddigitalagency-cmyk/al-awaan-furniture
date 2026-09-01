# Al-Awan Furniture Website

Premium custom furniture and interiors website for Al-Awan Furniture (UAE).

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and set:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes | Web3Forms access key for contact form |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production site URL (e.g. `https://al-awanfurniture.com`) |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager ID |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID |

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set **Root Directory** to `.` (this folder is the app root)
4. Add environment variables from `.env.example`
5. Deploy

Vercel auto-detects Next.js. Build command: `npm run build`, Output: `.next`.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Contact

- Phone: +971 56 459 4043
- Email: alawanfurniture0@gmail.com
- Website: https://al-awanfurniture.com
