import Link from "./components/Link";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { Sparkle } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-screen px-2.5 flex flex-col justify-center items-center text-center z-10">
        <h3 className="relative">
          Hello, Je suis Indra
          <Sparkle className="star" color="#fff" size={20} />
          <Sparkle className="star2" color="#fff" size={20} />
        </h3>
        <p className="mt-3 text-[20px] md:text-[28px] font-medium">
          Je suis une développeuse JavaScript et j&apos;aime concevoir des sites
          solides et flexibles qui offrent une expérience exceptionnelle aux
          utilisateurs.
        </p>
        <div className="flex justify-center mt-10 gap-4">
          <Link href={"./a-propos"}>À propos</Link>
          <Link href={"./projets"}>Projets</Link>
        </div>
        <Button href={"./contact"}>Contacts</Button>
        <Footer />
      </div>
    </main>
  );
}
