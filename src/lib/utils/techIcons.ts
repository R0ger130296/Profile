/**
 * Mapeo de tecnologías a nombres de iconos
 * Los iconos deben estar en /static/icons/tech/{iconName}.svg
 * Puedes descargarlos de: https://simpleicons.org/
 */
export const techIconMap: Record<string, string> = {
  // Frontend
  'React': 'react',
  'Next.js': 'nextdotjs',
  'Angular': 'angular',
  'Angular CLI': 'angular',
  'React Native': 'react',
  'Expo': 'expo',
  'Tailwind CSS': 'tailwindcss',
  'HTML5': 'html5',
  'CSS': 'css3',
  'Micro-Frontend': 'micro-frontend',
  
  // Backend
  'NestJS': 'nestjs',
  'Spring Framework': 'spring',
  'Python': 'python',
  
  // Mobile
  'Flutter': 'flutter',
  
  // Tools
  'Git': 'git',
  'GitHub': 'github',
  'Bitbucket': 'bitbucket',
  'GitFlow': 'git',
  'Jira': 'jira',
  'Swagger': 'swagger',
  'Visual Studio': 'visualstudiocode',
  'Windows': 'windows',
  'Discord': 'discord',
  
  // Metodologías (usar iconos genéricos o personalizados)
  'SCRUM': 'scrum',
  'PMP': 'pmp',
  'Principios SOLID': 'solid'
};

/**
 * Obtiene la ruta del icono para una tecnología
 * Primero intenta usar el icono local, si no existe usa el CDN
 * @param techName Nombre de la tecnología
 * @returns Ruta del icono (local o CDN) o null si no existe
 */
export function getTechIconPath(techName: string): string | null {
  const iconName = techIconMap[techName];
  if (!iconName) return null;
  
  // Primero intentar usar el icono local
  const localPath = `/icons/tech/${iconName}.svg`;
  
  // Si el icono no existe localmente, usar CDN como fallback
  // El componente verificará si el icono local existe antes de usar el CDN
  return localPath;
}

/**
 * Obtiene la URL del CDN para un icono
 * @param techName Nombre de la tecnología
 * @returns URL del CDN o null si no existe
 */
export function getTechIconCDN(techName: string): string | null {
  const iconName = techIconMap[techName];
  if (!iconName) return null;
  return `https://cdn.simpleicons.org/${iconName}`;
}

/**
 * Obtiene el nombre del icono para una tecnología
 * @param techName Nombre de la tecnología
 * @returns Nombre del icono o null si no existe
 */
export function getTechIconName(techName: string): string | null {
  return techIconMap[techName] || null;
}

