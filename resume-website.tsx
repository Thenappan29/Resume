import React from 'react';
import { Mail, Phone, Award, BookOpen, Briefcase, User, Code, Heart, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const fadeInClass = "transition-all duration-1000";
  const visibleClass = "opacity-100 translate-y-0";
  const hiddenClass = "opacity-0 translate-y-10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Thenappan Muthukumar</h1>
          <h2 className="text-3xl mb-8 text-blue-100">Azure Data Engineer</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
              <Mail className="w-5 h-5 mr-3" />
              <a href="mailto:thenappan.muthukumar@gmail.com" className="hover:text-blue-200 transition-colors">
                thenappan.muthukumar@gmail.com
              </a>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-3" />
              <span>+91 9488100556 / +55 43 99936-3531</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* About Me Section */}
        <section id="about" className={`${fadeInClass} ${isVisible.about ? visibleClass : hiddenClass}`}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Dedicated and versatile Azure Data Engineer with proven experience in DevOps, Business Intelligence (BI) tools, and application support. Skilled in enhancing, optimizing, and maintaining BI solutions while collaborating effectively with offshore and nearshore teams. Committed to continuous learning, delivering impactful results, and building trusted relationships with business stakeholders.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`${fadeInClass} ${isVisible.experience ? visibleClass : hiddenClass}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
            
            <div className="relative border-l-2 border-blue-200 pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-10 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <h3 className="text-2xl font-semibold mb-2">Support Team Lead</h3>
                <p className="text-blue-600 mb-4">Brazil | Aug 2023 – Present</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full" />
                    <span>Leading support for multiple BI applications under Application Management Services (AMS), ensuring SLA compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full" />
                    <span>Driving minor enhancements and maintaining stability for key BI applications.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full" />
                    <span>Led the End-of-Year (EOY) process for critical financial closure applications.</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <h3 className="text-2xl font-semibold mb-2">Developer</h3>
                <p className="text-blue-600 mb-4">Chennai, India | May 2021 – Aug 2023</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full" />
                    <span>Worked on DevOps projects in the life sciences sector using Azure tools and Informatica PowerCenter.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full" />
                    <span>Enhanced and optimized BI applications built on Informatica and Azure Synapse/ADF.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`${fadeInClass} ${isVisible.skills ? visibleClass : hiddenClass}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Azure & Cloud</span>
                      <span className="text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>BI & Reporting</span>
                      <span className="text-blue-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ETL & Integration</span>
                      <span className="text-blue-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Soft Skills</h3>
                <ul className="space-y-3">
                  <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Communication & Collaboration</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Adaptability & Quick Learning</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Problem Solving & Analysis</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Team Leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section id="certificates" className={`${fadeInClass} ${isVisible.certificates ? visibleClass : hiddenClass}`}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
                <div className="space-y-4">
                  {[
                    "Azure Data Engineer Associate (DP-203)",
                    "Azure Data Fundamentals (DP-900)",
                    "Informatica PowerCenter",
                    "Power BI Desktop"
                  ].map((cert, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <p className="text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-lg">Sri Krishna College of Engineering & Technology</h3>
                    <p className="text-blue-600">Bachelor of Civil Engineering</p>
                    <p className="text-gray-600">GPA: 9.36 | 2021</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-lg">Bharathi Vidya Bhavan</h3>
                    <p className="text-blue-600">XII Grade – Computer Science</p>
                    <p className="text-gray-600">93.2% | 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-red-300" />
            <p className="text-blue-100">Designed with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;