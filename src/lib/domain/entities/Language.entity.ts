/**
 * Entidad de Dominio: Language
 * Representa un idioma hablado
 */
export class Language {
  constructor(
    public readonly name: string,
    public readonly level: string
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error('Language name is required');
    }
    if (!this.level || this.level.trim().length === 0) {
      throw new Error('Language level is required');
    }
  }
}
