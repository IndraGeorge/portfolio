"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import flash from "../img/flash_biosolutions.png";
import capcir from "../img/capcir.png";
import foncsi from "../img/foncsi.png";
import Project from "./Project";

const Portfolio = () => {
    const refCapcir = useRef(null);
    const refFoncsi = useRef(null);
    const refKasa = useRef(null);

    const isInViewCapcir = useInView(refCapcir, { once: true });
    const isInViewFoncsi = useInView(refFoncsi, { once: true });
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
                        <Project href="https://www.capcir.fr" description="Capcir, éditeur de logiciel de santé depuis 35 ans" technology="WordPress (PHP / React.js / SCSS / jQuery)" img={capcir} />
                    </motion.div>
                    <div className="flex flex-col gap-2.5">
                        <motion.div 
                            ref={refFoncsi}
                            initial={{ opacity: 0 }}
                            animate={isInViewFoncsi ? { opacity: 1} : { opacity: 0}}
                            transition={{ duration: 0.7, delay: 0.9 }}
                        >
                            <Project href="#" description="Fondation pour une culture de sécurité industrielle" technology="Drupal (PHP / SCSS / jQuery)" img={foncsi} />
                        </motion.div>
                        <motion.div 
                            ref={refKasa}
                            initial={{ opacity: 0 }}
                            animate={isInViewKasa ? { opacity: 1 } : { opacity: 0}}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            <Project href="https://flashbiosolutions.com/" description="Flash biosolutions" technology="WordPress (PHP / React.js / SCSS / jQuery)" img={flash} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
