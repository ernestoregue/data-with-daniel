const projects = [
    {
        image: "./assets/images/projects/Project1.avif",
        tags: "PostgreSQL • Databases • NAS",
        title: "Self-Hosted PostgreSQL Analytics Environment",
        description:
            "Built a self-hosted PostgreSQL analytics environment using anonymized ERP data, exploring database administration, data modeling, and analytical workflows outside traditional business systems.",
        link: "./projects/postgresql-platform.html"
    },

    {
        image: "./assets/images/projects/Project2.jpg",
        tags: "SQL • Python • Tableau • Data Analytics",
        title: "ERP Data Transformation & Analytics Workflow",
        description:
            "Developed an analytics workflow using structured ERP-derived data, SQL, and Python to transform operational information into analytical datasets and explore alternative visualization approaches with Tableau.",
        link: "./projects/erp-data-workflow.html"
    },

    {
        image: "./assets/images/projects/Project3.jpg",
        tags: "AWS • Azure • Cloud Architecture",
        title: "Cloud Data Architecture Exploration",
        description:
            "Explored cloud infrastructure and data architecture concepts while transitioning from traditional BI workflows toward modern data engineering practices.",
        link: "./projects/cloud-data-architecture.html"
    },

    {
        image: "./assets/images/projects/Project4.webp",
        tags: "BigQuery • Snowflake • Neon • PostgreSQL",
        title: "Modern Analytics Stack Exploration",
        description:
            "Explored modern data platforms and cloud-based analytics technologies, comparing different approaches for scalable data storage, processing, and analytics workflows.",
        link: "./projects/modern-analytics-stack.html"
    },

    {
        image: "./assets/images/projects/Project5.avif",
        tags: "HTML • CSS • JavaScript • GitHub Actions",
        title: "Analytics Portfolio Website",
        description:
            "Designed and developed a personal analytics portfolio website to showcase projects, experiment with frontend technologies, and implement version-controlled deployment workflows.",
        link: "./projects/portfolio-website.html"
    },
    {
        image: "./assets/images/projects/Project6.jpg",
        tags: "NAV 2016 • Business Analysis • Process Improvement",
        title: "ERP Business Analysis Case Study",
        description:"Exploring ERP environments and business processes through system analysis, reporting opportunities, and technology-driven improvement proposals.",
        link: "./projects/portfolio-website.html"
    }
];


function createProjectCard(project) {
    return `
        <a class="project-card">

            <img src="${project.image}" alt="${project.title}">

            <div class="project-info">

                <span>${project.tags}</span>

                <h4>${project.title}</h4>

                <p>${project.description}</p>

            </div>

        </a>
    `;
}

function shuffleProjects(projects) {
    return projects.sort(() => Math.random() - 0.5);
}

const randomProjects = shuffleProjects(projects);

document.getElementById("projects-container").innerHTML =
    randomProjects.map(createProjectCard).join("");