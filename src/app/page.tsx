'use client';

import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Heart, Leaf, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    questions: '',
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Prices', href: '#prices' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      questions: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NK</span>
              </div>
              <span className="font-semibold text-lg text-emerald-900 hidden sm:block">Naila Karima</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-emerald-800 hover:text-emerald-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Book an Assessment
              </Button>
            </div>

            <button
              className="md:hidden text-emerald-800 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-emerald-800 hover:text-emerald-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Book an Assessment
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-4xl">NK</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
              Welcome to Healing Conversations
            </h1>
            
            <p className="text-xl sm:text-2xl text-emerald-700 mb-4 font-medium">
              Professional Psychotherapy & Transactional Analysis
            </p>
            
            <p className="text-lg text-emerald-800/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              I&apos;m Naila Karima, a trainee psychotherapist professionally trained in Transactional Analysis. 
              I provide compassionate, evidence-based therapy to support your journey toward healing and personal growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book an Assessment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-emerald-900">Compassionate Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700">
                    Creating a safe, non-judgmental space where you can explore your thoughts and feelings openly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-emerald-900">Transactional Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700">
                    Professionally trained in Transactional Analysis, offering evidence-based therapeutic approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle className="text-emerald-900">Flexible Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700">
                    Convenient session times including evenings and weekends to accommodate your schedule.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-emerald-800 leading-relaxed mb-6">
                As a trainee psychotherapist specializing in Transactional Analysis, I believe in everyone&apos;s innate 
                capacity for growth and positive change. My approach combines professional training with genuine empathy, 
                helping you understand patterns in your thoughts, feelings, and behaviors.
              </p>
              <p className="text-lg text-emerald-800 leading-relaxed">
                Together, we can work towards developing greater self-awareness, building healthier relationships, and 
                achieving your personal goals. I am committed to supporting you through every step of your therapeutic journey.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Services</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Individual Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Anxiety and depression management', 'Building self-esteem', 'Personal growth and development', 'Coping strategies and resilience'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Relationship Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Improved communication skills', 'Understanding relationship patterns', 'Conflict resolution', 'Setting healthy boundaries'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Transactional Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Understanding ego states', 'Recognizing patterns', 'Script analysis', 'Developing autonomy'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Assessment Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Comprehensive assessment', 'Goal setting', 'Personalized recommendations', 'Q&A and discussion'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="prices" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Prices</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Assessment Session</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-700">£40</span>
                    <span className="text-emerald-600">/session</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700 mb-4">60-minute initial consultation</p>
                  <ul className="space-y-3">
                    {['Comprehensive assessment', 'Discussion of your goals', 'Treatment planning', 'All questions answered'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-600 shadow-xl relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Individual Therapy</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-700">£50</span>
                    <span className="text-emerald-600">/session</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700 mb-4">60-minute therapy session</p>
                  <ul className="space-y-3">
                    {['Personalized treatment plan', 'One-on-one therapy', 'Progress tracking', 'Flexible scheduling'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Package of 6</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-700">£270</span>
                    <span className="text-emerald-600">/package</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700 mb-4">Save £30 on 6 sessions</p>
                  <ul className="space-y-3">
                    {['Consistent therapy support', 'Better outcomes', 'Cost savings', 'Committed approach'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-emerald-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-emerald-700 bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <strong>Note:</strong> As a trainee psychotherapist, I work under professional supervision to ensure 
                the highest quality of care. This allows me to offer accessible rates while maintaining 
                professional standards.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Contact</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900 mb-1">Email</h3>
                        <a href="mailto:naila.karima@example.com" className="text-emerald-700 hover:text-emerald-600">
                          naila.karima@example.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900 mb-1">Phone</h3>
                        <a href="tel:+441234567890" className="text-emerald-700 hover:text-emerald-600">
                          +44 (0) 123 456 7890
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900 mb-1">Location</h3>
                        <p className="text-emerald-700">Online & In-Person</p>
                        <p className="text-emerald-600">London, UK</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-900 text-2xl">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-emerald-100">
                      <span className="font-medium text-emerald-900">Monday - Friday</span>
                      <span className="text-emerald-700">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-emerald-100">
                      <span className="font-medium text-emerald-900">Saturday</span>
                      <span className="text-emerald-700">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-emerald-900">Sunday</span>
                      <span className="text-emerald-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Book an Assessment</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-emerald-700">
                Take the first step towards positive change. Complete the form below to book your initial assessment session.
              </p>
            </div>

            {formSubmitted && (
              <Alert className="mb-6 bg-emerald-50 border-emerald-200 text-emerald-800">
                <Check className="h-4 w-4" />
                <div>
                  <strong>Success!</strong> Your booking request has been submitted. I&apos;ll be in touch within 24 hours to confirm your appointment.
                </div>
              </Alert>
            )}

            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-emerald-900">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-emerald-900">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-emerald-900">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-emerald-900">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-emerald-900">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime" className="text-emerald-900">Preferred Time</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-emerald-200 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-emerald-900">Reason for Seeking Therapy (optional)</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="questions" className="text-emerald-900">Any Questions or Additional Information (optional)</Label>
                    <Textarea
                      id="questions"
                      name="questions"
                      value={formData.questions}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
                  >
                    Submit Booking Request
                  </Button>

                  <p className="text-sm text-emerald-600 text-center">
                    <strong>Privacy Notice:</strong> Your information is confidential and will only be used to respond to your booking request.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">NK</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Naila Karima</h3>
              <p className="text-emerald-300">Trainee Psychotherapist | Transactional Analysis</p>
            </div>
            
            <div className="flex justify-center gap-8 text-emerald-200">
              <a href="mailto:naila.karima@example.com" className="hover:text-emerald-100 transition-colors">
                naila.karima@example.com
              </a>
              <a href="tel:+441234567890" className="hover:text-emerald-100 transition-colors">
                +44 (0) 123 456 7890
              </a>
            </div>
            
            <div className="pt-6 border-t border-emerald-800">
              <p className="text-emerald-400 text-sm">
                © {new Date().getFullYear()} Naila Karima. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
