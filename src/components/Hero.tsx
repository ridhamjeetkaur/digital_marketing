import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import main from "../assets/images/front.jpg";

const colors = {
  primary: "#6366f1", // Indigo-500
  secondary: "#c7d2fe", // Indigo-200
  accent: "#fbbf24", // Yellow-400
  success: "#10b981", // Emerald-500
  gray: "#6b7280", // Gray-500
};

const Hero: React.FC = () => {
  return (
    <section className="py-5 overflow-hidden">
<br /><br /><br /><br />   <br />   <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          {/* Left Column - Text */}
          <div className="col-lg-6">
            <span
              className="badge rounded-pill text-bg-warning mb-4 px-3 py-2"
              style={{ backgroundColor: colors.accent, color: "#fff" }}
            >
              <span style={{ color: "#fff" }}>#1 Platform</span> for your
              Business
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Empowering Your <span style={{ color: colors.primary }}>Digital Dreams</span>
            </h1>

            <p className="lead text-muted mb-4">
              We craft stunning websites and applications to help you grow your
              brand. Let’s build something great together!
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a href="#get-started" className="btn btn-primary px-4 py-2">
                Get Started
              </a>
              <a
                href="#services"
                className="btn btn-outline-secondary d-flex align-items-center gap-2"
              >
                <span>Explore Services</span>
                <IonIcon icon={arrowForwardOutline} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="text-center position-relative">
              <div 
                className="rounded-4 shadow-lg p-3 bg-white position-relative mx-auto"
                style={{ transform: 'rotate(2deg)', maxWidth: '100%' }}
              >
                <div 
                  className="rounded-3 overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src={main} 
                    alt="Main Visual" 
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div 
                className="position-absolute top-0 start-0 bg-white rounded-3 shadow-sm p-3"
                style={{ transform: 'translate(-20px, 50px)', zIndex: 3 }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="rounded-circle"
                    style={{ width: '8px', height: '8px', backgroundColor: colors.success }}
                  />
                  <small className="fw-medium">Campaign Active</small>
                </div>
              </div>
              
              <div 
                className="position-absolute bottom-0 end-0 bg-white rounded-3 shadow-sm p-3"
                style={{ transform: 'translate(20px, -50px)', zIndex: 3 }}
              >
                <div className="text-center">
                  <div className="fw-bold" style={{ color: colors.primary }}>+127%</div>
                  <small style={{ color: colors.gray }}>Growth</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
