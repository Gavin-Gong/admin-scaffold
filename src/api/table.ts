import { http, Resp } from "./_http";
export interface QueryTablePayload {
  title?: string;
}
export type QueryTableResp = Array<{
  music: string;
  title: string;
  desc: string;
  age: number;
  name: string;
  createdAt: string;
  id: string;
}>;
export async function queryTable(payload: QueryTablePayload = {}) {
  return http.get<Resp<QueryTableResp>>("/table/query", {
    params: payload
  });
}
