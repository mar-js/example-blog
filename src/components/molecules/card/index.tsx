import Link from 'next/link'
import Image from 'next/image'

import { IPost } from 'interfaces'

export const Card: React.FC<IPost> = ({
  linkPost,
  title,
  descriptionTitle,
  mainImage: { id, url },
  createdAt
}) => (
  <Link className="shadow-xl hover:shadow-2xl rounded" href={ `posts/${linkPost}` }>
    <article className="w-full h-full">
      <div className="w-full h-[220px] relative">
        <Image
          fill
          src={ url }
          alt={ id }
        />
      </div>
      <div className="px-3 py-2">
        <h2 className="text-xl mb-3">{ title }</h2>
        <h4 className="mb-1">{ (new Date(createdAt)).getFullYear() }</h4>
        <p className="text-sm">{ descriptionTitle }</p>
      </div>
    </article>
  </Link>
)
