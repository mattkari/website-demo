'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  Mail,
  MapPin,
  Terminal,
  Check,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Database,
  GitBranch,
  Cloud,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mattkari';
const GITHUB_URL = 'https://github.com/mattkari';
const EMAIL = 'mattkarimov@outlook.com';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const differentiators = [
    'Payments Domain Expertise (SEPA & Instant Payments)',
    'ICON IPF Framework Specialist (3+ years)',
    '5+ Years in Banking & Financial Services',
    'CI/CD Pipeline Expertise (Jenkins, GitLab CI/CD)',
    'Containerization (Docker, Kubernetes)',
    'MCP & RAG-Based Test Tooling',
    'Stakeholder Management & Mentorship',
  ];

  const skillGroups = [
    {
      icon: Terminal,
      title: 'Programming & Frameworks',
      items: ['Java (OOP)', 'Ruby', 'Selenium WebDriver', 'TestNG', 'JUnit', 'Cucumber BDD', 'JBehave'],
    },
    {
      icon: Layers,
      title: 'API & Design Patterns',
      items: ['REST Assured', 'Postman', 'REST APIs', 'JSON / XML', 'Page Object Model', 'BDD / TDD'],
    },
    {
      icon: Database,
      title: 'Database Testing',
      items: ['SQL', 'MongoDB'],
    },
    {
      icon: GitBranch,
      title: 'CI/CD & Version Control',
      items: ['Jenkins', 'GitLab CI/CD', 'Maven', 'Docker', 'Kubernetes', 'Git', 'GitLab', 'Bitbucket'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Architecture',
      items: ['AWS (EC2)', 'Microservices', 'Distributed Systems'],
    },
    {
      icon: Briefcase,
      title: 'Domain & Methodology',
      items: ['Financial Services', 'Payments & Banking', 'Agile Scrum', 'SDLC / STLC', 'Jira'],
    },
    {
      icon: Terminal,
      title: 'AI-Assisted Testing Tooling',
      items: ['Karate Framework', 'Playwright (Java)', 'MCP Servers', 'RAG Test Assistants'],
    },
  ];

  const experience = [
    {
      title: 'Test Automation Engineer',
      company: 'Barclays Investment Bank, UK',
      period: '02/2026 – Present',
      highlights: [
        'Architected UI test automation using Playwright with Java for a global investment bank platform',
        'Built the Karate Framework for API testing, streamlining backend and service-level test coverage',
        'Developed multiple MCP (Model Context Protocol) servers connecting LLM tooling to internal systems, including SQL, Atlassian, GitLab, and Playwright integrations',
        'Built a Karate Test Assistant RAG tool grounded in framework docs and test code to support API test authoring and debugging',
      ],
    },
    {
      title: 'Quality Automation Specialist',
      company: 'NatWest Group, UK',
      period: '02/2022 – 01/2026',
      highlights: [
        "Led testing of NatWest's ICON IPF (Integration Processing Framework) platform for 3+ years, becoming a subject matter expert in integration framework testing and payment processing workflows",
        'Enhanced the IPF test framework by introducing the REST Assured library for API testing and implementing the Strategy Pattern to improve maintainability and code reusability',
        'Built and maintained automation frameworks covering backend, API, and database testing for SEPA and instant payment systems',
        'Spearheaded a BDD automation approach using JBehave and Cucumber, translating JIRA business requirements into executable test scenarios',
        'Integrated automated tests into CI/CD pipelines using Jenkins and GitLab CI/CD for continuous testing and rapid feedback',
        'Pioneered integrating the test framework with Docker and Kubernetes for consistent, containerized test environments',
      ],
    },
    {
      title: 'QA Automation Engineer',
      company: 'Amplience, UK',
      period: '04/2021 – 01/2022',
      highlights: [
        'Designed and implemented a test automation framework using Java, Selenium WebDriver, Cucumber BDD, TestNG, and the Page Object Model',
        'Integrated automated tests into CI/CD build processes using Jenkins on AWS EC2',
        'Conducted API testing with REST Assured and Postman, validating REST APIs and JSON schemas',
        'Performed database testing with MongoDB, verifying data consistency and integrity across integrated systems',
        'Executed exploratory, integration, E2E, smoke, regression, and UI testing across the product',
      ],
    },
    {
      title: 'Complaints Manager (Testing & Validation Focus)',
      company: 'Lloyds Banking Group, UK',
      period: '11/2017 – 01/2021',
      highlights: [
        'Led manual and automated testing of banking redress calculators for Asset Finance Payment Protection Insurance claims',
        'Performed SQL database testing and data-driven validation to improve accuracy of claim processes',
        'Served as Subject Matter Expert in redress calculations, training team members on testing best practices',
      ],
    },
    {
      title: 'Quality Assurance Representative',
      company: 'HSBC, Leeds, UK',
      period: '05/2017 – 11/2017',
      highlights: [
        'Conducted manual testing, verification, and validation on complex financial calculators for PPI complaints',
        'Performed SQL database testing and data reviews to ensure accuracy in the banking domain',
      ],
    },
  ];

  const education = [
    {
      program: 'Full Stack Automation Tester (SDET) Program',
      school: 'Cydeo, Virginia, USA',
      year: '2020',
    },
    {
      program: 'PhD in Governance and International Affairs',
      school: 'Durham University, UK',
      year: '2018',
    },
    {
      program: 'MA in Public Administration',
      school: 'JMI Central University, New Delhi, India',
      year: '2006',
    },
    {
      program: 'BA in Legal Studies',
      school: 'TIU University, Tashkent, Uzbekistan',
      year: '2003',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <span className="font-semibold text-lg text-blue-900 hidden sm:block">
                Matt Karimov
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-blue-800 hover:text-blue-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => scrollTo('contact-form')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get In Touch
              </Button>
            </div>

            <button
              className="md:hidden text-blue-800 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-blue-800 hover:text-blue-600 hover:bg-blue-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollTo('contact-form');
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-4xl">MK</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Matt Karimov
          </h1>

          <p className="text-xl sm:text-2xl text-blue-700 mb-4 font-medium">
            QA Automation Specialist &amp; Senior Automation Tester
          </p>

          <p className="text-lg text-blue-800/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            5+ years specializing in backend automation, API testing, and database
            validation within Banking and Financial Services. Currently a Test
            Automation Engineer at Barclays Investment Bank, building and scaling
            test automation frameworks with Java, Selenium, Playwright, and BDD,
            integrated into CI/CD pipelines. Based in Manchester, United Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => scrollTo('contact-form')}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg"
              onClick={() => scrollTo('experience')}
            >
              View Experience
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-blue-800 leading-relaxed">
              Experienced QA Automation Engineer with 5+ years specializing in backend
              automation, API testing, and database validation within Banking and
              Financial Services. Proven expertise in developing and maintaining test
              automation frameworks using Java, Selenium, and BDD methodologies, with
              hands-on experience integrating automated tests into CI/CD pipelines.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed">
              Strong track record of collaborating with cross-functional teams to
              design comprehensive test strategies, execute complex test scenarios,
              and ensure software quality and reliability in Agile environments.
              Demonstrated ability to lead testing initiatives, perform root cause
              analysis, and drive continuous improvement in testing processes.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-50"
                onClick={() => window.open(LINKEDIN_URL, '_blank', 'noopener noreferrer')}
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn Profile
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-50"
                onClick={() => window.open(GITHUB_URL, '_blank', 'noopener noreferrer')}
              >
                <Github size={18} className="mr-2" />
                GitHub Profile
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-8">
              {differentiators.map((item) => (
                <Badge
                  key={item}
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm py-2 px-4"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Core Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <Card key={group.title} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <group.icon className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-blue-900 text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-blue-100 text-blue-800 font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((role) => (
              <Card key={role.title + role.company} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-blue-600" size={22} />
                      </div>
                      <div>
                        <CardTitle className="text-blue-900">{role.title}</CardTitle>
                        <CardDescription className="text-blue-700 font-medium">
                          {role.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-blue-300 text-blue-700 whitespace-nowrap self-start sm:self-auto">
                      {role.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-blue-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Education &amp; Professional Development
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((item) => (
              <Card key={item.program} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">{item.program}</h3>
                      <p className="text-blue-700 text-sm">{item.school}</p>
                      <p className="text-blue-600 text-sm">{item.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-blue-700 hover:text-blue-600"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">LinkedIn</h3>
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-600"
                      >
                        linkedin.com/in/mattkari
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">GitHub</h3>
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-600"
                      >
                        github.com/mattkari
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">Location</h3>
                      <p className="text-blue-700">Manchester, England</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card id="contact-form" className="border-blue-200 scroll-mt-24">
              <CardHeader>
                <CardTitle className="text-blue-900">Get In Touch</CardTitle>
                <CardDescription className="text-blue-700">
                  Send a message via the contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <p className="font-medium">Message sent (demo)</p>
                    <p className="text-sm">
                      This demo form does not send real messages. Please connect via LinkedIn or email.
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-900">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-900">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                  >
                    Send Message
                  </Button>
                  <p className="text-sm text-blue-600 text-center">
                    <strong>Note:</strong> This is a demo form and does not send messages.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">MK</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Matt Karimov</h3>
              <p className="text-blue-300">QA Automation Specialist &amp; Senior Automation Tester</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-blue-200">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-100 transition-colors inline-flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-100 transition-colors inline-flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-blue-100 transition-colors inline-flex items-center gap-2"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
            </div>

            <div className="pt-6 border-t border-blue-800">
              <p className="text-blue-400 text-sm">
                © {new Date().getFullYear()} Matt Karimov. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
