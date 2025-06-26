import { Home, Hammer, Building, Plus, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Services() {
  useScrollToTop();
  const services = [
    {
      icon: Home,
      title: "One Property Two Homes",
      description: "Maximize your investment potential with dual occupancy developments that make the most of your land.",
      features: [
        "Council approval assistance",
        "Architectural design services",
        "Site analysis and feasibility studies",
        "Premium quality finishes",
        "Project management from start to finish",
        "Compliance with all building codes"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Hammer,
      title: "Knock Down the Old, Rebuild the New",
      description: "Transform outdated properties into modern masterpieces with our comprehensive demolition and rebuild services.",
      features: [
        "Complete demolition services",
        "Modern architectural design",
        "Energy-efficient construction",
        "Smart home integration",
        "Landscaping and outdoor spaces",
        "Warranty and ongoing support"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Building,
      title: "Town House Living",
      description: "Contemporary townhouse developments and rooming houses designed for modern Melbourne living and investment success.",
      features: [
        "9-room rooming house configurations",
        "Investment-focused design",
        "Shared facility planning",
        "Quality materials and finishes",
        "Rental yield optimization",
        "Ongoing maintenance planning"
      ],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const additionalServices = [
    {
      title: "Custom Home Construction",
      description: "Bespoke luxury homes tailored to your lifestyle and preferences."
    },
    {
      title: "Home Extensions",
      description: "Expand your living space with seamless additions and renovations."
    },
    {
      title: "Kitchen & Bathroom Renovations",
      description: "Transform your home's most important spaces with premium finishes."
    },
    {
      title: "Commercial Construction",
      description: "Small to medium commercial projects including retail and office spaces."
    },
    {
      title: "Project Management",
      description: "Complete oversight of your construction project from concept to completion."
    },
    {
      title: "Design & Build",
      description: "Integrated design and construction services for a seamless experience."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">
              Comprehensive construction services tailored for Melbourne's unique residential market. From luxury homes to smart investments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services - Compact Layout */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two main services side by side */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {services.slice(0, 2).map((service, index) => (
              <Card key={service.title} className="bg-white p-8 shadow-lg border border-gray-100">
                <CardContent className="p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-4 text-center">{service.title}</h3>
                  <p className="text-brand-slate mb-6 text-center leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-slate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link href="/contact">
                      <Button size="sm" className="bg-brand-blue text-white hover:bg-blue-700">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Third service - full width */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                      <services[2].icon className="h-8 w-8 text-brand-blue" />
                    </div>
                    <h2 className="text-4xl font-bold text-brand-charcoal mb-6">{services[2].title}</h2>
                    <p className="text-xl text-brand-slate mb-8">{services[2].description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {services[2].features.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-slate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button size="lg" className="bg-brand-blue text-white hover:bg-blue-700">
                        Get Quote for This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div>
                    <img
                      src={services[2].image}
                      alt={services[2].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Additional Services</h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Complete construction solutions for all your residential and commercial needs
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <Card key={service.title} className="bg-white p-8 shadow-lg border border-gray-100">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-4">{service.title}</h3>
                  <p className="text-brand-slate leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your construction project. Our team is ready to bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg">
              Get Your Free Quote Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
