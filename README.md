Presentacion Omar Ayaou
    <div style=color:"white"> 
        Pàgina hecha con HTML y CSS para practicar estructuras básicas. Contiene una estructura básica, presentación personal, habilidades y un formulario
        Desarrollada por iniciativa propia como parte de mi aprendizaje en FPLlefià
    <div/>
<html>
<head>
    <style>
        body {
            background-color: #000000;
            margin: 0;
            padding: 0;
        }
        header {
            display: flex;
            align-items: center;
            padding: 10px;
        }
        header img {
            height: 80px;
            margin-right: 20px;
        }
        h1 {
            font-family: 'Garamond';
            color: rgb(255, 255, 255);
            text-align: center;
            flex: 1;
        }
        .section {
            font-family: 'Garamond';
            font-size: 1%;
            font-weight: normal;
            color: #fff;
            white-space: nowrap;
        }
    </style>
</head>
<body>
    <header>
        <img src= "Captura de pantalla 2025-04-14 130917.png" width="100" height="100">
        <h1>Omar Ayaou</h1>
    </header>
</body>
    <section>
        <h2 style="color: rgb(255, 255, 255);">Perfil profesional</h2>
        <p1 style="color: rgb(255, 255, 255);"> Soy estudiante de Microinformática en FPLlefià, con competencias en programación, desarrollo y 
            <br>diseño web (HTML y otras tecnologías). Me considero proactivo, constante y con gran capacidad
            <br>de aprendizaje, habilidades que me han permitido liderar proyectos colaborativos. Mi motivación
            <br>reside en enfrentar nuevos desafíos y aplicar mis conocimientos en iniciativas prácticas que 
            <br>demuestren mi capacidad técnica y mi sentido del trabajo en equipo.</p1>
    </section>
    <section>
        <h2 style="color: rgb(255, 255, 255);">Habilidades blandas</h2>
        <ol style="color: rgb(255, 255, 255);">
            <li style="list-style-type: lower- alpha;">Innovación</li>
            <li style="list-style-type: lower- alpha;">Liderazgo</li>
            <li style="list-style-type: lower- alpha;">Constancia</li>
            <li style="list-style-type: lower- alpha;">Responsabilidad</li>
            <li style="list-style-type: lower- alpha;">Alta capacidad de aprendizaje</li>
            <li style="list-style-type: lower- alpha;">Aprendizaje rápido</li>
        </ol>
    
    </section>
    <div>
        <h2 style="color: rgb(255, 255, 255);">Habilidades técnicas</h2>
        <ol style="color: rgb(255, 255, 255);">
            <li style="list-style-type: lower- alpha;" value="1">Programación 1</li>
            <li style="list-style-type: lower- alpha;">Diseño web</li>
            <li style="list-style-type: lower- alpha;">Conocimientos de HTML + CSS</li>
            <li style="list-style-type: lower- alpha;">Resolución de problemas técnicos</li>

        </ol>
    </div>
<!--Este formulario no funciona al 100%-->
    <div>
        <form action="/formulario" method="POST">
            <label for="Nombre">Nombre</label>
            <br>
            <input type="text" id="Nombre" placeholder="Mi nombre es..."/>
            <br>
            <label for="Apellido">Apellido</label>
            <br>
            <input type="text" name="Apellido" placeholder="Mi apellido es..."/>
            <br>
            <textarea cols="75" rows="15" placeholder="Ingrese comentario"></textarea>
            <br>
            <input type="submit" /><input>
            <br>
            <input type="reset" /><input>
        </form>
    </div>

    <footer>
        <div class="Pie_pagina">
            <div style="border-color: #fff;">
                <img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg" width="300" height="200">
            </div>
        </div>
        <div>
            <p style="color: #fffcfc;">Todos los derechos reservados®</p>
        </div>
    </footer>
    </body>
    </html>
    git commit -m "Pàgina web"
    git push -u origin main

