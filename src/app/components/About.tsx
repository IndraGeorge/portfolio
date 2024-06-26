"use client";

import Image from "next/image";
import photo from "../img/photo.png";
import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
    const [skills, setSkills] = useState(false);
    console.log(skills)

    const showSkills = () => {
        setSkills(true);
    }

    const showAbout = () => {
        setSkills(false);
    }

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#skills") {
                setSkills(true);
            } else {
                setSkills(false);
            }
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="about">
            <div className="about-container flex min-h-[220px] pb-10">
                <div className="about-img flex justify-center items-centert">
                    <Image className="max-w-[500px]" src={photo} alt="photo" height={700} />
                </div>
                <div ref={ref} className="about-description">
                    <div className="bloc-tab flex flex-wrap justify-around pt-10 pl-10 pr-10">
                        <h3 id="about" className={!skills ? "current" : ""} onClick={showAbout}>A propos</h3>
                        <h3 id="skills" className={skills ? "current" : ""} onClick={showSkills}>Compétences</h3>
                    </div>
                    {skills == false? 
                        <div 
                        className="p-8"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition: "opacity 800ms ease-in-out"
                        }}
                        >
                            <p className="font-medium text-lg">Bienvenue sur mon portfolio !</p><br/>
                            <p>
                            Je suis une développeuse front-end passionnée par la création d&apos;
                            interfaces utilisateur attrayantes et réactives. Mon parcours dans le développement web
                            a débuté par une fascination pour le design et la technologie, qui s&apos;est 
                            transformée en une carrière enrichissante et stimulante.
                            </p><br/>
                            <p>
                            Après l&apos;optention de mon diplôme, j&apos;ai rapidement plongé dans le monde 
                            du développement web. 
                            J&apos;ai eu l&apos;opportunité de travailler sur divers projets académiques, personnels 
                            et professionnels, y compris des projets WordPress et Drupal en entreprise, 
                            ce qui m&apos;a permis d&apos;affiner mes compétences et d&apos;approfondir ma 
                            compréhension des meilleures pratiques de l&apos;industrie.
                            </p>
                        </div>
                        :
                        <div 
                        className="p-10"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition: "opacity 800ms ease-in-out"
                        }}
                        >
                            <strong>HTML/CSS :</strong> Maîtrise des techniques avancées pour créer des pages web sémantiques et stylisées.<br/>
                            <strong>JavaScript :</strong> Expertise dans le développement de fonctionnalités dynamiques et interactives.<br/>
                            <strong>Frameworks et Librairies :</strong> Expérience avec React et autres outils modernes.<br/>
                            <strong>Responsive Design :</strong> Création de sites web adaptatifs pour une expérience utilisateur optimale sur tous les appareils.<br/>
                            <strong>Systèmes de Gestion de Contenu (CMS) :</strong> Développement et personnalisation de sites WordPress et Drupal.<br/>
                            <strong>Outils de Développement :</strong> Compétence avec Git, Webpack, et autres outils essentiels du workflow de développement.<br/>
                        </div>
                    }
                    <button className="button-cv ml-10">
                        <a href="https://www.canva.com/design/DAFsLjQVCiY/5jmeMeXKDOCp3BCetbnedg/view?utm_content=DAFsLjQVCiY&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                            Télécharger mon CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
