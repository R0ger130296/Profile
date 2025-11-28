/**
 * Caso de Uso: Obtener Información Personal
 * Application Layer - Lógica de aplicación
 */
import type { IPortfolioRepository } from '../../domain/ports/IPortfolioRepository.port';
import type { PersonalInfo } from '../../domain/entities';

export class GetPersonalInfoUseCase {
  constructor(private readonly repository: IPortfolioRepository) {}

  async execute(): Promise<PersonalInfo> {
    return await this.repository.getPersonalInfo();
  }
}
