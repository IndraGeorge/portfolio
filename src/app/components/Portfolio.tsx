"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kasa from "../img/kasa.png";
import capcir from "../img/capcir.png";
import podologue from "../img/podologue.png";
import Project from "./Project";

const Portfolio = () => {
    const refCapcir = useRef(null);
    const refPodologue = useRef(null);
    const refKasa = useRef(null);

    const isInViewCapcir = useInView(refCapcir, { once: true });
    const isInViewPodologue = useInView(refPodologue, { once: true });
    const isInViewKasa = useInView(refKasa, { once: true });

    return (
        <div id="portfolio" className="portfolio pt-12 pl-10 pr-10 pb-10 min-h-[220px]">
            <div className="container appearContent">
                <h2 className="text-center">Portfolio</h2>
                <div className="bloc-project mt-10">
                    <motion.div 
                        ref={refCapcir}
                        initial={{ opacity: 0}}
                        animate={isInViewCapcir ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.5}}
                    >
                        <Project href="https://www.capcir.fr" description="Entreprise tech spécialisée dans les logiciels de santé" technology="Php / React js / Scss" img={capcir} />
                    </motion.div>
                    <div className="flex flex-col gap-2.5">
                        <motion.div 
                            ref={refPodologue}
                            initial={{ opacity: 0 }}
                            animate={isInViewPodologue ? { opacity: 1} : { opacity: 0}}
                            transition={{ duration: 0.7, delay: 0.9 }}
                        >
                            <Project href="https://podologue-7dd17.web.app" description="Cabinet podologue" technology="React js / Material UI" img={podologue} />
                        </motion.div>
                        <motion.div 
                            ref={refKasa}
                            initial={{ opacity: 0 }}
                            animate={isInViewKasa ? { opacity: 1 } : { opacity: 0}}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            <Project href="https://indrageorge.github.io/Kasa" description="Application web de location immobilière" technology="React JS" img={kasa} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
