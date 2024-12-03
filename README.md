# Docker & Cloud computing eindopdracht

Sam Vanden Berghe

## werkwijze

node.js simpele backend met 1 endpoint voorlopig: GET alle vissen

voor node 
- npm init
- npm i express
- npm i cors

gehost op poort 3000

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


![frontendcontainertest](/images/frontendcontainertest.png)







[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GyBlhhFf)
