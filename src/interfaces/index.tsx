import { Dispatch, SetStateAction } from 'react'

export interface ICreatePostModel {
  post: IPostData | null;
  setPost: Dispatch<SetStateAction<IPostData | null>>;
}

export interface IPostData {
  title: string;
  description: string;
}
