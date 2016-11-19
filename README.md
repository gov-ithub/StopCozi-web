# StopCozi-web
Acesta este proiectul de frontend web pentru Sistemul de Programări Online realizat de Gov IT Hub (http://ithub.gov.ro).

## Instalarea

Copiaţi şi configuraţi fişierele cu variabilele de mediu pentru aplicaţie:
```
cp .env.sample .env
vim settings.env
```

Dacă e nevoie, modificaţi portul local pe care rulează Node.js.

## Execuţie și acces

```
docker-compose up -d
```

Pentru a accesa aplicația, click [aici](http://localhost:8082).

Pentru a opri aplicația folosiți:

```
docker-compose stop web
```