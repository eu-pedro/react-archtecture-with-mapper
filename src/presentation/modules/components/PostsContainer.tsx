import { makeGetPost } from "@/infra/factories/makeGetPost";
import { PostsPresentation } from "./PostsPresentation";

const getPosts = makeGetPost()

export async function PostsContainer  ()  {

  const posts = await getPosts.execute()

  return (
    <div className="w-full h-full bg-slate-600">
      <PostsPresentation posts={posts} />
    </div>
  )
};
