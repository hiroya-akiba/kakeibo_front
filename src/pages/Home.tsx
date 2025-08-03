import { useAuth } from "../hooks/useAuth";

/**
 * ホーム画面
 * @returns 
 */
export default function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>ホーム画面</h2>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}