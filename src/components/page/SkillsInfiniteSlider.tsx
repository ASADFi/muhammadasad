import {skills, tools} from "../../assets/utils/constants";
import {Link} from "react-router-dom";
import React from "react";


export default function SkillsInfiniteSlider() {
    const slicedSkills :{ name: string, image: string }[] = skills.slice(0, 4).map(skill => ({
        name: skill.title,
        image: skill.icon
    }));
    const slicedTools :{ name: string, image: string }[] = tools.slice(0, 3).map(tool => ({
        name: tool.title,
        image: tool.icon
    }));
    const sliderList :{ name: string, image: string }[]  = slicedSkills.concat(slicedTools).sort(() => {
        return 0.5 - Math.random()
    })
    return (
        <div className="skills-infinite-slider pb-14 md:pb-20 lg:pb-40 max-w-[1280px] mx-auto overflow-hidden">
            <div className="carousel-container">
                <div className="carousel-track">
                    {sliderList.map((skill, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                imgUrl={skill.image}
                                imgTitle={skill.name}
                            ></CarouselItem>
                        );
                    })}
                    {sliderList.map((skill, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                imgUrl={skill.image}
                                imgTitle={skill.name}
                            ></CarouselItem>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-10 md:mt-20">
                <Link to="about" className="primary-btn">View All</Link>
            </div>
        </div>
    );
}

const CarouselItem = ({ imgUrl, imgTitle } :{ imgUrl: string, imgTitle: string }) => {
    return (
        <div className="carousel-card">
            <img src={imgUrl} alt={imgTitle}></img>
        </div>
    );
}
//
// CarouselItem.propTypes = {
//     imgUrl: PropTypes.string.isRequired,
//     imgTitle: PropTypes.string.isRequired
// }

