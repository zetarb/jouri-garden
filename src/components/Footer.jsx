import { MapPin, Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-lighter py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gold mb-4" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          Jouri Garden
        </h2>
        
        <div className="flex items-center space-x-2 space-x-reverse text-gray-400 mb-6">
          <MapPin size={20} className="text-gold" />
          <span>موقع المطعم، المدينة، الشارع الرئيسي</span>
        </div>

        <div className="flex items-center space-x-2 space-x-reverse text-gray-400 mb-6">
           <Phone size={20} className="text-gold" />
           <span dir="ltr">03 856 761</span>
        </div>

        <div className="flex space-x-6 space-x-reverse mb-8">
          <a href="#" className="text-gray-400 hover:text-gold transition-colors">
            <Globe size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gold transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Jouri Garden. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
