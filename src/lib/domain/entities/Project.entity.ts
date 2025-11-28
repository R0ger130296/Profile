/**
 * Entidad de Proyecto
 * Aplica principios SOLID:
 * - Single Responsibility: Representa solo un proyecto
 * - Open/Closed: Extensible mediante herencia o composición
 */
export class Project {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly longDescription?: string,
    public readonly technologies: string[],
    public readonly image?: string,
    public readonly githubUrl?: string,
    public readonly liveUrl?: string,
    public readonly featured: boolean = false,
    public readonly startDate?: string,
    public readonly endDate?: string
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('Project name is required');
    }
    if (!this.description || this.description.trim().length === 0) {
      throw new Error('Project description is required');
    }
    if (this.technologies.length === 0) {
      throw new Error('Project must have at least one technology');
    }
  }

  get isLive(): boolean {
    return !!this.liveUrl;
  }

  get hasCode(): boolean {
    return !!this.githubUrl;
  }
}

