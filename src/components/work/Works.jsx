import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Works() {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div className="work__container">
            <div className="work__filters">
                {
                    projectsNav.map((item, index) => {
                        return (
                            <span
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                key={index}
                                className={`${active === index ? "active-work" : ""} work__item`}
                            >
                                {item.name}
                            </span>
                        )
                    })
                }
            </div>

            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <div className="work__container container grid">
                    {
                        projects.map((item, i) => {
                            return <SwiperSlide key={i}><WorkItems item={item} /></SwiperSlide>
                        })
                    }
                </div>
            </Swiper>
        </div>
    )
}
