import { useState, useRef } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Works() {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState(0);
    const swiperRef = useRef(null);

    const handleClick = (e, index) => {
        setActive(index);
        const category = e.target.textContent.toLowerCase();

        if (category === "all") setProjects(projectsData);
        else {
            setProjects(projectsData.filter((project) => (
                project.category.toLowerCase() === category
            )));
        }

        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0);
        }
    };

    return (
        <div className="work__container">
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span
                        onClick={(e) => handleClick(e, index)}
                        key={index}
                        className={`${active === index ? "active-work" : ""} work__item`}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <Swiper
                key={projects.length}
                ref={swiperRef}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <div className="work__container container grid">
                    {projects.map((item, i) => (
                        <SwiperSlide key={i}>
                            <WorkItems item={item} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
}