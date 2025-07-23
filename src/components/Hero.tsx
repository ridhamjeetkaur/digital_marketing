import { colors } from "./Color";
import front_image from "../assets/images/front-page.png"
// Hero Component (Main Page Section)
const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-content text-center text-lg-start">
            <p className="small-text">Digital Marketing Platform</p>
            <h1>Simplify Your Marketing, Multiply Your Results</h1>
            <p>Create personalized emails, target precisely with behavior-based automations and segments, and optimize with real-time reporting.</p>
            <button className="btn btn-hero-cta">Get started</button>
          </div>
          <div className="col-lg-6 col-md-12 hero-image-container mt-5 mt-lg-0">
            <img
              src={front_image}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/700x500/${colors.lightGray.substring(1)}/${colors.mutedGray.substring(1)}?text=Image+Not+Found`;
              }}
              alt="Digital Marketing Dashboard Interface"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;