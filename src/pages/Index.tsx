
import { useEffect } from 'react';
import '../styles.css';

const Index = () => {
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
    const expandBtns = document.querySelectorAll('.expand-btn');
    expandBtns.forEach(btn => {
      btn.addEventListener('click', function(this: HTMLElement) {
        const content = this.previousElementSibling as HTMLElement;
        if (content) {
          if (content.style.maxHeight) {
            content.style.maxHeight = '';
            this.textContent = 'Show More';
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            this.textContent = 'Show Less';
          }
        }
      });
    });

    // Cleanup event listeners
    return () => {
      menuToggle?.removeEventListener('click', () => {
        navLinks?.classList.toggle('active');
      });
      window.removeEventListener('scroll', () => {});
      expandBtns.forEach(btn => {
        btn.removeEventListener('click', function(this: HTMLElement) {});
      });
    };
  }, []);

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">Portfolio</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
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
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="profile-picture">
            <div className="profile-picture-inner">
              <img src="https://placehold.co/300x300" alt="Profile" />
            </div>
          </div>
          <h1>John Doe</h1>
          <h2>Software Engineer & Data Scientist</h2>
          <p>Passionate about solving complex problems with elegant solutions</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies 
            aliquam, nunc sapien aliquet nunc, vitae aliquam nisl nunc eu nisl. Nullam auctor, nisl eget 
            ultricies aliquam, nunc sapien aliquet nunc, vitae aliquam nisl nunc eu nisl.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies 
            aliquam, nunc sapien aliquet nunc, vitae aliquam nisl nunc eu nisl.</p>
          </div>
          
          <div className="skills-container">
            <div className="skills-group">
              <h3>Technical Skills</h3>
              <ul>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>SQL/NoSQL</li>
              </ul>
            </div>
            
            <div className="skills-group">
              <h3>Soft Skills</h3>
              <ul>
                <li>Project Management</li>
                <li>Team Leadership</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Senior Software Engineer</h3>
              <div className="date">2020 - Present</div>
              <div className="location">Company XYZ, City, Country</div>
              <p>Led development of core platform features and mentored junior developers.</p>
              
              <div className="expanded-content">
                <p>• Designed and implemented scalable APIs serving over 10,000 daily users</p>
                <p>• Reduced system response time by 40% through performance optimizations</p>
                <p>• Implemented CI/CD pipelines reducing deployment time by 60%</p>
                <p>• Led migration from monolith to microservices architecture</p>
                <p>• Presented technical solutions to stakeholders and executive teams</p>
              </div>
              <button className="expand-btn">Show More</button>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Software Engineer</h3>
              <div className="date">2018 - 2020</div>
              <div className="location">Company ABC, City, Country</div>
              <p>Full-stack development of web applications and APIs.</p>
              
              <div className="expanded-content">
                <p>• Developed React-based front-end applications with Redux state management</p>
                <p>• Created Node.js microservices with Express and MongoDB</p>
                <p>• Implemented authentication system using JWT and OAuth</p>
                <p>• Worked in an agile environment using Scrum methodology</p>
                <p>• Collaborated with UX designers to implement responsive design</p>
              </div>
              <button className="expand-btn">Show More</button>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Junior Developer</h3>
              <div className="date">2016 - 2018</div>
              <div className="location">Startup Inc, City, Country</div>
              <p>Front-end development for e-commerce platforms.</p>
              
              <div className="expanded-content">
                <p>• Built interactive UI components using JavaScript and CSS</p>
                <p>• Optimized website performance for mobile devices</p>
                <p>• Integrated payment gateways including Stripe and PayPal</p>
                <p>• Fixed cross-browser compatibility issues</p>
                <p>• Participated in code reviews and provided constructive feedback</p>
              </div>
              <button className="expand-btn">Show More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <div className="section-header">
          <h2>Education</h2>
          <div className="underline"></div>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Master's Degree</h3>
              <div className="date">2014 - 2016</div>
              <div className="location">University Name, City, Country</div>
              <p className="degree">Computer Science, Specialization in AI</p>
              <p>GPA: 3.9/4.0</p>
              
              <div className="expanded-content">
                <p>• Thesis: "Deep Learning Approaches for Natural Language Processing"</p>
                <p>• Published 2 papers in international conferences</p>
                <p>• Teaching Assistant for "Introduction to Algorithms"</p>
                <p>• President of Computer Science Student Association</p>
              </div>
              <button className="expand-btn">Show More</button>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Bachelor's Degree</h3>
              <div className="date">2010 - 2014</div>
              <div className="location">University Name, City, Country</div>
              <p className="degree">Computer Engineering</p>
              <p>GPA: 3.7/4.0</p>
              
              <div className="expanded-content">
                <p>• Senior Project: "Real-time Object Detection System"</p>
                <p>• Won 1st place in University Hackathon</p>
                <p>• Member of Robotics Club</p>
                <p>• Completed internship at Tech Company XYZ</p>
              </div>
              <button className="expand-btn">Show More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-container">
          <div className="project-card">
            <div className="project-info">
              <h3>Project One</h3>
              <p>A machine learning application that predicts user behavior based on historical data.</p>
              <div className="project-tags">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>React</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-info">
              <h3>Project Two</h3>
              <p>E-commerce platform with integrated payment processing and inventory management.</p>
              <div className="project-tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-info">
              <h3>Project Three</h3>
              <p>Mobile application for tracking fitness goals and nutritional intake.</p>
              <div className="project-tags">
                <span>React Native</span>
                <span>Firebase</span>
                <span>Redux</span>
              </div>
            </div>
          </div>
          
          <div className="project-card empty">
            <div className="project-info">
              <h3>More Coming Soon...</h3>
              <p>I'm always working on new projects. Check back for updates!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:john.doe@example.com">john.doe@example.com</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href="tel:+11234567890">+1 (123) 456-7890</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">github.com/johndoe</a>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
