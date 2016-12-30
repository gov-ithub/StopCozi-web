# StopCozi-web

Acesta este proiectul de frontend web pentru Sistemul de Programări Online realizat de Gov IT Hub (http://ithub.gov.ro).

## Servicii externe de CI/CD

Conform practicilor de Continuous Integration(Travis CI) și Continuous Delivery(Travis CI/Heroku), la fiecare push în
branch-ul master sau orice alt branch(inclusiv pull request) vor rula următoarele servicii:

1. Travis CI care se ocupă cu:
  * executarea testelor
  * deployment pe Heroku dacă testele s-au executat cu succes
  * raportarea către responsabilii proiectului dacă executarea testelor a eșuat
2. Heroku, care se ocupă de:
    * găzduirea și servirea interfeței aplicației web

Aplicația poate fi accesată [aici](https://yoyosan-stopcozi-web.herokuapp.com/).

## Instalare locală

Puteți urma fie instalarea manuală, fie cea pentru platforma Docker.

Recomandăm să o urmați pe ultima pentru că este complet automatizată.

### Instalare manuală

Clonează repository-ul de git:

```
git clone git@github.com:gov-ithub/StopCozi-web.git
cd StopCozi-web
```

Hai să instalăm `ionic` și `cordova` global pe mașina noastră:

```
npm install -g ionic cordova
```

Acum, configurarea și instalarea pachetelor npm necesare proiectului:

```
cp ionic.config.json.sample ionic.config.json
npm install
```

Pentru a reinstala pluginurile/platformele, folosește:

```
ionic state restore
```

Dacă vei schimba pluginurile/platformele, folosește:

```
ionic state save
```

Pentru a adăuga platforma `X` folosește:

```
ionic platform add X
```

Pentru a construi platforma `X`, folosește:

```
ionic build X
```

### Instalare via Docker

Rulați următoarele comenzi:

```
cp .env.sample .env
```

Editați fișierul `.env` și modificați portul pe care rulează aplicația, dacă e necesar.

**Atenție** Proiectul API folosește porturile `8080` și `8081`.

## Execuție

### Folosind metoda manuală

Pentru a porni aplicația, folosiți:

```
ionic serve --address localhost --port 8082
```

Pentru a emula o anumită platformă, folosiți:

```
ionic emulate X
```

Pentru a rula aplicația pe un dispozitiv extern conectat la PC, folosiți:

```
ionic run X
```

### Docker Linux

```
docker-compose up -d
```

### Docker Windows

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
