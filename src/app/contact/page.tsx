"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Menu from "../components/Menu";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const key: string | undefined = process.env.NEXT_PUBLIC_KEY;

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm<UserInput>();

  (function () {
    emailjs.init(key || "");
  })();

  const sendEmail: SubmitHandler<UserInput> = (values: UserInput) => {
    const templateId = "template_zx1hxbg";
    const serviceId = "service_v173e04";
    sendFeedBack(serviceId, templateId, {
      name: values.name,
      email: values.email,
      message: values.message,
    });
    if (formState.isSubmitSuccessful) {
      reset();
    }
  };

  const sendFeedBack = (
    serviceId: string,
    templateId: string,
    variables: any
  ) => {
    emailjs
      .send(serviceId, templateId, variables, key)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        setColorSuccess(true);
        setSuccess("Message envoyé!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setSuccess("Une erreur est survenue!");
        setColorSuccess(false);
      });
  };

  const [colorSuccess, setColorSuccess] = useState(false);
  const [success, setSuccess] = useState("");

  return (
    <div className="pt-8 px-10">
      <Menu />
      <main className="md:px-10">
        <div className="max-w-xl mx-auto mb-5 p-4 rounded-lg pb-0">
          <form
            onSubmit={handleSubmit(sendEmail)}
            role="form"
            id="contact-form"
            method="post"
          >
            <div className="-mx-2 mt-8">
              <div className="px-2">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="name"
                >
                  Nom et Prénom
                </label>
                <input
                  type="text"
                  required
                  {...register("name", {
                    pattern: /^[\-a-zA-Zéèîëïäöüçâ ]{3,30}$/,
                  })}
                  id="name"
                  placeholder="Nom et Prénom"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                  <span className="text-red-600">
                    {errors.name && "Veuillez rentrer un nom et prénom valide"}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                required
                {...register("email", {
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                })}
                id="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="text-red-600">
                {errors.email && "Veuillez rentrer une adresse mail valide"}
              </span>
            </div>

            <div className="w-full mt-4">
              <label
                className="block ckmb-2 text-sm text-gray-600"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                {...register("message")}
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-44 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
              <span className="text-red-600">
                {errors.message &&
                  "Veuillez rentrer un message sans caractère spéciaux"}
              </span>
            </div>
            <div className="text-center pt-3">
              <button className="rounded-full text-white uppercase p-3 w-36 mt-5 duration-200 hover:bg-fuchsia-800">
                Envoyer
              </button>
              <p
                className={`mt-3 ${
                  colorSuccess ? "text-green-600" : "text-red-600"
                }`}
              >
                {success}
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
