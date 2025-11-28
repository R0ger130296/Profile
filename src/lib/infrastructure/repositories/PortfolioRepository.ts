/**
 * Implementación del Repositorio
 * Infrastructure Layer - Acceso a datos
 */
import type { IPortfolioRepository } from '../../domain/ports/IPortfolioRepository.port';
import {
  Experience,
  Education,
  Certification,
  PersonalInfo,
  Reference,
  Skill,
  Language,
  type SkillCategory
} from '../../domain/entities';
import {
  personalInfo as personalInfoData,
  experiences as experiencesData,
  education as educationData,
  certifications as certificationsData,
  references as referencesData,
  skills as skillsData,
  softSkills as softSkillsData,
  languages as languagesData
} from '../../data/portfolio';

export class PortfolioRepository implements IPortfolioRepository {
  async getPersonalInfo(): Promise<PersonalInfo> {
    const data = personalInfoData;
    return new PersonalInfo(
      data.name,
      data.title,
      data.email,
      data.phone,
      data.location,
      data.summary
    );
  }

  async getExperiences(): Promise<Experience[]> {
    return experiencesData.map(
      (exp) =>
        new Experience(
          exp.id,
          exp.title,
          exp.company,
          exp.location,
          exp.startDate,
          exp.endDate,
          exp.responsibilities
        )
    );
  }

  async getEducation(): Promise<Education[]> {
    return educationData.map(
      (edu) =>
        new Education(
          edu.id,
          edu.degree,
          edu.institution,
          edu.startDate,
          edu.endDate,
          edu.location
        )
    );
  }

  async getCertifications(): Promise<Certification[]> {
    return certificationsData.map(
      (cert) =>
        new Certification(cert.id, cert.name, cert.issuer, cert.image)
    );
  }

  async getReferences(): Promise<Reference[]> {
    return referencesData.map(
      (ref) =>
        new Reference(
          ref.id,
          ref.name,
          ref.position,
          ref.company,
          ref.email,
          ref.phone
        )
    );
  }

  async getSkills(): Promise<Skill[]> {
    const skills: Skill[] = [];
    
    Object.entries(skillsData).forEach(([category, skillList]) => {
      if (category !== 'methodologies') {
        skillList.forEach((skillName) => {
          skills.push(
            new Skill(skillName, category as SkillCategory)
          );
        });
      }
    });

    // Agregar metodologías
    skillsData.methodologies.forEach((methodology) => {
      skills.push(new Skill(methodology, 'methodologies'));
    });

    return skills;
  }

  async getSoftSkills(): Promise<Skill[]> {
    return softSkillsData.map(
      (skillName) => new Skill(skillName, 'soft')
    );
  }

  async getLanguages(): Promise<Language[]> {
    return languagesData.map(
      (lang) => new Language(lang.name, lang.level)
    );
  }
}
