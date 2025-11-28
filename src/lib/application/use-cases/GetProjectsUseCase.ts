/**
 * Caso de uso: Obtener proyectos
 * Aplica principios SOLID:
 * - Single Responsibility: Solo obtiene proyectos
 * - Dependency Inversion: Depende de la abstracción (IPortfolioRepository)
 */
import type { IPortfolioRepository } from '$lib/domain/ports';
import type { Project } from '$lib/domain/entities';

export class GetProjectsUseCase {
  constructor(private readonly repository: IPortfolioRepository) {}

  async execute(): Promise<Project[]> {
    return await this.repository.getProjects();
  }

  async executeFeatured(): Promise<Project[]> {
    const projects = await this.repository.getProjects();
    return projects.filter((project) => project.featured);
  }
}

