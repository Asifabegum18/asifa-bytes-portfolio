import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities in AI, ML, and technology together
          </p>
        </div>
        
        <Card className="border-0 shadow-xl bg-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground">asifa.begum@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Location</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social Media</h4>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Let's Collaborate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities in AI, Machine Learning, 
                  and Full Stack Development. Whether it's about innovative projects, 
                  research collaborations, or internship opportunities, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-skill-bg rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Areas of Interest</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI & Machine Learning Projects</li>
                      <li>• Data Science Research</li>
                      <li>• Full Stack Development</li>
                      <li>• Open Source Contributions</li>
                    </ul>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;