import {
  BlockquoteHTMLAttributes,
  ClassAttributes,
  HTMLAttributes,
  OlHTMLAttributes
} from 'react'

export const MDXComponents = {
  h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-4xl" { ...props }>
      { props.children }
    </h3>
  ),
  blockquote: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLQuoteElement> & BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="pl-3 text-[#64709c] border-l-8 border-[#d0d5e7]">
      { props.children }
    </blockquote>
  ),
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-2xl my-4">
      { props.children }
    </p>
  ),
  ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc text-lg">
      { props.children }
    </ul>
  ),
  ol: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement> & OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-disc text-lg">
      { props.children }
    </ol>
  )
}
