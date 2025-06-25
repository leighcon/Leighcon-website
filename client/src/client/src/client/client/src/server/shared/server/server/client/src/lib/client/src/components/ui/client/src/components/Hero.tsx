import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Main Logo and Tagline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            LEIGHCON
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide">
            Built to inspire
          </p>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
            Premier Construction & Development
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Melbourne's trusted construction company specializing in residential developments, 
            dual occupancy projects, and luxury home building. Creating exceptional spaces 
            that define modern living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
              Get Free Quote
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
