import { Post } from "../business/Post";

export interface GetPostsUseCase {
  execute(): Promise<Post[]>
}