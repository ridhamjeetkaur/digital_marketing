import {
   BsGeoAltFill, BsPhoneFill, BsEnvelopeFill
} from 'react-icons/bs'; // Import Bootstrap Icons

// Contact Component
const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="text-center display-4 fw-bold text-dark mb-5">Get in Touch</h2>
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <BsGeoAltFill />
              </div>
              <h4>Our Location</h4>
              <p>123 Marketing Ave, Suite 456</p>
              <p>Digital City, DM 78901</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <BsPhoneFill />
              </div>
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567</p>
              <p>Mon - Fri, 9 AM - 5 PM EST</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <BsEnvelopeFill />
              </div>
              <h4>Email Us</h4>
              <p>info@digitalmarketer.com</p>
              <p>support@digitalmarketer.com</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h3 className="text-center text-dark mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject of your inquiry" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={5} placeholder="Your message"></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-submit-form">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;