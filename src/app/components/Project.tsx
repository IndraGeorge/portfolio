import Image from "next/image";
import { StaticImageData } from "next/image"
import {Search} from "lucide-react"

interface props  {
    description:string;
    technology:string;
    img:StaticImageData;
    href:string;
}

const Projects = ({description,technology, img, href}:props) => {
    return(
        <div className="project h-full">
            <Image src={img} alt="img"/>
            <a href={href} target="_blanck" className="description">
                <h3 className="text-center pl-4 pr-4">{description}</h3>
                <p className="mt-2 pl-4 pr-4 text-center">{technology}</p>
                <Search className="mt-4" size={28} color="#ffffff" />
            </a>
        </div>
    )
}

export default Projects;