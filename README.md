# StopCozi-web

Acesta este proiectul de frontend web pentru Sistemul de Programări Online realizat de Gov IT Hub (http://ithub.gov.ro).

## Instalare

### For the Ionic app
- clone git repo
- run "npm install -g ionic cordova"; if you havent already
- run "npm install"; it will install the local packages
- run "ionic state restore"; it will restore plugins, platforms, etc; run "ionic state save" if you change plugins/platforms
- run "ionic platform add X"; X is the platform you wish to add
- run "ionic build X"; X is the platform you wish to run

### For something else
Rulați următoarele comenzi:

```
cp .env.sample .env
```

Editați fișierul `.env` și modificați portul pe care rulează aplicația, dacă e necesar.

**Atenție** Proiectul API folosește porturile `8080` și `8081`.

## Execuție
### Ionic
- run "ionic serve" to run in a browser; use "--address localhost" if you run into host related issues; use "--port X" if you want to change the port; if the browser does not automatically open, go to http://localhost:8100/; replace with selected host and port; use --lab to get side by side platforms
- run "ionic emulate X"; X is the platform for which you have an emulator; certain emulators behave as physical devices so you need to use the run command instead of emulate
- run "ionic run X"; X is the platform you wish to run depending on the native device connected to your computer

### Linux

```
docker-compose up -d
```

### Windows

Dacă folosești Babun și ConEmu, rulează mai întâi:

```
docker-machine start
eval $(docker-machine env default)
```

Altfel, deschide `Docker Quickstart Terminal` și execută:

```
docker-compose up -d
```

Pentru a opri aplicația folosiți:

```
docker-compose stop
```

Pentru ambele sisteme de operare poți verifica statusul containerelor docker folosind:

```
docker-compose ps
```

## Acces

### Linux

Acum puteți accesa aplicația [aici](http://localhost:8082).

### Windows

Acum puteți accesa aplicația [aici](http://192.168.99.100:8082).

Baftă!