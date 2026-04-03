'use client';

export default function OAILanding() {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'James Mitchell',
      role: 'Agentic Systems Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Lisa Wang',
      role: 'Neural Architecture Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Alex Rodriguez',
      role: 'ML Ops Pioneer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  const workshops = [
    {
      title: 'Building Autonomous Agents',
      description: 'Learn the fundamentals of creating intelligent autonomous systems',
      duration: '2 hours',
    },
    {
      title: 'Advanced Prompt Engineering',
      description: 'Master techniques for optimizing AI model interactions',
      duration: '1.5 hours',
    },
    {
      title: 'Real-time Agent Deployment',
      description: 'Deploy and scale production-ready AI agents',
      duration: '2 hours',
    },
    {
      title: 'Safety & Alignment in Agents',
      description: 'Ensure AI systems operate safely and align with human values',
      duration: '1.5 hours',
    },
  ];

  return (
    <div className="oai-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">OAI Conference 2024</div>
          <h1 className="hero-title">Architecting Agentic AI Systems</h1>
          <p className="hero-subtitle">
            Join industry leaders and innovators to explore the future of autonomous AI systems
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Register Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="tech-grid"></div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="section-header">
          <h2 className="section-title">Featured Speakers</h2>
          <p className="section-description">
            Renowned experts sharing insights on the future of AI
          </p>
        </div>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <div className="speaker-image-wrapper">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-image"
                />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="workshops-section">
        <div className="section-header">
          <h2 className="section-title">Technical Workshops</h2>
          <p className="section-description">
            Hands-on sessions to deepen your expertise
          </p>
        </div>
        <div className="workshops-grid">
          {workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <div className="workshop-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="workshop-title">{workshop.title}</h3>
              <p className="workshop-description">{workshop.description}</p>
              <div className="workshop-duration">
                <span className="duration-icon">⏱</span>
                <span>{workshop.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Join the Future of AI?</h2>
        <p className="cta-subtitle">
          Secure your spot at the most anticipated AI conference of the year
        </p>
        <button className="btn-primary btn-large">Get Your Ticket Today</button>
      </section>
    </div>
  );
}
