
import { useEffect, useState } from 'react';
import '../styles.css';

const Index = () => {
  // Function to handle the expand/collapse toggle for experience items
  const toggleExpand = (button: HTMLElement) => {
    const content = button.previousElementSibling?.querySelector('.expanded-content') as HTMLElement;
    if (content) {
      if (content.style.maxHeight) {
        content.style.maxHeight = '';
        button.textContent = 'Expand';
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        button.textContent = 'Collapse';
      }
    }
  };

  // Handle menu toggle for mobile
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
      });
    }

    // Handle navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Handle expand buttons for experience timeline
    const setupExpandButtons = () => {
      const expandBtns = document.querySelectorAll('.expand-btn');
      expandBtns.forEach(btn => {
        btn.addEventListener('click', function(this: HTMLElement) {
          toggleExpand(this);
        });
      });
    };

    // Setup after DOM is fully loaded
    setTimeout(setupExpandButtons, 100);

    // Cleanup event listeners
    return () => {
      menuToggle?.removeEventListener('click', () => {
        navLinks?.classList.toggle('active');
      });
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="https://en.wikipedia.org/wiki/Michael_Jackson" className="logo">MJ</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Janos Mozer</h1>
            <h2>Co-Founder @ mesh. | Fellow Builder</h2>
            <p>Passion for innovation</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-inner">
              {/* Main image that shows by default - updated to the new image */}
              <img 
                src="public/lovable-uploads/d0cb8410-d21c-4dfe-9827-21f6fc3e2808.png" 
                alt="Janos Mozer" 
                className="profile-image" 
              />
              {/* Hacker GIF that shows on hover */}
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRrOGpzMWw2eXpmcW9wNnkyeDY1bDRnODZvbGQ5Zjh6cGJhYnRyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tPnAAJxXTvpLwJy/giphy.gif" 
                alt="Hacker GIF" 
                className="profile-gif" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>I co-founded mesh., a company providing infrastructure for young developers focused on cutting-edge technology projects. Our goal at mesh. is to foster creativity, collaboration, and technical excellence among our members.</p>
            <p>I stay close to hardcore physics by doing reasearch at the HUN-REN Wigner Research Centre for Physics, here I investigate the properties and interactions of perovskite inside nanoscale architectures.</p>
          </div>
          <div className="skills-container">
            <div className="skills-group">
              <h3>Top Skills</h3>
              <ul>
                <li>Computer Simulations</li>
                <li>Mathematics</li>
                <li>Physics</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3>Languages</h3>
              <ul>
                <li>English (Full Professional)</li>
                <li>French (Limited Working)</li>
                <li>Hungarian (Native or Bilingual)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="date">October 2023 - Forever</div>
              <h3>Co-Founder @ mesh.</h3>
              <p className="location">Budapest, Hungary</p>
              <div className="experience-details">
                <p><a href="https://www.growmesh.io/" target="_blank" rel="noopener noreferrer">mesh.</a> is a hackerlab, where we seek, invest in, and elevate talent.</p>
                <div className="expanded-content">
                  <p>As a co-founder, I work on developing the infrastructure that supports our community of young, talented developers focused on cutting-edge technology projects. My responsibilities include establishing technical resources, creating collaborative environments, and implementing systems to identify and nurture talent.</p>
                </div>
              </div>
              <button className="expand-btn">Expand</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="date">February 2024 - Present</div>
              <h3>Part-time researcher at HUN-REN Wigner Research Centre for Physics</h3>
              <p className="location">Budapest, Hungary</p>
              <div className="experience-details">
                <p>I research nanoscale architectures, staying close to the semiconductor industry.</p>
                <div className="expanded-content">
                  <p>I participated in the 2024 Scientific Students' Associations Conference at BME, where I received the Special Award for Applied Physics and the Special Award from the Faculty of Natural Sciences at BME.</p>
                  <p>My work involves detailed analysis of material properties, experimental design, and development of custom software to control measurement equipment. I collaborate with senior researchers to advance our understanding of nanoscale architectures and their potential applications.</p>
                  <p>View my research paper <a href="https://drive.google.com/file/d/1botZVpF2ci_gObI_R4wn0So6azx57KUK/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
              </div>
              <button className="expand-btn">Expand</button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="date">June 2024 - February 2025</div>
              <h3>Software Engineer at Miracle Traffic Solutions</h3>
              <p className="location">Budapest, Hungary</p>
              <div className="experience-details">
                <p>Developing an agent based simulation environment for dynamic road pricing, and creating a decision model for how people behave based in this alternate vehicle taxing situation.</p>
                <div className="expanded-content">
                  <p>My role involves designing complex simulation models that accurately represent traffic patterns and human decision-making processes. I implement algorithms that analyze various pricing scenarios and their impact on traffic flow, congestion reduction, and economic factors.</p>
                </div>
              </div>
              <button className="expand-btn">Expand</button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-container">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <div className="project-info">
                <h3>Smart RV security system</h3>
                <p>Development of a 360° surround view camera system providing real time footage.</p>
                <div className="project-tags">
                  <span>Image stitching</span>
                  <span>Hardware</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://agroloon.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <div className="project-info">
                <h3>Agroloon</h3>
                <p>Develping a new generation of high-altitude balloons.</p>
                <div className="project-tags">
                  <span>Physics simulations</span>
                  <span>High-res optical instruments</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span>+36 20 268 4121</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span>janos.mozer@growmesh.io</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <span><a href="https://www.linkedin.com/in/janos-mozer" target="_blank" rel="noopener noreferrer">linkedin.com/in/janos-mozer</a></span>
            </div>
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={(e) => {
              e.preventDefault();
              const nameInput = document.getElementById('name') as HTMLInputElement;
              const emailInput = document.getElementById('email') as HTMLInputElement;
              const messageInput = document.getElementById('message') as HTMLTextAreaElement;
              
              const name = nameInput.value;
              const email = emailInput.value;
              const message = messageInput.value;
              
              const receivingEmail = "janos.mozer@growmesh.io";
              const subject = `Contact Form Submission from ${name}`;
              const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
              
              window.location.href = `mailto:${receivingEmail}?subject=${subject}&body=${body}`;
              
              // Optional: Show confirmation and reset form
              alert('Opening your email client. If nothing happens, please email me directly at ' + receivingEmail);
              document.getElementById('contactForm')?.reset();
            }}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Stay curious. Keep hacking.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
