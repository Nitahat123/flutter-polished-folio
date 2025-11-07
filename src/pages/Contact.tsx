import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <h1 className="font-display text-[72px] leading-[1.1] mb-8">
            Let's work together
          </h1>
          <p className="text-lg mb-16 max-w-2xl">
            Have a project in mind or want to discuss Flutter development? 
            Feel free to reach out through the form below or connect with me directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm uppercase tracking-wider mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-charcoal/20 focus:border-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm uppercase tracking-wider mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-charcoal/20 focus:border-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm uppercase tracking-wider mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-charcoal/20 focus:border-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-sm uppercase tracking-wider"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <a 
                  href="mailto:harshil.i.code@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="group-hover:text-accent transition-colors">
                      harshil.i.code@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+919898701900"
                  className="flex items-start gap-4 group"
                >
                  <Phone className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Phone
                    </p>
                    <p className="group-hover:text-accent transition-colors">
                      +91 98987 01900
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Location
                    </p>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/harshil-italiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:border-accent hover:bg-accent/5 transition-all rounded-md"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/harshilitaliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:border-accent hover:bg-accent/5 transition-all rounded-md"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
