// src/sections/Skills.jsx
import { SKILLS_DATA } from '../configs/data/skills';
import FadeInSection from '../components/FadeInSection';
import { useTranslation } from '../contexts/translationContext';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-6
              bg-gray-50 dark:bg-gray-900
              transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            { t.skills.txtHeader }
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            { t.skills.intro }
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat, i) => {
            const CategoryIcon = cat.icon;
            return (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600
                               rounded-xl p-6 shadow-sm hover:shadow-lg hover:transform hover:-translate-y-1
                               transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 min-h-6">
                    {cat.icon && <cat.icon className="text-lg" />}
                    { t.skills.categories[cat.id] }
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={idx} className="flex items-center min-h-7 text-gray-700 dark:text-gray-300 text-sm">
                          {/* Si hay ícono, se muestra; si no, un espacio vacío del mismo tamaño */}
                          {ItemIcon ? (
                            <ItemIcon className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-3 opacity-80" />
                          ) : (
                            <span className="w-5 h-5 mr-3"></span> // Espacio reservado
                          )}
                          { t.skills.items[item.name] || item.name }
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
