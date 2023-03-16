type TLoading = 'loading' | 'ok' | 'fail'

export interface IPostsContextModel {
  loading: TLoading;
  error?: string | unknown;
  data?: IPost[]
}

export interface IPosts {
  posts: IPost[]
}

export interface IPost {
  title: string;
  linkPost: string;
  descriptionTitle: string;
  mainImage: {
    id: string;
    url: string;
  };
  createdAt: Date;
}

export interface ILink {
  slug: string;
  text: string;
}
