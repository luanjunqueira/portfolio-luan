import { Button } from "@/components/ui/button";
import { MessageCircle, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-background" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos{" "}
            <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pronto para transformar desafios técnicos em soluções robustas. 
            Entre em contato e vamos discutir seu projeto.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/5512982055846?text=Ola%20Luan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-effect hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/luanjunqueira"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-border hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>

          <a
            href="mailto:luan@junqueira.tech"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-border hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-mail
            </Button>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Luan Junqueira. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponível para novas oportunidades
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
