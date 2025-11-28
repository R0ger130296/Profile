/**
 * Caso de Uso: Obtener Idiomas
 */
import type { IPortfolioRepository } from '../../domain/ports/IPortfolioRepository.port';
import type { Language } from '../../domain/entities';

export class GetLanguagesUseCase {
  constructor(private readonly repository: IPortfolioRepository) {}

  async execute(): Promise<Language[]> {
    return await this.repository.getLanguages();
  }
}
