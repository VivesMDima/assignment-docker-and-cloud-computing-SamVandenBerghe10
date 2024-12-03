# Docker & Cloud computing eindopdracht

Sam Vanden Berghe

## werkwijze

### Opstart

#### Backend node.js

simpele backend met 1 endpoint voorlopig: GET alle vissen

voor node 
- npm init
- npm i express
- npm i cors (bepaalt of browser toestemming geeft voor cross-domein verzoeken naar API.)

gehost op poort 3000

#### Frontend html + js

simpele html pagina met 1 titel en 1 list

JavaScript om te fetchen en de li-elementen aan te maken en toe te voegen aan de html

### containerize met docker

node_modules verwijderen uit project

#### backend

Dockerfile maken en niet vergeten npm i te doen om de packages terug te initializeren

backend image aanmaken: "docker build -t samvdb10/visapi ."

backend testrun: "docker run -ti -p 3000:3000 samvdb10/visapi"

![backendcontainertest](/images/backendcontainertest.png)

#### frontend

Dockerfile maken en hosten via een http web server: nginx

frontend image aanmaken: "docker build -t samvdb10/vismarktapp ."

frontend testrun: "docker run -ti -p 8080:80 samvdb10/vismarktapp"
- hier draait de backend containerized op port 3000

![frontendcontainertest](/images/frontendcontainertest.png)

### docker-compose

Docker-compose.yaml file maken (porten juist instellen)
- port voor api meegeven als environment var
- uri voor database meegeven aan api met environment var

![dockercomposefile](/images/dockercomposefile.png)

#### backend:  statische array -> db 

node: 
- npm i mongoose

port kan nu komen uit een environment var

mongoose connect (met hierin de environment variable gedefinieerd in de yaml-file)

schema/model voor jsons maken 

kleine seed methode om al data te hebben in de db

Get enpoint -> nu ipv statische array: uit db!

#### frontend

niks aangepast hier










[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GyBlhhFf)
