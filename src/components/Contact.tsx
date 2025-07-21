import { useState } from "react";
import { BsEnvelopeFill, BsGeoAltFill, BsPhoneFill } from "react-icons/bs";

// Contact Component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null); // Clear previous messages
    setIsError(false);

    try {
      // Replace with your actual Express API endpoint
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setIsError(false);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setStatusMessage(`Failed to send message: ${errorData.message || 'Unknown error'}`);
        setIsError(true);
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      setStatusMessage('An unexpected error occurred. Please try again later.');
      setIsError(true);
    }
  };

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
              <p>+91 9876543221</p> {/* Updated phone number */}
              <p>Mon - Fri, 9 AM - 5 PM EST</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                <BsEnvelopeFill />
              </div>
              <h4>Email Us</h4>
              <p>info@zarexa.com</p> {/* Updated email */}
              <p>support@zarexa.com</p> {/* Updated email */}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h3 className="text-center text-dark mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject of your inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {statusMessage && (
                  <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`} role="alert">
                    {statusMessage}
                  </div>
                )}
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