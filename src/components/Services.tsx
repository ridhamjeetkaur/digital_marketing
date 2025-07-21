import {
  BsEnvelope, BsGear, BsLightning, BsGlobe, BsBarChart, BsPencilSquare,
  BsHandThumbsUp, BsPeople, BsGraphUp, BsLayoutTextWindow, BsGridFill,
} from 'react-icons/bs'; // Import Bootstrap Icons

// Services Component
interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="card service-card text-center p-4">
      <div className="service-icon-wrapper mx-auto">
        <Icon className="service-icon" />
      </div>
      <div className="card-body p-0">
        <h3 className="h5 card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData = [
    { icon: BsEnvelope, title: 'Email Marketing', description: 'Craft compelling emails that convert leads into loyal customers.' },
    { icon: BsGear, title: 'Marketing Automation', description: 'Automate your campaigns for efficiency and consistent customer engagement.' },
    { icon: BsLightning, title: 'AI Marketing Tools', description: 'Leverage AI to optimize campaigns, predict trends, and personalize experiences.' },
    { icon: BsGlobe, title: 'Website Design', description: 'Build stunning, responsive websites that drive traffic and conversions.' },
    { icon: BsBarChart, title: 'Reporting & Analytics', description: 'Gain deep insights into your performance with comprehensive data reports.' },
    { icon: BsPencilSquare, title: 'Content Creation', description: 'Develop engaging content that resonates with your audience and builds brand authority.' },
    { icon: BsHandThumbsUp, title: 'Social Media Marketing', description: 'Boost your brand presence and engage with your audience across all platforms.' },
    { icon: BsPeople, title: 'Audience Management', description: 'Segment and manage your audience for highly targeted and effective campaigns.' },
    { icon: BsGraphUp, title: 'Lead Generation', description: 'Implement strategies to attract and capture high-quality leads for your business.' },
    { icon: BsLayoutTextWindow, title: 'Custom Templates', description: 'Access a library of customizable templates for all your marketing needs.' },
    { icon: BsGridFill, title: 'Full Feature Set', description: 'Explore all the powerful tools and features our platform has to offer.' },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="text-center display-4 fw-bold text-dark mb-5">Our Solutions and Services</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {servicesData.map((service, index) => (
            <div className="col" key={index}>
              <ServiceItem
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;