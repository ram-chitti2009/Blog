'use client'

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="my-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-4 ml-4">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="my-2">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    ...components,
  }
}