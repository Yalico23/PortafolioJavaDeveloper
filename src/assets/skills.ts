interface skills {
    nombre: string;
    descripcion: string;
    img: string;
  }

  export const habilidades: skills[] = [
    {
      nombre: "Spring Boot",
      descripcion: "Creación de ApiRest con funciones avanzadas como: Paginable, Filtros, y Seguridad. Además de usar una arquitectura hexagonal. Uso de Mapstruct para el mapeo de objetos, DTO. Y Consumo de servicios externos de otros microservicios o servicios en la nube, implementacion de funciones con IA.",
      img: "/images/springboot.png"
    },
    {
      nombre: "Spring JPA",
      descripcion: "Implementación de la capa de persistencia en aplicaciones Java, permitiendo el mapeo objeto-relacional y simplificando las operaciones de base de datos. En diferentes motores de base de datos como MySQL, PostgreSQL, MongoDB, entre otros.",
      img: "/images/springjpa.png"
    },
    {
      nombre: "Spring Security",
      descripcion: "Implementación de seguridad en aplicaciones Java, incluyendo autenticación y autorización. Permite proteger recursos y gestionar roles de usuario.",
      img: "/images/springsecurity.png"
    },
    {
      nombre: "Spring Cloud",
      descripcion: "Conjunto de herramientas para desarrollar aplicaciones distribuidas en la nube, facilitando la configuración, descubrimiento de servicios y gestión de la resiliencia. Dentro del Stack se encuentra la implementación de Eureka, Config Server, Gateway, Circuit Breaker, entre otros.",
      img: "/images/springcloud.png"
    },
    {
      nombre: "Spring WebFlux",
      descripcion: "Framework reactivo de Spring para construir aplicaciones web asíncronas y no bloqueantes, ideal para manejar grandes volúmenes de datos y conexiones concurrentes. Además, de implementación con RXJava.",
      img: "/images/springwebflux.png"
    },
    {
      nombre: "Docker",
      descripcion: "Contenerización de aplicaciones Java, permitiendo su despliegue en entornos aislados y portables. Facilita la creación, despliegue y ejecución de aplicaciones en contenedores.",
      img: "/images/docker.png"
    },
    {
      nombre: "Angular",
      descripcion: "Desarrollo de aplicaciones web modernas y dinámicas utilizando Angular, un framework de JavaScript. Permite crear interfaces de usuario interactivas y escalables. Con implementación de servicios REST, manejo de formularios, validaciones y consumo de APIs.",
      img: "/images/angular.png"
    },
    {
      nombre: "React",
      descripcion: "Desarrollo de interfaces de usuario interactivas y dinámicas utilizando React, una biblioteca de JavaScript. Permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.",
      img: "/images/react.png"
    },
    {
      nombre: "AWS",
      descripcion: "Implementación de servicios en la nube de Amazon Web Services (AWS) para aplicaciones Java, incluyendo despliegue, almacenamiento y bases de datos. Permite escalar aplicaciones y gestionar recursos de manera eficiente. Con dominio en servicios como S3, EC2, RDS, Lambda, entre otros.",
      img: "/images/aws.png"
    },
    {
      nombre: "Git y GitHub",
      descripcion: "Control de versiones y colaboración en proyectos de desarrollo utilizando Git y GitHub. Me permite gestionar el código fuente, realizar seguimiento de cambios y colaborar con otros desarrolladores.",
      img: "/images/github.png"
    }
  ]