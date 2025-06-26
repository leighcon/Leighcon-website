import { Award, Users, Clock, Trophy, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function About() {
  useScrollToTop();
  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">About Leighcon</h1>
            <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">
              Melbourne's premier construction company with a commitment to excellence, innovation, and customer satisfaction since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-brand-charcoal mb-6">Our Story</h2>
              <p className="text-brand-slate mb-6 leading-relaxed">
                Leighcon began with a simple vision: to build exceptional homes that exceed expectations while delivering outstanding value to our clients. What started as a small family business has grown into one of Melbourne's most trusted construction companies.
              </p>
              <p className="text-brand-slate mb-6 leading-relaxed">
                We specialize in residential construction, dual occupancy developments, and rooming house construction. Our expertise spans from luxury family homes to strategic investment properties, each project reflecting our commitment to quality, innovation, and attention to detail.
              </p>
              <p className="text-brand-slate leading-relaxed">
                Today, with over 25 completed projects across Melbourne, we continue to push the boundaries of what's possible in residential construction while maintaining the personalized service that set us apart from day one.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Leighcon construction site"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="bg-white p-8 shadow-lg border border-gray-100 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-charcoal mb-2">25+</div>
                <div className="text-brand-slate">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-brand-amber rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-charcoal mb-2">9</div>
                <div className="text-brand-slate">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-charcoal mb-2">8</div>
                <div className="text-brand-slate">Expert Team</div>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-brand-charcoal mb-2">100%</div>
                <div className="text-brand-slate">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Our Values</h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Excellence</h3>
                <p className="text-brand-slate leading-relaxed">
                  We strive for perfection in every project, using only the finest materials and latest construction techniques to deliver exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-brand-amber rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Integrity</h3>
                <p className="text-brand-slate leading-relaxed">
                  Honest communication, transparent pricing, and reliable service form the foundation of every client relationship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Collaboration</h3>
                <p className="text-brand-slate leading-relaxed">
                  We work closely with clients, architects, and trade partners to ensure every project exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Innovation</h3>
                <p className="text-brand-slate leading-relaxed">
                  We embrace cutting-edge technologies and modern construction methods to stay ahead of industry trends and deliver superior results.
                </p>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Quality Assurance</h2>
            <p className="text-xl text-brand-slate">
              Professional standards and quality guarantees
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Expert Craftsmanship</h3>
                <p className="text-brand-slate leading-relaxed">Skilled tradespeople with decades of combined experience</p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Premium Materials</h3>
                <p className="text-brand-slate leading-relaxed">Only the finest grade materials and finishes selected</p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Timely Completion</h3>
                <p className="text-brand-slate leading-relaxed">Projects delivered on schedule as promised</p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">Built to Endure</h3>
                <p className="text-brand-slate leading-relaxed">Constructions designed for long-term durability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
