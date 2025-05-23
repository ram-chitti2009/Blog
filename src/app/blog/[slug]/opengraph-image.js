import { ImageResponse } from 'next/og'


// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

const titles = {
  'first': 'Hello First!',
  'second': 'Hello Second!'
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }) {
  // Font
  const interFont = await fetch(
    'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap'
  ).then((res) => res.arrayBuffer())

  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 84,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div style={{ margin: 25, fontWeight: 'bold' }}>
            {titles[params.slug] || 'Blog Post'}
          </div>
          <div style={{ margin: 25, fontSize: 32 }}>
            This is a desc of the blog post
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Inter',
            data: interFont,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`Failed to generate image: ${e.message}`)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}