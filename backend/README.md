
 # 🏥 HeyDoctor API

Back-end made with Node and Express.js

## Features
This back-end features the latest tools and practices in web development!

- 💹 Express — JavaScript back-end Framework
- 🐋 Docker — Containers
- ♻️ Bee Queue — Task queue for jobs (uses Redis)
- 💌 Nodemailer - E-mails
- 🖼️ Handlebars - View template (used for e-mails)
- 💖 PostgreSQL — For geneeral data (except notifications and jobs)
-  ❗ MongoDB — For notifications
- 💖 Redis — For jobs

And other libraries, like **multer** for file uploads; **youch** and **sentry** for errors; **jsonwebtoken** and **bcrypt** for authentication.


## Getting started

First you need to have `node
yarn` or `node
yarn` installed on your machine. You'll also need `docker compose`. Then, you can clone this repository and run the following commands inside the project folder:

1. `yarn dev`;
_Obs: don't forget to create the `.env` (please duplicate `.env.example`).

You can even run `yarn test` after created `.env.test`
