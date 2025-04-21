# Clase Docker Compose

#### Tarea
* Cual era?
* La hicieron?

#### Probamos si todo se encuentra correctamente instalado
* `docker run hello-world`
* Que hacemos con `docker run`?


#### Comandos Básicos (Hay mucho más)
* `docker info`
* `docker help`
* `docker images` 
* `docker run`
* `docker pull <image>`
* `docker build -t <dockerFile>`
* `docker ps` y `docker ps -a` (Cual es la diferencia)
* `docker start <id>`
* `docker stop <id>`
* `docker run -it ubuntu`
* `docker exec -it <id> bash` => Atamos una terminal.
    *   `docker exec -it <id> /bin/sh`


Parar todos
```sh
docker stop $(docker ps -a -q)
```
Eliminar todos
```sh
docker rm $(docker ps -a -q)
```