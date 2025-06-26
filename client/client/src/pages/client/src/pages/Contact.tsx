import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useScrollToTop();
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const emailAddresses = [
    {
      icon: Mail,
      title: "General Inquiries",
      email: "info@leighcon.com.au",
      description: "For general questions and information"
    },
    {
      icon: Phone,
      title: "Project Manager",
      email: "projects@leighcon.com.au", 
      description: "For ongoing projects and updates"
    },
    {
      icon: Send,
      title: "Quotes & Estimates",
      email: "quotes@leighcon.com.au",
      description: "For pricing and project estimates"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">
              Ready to start your construction project? Contact our team for a comprehensive consultation and detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">Send us a message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-charcoal font-medium">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your first name"
                                className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-brand-charcoal font-medium">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your last name"
                                className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-charcoal font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Enter your email address"
                              className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-charcoal font-medium">Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Enter your phone number"
                              className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-charcoal font-medium">Project Type (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue">
                                <SelectValue placeholder="Select your project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Construction</SelectItem>
                              <SelectItem value="dual-occupancy">Dual Occupancy</SelectItem>
                              <SelectItem value="rooming-house">Rooming House</SelectItem>
                              <SelectItem value="townhouse">Townhouse Development</SelectItem>
                              <SelectItem value="renovation">Home Renovation</SelectItem>
                              <SelectItem value="extension">Home Extension</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-brand-charcoal font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..."
                              className="border-gray-300 focus:ring-brand-blue focus:border-brand-blue min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-blue text-white hover:bg-blue-700 py-3"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-charcoal mb-6">Contact Information</h2>
                
                {/* Email Addresses */}
                <div className="space-y-6 mb-12">
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Email Addresses</h3>
                  {emailAddresses.map((contact) => (
                    <Card key={contact.email} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <contact.icon className="h-6 w-6 text-brand-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-charcoal mb-1">{contact.title}</h4>
                            <a 
                              href={`mailto:${contact.email}`} 
                              className="text-brand-blue hover:underline font-medium mb-2 block"
                            >
                              {contact.email}
                            </a>
                            <p className="text-brand-slate text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-charcoal mb-2">Phone Numbers</h4>
                          <a href="tel:+61489241980" className="text-brand-blue hover:underline block">
                            Mobile: 0489 241 980
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
