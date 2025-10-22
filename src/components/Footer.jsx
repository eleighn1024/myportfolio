// src/components/Footer.jsx
import { FaXTwitter } from 'react-icons/fa6';

import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope, FaHome } from 'react-icons/fa';
import { useTranslation } from '../contexts/translationContext';
import { SITE_DATA } from '../configs/data/site';

const Footer = () => {
  const { t }  = useTranslation();
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">

          {/* Redes sociales - a la izquierda */}
          <div className="flex justify-center md:justify-start gap-6 text-lg">
            {SITE_DATA.social.github && (
              <a
                href={SITE_DATA.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {SITE_DATA.social.linkedin && (
              <a
                href={SITE_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {SITE_DATA.social.twitter && (
              <a
                href={SITE_DATA.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            )}
            {SITE_DATA.social.discord && (
              <a
                href={SITE_DATA.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            )}
            {SITE_DATA.email && (
              <a
                href={`mailto:${SITE_DATA.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            )}
          </div>

          {/* Botón de inicio - a la derecha */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-white
                        hover:bg-blue-600 dark:hover:bg-blue-800 rounded-lg transition-all duration-300 group"
            >
              <FaHome className="text-lg group-hover:scale-110 transition-transform" />
              <span className="font-medium">{ t.nav.home }</span>
            </a>
          </div>
        </div>

        {/* Línea divisoria y mensaje final */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            { t.footer.developedBy } { t.site.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            © {new Date().getFullYear()} - { t.footer.rights }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
