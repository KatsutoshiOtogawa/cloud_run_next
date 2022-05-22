// @ts-check

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

/**
 *
 * @returns {JSX.Element}
 */
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * @description submit formで使う。
   * @param {{email: string; password: string}} data
   * @param {React.BaseSyntheticEvent} event
   */
  const submitForm = (data, event) => {
    /** @type {HTMLFormElement} */
    const form = document.querySelector("#post_form");

    /** @type {HTMLButtonElement} */
    const form_button = form.querySelector("button");

    /** @type {HTMLInputElement} */
    const email = document.querySelector('input[name="email"]');

    /** @type {HTMLInputElement} */
    const password = document.querySelector('input[name="password"]');

    email.value = getValues("email");
    password.value = getValues("password");

    // fire click event. and post.
    form_button.click();
  };

  return (
    <div>
      <h1>ログイン画面</h1>
      {/* validation用 */}
      <form id="validation_form" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="email">Email:</label>

          <input id="email" {...register("email")} />
        </div>

        {errors.email && <p>This field is required</p>}
        <div>
          <label htmlFor="password">Password:</label>

          <input id="password" type="password" {...register("password")} />
        </div>
        {errors.password && <p>This field is required</p>}

        <button type="submit">login</button>
      </form>
      <form
        id="post_form"
        action="/user/login"
        method="post"
        style={{ display: "none" }}
      >
        <input name="email" defaultValue="" />
        <input name="password" type="password" defaultValue="" />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
