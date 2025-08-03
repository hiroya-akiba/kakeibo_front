/**
 * ログインAPI呼び出し
 * @param email 
 * @param password 
 * @returns 
 */
export async function login(email: string, password: string) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
}