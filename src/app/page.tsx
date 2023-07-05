import Link from "./components/Link";
import ArrowRight from "./assets/Arrowright.svg";
import Button from "./components/Button";
import Circle from "./components/Circle";

export default function Home() {
  return (
    <main className="mb-28">
      <Circle top={"top-4"} left={"left-40"} width={"w-16"} height={"h-16"} />

      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <h3>Hello!</h3>
        <h3>Je suis Indra George, développeuse JavaScript React.</h3>
        <p className="mt-3 text-2xl font-medium ">
          J’aime créer des applications solides et évolutifs avec d’excellentes
          expériences utilisatrices
        </p>
        <div className="flex mt-10 gap-10">
          <Link img={ArrowRight} href={"./competences"}>
            Compétences
          </Link>
          <Link img={ArrowRight} href={"./projets"}>
            Projets
          </Link>
        </div>
        <Button href={"./contacts"}>Contacts</Button>
      </div>
      <Circle
        bottom={"bottom-0"}
        left={"left-0"}
        width={"w-60"}
        height={"h-60"}
      />
      <Circle
        bottom={"bottom-0"}
        right={"right-0"}
        width={"w-44"}
        height={"h-44"}
      />
    </main>
  );
}
