import { http } from "./_http";

interface LoginPayload {
  userName: string;
  password: string;
}
interface LoginResp {
  code: number;
  success: boolean;
  token: string;
}
export const login = (payload: LoginPayload) => http.post<LoginResp>("/user/login", payload);
