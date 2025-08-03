import { useState } from "react";
/**
 * 認証フック
 * @returns 
 */
export function useAuth() {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const saveToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, saveToken, logout };
}