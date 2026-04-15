import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram,FaLinkedinIn,FaYoutube} from "react-icons/fa";

const Footer = () => {

  const iconItems=[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaYoutube, href: "#" },
              ]

  const navItems = [
  { name: "Features", id: "features" },
  { name: "Benefits", id: "benefits" },
  { name: "Reviews", id: "reviews" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
];

  const serviceItems=[
                "Premium Sound Experience",
                "Seamless Wireless Connectivity",
                "Long-Lasting Battery Performance",
                "Ergonomic Comfort Design",
                "Customer Support & Warranty",
              ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text">
              JoySound
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              JoySound creates premium wireless headphones designed for powerful sound, all-day comfort, and modern lifestyle. Experience deep bass, crystal-clear audio, and wireless freedom in a sleek and stylish design.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {
              iconItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {
              navItems.map(
                (item, index) => (
                  <li key={index}>
                    <a
                       href={`#${item.id}`}
                      className="transition-colors duration-300 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-slate-900">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {
              serviceItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-blue-600" size={18} />
                <p>Dinajpur, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={18} />
                <p>+ 123 456 789</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={18} />
                <p>joysound@example.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © 2026 JoySound. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-blue-600"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-blue-600"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-blue-600"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;