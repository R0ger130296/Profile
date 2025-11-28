/**
 * Entidad de Dominio: Skill
 * Representa una habilidad técnica o blanda
 */
export class Skill {
  constructor(
    public readonly name: string,
    public readonly category: SkillCategory,
    public readonly level?: SkillLevel
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('Skill name is required');
    }
  }
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'mobile' 
  | 'tools' 
  | 'methodologies' 
  | 'soft';

export type SkillLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'expert';
