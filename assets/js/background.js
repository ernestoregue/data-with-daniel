const background = [
    {
        type: "Education",
        title: "B. Eng. in Computer Systems",
        institution: "Instituto Politécnico Nacional – ESCOM",
        description: "Computer Systems Engineering with focus on software, systems analysis, databases, and technology-driven problem solving.",
        status: "Graduated",
        link: "https://www.escom.ipn.mx/"
    },{
        type: "Course",
        title: "Data & Business Analyst Course",
        institution: "Universidad Da Vinci",
        description: "Specialized training in business analytics, KPI interpretation, business intelligence, and data visualization.",
        status: "Completed",
        link: "https://app.educasign.ai/validation/d763738c-486c-4e0c-a6cb-ba794ced304d"
    },{
        type: "Certification",
        title: "Microsoft Azure AZ-900",
        institution: "Microsoft",
        description: "Fundamental cloud concepts, Azure services, governance, security, and cloud-based data environments.",
        status: "Completed",
        link: "jeje"
    },{
        type: "Certification",
        title: "EF SET English Proficiency",
        institution: "EF Education First",
        description: "English language proficiency certification with a score of 61/100, equivalent to C1 level.",
        status: "Completed",
        link: "https://cert.efset.org/cogZSC"
    },{
        type: "Course",
        title: "AI Engineering with Python",
        institution: "Codigo Facilito",
        description: "Comprehensive course on AI engineering, Python programming, and practical applications of artificial intelligence.",
        status: "Completed"
    },{
        type: "Course",
        title: "Math Skills for Data Science",
        institution: "Duke University",
        description: "Mathematical foundations for data science, including statistics, linear algebra, and probability.",
        status: "Completed"
    },{
        type: "Course",
        title: "Python Essentials 1",
        institution: "Cisco Networking Academy",
        description: "Fundamental Python programming concepts, data structures, and problem-solving techniques.",
        status: "Completed"
    },{
        type: "Course",
        title: "Bootcamp Microsoft Foundry",
        institution: "Codigo Facilito",
        description: "Intensive bootcamp covering Microsoft technologies, cloud solutions, and practical applications in software development.",
        status: "In Progress"
    },{
        type: "Course",
        title: "Snowflake First Badge",
        institution: "Snowflake",
        description: "Introduction to Snowflake's cloud data platform, data warehousing, and analytics capabilities.",
        status: "In Progress"
    }

];


function createBackgroundItem(item) {
    return `
        <div class="timeline-item">

            <span class="timeline-type">
                ${item.type}
            </span>

            <a href="${item.link}" target="_blank">
                ${item.title}
            </a>
            <h5>
                ${item.institution}
            </h5>

            <p>
                ${item.description}
            </p>

        </div>
    `;
}


document.getElementById("background-timeline").innerHTML =
    background.map(createBackgroundItem).join("");