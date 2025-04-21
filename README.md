Pàgina hecha con HTML y CSS para practicar estructuras básicas.
<br> Contiene una estructura básica, presentación personal, habilidades y un formulario.
<br>Desarrollada por iniciativa propia como parte de mi aprendizaje en FPLlefià.

<html>
<head>
    <style>
        body {
            background-color: #000;
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
            border-style: solid;
            border-color: gray dashed;
            border-radius: 5px;
            border-width: 3mm;
        }
        .section {
            font-family: 'Garamond';
            font-size: 1;
            font-weight: normal;
            color: #fff;
            white-space: nowrap;
        }
    </style>
</head>
<body>
    <header>
        <img src= "![Image](https://github.com/user-attachments/assets/f5429109-d52f-4657-aada-dc0af5c0767f)" width="125" height="100"/>
        <h1>Omar Ayaou</h1>
    </header>
</body>
    <section>
        <h2 style="color: rgb(255, 255, 255);">Perfil profesional</h2>
        <p style="color: rgb(255, 255, 255);"> Soy estudiante de Microinformática en FPLlefià, con competencias en programación, desarrollo y 
            <br>diseño web (HTML y otras tecnologías). Me considero proactivo, constante y con gran capacidad
            <br>de aprendizaje, habilidades que me han permitido liderar proyectos colaborativos. Mi motivación
            <br>esta especialmente en enfrentar nuevos desafíos y aplicar mis conocimientos en iniciativas prácticas que 
            <br>puedan demoestrar mi capacidad técnica y mi sentido del trabajo en equipo.</p>
    </section>
    <section>
        <h2 style="color: rgb(255, 255, 255);">Habilidades blandas</h2>
        <ol style="color: rgb(255, 255, 255);">
            <li style="list-style-type: lower- alpha;">Innovación</li>
            <li style="list-style-type: lower- alpha;">Liderazgo</li>
            <li style="list-style-type: lower- alpha;">Constancia</li>
            <li style="list-style-type: lower- alpha;">Responsabilidad</li>
            <li style="list-style-type: lower- alpha;">Aprendizaje rápido</li>
            <li style="list-style-type: lower- alpha;">Gran capacidad de aprendizaje</li>
        </ol>
    </section>
   
<div>
        <h2 style="color: rgb(255, 255, 255);">Habilidades técnicas</h2>
        <ol style="color: rgb(255, 255, 255);">
            <li style="list-style-type: lower- alpha;" value="1">Programación</li>
            <li style="list-style-type: lower- alpha;">Diseño web</li>
            <li style="list-style-type: lower- alpha;">Conocimientos de HTML + CSS</li>
            <li style="list-style-type: lower- alpha;">Resolución de problemas técnicos</li>
        </ol>
    </div>
<!--Este formulario es una prueba mía-->
    <div>
        <form action="/formulario" method="POST">
            <label style="color: white" for="Nombre">Nombre</label>
            <br>
            <input type="text" id="Nombre" placeholder="Mi nombre es..."/>
            <br>
            <label style="color: white" for="Apellido">Apellido</label>
            <br>
            <input type="text" name="Apellido" placeholder="Mi apellido es..."/>
            <br>
            <textarea cols="75" rows="15" placeholder="Ingrese comentario"></textarea>
            <br>
            <input type="submit" />
            <br>
            <input type="reset" />
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

