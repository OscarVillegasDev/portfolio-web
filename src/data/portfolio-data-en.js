/**
 * @constant {Object} PORTFOLIO_DATA - Contains all the portfolio data.
 * Exported to be imported and used in main.js.
 */
export const PORTFOLIO_DATA = {
    "code": 200,
    "message": "ok",
    "details": [
        {
            "summary": "Passionate full-stack developer with a proven track record in building end-to-end applications, from user interface design to server-side logic and database management. I have a deep interest in continuous learning and sharing knowledge, which allows me to adapt to new challenges. My experience includes designing and implementing robust APIs using technologies such as Apigee, Python, OpenAPI. With a focus on the Agile Scrum methodology, I'm committed to delivering innovative solutions that exceed expectations.",
            "cvPdf": "/pdf/VillegasOscar-en-cv25.pdf",
            "personalInfo": {
                "fullName": "Oscar Villegas",
                "title": "API Developer",
                "email": "oscarnickvillegas@gmail.com",
                "phone": "+52 7712620593",
                "location": {
                    "country": "Mexico",
                    "state": "Hidalgo",
                    "city": "Pachuca"
                },
                "linkedin": "https://www.linkedin.com/in/dev-oscar-villegas/",
                "education": {
                    "institution": "Autonomous University Of the State of Hidalgo",
                    "degree": "Bachelor's degree in Computer Science",
                    "years": "2016 - 2020"
                },
                "languages": {
                    "english": "Intermediate B2",
                    "spanish": "Native"
                }
            }
        },
        {
            "experience": [
                {
                    "id": 0,
                    "title": "Apigee developer",
                    "company": "Infosys/Loreal",
                    "years": "March 2024 - Present",
                    "description": [
                        "API Developer with extensive experience in API design and development. Expertly configured Apigee Edge gateway, applying best practices in security and policy management, including robust security policy implementation. Spearheaded comprehensive manual and automated testing to ensure exceptional software quality. Collaborated cross-functionally to troubleshoot issues and optimize solution delivery in an agile environment."
                    ]
                },
                {
                    "id": 1,
                    "title": "API developer",
                    "company": "Grupo Salinas",
                    "years": "April 2021 - March 2024",
                    "description": [
                        "Experience in developing and designing APIs using the Contract First methodology. Proficient in performing stress testing and configuring Apigee Edge gateway, applying best practices in security and policy management. Competent in implementing security policies to protect APIs. Experienced in manual and automated testing to ensure software quality. Collaborative teamwork with other developers and infrastructure specialists to troubleshoot and optimize solution delivery. Ability to learn and adapt to new technologies and tools in an agile environment."
                    ]
                },
                {
                    "id": 2,
                    "title": "Fullstack developer",
                    "company": "Softmotion",
                    "years": "March 2018 - April 2021",
                    "description": [
                        "Versatile Software Developer with extensive experience spanning full-stack development, database administration, and business analysis. Proficient in architecting and implementing robust web platforms and API integrations using PHP, ASP.NET, and modern JavaScript frameworks (AngularJS, ReactJS, VueJS). Successfully deployed CRM solutions and leveraged major cloud services (GCP, AWS, Azure). Adept at managing projects with Agile methodologies (Scrum, Kanban) and collaborating cross-functionally to deliver efficient, high-quality software solutions. Committed to continuous learning and technical optimization."
                    ]
                }
            ]
        },
        {
            "projects": [
                {
                    "id": 0,
                    "tittle": "Automated Tasks",
                    "decription": "A tool to generate API documentation in OpenAPI 3.0 and prepare requests to create the API proxy, update/query KVM, and promote the API proxy in Apigee.",
                    "techStack": [
                        "nodejs"
                    ],
                    "status": "Testing",
                    "highlights": [
                        "/img/api-dev-tool/inicio.png",
                        "/img/api-dev-tool/final.png",
                        "/img/api-dev-tool/files.png"
                    ]
                },
                {
                    "id": 1,
                    "tittle": "Feedback Wrap",
                    "decription": "An Android application that offers a Management 3.0 technique to provide constructive feedback based on facts, not judgments. The goal is continuous improvement, motivation, and the creation of quality relationships.",
                    "techStack": [
                        "nodejs"
                    ],
                    "status": "In production",
                    "highlights": [
                        "/img/feedback-wrap/registro.png",
                        "/img/feedback-wrap/login.png",
                        "/img/feedback-wrap/menu.png",
                        "/img/feedback-wrap/proceso.png",
                        "/img/feedback-wrap/proceso1.png",
                        "/img/feedback-wrap/proceso2.png",
                        "/img/feedback-wrap/proceso3.png",
                        "/img/feedback-wrap/proceso4.png",
                        "/img/feedback-wrap/proceso5.png",
                        "/img/feedback-wrap/proceso6.png",
                        "/img/feedback-wrap/proceso7.png",
                        "/img/feedback-wrap/proceso8.png",
                        "/img/feedback-wrap/proceso9.png"
                    ]
                },
                {
                    "id": 2,
                    "tittle": "Visitor System",
                    "decription": "A web system that manages visitors to a location. It registers/updates visitors and registers/updates/lists each visitor's visits. It also includes user management for Administrators.",
                    "techStack": [
                        "php",
                        "html",
                        "javascript"
                    ],
                    "status": "In production",
                    "highlights": [
                        "/img/sistema-visitas-P/login.png",
                        "/img/sistema-visitas-P/menu.png",
                        "/img/sistema-visitas-P/registro.png",
                        "/img/sistema-visitas-P/registroVisita.png",
                        "/img/sistema-visitas-P/administrador-page.png"
                    ]
                },
                {
                    "id": 3,
                    "tittle": "Christmas Event",
                    "decription": "A static website that displays a countdown to Christmas day, followed by holiday greetings and a demo of a Christmas-themed video game.",
                    "techStack": [
                        "html",
                        "javascript"
                    ],
                    "status": "In production",
                    "highlights": [
                        "/img/navidad/readme.png",
                        "/img/navidad/inicio.png",
                        "/img/navidad/presentacion.png",
                        "/img/navidad/game.png"
                    ]
                },
                {
                    "id": 4,
                    "tittle": "Vallz Video Game",
                    "decription": "A video game for Android phones where you have to control a ball with your gyroscope sensor to reach a goal by passing different types of levels.",
                    "techStack": [
                        "unity",
                        "c#"
                    ],
                    "status": "Pre-production",
                    "highlights": [
                        "/img/vallz/menu.png",
                        "/img/vallz/skins.png",
                        "/img/vallz/niveles.png",
                        "/img/vallz/gameplay.png",
                        "/img/vallz/gameover.png"
                    ]
                },
                {
                    "id": 5,
                    "tittle": "Valentine's Day Event",
                    "decription": "A static website that celebrates Valentine's Day in a unique way, featuring an animation of yellow flowers growing at the end.",
                    "techStack": [
                        "html",
                        "javascript"
                    ],
                    "status": "In production",
                    "highlights": [
                        "/img/valentin/inicio.png",
                        "/img/valentin/opcionNo.png",
                        "/img/valentin/opcionNo2.png",
                        "/img/valentin/opcionNo3.png",
                        "/img/valentin/opcionSi.png",
                        "/img/valentin/flores.png"
                    ]
                }
            ]

        },
        {
            "certifications": [
                "Management 3.0",
                "Scrum Fundamentals",
                "Kanban",
                "Scrum Master",
                "TOEFL - ITP B2"
            ],
            "courses": [
                {
                    "gcp": [
                        "API Design and Fundamentals of Google Cloud's Apigee API Platform",
                        "API Security on Google Cloud's Apigee API Platform",
                        "API Development on Google Cloud's Apigee API",
                        "Google Cloud Platform Courses"
                    ]
                },
                {
                    "aws": [
                        "AWS Cloud Practitioner Essentials Day",
                        "Security Engineering on AWS Jam",
                        "MLOps Engineering on AWS",
                        "Migrating to AWS",
                        "AWS Well-Architected Best Practices"
                    ]
                },
                {
                    "platziCourses": [
                        "Curso de Docker: Fundamentos",
                        "Curso de React.js",
                        "Curso de Django",
                        "Curso de Django Rest Framework",
                        "Curso de Vite.js"
                    ]
                },
                "Desarrollo aplicaciones Android con Kotlin",
                "Desarrollo páginas web con nodeJS",
                "Crea tu primera página web en un día con WordPress"
            ]
        }
    ]
};