import React from 'react';

const ProjectCard = () => {
    const info = [
        { image: "dsa.jpeg", title: "DSA 101", description: "All you need to know about data structures and algorithms for interviews.", link: "https://github.com/bitethecode/DSA101"}
    ];

    const render = (card, index) => {
        return (
            <div className="project">
                <div className="project-image-wrapper">
                    <img alt="profile pic" src={require(`../../images/${card.image}`)} className="project-image" />
                </div>
                <div>
                    <br/>
                    <h1>{card.title}</h1>
                    <br/>
                    <p>{card.description}</p>
                    <br/>
                    <a href={card.link}>Source</a>
                </div>
            </div>
        )
    }
    return info.map(render);
}
export default ProjectCard;