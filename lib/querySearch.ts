import { client } from "./sanity.client";

export async function querySearch(searchTerm: string) {
  const query =
    searchTerm === ""
      ? `*[_type == "properties"]`
      : `*[_type == "properties" && (title match $term || city match $term)]`;

  const params = searchTerm ? { term: `${searchTerm}*` } : {};

  const response = await client.fetch(query, params);

  return response;
}
