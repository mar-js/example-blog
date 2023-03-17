import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type TLoading = 'loading' | 'ok' | 'fail'

export interface IPostContextModel {
  loading: TLoading;
  error?: string | unknown;
  data?: IPost;
}

export interface IPostsContextModel {
  loading: TLoading;
  error?: string | unknown;
  data?: IPost[];
}

export interface IPostApi {
  post: IPost;
}

export interface IPostsApi {
  posts: IPost[];
}

export interface IPost {
  createdAt: Date;
  title: string;
  slug: string;
  descriptionTitle: string;
  description: MDXRemoteSerializeResult;
  mainImage: {
    id: string;
    url: string;
  };
}

export interface ILink {
  slug: string;
  text: string;
}
