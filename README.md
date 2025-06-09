# Korca Tech Hub

## Përshkrimi

"Korca Tech Hub" u krijua si ide e një platformë moderne për mësim online (LMS), e ndërtuar me stack-un MERN (MongoDB, Express, React, Node.js). Platforma ofron:

- Regjistrim dhe login me role (administrator, instruktor, student)
- Menaxhim të kurseve, leksioneve dhe regjistrimeve
- Panel administratorësh dhe instruktorësh me funksionalitete të avancuara
- Vlerësime dhe komente për kurset
- Rikuperim fjalëkalimi me email
- Pagesa online (model i thjeshtë)
- Dizajn modern me Tailwind CSS dhe React Hooks

## Features

- Autentifikim dhe autorizim me JWT dhe bcrypt
- CRUD operacione për kurset dhe leksionet
- Panel i dedikuar për administratorë dhe instruktorë
- Shtim dhe menaxhim i review-ve për kurset
- Kontroll i roleve dhe aksesit në ruterat e sigurt
- Sistemi i rikuperimit të fjalëkalimit me email
- Integrim i thjeshtë i pagesave

## Screenshot

![Home Page](./screenshots/homepage.png)
![Course List](./screenshots/courselist.png)
![Admin Dashboard](./screenshots/admin-dashboard.png)

## Teknologjitë e përdorura

| Backend                  | Frontend                     | Të tjera                  |
|--------------------------|------------------------------|--------------------------|
| Node.js                  | React + Vite + Tailwind CSS  | JWT (JSON Web Tokens)    |
| Express                  | React Router                 | bcrypt (hashing)         |
| MongoDB + Mongoose       | React Hooks                  | Nodemailer               |

## Instalimi dhe Inicializimi lokalisht

### Backend

1. Shkarko këtë repo ose klono:

   ```bash
   git clone https://github.com/username/korca-tech-hub-backend.git
   cd korca-tech-hub-backend
   ```

2. Instaloni paketat:

   ```bash
   npm install
   ```

3. Krijo file `.env` dhe shto variablat e nevojshme (shembull në `.env.example`):

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/korca-tech-hub
   JWT_SECRET=TroubleTrouble
   FRONTEND_URL=http://localhost:5173
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=email@example.com
   SMTP_PASS=passwordi
   ```

4. Nis serverin në modalitet zhvillimi:

   ```bash
   npm run dev
   ```

### Frontend

1. Hap një terminal tjetër dhe shko në folderin frontend:

   ```bash
   cd korca-tech-hub-frontend
   ```

2. Instaloni paketat:

   ```bash
   npm install
   ```

3. Nis aplikacionin:

   ```bash
   npm run dev
   ```

4. Hape `http://localhost:5173` në shfletues.

## Përdorimi

- Regjistrohu si student, instruktor ose administrator.
- Si instruktor krijo kurse dhe leksione.
- Si student regjistrohu në kurse dhe vlerëso ato.
- Si administrator menaxho përdorues dhe statistika.

## Strukturë Projekti

```
korca-tech-hub/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
```

## Sugjerime

Mirëpres pull request-e dhe sugjerime për përmirësim. Ju lutemi ndiqni standardet e kodimit dhe krijoni issue për bug ose feature requests.

## Kontakt

Nëse keni pyetje, më kontaktoni në kbregu4@uet.edu.al
