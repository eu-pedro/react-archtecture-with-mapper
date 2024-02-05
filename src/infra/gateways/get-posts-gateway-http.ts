import { GetPostsUseCase } from "@/domain/use-cases/get-post-usecase";
import { HttpClient } from "../http/http-client";
import { Post } from "@/domain/business/Post";
import { PostResponse } from "./get-posts-dto";
import { PostMapper } from "./get-posts-mapper";

export class GetPostsGatewayHttp implements GetPostsUseCase {
  constructor(private readonly client: HttpClient) {}

  async execute(): Promise<Post[]> {
    const response = await this.client.get<PostResponse[]>('/posts')
    return response.map(PostMapper.toDomain)
  }
}