
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-green-400/30 bg-black/50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400">{'<'}NetEngineer{'/>'}</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-green-300 transition-colors cursor-pointer">About</Link>
              <Link href="#skills" className="hover:text-green-300 transition-colors cursor-pointer">Skills</Link>
              <Link href="#certifications" className="hover:text-green-300 transition-colors cursor-pointer">Certifications</Link>
              <Link href="#projects" className="hover:text-green-300 transition-colors cursor-pointer">Projects</Link>
              <Link href="#contact" className="hover:text-green-300 transition-colors cursor-pointer">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-green-900/20">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src="me.jpg"
              alt="Professional Headshot"
              className="w-48 h-64 mx-auto rounded-lg border-2 border-green-400/50 object-cover object-top shadow-lg shadow-green-400/20"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Bertram Brian Chabu</h1>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">Network &</span>
            <br />
            <span className="text-green-400">Systems Engineer</span>
          </h1>
          <div className="text-xl mb-6 text-gray-300">
            <p>BBIT Student | Strathmore University</p>
            <p>CCNA Certified | Pursuing CEH</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors whitespace-nowrap cursor-pointer">
              View Projects
            </button>
            <button className="px-8 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-colors whitespace-nowrap cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{'>'} About Me</h2>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-green-400/30">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              Passionate network and systems engineer currently pursuing Bachelor of Business Information Technology (BBIT) 
              at Strathmore University. With a strong foundation in network infrastructure and cybersecurity, I specialize in 
              designing, implementing, and securing enterprise network solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Currently advancing my expertise through CCNA certification and pursuing Certified Ethical Hacker (CEH) 
              credentials to strengthen my cybersecurity knowledge. I'm committed to staying at the forefront of network 
              engineering and security technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{'>'} Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 p-6 rounded-lg border border-green-400/30">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-server-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Network Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cisco Routing & Switching</li>
                <li>• Network Design & Implementation</li>
                <li>• VLAN Configuration</li>
                <li>• Network Troubleshooting</li>
                <li>• Protocol Analysis</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-lg border border-green-400/30">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Cybersecurity</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ethical Hacking</li>
                <li>• Vulnerability Assessment</li>
                <li>• Network Security</li>
                <li>• Penetration Testing</li>
                <li>• Security Auditing</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-lg border border-green-400/30">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <i className="ri-code-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Systems & Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Linux Administration</li>
                <li>• Windows Server</li>
                <li>• Network Monitoring Tools</li>
                <li>• Wireshark</li>
                <li>• Python Scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{'>'} Certifications & Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-green-400/30 flex items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-6">
                <i className="ri-graduation-cap-line text-4xl text-green-400"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Bachelor of Business Information Technology (BBIT)</h3>
                <p className="text-gray-300">Strathmore University • Currently Enrolled</p>
                <p className="text-sm text-gray-400">Focus: Network Engineering & Systems Administration</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-green-400/30 flex items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-6">
                <i className="ri-award-line text-4xl text-green-400"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Cisco Certified Network Associate (CCNA)</h3>
                <p className="text-gray-300">Cisco Systems • Certified</p>
                <p className="text-sm text-gray-400">Routing & Switching, Network Security, Automation</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-green-400/30 flex items-center">
              <div className="w-16 h-16 flex items-center justify-center mr-6">
                <i className="ri-shield-star-line text-4xl text-yellow-400"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Certified Ethical Hacker (CEH)</h3>
                <p className="text-gray-300">EC-Council • In Progress</p>
                <p className="text-sm text-gray-400">Advanced Penetration Testing & Vulnerability Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{'>'} Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 rounded-lg border border-green-400/30 overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20enterprise%20network%20infrastructure%20diagram%20with%20servers%2C%20routers%2C%20switches%2C%20firewalls%20in%20dark%20theme%20with%20green%20accent%20colors%2C%20cybersecurity%20elements%2C%20professional%20network%20topology%20visualization%2C%20high-tech%20digital%20environment&width=500&height=300&seq=network-infrastructure&orientation=landscape"
                alt="Network Infrastructure Project"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Enterprise Network Design</h3>
                <p className="text-gray-300 mb-4">Designed and implemented a scalable network infrastructure for a medium-sized enterprise, including VLAN segregation, redundancy planning, and security protocols.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Cisco</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">VLAN</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Security</span>
                </div>
                <button className="text-green-400 hover:text-green-300 cursor-pointer">View Details →</button>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg border border-green-400/30 overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Cybersecurity%20penetration%20testing%20setup%20with%20multiple%20computer%20screens%20showing%20network%20analysis%20tools%2C%20ethical%20hacking%20environment%2C%20dark%20theme%20with%20green%20matrix-style%20code%2C%20professional%20security%20assessment%20workspace&width=500&height=300&seq=pentest-lab&orientation=landscape"
                alt="Penetration Testing Lab"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Penetration Testing Lab</h3>
                <p className="text-gray-300 mb-4">Built a comprehensive penetration testing environment for vulnerability assessment and ethical hacking practice, including various target systems and analysis tools.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Kali Linux</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Metasploit</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Nmap</span>
                </div>
                <button className="text-green-400 hover:text-green-300 cursor-pointer">View Details →</button>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg border border-green-400/30 overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Network%20monitoring%20dashboard%20with%20real-time%20network%20traffic%20analysis%2C%20security%20alerts%2C%20server%20performance%20metrics%2C%20dark%20interface%20with%20green%20data%20visualization%20charts%20and%20graphs%2C%20professional%20network%20operations%20center&width=500&height=300&seq=network-monitoring&orientation=landscape"
                alt="Network Monitoring System"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Network Monitoring System</h3>
                <p className="text-gray-300 mb-4">Developed an automated network monitoring solution with real-time alerting, performance analytics, and security incident detection capabilities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">SNMP</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Grafana</span>
                </div>
                <button className="text-green-400 hover:text-green-300 cursor-pointer">View Details →</button>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg border border-green-400/30 overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Secure%20firewall%20configuration%20interface%20with%20network%20security%20rules%2C%20intrusion%20detection%20system%20alerts%2C%20dark%20cybersecurity%20dashboard%20with%20green%20accent%20colors%2C%20professional%20network%20security%20management%20console&width=500&height=300&seq=firewall-security&orientation=landscape"
                alt="Security Implementation"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">Security Implementation</h3>
                <p className="text-gray-300 mb-4">Implemented comprehensive security measures including firewall configuration, intrusion detection systems, and security policy enforcement across network infrastructure.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">pfSense</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">IDS/IPS</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded text-sm">Security Policies</span>
                </div>
                <button className="text-green-400 hover:text-green-300 cursor-pointer">View Details →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{'>'} Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-xl text-green-400"></i>
                  </div>
                  <span className="text-gray-300">engineer@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-xl text-green-400"></i>
                  </div>
                  <span className="text-gray-300">+254 xxx xxx xxx</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-xl text-green-400"></i>
                  </div>
                  <span className="text-gray-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-4">
                    <i className="ri-linkedin-fill text-xl text-green-400"></i>
                  </div>
                  <span className="text-gray-300">linkedin.com/in/networkengineer</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-green-400">Send Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800/50 border border-green-400/30 rounded text-green-400 placeholder-gray-500 focus:border-green-400 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800/50 border border-green-400/30 rounded text-green-400 placeholder-gray-500 focus:border-green-400 focus:outline-none"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-gray-800/50 border border-green-400/30 rounded text-green-400 placeholder-gray-500 focus:border-green-400 focus:outline-none resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-green-400/30 bg-black/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Network Engineer Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <button className="w-10 h-10 flex items-center justify-center text-green-400 hover:text-green-300 cursor-pointer">
              <i className="ri-github-fill text-xl"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-green-400 hover:text-green-300 cursor-pointer">
              <i className="ri-linkedin-fill text-xl"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-green-400 hover:text-green-300 cursor-pointer">
              <i className="ri-twitter-fill text-xl"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
