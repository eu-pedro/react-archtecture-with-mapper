import { GetPostsGatewayHttp } from "../gateways/get-posts-gateway-http";
import { FetchHttpClientAdapter } from "../http/fetch-http-client-adapter";

export function makeGetPost() {
  const client = new FetchHttpClientAdapter('https://jsonplaceholder.typicode.com')
  const getPostGateway = new GetPostsGatewayHttp(client)

  return getPostGateway
}