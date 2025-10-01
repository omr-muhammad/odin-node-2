import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import messages from './data/messages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  const locals = {
    title: "Mini Messageboard",
    messages,
    links: [
      {
        label: "Home",
        path: "/"
      },
      {
        label: "Add message",
        path: "/new"
      }]
  }

  res.status(200).render("index", locals)
});

app.get('/new', (req, res) => {
  res.status(200).render("form");
})

app.get("/message/:id", (req, res) => {
  const { id } = req.params;

  const message = messages.find(msg => msg.added.getSeconds() === Number(id));

  if (!message) {
    res.status(404).send("<h1>Message Not Found 😓</h1>");
    return;
  }

  res.status(200).render("message", { message });
})

app.post('/new', (req, res) => {
  const { user, text } = req.body;

  const newMsg = {
    user,
    text,
    added: new Date()
  }
  messages.push(newMsg);

  res.status(201).redirect('/');
})



app.listen(3000, (err) => {
  if (err) throw err;

  console.log("app is running!!");
});