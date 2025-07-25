import { ArrowRight } from "lucide-react";
import { colors } from "./Color";

// Hero Component
const Hero = () => {
  return (
    <section 
      id="hero" 
      className="position-relative overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${colors.light} 0%, #ffffff 100%)`,
        paddingTop: '120px'
      }}
    >
      {/* Background Elements */}
      <div className="position-absolute top-0 end-0 opacity-25" style={{ zIndex: 1 }}>
        <div 
          className="rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`,
            transform: 'translate(50%, -50%)'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="text-center text-lg-start">
              <div 
                className="badge rounded-pill px-3 py-2 mb-4"
                style={{ 
                  backgroundColor: `${colors.primary}15`,
                  color: colors.primary,
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                🚀 Digital Marketing Platform
              </div>
              
              <h1 
                className="display-4 fw-bold mb-4"
                style={{ 
                  color: colors.dark,
                  lineHeight: '1.2',
                  letterSpacing: '-1px'
                }}
              >
                Simplify Your Marketing,{' '}
                <span 
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Multiply Your Results
                </span>
              </h1>
              
              <p 
                className="fs-5 mb-4"
                style={{ color: colors.gray, lineHeight: '1.6' }}
              >
                Create personalized emails, target precisely with behavior-based automations and segments, and optimize with real-time reporting.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <button 
                  className="btn btn-lg text-white px-5 py-3 rounded-pill fw-medium shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    border: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.transform = 'translateY(0)';
                  }}
                >
                  Get Started <ArrowRight size={20} className="ms-2" />
                </button>
                <button 
                  className="btn btn-lg btn-outline-primary px-5 py-3 rounded-pill fw-medium"
                  style={{ borderWidth: '2px' }}
                >
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="row mt-5 text-center text-lg-start">
                <div className="col-4">
                  <div className="fw-bold fs-4" style={{ color: colors.primary }}>10k+</div>
                  <small style={{ color: colors.gray }}>Active Users</small>
                </div>
                <div className="col-4">
                  <div className="fw-bold fs-4" style={{ color: colors.primary }}>99%</div>
                  <small style={{ color: colors.gray }}>Uptime</small>
                </div>
                <div className="col-4">
                  <div className="fw-bold fs-4" style={{ color: colors.primary }}>24/7</div>
                  <small style={{ color: colors.gray }}>Support</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="text-center position-relative">
              <div 
                className="rounded-4 shadow-lg p-4 bg-white position-relative"
                style={{ transform: 'rotate(2deg)' }}
              >
                <div 
                  className="rounded-3"
                  style={{ 
                    height: '400px',
                    background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: colors.gray
                  }}
                >
                  📊 Digital Marketing Dashboard
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