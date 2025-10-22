// src/sections/About.jsx
import FadeInSection from '../components/FadeInSection';
import { useTranslation } from '../contexts/translationContext';

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6
                transition-colors duration-300 flex items-center
              bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            {t.sections.about}
          </h2>

        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-4">
            {t.about.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {/*
        <div className="flex flex-wrap justify-center gap-3">
          {ABOUT_CONFIG.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900
                         text-blue-800 dark:text-blue-200 rounded-full
                         text-sm font-medium transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
        */}

        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
