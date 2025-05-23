'use client'

import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: props => <h2 className="text-3xl font-bold my-3" {...props} />,
  p: props => <p className="my-2" {...props} />,
  ul: props => <ul className="list-disc pl-6 mb-4" {...props} />,
  li: props => <li className="mb-1" {...props} />
}

export default function MDXWrapper({ children }) {
  return (
    <MDXProvider components={components}>
      <article className="prose max-w-none">
        {children}
      </article>
    </MDXProvider>
  )
}