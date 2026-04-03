'use client';

export default function OAIHeroVideo() {
  return (
    <section className="video-hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="background-video"
          src="https://video.wixstatic.com/video/95462a_c6860224db624ceca9b591c469949087/1080p/mp4/file.mp4"
        />
        <div className="video-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-video-content">
        <div className="logo-container">
          <img
            src="https://static.wixstatic.com/media/95462a_4f987a678f61491ca0d2390ff6cf1b6e~mv2.png/v1/fill/w_686,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OAI%20Con%20All-White_png(edited).png"
            alt="Optimized AI Conference Logo"
            className="conference-logo"
          />
        </div>

        <h1 className="hero-video-title">Architecting Agentic AI Systems</h1>

        <p className="hero-video-date">MARCH 30th & 31st, 2026 | ATL, GA</p>

        <p className="hero-video-description">
          An affordable, hands-on AI conference designed for students,
          professionals, and executives alike. Gain real skills, practical
          strategies, and tools you can use immediately, without the high
          conference price tag.
        </p>

        <div className="hero-video-buttons">
          <a href="https://www.oaiconference.com/event-details/optimized-ai-conference-2026" className="hero-btn hero-btn-primary">
            <span>REGISTRATION</span>
            <span className="btn-arrow">→</span>
          </a>
          <a href="https://www.oaiconference.com/contact-us" className="hero-btn hero-btn-secondary">
            <span>BECOME A SPONSOR</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
