import {
  BsChatQuoteFill
} from 'react-icons/bs'; // Import Bootstrap Icons

// Feedback Component
interface FeedbackCardProps {
  quote: string;
  author: string;
  title: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ quote, author, title }) => {
  return (
    <div className="card feedback-card p-4 text-center">
      {BsChatQuoteFill({ className: "quote-icon mx-auto" })}
      <p className="mb-3">"{quote}"</p>
      <div className="mt-auto"> {/* Pushes content to the bottom */}
        <p className="author-name mb-0">{author}</p>
        <p className="author-title">{title}</p>
      </div>
    </div>
  );
};

const Feedback: React.FC = () => {
  const testimonials = [
    {
      quote: "DigitalMarketer transformed our email campaigns. The automation features are incredibly powerful and easy to use!",
      author: "Jane Doe",
      title: "Marketing Director, Tech Solutions Inc."
    },
    {
      quote: "The AI marketing tools gave us insights we never had before. Our ROI has significantly improved since we started using it.",
      author: "John Smith",
      title: "CEO, Global Innovations"
    },
    {
      quote: "Their website builder is fantastic! We launched our new site in record time, and it looks professional on all devices.",
      author: "Emily White",
      title: "Founder, Creative Designs"
    }
  ];

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <h2 className="text-center display-4 fw-bold text-dark mb-5">What Our Clients Say</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col" key={index}>
              <FeedbackCard
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;