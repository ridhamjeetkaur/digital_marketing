import {
  BsChatQuoteFill
} from 'react-icons/bs'; // Import Bootstrap Icons
import { colors } from './Color';
import { Star } from 'lucide-react';

// Feedback Component
const Feedback = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'Zarexa transformed our email marketing. Our open rates increased by 150% in just 3 months!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The automation features saved us countless hours. Best marketing investment we\'ve made.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Growth Manager',
      company: 'EcomBrand',
      content: 'Incredible ROI and the support team is amazing. Highly recommend to any growing business.',
      rating: 5
    }
  ];

  return (
    <section id="feedback" className="py-5" style={{ backgroundColor: colors.light }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <div 
            className="badge rounded-pill px-3 py-2 mb-3"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              color: colors.primary,
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Testimonials
          </div>
          <h2 className="display-5 fw-bold mb-4" style={{ color: colors.dark }}>
            What Our Customers Say
          </h2>
          <p className="mx-auto" style={{ color: colors.gray, maxWidth: '600px' ,fontSize:"15px"}}>
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div 
                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                style={{ backgroundColor: 'white' }}
              >
                <div className="mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill={colors.warning} color={colors.warning} />
                  ))}
                </div>
                <p className="mb-4" style={{ color: colors.gray, lineHeight: '1.6' }}>
                  "{testimonial.content}"
                </p>
                <div className="d-flex align-items-center mt-auto">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center fw-bold"
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: colors.primary,
                      color: 'white'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: colors.dark }}>
                      {testimonial.name}
                    </div>
                    <small style={{ color: colors.gray }}>
                      {testimonial.role} at {testimonial.company}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feedback;