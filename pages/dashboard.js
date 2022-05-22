//@ts-check
import { GetServerSideProps, NextPage } from "next";

import { useRouter } from "next/router";

/**
//  * @returns {NextPage<{ email: string }>}
 * @returns {JSX.Element}
 */
export default function DashboardPage({ email }) {
  const router = useRouter();

  const onLogout = async () => {
    // await logout(); // ログアウトさせる
    router.push("/login"); // ログインページへ遷移させる
  };

  return (
    <div>
      <h1>Dashboard Pages</h1>

      <h2>email: {email}</h2>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
