/**
 * Contenedor de Dependencias (Dependency Injection Container)
 * Infrastructure Layer - Inyección de dependencias
 */
import { PortfolioRepository } from '../repositories/PortfolioRepository';
import {
  GetPersonalInfoUseCase,
  GetExperiencesUseCase,
  GetCertificationsUseCase,
  GetEducationUseCase,
  GetSkillsUseCase,
  GetLanguagesUseCase,
  GetReferencesUseCase
} from '../../application/use-cases';

/**
 * Container singleton para gestionar las dependencias
 */
class Container {
  private static instance: Container;
  private repository: PortfolioRepository;
  
  // Casos de uso
  private getPersonalInfoUseCase: GetPersonalInfoUseCase;
  private getExperiencesUseCase: GetExperiencesUseCase;
  private getCertificationsUseCase: GetCertificationsUseCase;
  private getEducationUseCase: GetEducationUseCase;
  private getSkillsUseCase: GetSkillsUseCase;
  private getLanguagesUseCase: GetLanguagesUseCase;
  private getReferencesUseCase: GetReferencesUseCase;

  private constructor() {
    // Inicializar repositorio
    this.repository = new PortfolioRepository();

    // Inicializar casos de uso con sus dependencias
    this.getPersonalInfoUseCase = new GetPersonalInfoUseCase(this.repository);
    this.getExperiencesUseCase = new GetExperiencesUseCase(this.repository);
    this.getCertificationsUseCase = new GetCertificationsUseCase(this.repository);
    this.getEducationUseCase = new GetEducationUseCase(this.repository);
    this.getSkillsUseCase = new GetSkillsUseCase(this.repository);
    this.getLanguagesUseCase = new GetLanguagesUseCase(this.repository);
    this.getReferencesUseCase = new GetReferencesUseCase(this.repository);
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  // Getters para casos de uso
  public getGetPersonalInfoUseCase(): GetPersonalInfoUseCase {
    return this.getPersonalInfoUseCase;
  }

  public getGetExperiencesUseCase(): GetExperiencesUseCase {
    return this.getExperiencesUseCase;
  }

  public getGetCertificationsUseCase(): GetCertificationsUseCase {
    return this.getCertificationsUseCase;
  }

  public getGetEducationUseCase(): GetEducationUseCase {
    return this.getEducationUseCase;
  }

  public getGetSkillsUseCase(): GetSkillsUseCase {
    return this.getSkillsUseCase;
  }

  public getGetLanguagesUseCase(): GetLanguagesUseCase {
    return this.getLanguagesUseCase;
  }

  public getGetReferencesUseCase(): GetReferencesUseCase {
    return this.getReferencesUseCase;
  }
}

// Exportar instancia singleton
export const container = Container.getInstance();
