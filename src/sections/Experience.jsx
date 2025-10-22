// src/sections/Experience.jsx
import FadeInSection from '../components/FadeInSection';
import { useTranslation } from '../contexts/translationContext';

import { EXPERIENCE_DATA } from '../configs/data/experience';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            { t.sections.experience }
          </h2>
        </FadeInSection>
        <div className="relative">
          {/* Línea central del timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-blue-200 dark:bg-blue-900 transform -translate-x-0.5 hidden md:block"></div>

          {EXPERIENCE_DATA.map((exp, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8`}>
                {/* Card */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-8 md:pl-16' : 'md:pl-8 md:pr-16'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {t?.experience?.roles?.[exp.id] || exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {t?.experience?.descriptions?.[exp.id] || exp.description}
                    </p>
                  </div>
                </div>

                {/* Punto en la línea */}
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-md z-10"></div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
