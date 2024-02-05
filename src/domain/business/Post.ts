interface IPostProps {
  userId: string
  id: string
  title: string
  body: string
}

export class Post {
  constructor(private readonly props: IPostProps ){}

  get userId() {
    return this.props.userId
  }

  get id() {
    return this.props.id
  }

  get title() {
    return this.props.title
  }

  get body () {
    return this.props.body
  }
}