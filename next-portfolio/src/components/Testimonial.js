import Slider from "react-slick";

const Testimonial = ({testimonialData}) => {
 
    const SlickNextArrow = ({className, onClick}) => {
        return(
            <div className={className} onClick={onClick}>
                <i className="fas fa-angle-left"></i>
            </div>
        )
    }

    const SlickPrevArrow = ({className, onClick}) => {
        return(
            <div className={className} onClick={onClick}>
                <i className="fas fa-angle-right"></i>
            </div>
        )
    }

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow/>,
        prevArrow: <SlickPrevArrow/>,
        customPaging: () => (
            <div></div>
        )
            
      };
    return (
        <div className="np-testimonials">
            <h1 className="section-title">{testimonialData.testimonialSectionTitle}</h1>
            <Slider {...testimonialSettings}>
                {testimonialData.testimonials && testimonialData.testimonials.map( ( singletestimonial, index ) => {
                    return(
                        <div key={index} className="single-testimonial">
                            <img src={singletestimonial.clientImage.sourceUrl} alt="Client"/>
                            <p>{singletestimonial.comment}</p>
                            <h3>{singletestimonial.clientName}</h3>
                            <span>{singletestimonial.clientDesignation}</span>
                        </div>
                    )
                } )}
            </Slider>
        </div>
    );
};

export default Testimonial;