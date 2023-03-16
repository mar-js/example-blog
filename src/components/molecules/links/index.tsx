import { LINKS } from 'utils'

import { Link } from 'components/atoms'

export const Links: React.FC = () => (
  <ul className="flex justify-center items-center">
    { LINKS.map(link => (
      <li className="mx-2" key={ link.slug }>
        <Link { ...link } />
      </li>
    )) }
  </ul>
)
