import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Movie Master',
    short_name: 'Moviemaster',
    description: 'MovieMaster PWA helps you find the latest movies with an easy search by genre, year, and more. It works smoothly on any device, even offline, giving you a great movie browsing experience.',
    start_url: '/',
    display: 'standalone',
    id: 'MovieMaster',
    background_color: '#333333',
    theme_color: '#8936FF',
    icons: [
      {
        purpose: 'maskable',
        src: '/icon512_maskable.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        purpose: 'any',
        src: '/icon512_rounded.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon512_rounded.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/screenshot1.png',
        type: 'image/jpg',
        sizes: '1080x1920'
      },
      {
        src: '/screenshot2.png',
        type: 'image/jpg',
        sizes: '1080x1920'
      },
      {
        src: '/screenshot3.png',
        type: 'image/jpg',
        sizes: '1080x1920'
      }
    ]
  }
}