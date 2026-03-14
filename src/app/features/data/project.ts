import { ProjectCategory } from './models/category';
import { Project } from './models/project';

export const projects: Project[] = [
  {
    id: 1,
    frontPage: ['ts3.png'],
    title: 'Task Manager',
    shortDescription:
      'Aplicación de gestión de tareas con roles diferenciados. Los administradores crean y asignan tareas, mientras los colaboradores gestionan su flujo de trabajo mediante un tablero Kanban interactivo.',
    github: 'https://github.com/DarwinTl/Task-Manager-Full',
    youtube: 'https://youtu.be/2UBX-WHx3p4',
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
    gallery: ['ts1.png', 'ts2.png', 'ts0.png', 'ts4.png', 'ts3.png'],
    category: ProjectCategory.FULL,
  },

  {
    id: 2,
    frontPage: ['tm0.png'],
    title: 'Note Manager',
    shortDescription:
      'Organiza tus notas por categorías y accede fácilmente a ellas desde cualquier dispositivo.',
    github: 'https://github.com/DarwinTl/Note-manager',
    youtube: 'https://youtu.be/xl3n-q7T5To',
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

    gallery: ['tm1.png', 'tm2.png', 'tm3.png', 'tm4.png'],
    category: ProjectCategory.FULL,
  },

  {
    id: 3,
    frontPage: ['am0.png'],
    title: 'MR- Appointment',
    shortDescription:
      'API backend para la gestión inteligente de citas que utiliza un modelo de IA para interpretar lenguaje natural y ejecutar operaciones CRUD mediante un endpoint.',
    github: 'https://github.com/DarwinTl/appointmenta-app',
    youtube: 'https://youtu.be/uTtkp4L6_BA',
    longDescription: `Este proyecto es una API backend para la gestión de citas que usa un modelo de inteligencia artificial para permitir la interacción mediante lenguaje natural. A través de un endpoint, el sistema interpreta solicitudes del usuario y ejecuta automáticamente operaciones CRUD.
El backend implementa validaciones de tiempo para garantizar la consistencia de los datos, evitando la creación de citas en fechas pasadas o en fechas demasiado lejanas en el futuro.
El proyecto está enfocado en demostrar la integración de IA con APIs como alternativa a lo tradicional que es usar formularios.
`,
    technologies: [
      {
        id: 1,
        text: 'Java-Spring Boot',
      },
      {
        id: 2,
        text: 'Postgrest',
      },
    ],
    learnings: [
      {
        id: 1,
        text: 'Implementar modelo LLM usando spring AI',
      },
      {
        id: 2,
        text: 'Uso de Tools para llamar funciones',
      },
      {
        id: 3,
        text: 'Validaciones de hora y fecha',
      },
      {
        id: 4,
        text: 'Usar una plantilla de un prompt para hacer mas robusto el proyecto',
      },
      {
        id: 5,
        text: 'Configurar el modelo para que tenga memoria y guarde contexto de la conversación',
      },
    ],
    challenges: [
      {
        id: 1,
        text: 'Conseguir una key-free para desarrollar el proyecto',
      },
      {
        id: 2,
        text: 'Que el modelo acepte terminos de fecha como hoy , mañana , proximo mes ,etc',
      },
    ],
    implementations: [
      {
        id: 1,
        text: 'Implentar inicios de sesión',
      },
      {
        id: 2,
        text: 'Tablas relacionales',
      },
      {
        id: 1,
        text: 'Gestión de tokens, limitar requests',
      },
    ],

    gallery: ['am1.png', 'am2.png', 'am3.png', 'am4.png'],
    category: ProjectCategory.BACKEND,
  },

  {
    id: 4,
    frontPage: ['su1.png'],
    title: 'Acortador de URLs',
    shortDescription: 'Acorta tus URLs de forma rápida y eficiente.',
    github: 'https://github.com/DarwinTl/short-url',
    youtube: 'https://youtu.be/VN-IM9Yt2qc',
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
    gallery: ['su0.png', 'su1.png', 'su3.png', 'su4.png', 'su5.png'],
    category:ProjectCategory.FULL
  },
];
