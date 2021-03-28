const About = ({aboutData}) => {
    return (
        <div className="np-about-section">
            <h1 className="section-title">{aboutData.aboutSectionTitle}</h1>
            <div className="about-text" dangerouslySetInnerHTML={{ __html: aboutData.aboutText }}></div>
            <div className="about-skills">
                <div className="row">
                    {aboutData.skils && aboutData.skils.map( ( skill, index ) => {
                        return(
                            <div key={index} className="col-lg-2">
                                <img src={skill.sourceUrl} alt="skill"/>
                            </div>
                        )
                    } )}
                </div>
            </div>
        </div>
    );
};

export default About;