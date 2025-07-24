import { colors } from "./Color";
import about from "../assets/images/about.png"
// About Component
const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={about}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/600x400/${colors.lightGray.substring(1)}/${colors.mutedGray.substring(1)}?text=Image+Not+Found`;
              }}
              alt="Our Story"
              className="img-fluid about-image"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5">Our Story & Mission</h2>
            <p>
              DigitalMarketer was founded with a clear vision: to democratize digital marketing. We saw a need for powerful, yet accessible, tools that could help businesses of all sizes thrive in the online world. Our journey began with a small team and a big idea, and today, we're proud to be a trusted partner for thousands of growing companies.
            </p>
            <p>
              Our mission is to empower you with the knowledge, resources, and technology to not just compete, but to lead in your industry. We are committed to continuous innovation, ensuring our platform evolves with the ever-changing digital landscape.
            </p>
          </div>
        </div>

        </div> 
    </section>
  );
};
export default About;