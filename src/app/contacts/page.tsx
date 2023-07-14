"use client";
import { useForm } from "react-hook-form";
import ArrowLeft from "../assets/ArrowLeft.svg";
import Link from "../components/Link";
import Footer from "../components/Footer";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

export default function Contacts() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserInput>();

  const sendEmail = (values: UserInput) => {
    console.log(`Submitted`);
    console.table(values);
  };

  return (
    <main className="p-10 h-screen">
      <div className="flex">
        <Link href="/projets" img={ArrowLeft}>
          Projets
        </Link>
      </div>
      <div className="max-w-xl m-auto p-4 rounded-lg">
        <form
          onSubmit={handleSubmit(sendEmail)}
          role="form"
          id="contact-form"
          method="post"
        >
          <div className="-mx-2 md:items-center">
            <div className="px-2">
              <label
                className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
              className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
              className="block ckmb-2 text-sm text-gray-600 dark:text-gray-200"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              {...register("message")}
              className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-52 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
          </div>
        </form>
      </div>
      <div className="relative bottom-[-50px]">
        <Footer />
      </div>
    </main>
  );
}
