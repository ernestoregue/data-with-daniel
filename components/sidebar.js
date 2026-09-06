document.addEventListener("DOMContentLoaded", () => {

    const navigation = `

        <!-- MOBILE NAV -->

        <header class="mobile-nav">

            <h1>
            <a href="/index.html">
                Daniel Núñez
            </a>
            </h1>

            <button id="menu-toggle">
                ☰
            </button>

        </header>


        <!-- SIDEBAR -->

        <aside class="sidebar" id="sidebar">

            <div>

                <h1 class="logo">
                    <a href="./index.html"> Daniel Núñez
                    </a>
                </h1>

                <!-- MAIN NAV -->

                <nav class="sidebar-section">

                    <h2>Navigation</h2>

                    <a href="./index.html">Home</a>
                    <a href="./about.html">About</a>
                    <a href="./projects.html">Projects</a>
                    <a href="./contact.html">Contact</a>

                </nav>

                <!-- EXPERIENCE -->

                <nav class="sidebar-section">

                    <h2>Experience</h2>

                    <a href="./experience/krannich-solar.html">
                        Krannich Solar México
                    </a>

                    <a href="./experience/freelance.html">
                        Freelancing
                    </a>

                    <a href="./experience/next-move.html">
                        Next move
                    </a>

                </nav>

                <!-- EDUCATION, CERTIFICATIONS & COURSES -->

                <nav class="sidebar-section">

                    <h2>Credentials</h2>

                    <details>
                        <summary>Education</summary>

                        <a href="https://www.escom.ipn.mx/" target="_blank">
                            ESCOM - Instituto Politécnico Nacional
                        </a>

                    </details>

                    <details>
                        <summary>Certifications</summary>

                        <a href="/assets/documents/AZ-900_Certificate.pdf" target="_blank">
                            AZ-900: Microsoft Azure Fundamentals
                        </a>

                        <a href="https://cert.efset.org/cogZSC" target="_blank">
                            EF SET
                        </a>

                        <a href="./" target="_blank">
                            AI-103
                        </a>

                    </details>

                    <details>
                        <summary>Courses</summary>

                        <a href="https://app.educasign.ai/validation/d763738c-486c-4e0c-a6cb-ba794ced304d" target="_blank">
                            Data Analytics diplomate
                        </a>

                        <a href="https://app.educasign.ai/validation/ccb0f1be-573b-49ce-a224-c91d70f931ac" target="_blank">
                            Business Analyst diplomate
                        </a>

                        <a href="https://codigofacilito.com/certificates/ed9ec3bb-3419-4480-99ae-5b1a300e3f39.pdf" target="_blank">
                            AI Engineering with Python
                        </a>

                        <a href="https://www.coursera.org/account/accomplishments/verify/E1OMPKJGPV7N" target="_blank">
                            Data Science Math Skills
                        </a>

                        <a href="https://www.credly.com/badges/a9a2bc38-aadd-43a3-9cab-c991774d14d9" target="_blank">
                            Python Essentials 1
                        </a>

                    </details>

                </nav>

                <!-- CV -->

                <nav class="sidebar-section">

                    <h2>CV</h2>

                    <a href="./assets/documents/CV_DANIEL.pdf" target="_blank">
                        Download CV
                    </a>

                </nav>

            </div>

        </aside>

    `;


    // INSERTAR NAVEGACIÓN

    document.body.insertAdjacentHTML("afterbegin", navigation);


    // MENÚ MÓVIL

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

});