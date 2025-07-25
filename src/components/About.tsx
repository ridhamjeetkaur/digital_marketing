import { colors } from "./Color";
import about from "../assets/images/about.png"
import { Users } from "lucide-react";

// About Component
const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100M+', label: 'Emails Sent' },
    { number: '5+', label: 'Years Experience' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              <div 
                className="rounded-4 overflow-hidden shadow-lg"
                style={{ height: '500px' }}
              >
                <div 
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`,
                    fontSize: '24px',
                    color: colors.gray
                  }}
                >
                  🏢 Our Story & Mission
                </div>
              </div>
              
              {/* Floating card */}
              <div 
                className="position-absolute bottom-0 start-0 bg-white rounded-3 shadow-lg p-4"
                style={{ transform: 'translate(-30px, 30px)', zIndex: 2 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: colors.success 
                    }}
                  >
                    <Users size={24} color="white" />
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: colors.dark }}>Trusted by 50K+</div>
                    <small style={{ color: colors.gray }}>Growing Businesses</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="ps-lg-5">
              <div 
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ 
                  backgroundColor: `${colors.primary}15`,
                  color: colors.primary,
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                About Us
              </div>
              
              <h2 className="display-5 fw-bold mb-4" style={{ color: colors.dark }}>
                Our Story & Mission
              </h2>
              
              <p className="fs-6 mb-4" style={{ color: colors.gray, lineHeight: '1.7' }}>
                DigitalMarketer was founded with a clear vision: to democratize digital marketing. We saw a need for powerful, yet accessible, tools that could help businesses of all sizes thrive in the online world.
              </p>
              
              <p className="fs-6 mb-4" style={{ color: colors.gray, lineHeight: '1.7' }}>
                Our journey began with a small team and a big idea, and today, we're proud to be a trusted partner for thousands of growing companies worldwide.
              </p>
              
              <p className="fs-6 mb-5" style={{ color: colors.gray, lineHeight: '1.7' }}>
                Our mission is to empower you with the knowledge, resources, and technology to not just compete, but to lead in your industry.
              </p>
              
              <button 
                className="btn text-white px-4 py-3 rounded-pill fw-medium"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  border: 'none'
                }}
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row text-center">
          <div className="col-12 mb-5">
            <h3 className="fw-bold" style={{ color: colors.dark }}>Trusted by Industry Leaders</h3>
          </div>
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-lg-3 mb-4">
              <div 
                className="p-4 rounded-4"
                style={{ backgroundColor: `${colors.primary}08` }}
              >
                <div 
                  className="display-6 fw-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  {stat.number}
                </div>
                <div style={{ color: colors.gray, fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;