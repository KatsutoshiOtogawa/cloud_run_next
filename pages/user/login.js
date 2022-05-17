// @ts-check

import { FormEvent } from "react";

// import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";


/**
 * 
//  * @returns {NextPage}
 * @returns {JSX.Element}
 */
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * 
   * @param {FormEvent} event
   */
  const onSubmit = async (event) => {
    // event.preventDefault(); // デフォルトの<form />の挙動を無効にする
    // await login(email, password); // email・passwordを使ってログイン
    // router.push("/dashboard"); // ダッシュボードページへ遷移させる
  };

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const inputEmail = async (event) => {

    setEmail(event.currentTarget.value);
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const inputPassword = async (event) => {
    setPassword(event.currentTarget.value);
  }
  return (
      
    <div>
      <h1>ログイン画面</h1>

      <form action="/user/login" method="post" >
        <input type="hidden" name="_csrf" value="{{csrfToken}}" />
        {/* csrfProtection */}
        {/* { csrfToken: req.csrfToken() } */}
        <div>
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            name="email"
            value={email}
            onInput={inputEmail}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>

          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onInput={inputPassword}
          />
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
};
