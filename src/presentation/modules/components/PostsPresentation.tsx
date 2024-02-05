import { Post } from "@/domain/business/Post";

interface PostsPresentationProps {
  posts: Post[]
}

export function PostsPresentation({ posts }: PostsPresentationProps) {
  return posts.map(post => (
    <>
      <div key={post.id} className="">
        <h1 className="">{post.title}</h1>
        <ul>
          <li>{post.body}</li>
        </ul>
      </div>
    </>
  ))
}