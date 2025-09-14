import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#packages" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-academy-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="Casimiro Academy" className="h-10 w-10" />
              <div>
                <div className="text-xl font-bold">Casimiro Academy</div>
                <div className="text-academy-purple-light text-sm">English Learning Revolution</div>
              </div>
            </div>
            <p className="text-white/80">
              Transformando vidas através do aprendizado personalizado de inglês. 
              Metodologia inovadora adaptada ao seu ritmo único.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-academy-purple-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-academy-purple-light" />
                <span className="text-white/80">+55 81 98654-4108</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-academy-purple-light" />
                <span className="text-white/80">contact@casimiroacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-academy-purple-light" />
                <span className="text-white/80">Brazil</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <p className="text-white/80">
              Stay connected for latest updates, tips, and exclusive content for English learners.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-academy-dark-light p-3 rounded-lg hover:bg-academy-purple transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white/60">
            <p>© 2025 Casimiro Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;