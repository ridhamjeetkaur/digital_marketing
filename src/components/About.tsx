import React from 'react';
import { colors } from './Color';

// About Component
const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={`https://placehold.co/600x400/${colors.lightGray.substring(1)}/${colors.primaryDark.substring(1)}?text=About+Us`}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/600x400/${colors.lightGray.substring(1)}/${colors.mutedGray.substring(1)}?text=Image+Not+Found`;
              }}
              alt="About Us"
              className="img-fluid about-image"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5">About DigitalMarketer</h2>
            <p>
              DigitalMarketer is a leading platform dedicated to empowering businesses of all sizes with cutting-edge digital marketing solutions. We believe in simplifying complex marketing challenges and providing intuitive tools that drive real results.
            </p>
            <p>
              Our team of experts is passionate about innovation and committed to helping you achieve your growth objectives. From personalized email campaigns to advanced AI-powered analytics, we've got you covered.
            </p>
            <p>
              Join our community of successful marketers and transform your online presence today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;