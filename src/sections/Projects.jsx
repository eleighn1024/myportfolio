/* eslint-disable no-unused-vars */
// src/sections/Projects.jsx
import FadeInSection from '../components/FadeInSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogleDrive, FaFigma } from 'react-icons/fa';
import { useTranslation } from '../contexts/translationContext';
import { PROJECTS_DATA } from '../configs/data/projects';
import { CiCloud } from 'react-icons/ci';
import TiltedCard from '../components/TiltedCard';


const Projects = () => {
  const [ expanded, setExpanded ] = useState({});
  const { t } = useTranslation();

  const toggleResults = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            { t.sections.projects }
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md
                          border border-gray-200 dark:border-gray-600
                          hover:shadow-lg hover:transform hover:-translate-y-1
                          transition-all duration-300"
              >
                {/* image card (use project.image or a slug fallback) */}
                <div className="mb-4">
                  <TiltedCard
                    imageSrc={project.image || `/assets/projects/${project.id.toString().toLowerCase().replace(/[^a-z0-9]+/g,'-')}.jpg`}
                    altText={project.id}
                    captionText={project.imageCaption || ''}
                    containerHeight="180px"
                    imageHeight="180px"
                    imageWidth="100%"
                    showMobileWarning={false}
                    showTooltip={false}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  { t.projects.titles[project.id] }
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  { t.projects.descriptions[project.id] }
                </p>

                {/* Botón con animación */}
                { t.projects.results[project.id] && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleResults(i)}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none font-medium"
                      aria-expanded={!!expanded[i]}
                    >
                      { expanded[i] ? t.projects.buttons.hideResults : t.projects.buttons.viewResults }
                    </button>

                    {/* Resultados con animación de expansión */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: expanded[i] ? 1 : 0, height: expanded[i] ? 'auto' : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 mt-2">
                        ✅ {t.projects.txtResults}:
                      </h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {t.projects.results[project.id].map((result, idx) => (
                          <li key={idx} className="before:content-['•'] before:mr-1">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}

                {/* Tecnologías con borde visible y fondo neutro */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs
                                bg-gray-100 dark:bg-gray-700/50
                                text-gray-800 dark:text-gray-200
                                border-2 border-gray-200 dark:border-blue-500
                                rounded-md
                                hover:border-blue-500 dark:hover:border-blue-400
                                transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                { project.link &&
                  <div className="mb-6 md:mb-0">
                    <a
                      href={project.link}
                      className="inline-flex items-center
                                gap-2 px-4 py-2
                                text-blue-600
                                dark:text-blue-400
                                hover:underline
                                rounded-lg
                                transition-all
                                duration-300 group"
                    >
                      <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{t.projects.buttons.viewOnGithub}</span>
                    </a>
                  </div>
}

{ project.link2 &&
                  <div className="mb-6 md:mb-0">
                    <a
                      href={project.link2}
                      className="inline-flex items-center
                                gap-2 px-4 py-2
                                text-blue-600
                                dark:text-blue-400
                                hover:underline
                                rounded-lg
                                transition-all
                                duration-300 group"
                    >
                      <FaGoogleDrive className="text-lg group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{t.projects.buttons.viewOnGoogleDrive}</span>
                    </a>
                  </div>
}

{ project.link3 &&
                  <div className="mb-6 md:mb-0">
                    <a
                      href={project.link3}
                      className="inline-flex items-center
                                gap-2 px-4 py-2
                                text-blue-600
                                dark:text-blue-400
                                hover:underline
                                rounded-lg
                                transition-all
                                duration-300 group"
                    >
                      <FaFigma className="text-lg group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{t.projects.buttons.viewOnFigma}</span>
                    </a>
                  </div>
}

{ project.link4 &&
                  <div className="mb-6 md:mb-0">
                    <a
                      href={project.link4}
                      className="inline-flex items-center
                                gap-2 px-4 py-2
                                text-blue-600
                                dark:text-blue-400
                                hover:underline
                                rounded-lg
                                transition-all
                                duration-300 group"
                    >
                      <CiCloud className="text-lg group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{t.projects.buttons.viewOnRender}</span>
                    </a>
                  </div>
}


              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
