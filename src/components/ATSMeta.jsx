// src/components/ATSMeta.jsx
import { SITE_DATA } from '../configs/data/site';
import { SKILLS_DATA } from '../configs/data/skills';
import { EXPERIENCE_DATA } from '../configs/data/experience';
import { PROJECTS_DATA } from '../configs/data/projects';
import { useTranslation } from '../contexts/translationContext';

const ATSMeta = () => {
  const { t } = useTranslation();

  // Extraer y traducir habilidades únicas
  const getTranslatedSkills = () => {
    const allSkills = SKILLS_DATA.flatMap(cat =>
      cat.items.map(item => t.skills.items[item.name] || item.name)
    );
    return [ ...new Set(allSkills) ].slice(0, 10).join(', ');
  };

  // Extraer y traducir roles únicos
  const getTranslatedRoles = () => {
    return EXPERIENCE_DATA.map(e => t.experience.roles[e.id])
      .filter((role, index, self) => self.indexOf(role) === index)
      .slice(0, 3)
      .join(', ');
  };

  // Extraer proyectos clave traducidos
  const getTranslatedProjects = () => {
    return PROJECTS_DATA.slice(0, 3)
      .map(p => t.projects.titles[p.id])
      .join(', ');
  };

  // Extraer primera empresa
  const getCompany = () => {
    return EXPERIENCE_DATA[0]?.company || 'a technology company';
  };

  // Extraer redes sociales activas
  const getSocialPlatforms = () => {
    return Object.keys(SITE_DATA.social)
      .filter(key => SITE_DATA.social[key])
      .map(key => key.charAt(0).toUpperCase() + key.slice(1))
      .join(', ');
  };

  // Datos procesados
  const skills = getTranslatedSkills();
  const roles = getTranslatedRoles();
  const projects = getTranslatedProjects();
  const company = getCompany();
  const social = getSocialPlatforms();
  const name = t.site.name;
  const email = SITE_DATA.email;

  return (
    <div className="sr-only" aria-hidden="false">
      {/* Perfil profesional - la parte más importante para ATS */}
      <p>
        {t.ats.summary
          .replace('{name}', name)
          .replace('{roles}', roles)
          .replace('{skills}', skills)
        }
      </p>

      {/* Proyectos clave - demuestran experiencia práctica */}
      <p>{t.ats.keyProjects.replace('{projects}', projects)}</p>

      {/* Experiencia laboral - contexto profesional */}
      <p>{t.ats.experience.replace('{company}', company)}</p>

      {/* Contacto - información esencial para reclutadores */}
      <p>{t.ats.contact
        .replace('{email}', email)
        .replace('{social}', social)
      }</p>

      {/* Idiomas - requisito común en descripciones de trabajo */}
      <p>{t.ats.languages}</p>

      {/* Palabras clave estratégicas - para sistemas de parsing más básicos */}
      <p>{`${t.ats.keywords} ${[
        name,
        ...roles.split(', '),
        ...skills.split(', '),
        ...projects.split(', ') ].join(', ')}`}
      </p>
    </div>
  );
};

export default ATSMeta;
