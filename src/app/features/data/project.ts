import { Project } from './models/project';

export const projects: Project[] = [
  {
    id: 1,
    frontPage: ['one.jpg'],
    title: 'Task Manager',
    shortDescription:
      'Aplicación de gestión de tareas con roles diferenciados. Los administradores crean y asignan tareas, mientras los colaboradores gestionan su flujo de trabajo mediante un tablero Kanban interactivo.',
    github: 'https://github.com/usuario/task-manager',
    youtube: 'https://youtube.com/demo-task-manager',
    longDescription:
      'Task Manager es una solución completa de gestión de tareas orientada a equipos de trabajo. El sistema permite a los administradores realizar operaciones CRUD sobre tareas, asignarlas a colaboradores y monitorear su progreso. Los colaboradores, por su parte, cuentan con un tablero Kanban visual desde el cual pueden iniciar, pausar o finalizar tareas según su estado. La interfaz es dinámica y se adapta al rol del usuario, mostrando solo la información y acciones permitidas. El proyecto destaca por su enfoque modular, uso eficiente de patrones de arquitectura y buenas prácticas tanto en frontend como en backend.',
    technologies: [
      { id: 1, text: 'Angular' },
      { id: 2, text: 'Java (Spring Boot)' },
      { id: 3, text: 'PostgreSQL' },
      { id: 4, text: 'JDBC Template' },
      { id: 5, text: 'Chart.js' },
    ],
    learnings: [
      {
        id: 1,
        text: 'Manejo del Security Context Holder para autenticar y autorizar usuarios',
      },
      {
        id: 2,
        text: 'Implementación y consumo de Enums tanto en el backend como en el frontend',
      },
      {
        id: 3,
        text: 'Gestión de excepciones globales con controladores personalizados',
      },
      {
        id: 4,
        text: 'Uso de JDBC Template para consultas SQL personalizadas y eficientes',
      },
      {
        id: 5,
        text: 'Desarrollo de mappers manuales para desacoplar entidades de DTOs',
      },
      {
        id: 6,
        text: 'Implementación de BehaviorSubjects para manejo reactivo de estado en Angular',
      },
      {
        id: 7,
        text: 'Integración de Chart.js para visualización de estadísticas',
      },
      { id: 8, text: 'Redirección personalizada para usuarios no autorizados' },
      {
        id: 9,
        text: 'Uso de guards para proteger rutas en el frontend según roles',
      },
    ],
    challenges: [
      {
        id: 1,
        text: 'Listar dinámicamente las tareas asociadas al usuario autenticado',
      },
      {
        id: 2,
        text: 'Reutilizar componentes para múltiples roles ocultando funcionalidades específicas',
      },
      {
        id: 3,
        text: 'Implementar paginación eficiente en el frontend para grandes volúmenes de datos',
      },
      {
        id: 4,
        text: 'Controlar la visibilidad de botones y acciones según los permisos del usuario',
      },
    ],
    implementations: [
      {
        id: 1,
        text: 'Migrar el manejo de estados globales a NgRx para mejorar la escalabilidad',
      },
      {
        id: 2,
        text: 'Incorporar notificaciones en tiempo real con WebSockets',
      },
      {
        id: 3,
        text: 'Integrar una librería para el envío automatizado de correos electrónicos',
      },
      {
        id: 4,
        text: 'Agregar módulo de estadísticas para medir tiempos de resolución de tareas',
      },
      {
        id: 5,
        text: 'Reemplazar componentes de UI por una librería moderna como PrimeNG',
      },
    ],
    gallery: [
      'one.jpg',
      'caballeros.webp',
      'dbz.jpg',
      'goku.jpg',
      'canvas.webp',
    ],
  },

  {
    id: 2,
    frontPage: ['caballeros.webp'],
    title: 'Note Manager',
    shortDescription:
      'Organiza tus notas por categorías y accede fácilmente a ellas desde cualquier dispositivo.',
    github: 'https://github.com/usuario/note-manager',
    youtube: 'https://youtube.com/demo-note-manager',
    longDescription: `Note Manager es una aplicación web diseñada para la gestión eficiente de notas personales o profesionales. Permite a los usuarios crear, editar, eliminar y categorizar notas para mantener una organización clara y funcional. Las notas pueden marcarse o desmarcarse con el fin de aplicar filtros personalizados y mejorar la visualización del contenido más relevante. La interfaz visual ha sido cuidadosamente diseñada para ofrecer una experiencia de usuario intuitiva y agradable, utilizando estilos dinámicos que mejoran la apariencia y usabilidad. Este proyecto destaca por su arquitectura modular, separación de capas mediante el uso de DTOs, y una interfaz adaptable pensada tanto para desktop como dispositivos móviles.`,

    technologies: [
      { id: 1, text: 'Angular' },
      { id: 2, text: 'Java (Spring Boot)' },
    ],

    learnings: [
      {
        id: 1,
        text: 'Uso de Loaders para inicializar datos en la base de datos al arrancar el backend',
      },
      {
        id: 2,
        text: 'Diseño y uso de modelos DTO para separar las entidades de las capas de presentación y lógica de negocio',
      },
      {
        id: 3,
        text: 'Gestión y personalización de excepciones mediante controladores globales',
      },
      {
        id: 4,
        text: 'Creación de métodos de consulta con query methods en Spring Data JPA',
      },
      {
        id: 5,
        text: 'Implementación de interceptores HTTP en Angular para inyectar lógica cross-cutting como autenticación y logging',
      },
      {
        id: 6,
        text: 'Uso de elementos `<select>` con múltiples opciones para seleccionar categorías o etiquetas',
      },
      {
        id: 7,
        text: 'Aplicación de clases CSS dinámicas en Angular usando bindings condicionales para mejorar la interacción visual',
      },
    ],

    challenges: [
      {
        id: 1,
        text: 'Integrar una experiencia de usuario fluida entre la categorización y el filtrado de notas en tiempo real',
      },
    ],

    implementations: [
      {
        id: 1,
        text: 'Migrar el estado global del frontend a NgRx para una mejor escalabilidad y mantenibilidad',
      },
      {
        id: 2,
        text: 'Reemplazar la actual implementación de Bootstrap por componentes de PrimeNG u otra librería moderna',
      },
      {
        id: 3,
        text: 'Agregar paginación eficiente para manejar grandes volúmenes de notas sin afectar el rendimiento',
      },
    ],

    gallery: [
      'one.jpg',
      'caballeros.webp',
      'dbz.jpg',
      'goku.jpg',
      'canvas.webp',
    ],
  },

  {
    id: 3,
    frontPage: ['dbz.jpg'],
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
    frontPage: ['dbz.jpg'],
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
    gallery: [
      'one.jpg',
      'caballeros.webp',
      'dbz.jpg',
      'goku.jpg',
      'canvas.webp',
    ],
  },
];
