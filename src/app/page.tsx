import Link from "./components/Link";
import arrowLink from "./assets/arrowLink.svg";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="px-2.5 h-screen flex flex-col justify-center items-center text-center relative z-10">
        <h3 className="w-full">
          Hello, Je suis <span className="name">Indra!</span>
        </h3>
        <p className="mt-3 text-[20px] md:text-[28px] font-medium">
          Découvrez l&apos;excellence de la créativité numérique avec une
          développeuse JavaScript experte en React.js, créant des sites web et
          applications innovantes.
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <Link img={arrowLink} href={"./a-propos"}>
            À propos
          </Link>
          <Link img={arrowLink} href={"./projets"}>
            Projets
          </Link>
        </div>
        <Button href={"./contact"}>Contacts</Button>
        <Footer />
      </div>
    </main>
  );
}
