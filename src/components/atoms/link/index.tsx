import LinkNext from 'next/link'

import { ILink } from 'interfaces'

export const Link: React.FC<ILink> = ({ slug, text }) => (
  <LinkNext href={ slug }>
    { text }
  </LinkNext>
)
