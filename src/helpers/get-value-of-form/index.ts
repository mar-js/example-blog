import { FormEvent } from 'react'

import { IPostData } from 'interfaces'

export const getValueOfForm = (e: FormEvent) => {
  const TARGET = e.target as HTMLFormElement
  const DATA = Object.fromEntries(new FormData(TARGET))
  const { title, description } = DATA as unknown as IPostData

  return {
    title,
    description
  }
}
