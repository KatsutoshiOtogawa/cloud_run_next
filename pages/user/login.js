// @ts-check

import { useState } from "react";

/**
 * 
 * @returns {JSX.Element}
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
