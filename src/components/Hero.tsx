import { colors } from "./Color";

// Hero Component (Main Page Section)
const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-content text-center text-lg-start">
            <p className="small-text">Email Marketing Platform</p>
            <h1>Convert more customers with a powerful and intuitive platform</h1>
            <p>Create personalized emails, target precisely with behavior-based automations and segments, and optimize with real-time reporting.</p>
            <button className="btn btn-hero-cta">Get started</button>
          </div>
          <div className="col-lg-6 col-md-12 hero-image-container mt-5 mt-lg-0">
            <img
              src="https://placehold.co/700x500/${colors.lightGray.substring(1)}/${colors.primary.substring(1)}?text=Digital+Marketing+Dashboard"
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