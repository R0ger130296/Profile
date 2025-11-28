/**
 * Hook de Presentación
 * Conecta la capa de presentación con los casos de uso
 */
import { container } from '../../infrastructure/di/Container';
import type {
  PersonalInfo,
  Experience,
  Education,
  Certification,
  Reference,
  Skill,
  Language
} from '../../domain/entities';

/**
 * Hook para obtener información personal
 */
export async function usePersonalInfo(): Promise<PersonalInfo> {
  const useCase = container.getGetPersonalInfoUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener experiencias
 */
export async function useExperiences(): Promise<Experience[]> {
  const useCase = container.getGetExperiencesUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener educación
 */
export async function useEducation(): Promise<Education[]> {
  const useCase = container.getGetEducationUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener certificaciones
 */
export async function useCertifications(): Promise<Certification[]> {
  const useCase = container.getGetCertificationsUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener habilidades
 */
export async function useSkills(): Promise<Skill[]> {
  const useCase = container.getGetSkillsUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener habilidades blandas
 */
export async function useSoftSkills(): Promise<Skill[]> {
  const useCase = container.getGetSkillsUseCase();
  return await useCase.executeSoftSkills();
}

/**
 * Hook para obtener idiomas
 */
export async function useLanguages(): Promise<Language[]> {
  const useCase = container.getGetLanguagesUseCase();
  return await useCase.execute();
}

/**
 * Hook para obtener referencias
 */
export async function useReferences(): Promise<Reference[]> {
  const useCase = container.getGetReferencesUseCase();
  return await useCase.execute();
}
