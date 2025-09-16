import { Project } from './models/project';

export const projects: Project[] = [
  {
    id: 1,
    frontPage: 'dsad',
    title: 'Task Manager',
    shortDescription: 'dsd',
    github: 'sdsd',
    youtube: 'dsds',
    longDescription: 'fdfd',
    technologies: [
      {
        id: 1,
        text: 'Angular',
      },
      {
        id: 2,
        text: 'Java',
      },
    ],
    learnings: [
      {
        id: 1,
        text: 'sds',
      },
    ],
    challenges: [
      {
        id: 2,
        text: 'dsdsd',
      },
    ],
    implementations: [
      {
        id: 1,
        text: '',
      },
    ],
  },
  {
    id: 2,
    frontPage: 'dsad',
    title: 'Task Manager',
    shortDescription: 'dsd',
    github: 'sdsd',
    youtube: 'dsds',
    longDescription: 'fdfd',
    technologies: [
      {
        id: 1,
        text: 'Angular',
      },
      {
        id: 2,
        text: 'Java',
      },
    ],
    learnings: [
      {
        id: 1,
        text: 'sds',
      },
    ],
    challenges: [
      {
        id: 2,
        text: 'dsdsd',
      },
    ],
    implementations: [
      {
        id: 1,
        text: '',
      },
    ],
  },
  {
    id: 3,
    frontPage: 'dsad',
    title: 'Task Manager',
    shortDescription: 'dsd',
    github: 'sdsd',
    youtube: 'dsds',
    longDescription: 'fdfd',
    technologies: [
      {
        id: 1,
        text: 'Angular',
      },
      {
        id: 2,
        text: 'Java',
      },
    ],
    learnings: [
      {
        id: 1,
        text: 'sds',
      },
    ],
    challenges: [
      {
        id: 2,
        text: 'dsdsd',
      },
    ],
    implementations: [
      {
        id: 1,
        text: '',
      },
    ],
  },
  {
    id: 4,
    frontPage: 'dsad',
    title: 'Acortador de URLs',
    shortDescription: 'Acorta tus URLs de forma rápida y eficiente.',
    github: 'sdsd',
    youtube: 'dsds',
    longDescription:
      'Este proyecto tiene como objetivo acortar URLs y generar códigos QR. Cuenta con dos planes: el plan gratuito permite administrar hasta 5 URLs, mientras que el plan PRO ofrece funcionalidades avanzadas como la personalización de URLs acortadas, protección mediante contraseña y configuración de fechas de expiración. Para los usuarios no registrados, los enlaces generados expiran automáticamente después de 2 horas.',
    technologies: [
      {
        id: 1,
        text: 'Angular',
      },
      {
        id: 2,
        text: 'Java',
      },
      {
        id: 3,
        text: 'Spring Boot',
      },
      {
        id: 4,
        text: 'MySQL',
      },
      {
        id: 5,
        text: 'PrimeNG',
      },
    ],
    learnings: [
      {
        id: 1,
        text: 'Uso de PrimeNG para el diseño de interfaces gráficas modernas y responsivas.',
      },
      {
        id: 2,
        text: 'Manejo de múltiples DTOs para separar capas de presentación y lógica de negocio.',
      },
      {
        id: 3,
        text: 'Implementación de tareas programadas con Spring para mantenimiento del sistema.',
      },
      {
        id: 4,
        text: 'Integración de la librería ZXing para la generación dinámica de códigos QR.',
      },
      {
        id: 5,
        text: 'Manejo avanzado de excepciones para mejorar la robustez de la aplicación.',
      },
    ],
    challenges: [
      {
        id: 1,
        text: 'Redirección de URLs: inicialmente se realizaba desde el backend, lo que generaba conflictos por políticas CORS. La solución fue manejar las redirecciones desde el frontend.',
      },
      {
        id: 2,
        text: 'Eliminación automática de URLs expiradas pertenecientes a usuarios anónimos mediante tareas programadas.',
      },
      {
        id: 3,
        text: 'Visualización del código QR generado en el backend e impresión dinámica en el frontend.',
      },
      {
        id: 4,
        text: 'Implementación de interfaces utilizando componentes de PrimeNG ya que fue la primera vez que lo usaba.',
      },
      {
        id: 5,
        text: 'Gestión de usuarios anónimos y expiración de enlaces basada en reglas de negocio.',
      },
    ],
    implementations: [
      {
        id: 1,
        text: 'Implementar lógica de suscripción completa para cambiar el plan del usuario desde el frontend, actualmente el cambio se realiza manualmente en la base de datos.',
      },
      {
        id: 2,
        text: 'Agregar módulo de estadísticas: análisis de dispositivos de acceso, horarios de mayor tráfico y límite de aperturas por enlace.',
      },
    ],
  },
];
