// @ts-check

import { useState } from "react";

/**
 * 
 * @returns {JSX.Element}
 */
export default function PurchasePage({csrfToken}) {

  return (
      
    <div>
      {/* 購入するものをリストで見せる。 */}
      <h1>購入確認画面</h1>
      <form action="/user/login" method="post" >
        <input type="hidden" name="_csrf" value={csrfToken} />
        <div>
          <label htmlFor="email">Email:</label>

          <input
            id="merchandise1"
            name="merchandise1"
            value="helloworld"
          />
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
};

/**
 * 
 * @param {{req: import('express').Request; res: import('express').Response}} param0 
 * @returns {Promise<{props: {csrfToken: string;};}>}
 */
export async function getServerSideProps({ req, res }) {

  const csrfToken = req.csrfToken();
  return {
    props: {
      csrfToken
    },
  }
}
