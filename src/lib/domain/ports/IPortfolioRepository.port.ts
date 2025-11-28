/**
 * Puerto (Interface) del Dominio
 * Define el contrato para acceder a los datos del portafolio
 * La implementación concreta estará en la capa de infraestructura
 */
import type {
  Experience,
  Education,
  Certification,
  PersonalInfo,
  Reference,
  Skill,
  Language
} from '../entities';

export interface IPortfolioRepository {
  getPersonalInfo(): Promise<PersonalInfo>;
  getExperiences(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getCertifications(): Promise<Certification[]>;
  getReferences(): Promise<Reference[]>;
  getSkills(): Promise<Skill[]>;
  getSoftSkills(): Promise<Skill[]>;
  getLanguages(): Promise<Language[]>;
}
