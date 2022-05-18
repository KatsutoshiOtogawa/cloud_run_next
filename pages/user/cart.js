// @ts-check

import { useState } from "react";

/**
 * 
 * @returns {JSX.Element}
 */
export default function PurchasePage({}) {

  return (
      
    <div>
      {/* ここでカートのものをリストで見せる。 */}
      <h1>カート確認画面</h1>
      <form action="/user/purchase" method="post" >
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
 * @returns {Promise<{props: {};}>}
 */
export async function getServerSideProps({ req, res }) {

  return {
    props: {
    },
  }
}
