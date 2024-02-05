import { Post } from "@/domain/business/Post";
import { PostDTO } from "./get-posts-dto";

export class PostMapper {
  static toDomain(raw: PostDTO){
    return new Post({
      userId: raw.userId,
      body: raw.body,
      id: raw.id,
      title: raw.title,
    })
  }
}