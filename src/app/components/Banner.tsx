"use client";
import imageBanner from "../img/image_banner.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Bannner = () => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="banner text-7xl flex items-center">
            <div className="container-text">
                <h1 className="mb-4">Indra, développeuse front-end.</h1>
                <p className="slogan">Votre site qui transforme vos objectifs en résultats <span>concrets</span>.
                </p>
                <button><a href="#contact">Contactez-moi</a></button>
            </div>
            <div ref={ref} 
                className="banner-img h-full w-[100%]"
                style={{transform: isInView ? "none" : "translateY(100%)",
                     opacity: isInView ? 1 : 0, 
                     transition: "all 500ms ease-in-out"
                    }}
            >
                <Image src={imageBanner} alt="ordinateur portable" />
            </div>
        </div>
    )
}

export default Bannner;