import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * ログインページ
 * @returns 
 */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { saveToken } = useAuth();

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res.success) {
      saveToken(res.data.token);
      navigate("/home");
    } else {
      setError("ログインに失敗しました");
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>ログイン</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}