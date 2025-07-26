import { CheckCircle, Mail, Shield, Target, Zap } from "lucide-react";
import { colors } from "./Color";


// Services Component
const Services = () => {
  const services = [
    {
      icon: <Mail size={32} />,
      title: 'Email Marketing',
      description: 'Create beautiful, personalized email campaigns that convert.',
      features: ['Drag & Drop Builder', 'A/B Testing', 'Automation']
    },
    {
      icon: <Target size={32} />,
      title: 'Audience Targeting',
      description: 'Reach the right people at the right time with precision targeting.',
      features: ['Behavioral Targeting', 'Custom Segments', 'Lookalike Audiences']
    },
    {
      icon: <Zap size={32} />,
      title: 'Marketing Automation',
      description: 'Set up automated workflows that work while you sleep.',
      features: ['Trigger-based Flows', 'Lead Nurturing', 'Customer Journey']
    },
    {
      icon: <Shield size={32} />,
      title: 'Analytics & Reporting',
      description: 'Get deep insights into your campaign performance.',
      features: ['Real-time Data', 'Custom Reports', 'ROI Tracking']
    }
  ];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: colors.light }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <div 
            className="badge rounded-pill px-3 py-2 mb-3"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              color: colors.primary,
              fontSize: '18px',
              fontWeight: '600'
            }}
          >
            Our Services
          </div>
          <h2 className="display-5 fw-bold mb-4" style={{ color: colors.dark ,fontSize:"3rem"}}>
            Everything You Need to Succeed
          </h2>
          <p className="mx-auto" style={{ color: colors.gray, fontSize: "18px" }}> {/* Example: 24 pixels */}
  Comprehensive marketing tools designed to help your business grow and thrive in the digital landscape.
</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-xl-3">
              <div 
                className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-all"
                style={{ 
                  backgroundColor: 'white',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-10px)';
                  target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                }}
              >
                <div 
                  className="rounded-3 d-inline-flex p-3 mb-4"
                  style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-3" style={{ color: colors.dark ,fontSize:"20px"}}>
                  {service.title}
                </h5>
                <p style={{ color: colors.gray, lineHeight: '1.6',fontSize:"15px" }}>
                  {service.description}
                </p>
                <ul className="list-unstyled mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center mb-2">
                      <CheckCircle size={16} className="me-2" style={{ color: colors.success }} />
                      <small style={{ color: colors.gray ,fontSize:"13px"}}>{feature}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;