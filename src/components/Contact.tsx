import { BsEnvelopeFill, BsGeoAltFill, BsPhoneFill } from "react-icons/bs";
import { colors } from "./Color";
import { useState } from "react";

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
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null); // Clear previous messages
    setIsError(false);

    try {
      // IMPORTANT: Ensure this URL matches your Express.js backend API endpoint.
      // If your React app is on port 3000 and Express on 3001, use the full URL.
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setIsError(false);
        setFormData({ name: '', email: '', subject: '', message: ''}); // Clear form
      } else {
        console.log(formData)
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
        <div className="text-center contact-header-text">
          <h2 className="display-4 fw-bold text-dark mb-3">Let's Contact With Us</h2>
          <p>
            
          </p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Your message..."
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

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                {BsEnvelopeFill({})}
              </div>
              <h4>Mail Here</h4>
              <p>hello@luez.com</p>
              <p>info@luez.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                {BsGeoAltFill({})}
              </div>
              <h4>Visit Here</h4>
              <p>27 Division St, New York,</p>
              <p>NY 10002, USA</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-info-card">
              <div className="icon-wrapper">
                {BsPhoneFill({})}
              </div>
              <h4>Call Here</h4>
              <p>+123 456 7890</p>
              <p>+241 452 4526</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;