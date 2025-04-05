import json

projects = "./data/projects.json"

#############################################################
## Automatically generates project pages through JSON data ##
#############################################################
def generate_projects():
    with open(projects, 'r') as f:
        data = json.load(f)

        num_projects = len(data["projects"])
        for project in data["projects"]:
            num = project["num"]
            prev = num - 1 if num > 1 else num_projects
            next = num + 1 if num < num_projects else 1

            symbols = ""
            for symbol in project["symbols"]:
                symbols += f"""
                            <a class="gradient-text social-button" style="font-size: 75px;">
                                {symbol}
                            </a>"""
                
            longs = ""
            for long in project["long"]:
                longs += f"""
                        <p style="text-align: justify;">
                            {long}
                        </P>"""

            if project["source_link"] is None and project["demo_link"] is None:
                showable = "Due to this project being part of a current academic assigment or it not being deployed I am not able to publicly show it."
                source_link = f"""
                            <a style="margin-right: 25px;">
                                <button class="project-button-not-clickable">
                                    <b class="gradient-text" style="font-size: 20px;"><i class="bi bi-github"></i> Source</b>
                                </button>
                            </a>"""
                demo_link = f"""
                            <a>
                                <button class="project-button-not-clickable">
                                    <b class="gradient-text" style="font-size: 20px;"><i class="bi bi-play-circle"></i></i> Demo</b>
                                </button>
                            </a>"""
            elif project["source_link"] is not None and project["demo_link"] is not None:
                showable = ""
                source_link = f"""
                            <a href="{project["source_link"]}" target="_blank" style="margin-right: 25px;">
                                <button class="project-button">
                                    <b class="gradient-text" style="font-size: 20px;"><i class="bi bi-github"></i> Source</b>
                                </button>
                            </a>"""
                demo_link = f"""
                            <a href="{project["demo_link"]}" target="_blank">
                                <button class="project-button">
                                    <b class="gradient-text" style="font-size: 20px;"><i class="bi bi-play-circle"></i></i> Demo</b>
                                </button>
                            </a>"""

            write = open(f"./projects/{num}.html", "w")
            write.write(f"""
<head>
    <link rel="stylesheet" href="../styles/styles.css"/>
    <link rel="stylesheet" href="../styles/body.css"/>
    <link rel="stylesheet" href="../styles/dropdown.css"/>
    <link rel="stylesheet" href="../styles/study.css"/>
    <link rel="stylesheet" href="../styles/footer.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

    <script src="/scripts/scripts.js"></script>

    <!-- Favicon Stuff-->
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon/site.webmanifest">
</head>

<body class="body" id="main-body">
    <a id="#top"></a>
    <div class="all-container">
        <div>
            <div style="padding-top: 150px;"></div>
                <div class="container">
                    <div>
                        <h1 class="gradient-text" style="margin-bottom: 20px; font-size: 60px;">{project["name"]}</h1>
                        <h1 class="gradient-text" style=" height: 75px;">
                            {symbols}
                        </h1>
                    </div>
                    <div>
                        <p>
                            {project["short"]}
                        </p>
                        {longs}
                    </div>
                    <br>
                    <div style="margin-left: auto; width: 100%;">
                        <p>
                            {showable}
                        </p>
                        <p>
                            {source_link}
                            {demo_link}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="float">
                <button onclick='darkModeToggleProject()' id="dark-mode-button" class="gradient-text-button-drop-parent">
                    <a style="color: inherit;"><i class="bi bi-brightness-high-fill"></i></a>
                </button>
            </div>
            <div class="float-dropdown-parent" id="drop2">
                <button onclick="location.href='/projects/{prev}'" class="gradient-text-button-drop" style="text-align: left; ">
                    <a style="color: inherit; font-size: 30px;"><h3><i class="bi bi-chevron-left"></i></h3></a>
                </button>
            </div>
            <div class="float-dropdown-parent" id="drop3" style="top: 120px;">
                <button onclick="location.href='/projects/{next}'" class="gradient-text-button-drop" style="text-align: left; ">
                    <a style="color: inherit; font-size: 30px;"><h3><i class="bi bi-chevron-right"></i></h3></a>
                </button>
            </div>
        </div>
    </div>
    <div class="footer-dark" id="#bottom">
        <div class="footer-container">
            <a href="https://www.linkedin.com/in/jerry-yang-7a9310266/" target="_blank" class="gradient-text social-button"><i class="bi bi-linkedin" ></i></a>
            <a href="mailto:jmax.yang@gmail.com"  class="gradient-text social-button"><i class="bi bi-envelope-fill" ></i></a>
            <a href="https://github.com/MarshmallowsAU" target="_blank" class="gradient-text social-button"><i class="bi bi-github"></i></a>
            <p stlye="margin-top: 50px">© 2024 Jerry Max Yang</p>
        </div>
    </div>
</body>
""")
            
    print("Generated Updated PROJECT Pages")

if __name__ == "__main__":
    generate_projects()
