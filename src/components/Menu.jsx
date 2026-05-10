import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

const menuData = {
  'المأكولات': {
    categories: [
      {
        name: 'الترويقة',
        items: [
          { name: 'صحن بيض', price: '400,000 L.L' },
          { name: 'صحن لبنة', price: '400,000 L.L' },
          { name: 'ابريق شاي كبير', price: '500,000 L.L' },
          { name: 'ركوة قهوة كبيرة', price: '500,000 L.L' },
          { name: 'منقوشة زعتر', price: '125,000 L.L' },
          { name: 'منقوشة شنكليش', price: '250,000 L.L' },
          { name: 'منقوشة جبنة', price: '300,000 L.L' },
          { name: 'خبز صاج', price: '25,000 L.L (للغريف)' },
        ]
      },
      {
        name: 'الغداء',
        items: [
          { name: 'جاط سلطة', price: '900,000 L.L' },
          { name: 'جاط تبولة', price: '1,100,000 L.L' },
          { name: 'جاط بطاطا مقلية', price: '935,000 L.L' },
          { name: 'سرفيس شوي منقل فحم', price: '900,000 L.L' },
          { name: 'صحن حمص', price: '400,000 L.L' },
          { name: 'صحن باذنجان مشوي', price: '400,000 L.L' },
          { name: 'صحن باذنجان مقلي', price: '700,000 L.L' },
          { name: 'صحن بطاطا مشوي', price: '500,000 L.L' },
          { name: 'صحن زوبع', price: '400,000 L.L' },
          { name: 'صحن بطاطا حرة', price: '600,000 L.L' },
          { name: 'كيلو غنم للشوي', price: '35$' },
          { name: 'كيلو كفتة', price: '25$' },
          { name: 'كيلو طاووق', price: '18$' },
        ]
      }
    ]
  },
  'المشروبات': {
    categories: [
      {
        name: '',
        items: [
          { name: 'بيبسي، سڤن آب، ميرندا', price: '95,000 L.L' },
          { name: 'مياه', price: '50,000 L.L' },
          { name: 'بيرة شعير', price: '200,000 L.L' },
          { name: 'بيرة كحول', price: '450,000 L.L' },
          { name: 'نسكافية', price: '150,000 L.L' },
        ]
      }
    ]
  },
  'أرجيلة': {
    categories: [
      {
        name: '',
        items: [
          { name: 'أرجيلة معسل', price: '700,000 L.L' },
        ]
      }
    ]
  }
};

const tabs = ['المأكولات', 'المشروبات', 'أرجيلة'];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 space-x-reverse bg-dark-card p-1 rounded-full shadow-lg border border-dark-lighter">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-lg md:text-xl font-medium transition-colors ${
                activeTab === tab ? 'text-dark-bg' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-gold rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-dark-card rounded-2xl p-6 md:p-8 shadow-2xl border border-dark-lighter"
        >
          {menuData[activeTab].categories.map((category, catIndex) => (
            <div key={catIndex} className={catIndex > 0 ? 'mt-10' : ''}>
              {category.name && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-dark-lighter pb-3 inline-block">
                  {category.name}
                </h2>
              )}
              <div className="space-y-2">
                {category.items.map((item, index) => (
                  <MenuItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
