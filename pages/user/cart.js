// @ts-check

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

/**
 *
 * @param {{csrfToken: string}} _
 * @returns {JSX.Element}
 */
export default function PurchasePage({ csrfToken }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      merchandise1: "helloworld",
    },
  });

  /**
   * @description submit formで使う。
   * @param {{merchandise1: string}} data
   * @param {React.BaseSyntheticEvent} event
   */
  const submitForm = (data, event) => {
    /** @type {HTMLFormElement} */
    const form = document.querySelector("#post_form");

    /** @type {HTMLButtonElement} */
    const form_button = form.querySelector("button");

    /** @type {HTMLInputElement} */
    const email = document.querySelector('input[name="merchandise1"]');

    email.value = getValues("merchandise1");

    // fire click event. and post.
    form_button.click();
  };
  return (
    <div>
      {/* ここでカートのものをリストで見せる。 */}
      <h1>カート確認画面</h1>
      <form
        action="/user/cart"
        method="post"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <label htmlFor="email">Email:</label>

          <input id="merchandise1" {...register("merchandise1")} />
        </div>

        <button type="submit">login</button>
      </form>
      <form
        id="post_form"
        action="/user/purchase"
        method="post"
        style={{ display: "none" }}
      >
        <input type="hidden" name="_csrf" value={csrfToken} />
        <input name="merchandise1" defaultValue="" />
        <button type="submit">購入</button>
      </form>
    </div>
  );
}

/**
 *
 * @param {{req: import('express').Request; res: import('express').Response}} _
 * @returns {Promise<{props: {csrfToken: string;};}>}
 */
export async function getServerSideProps({ req, res }) {
  const csrfToken = req.csrfToken();
  return {
    props: {
      csrfToken,
    },
  };
}
