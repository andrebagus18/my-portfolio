import homePpdb from "../assets/home-ppdb.webp";
import loginPpdb from "../assets/login-ppdb.png";
import regisPpdb from "../assets/register-ppdb.png";
import todo from "../assets/toDoApp.webp";
import libooks from "../assets/libooks.png";
import loginLibooks from "../assets/login-libooks.png";
import registerLibooks from "../assets/register-libooks.png";

export const projects = {
  ppdb: {
    title: "PPDB Online",
    image: [homePpdb, loginPpdb, regisPpdb],
    desc: "A web-based student admission system that solves the problem of manual registration, document verification, and admission management by digitizing the entire process and reducing administrative paperwork.",
    tech: ["Laravel 13", "Tailwind CSS", "PostgreSQL"],
  },

  todo: {
    title: "Todo App",
    image: [todo],
    desc: "A task management application that solves the problem of organizing daily activities manually by allowing users to create, update, complete, and delete tasks through a simple interface.",
    tech: ["HTML", "CSS3", "Javascript"],
  },

  library: {
    title: "Library Books",
    image: [libooks, loginLibooks, registerLibooks],
    desc: "A library management system that solves the problem of manual book management by providing structured cataloging, borrowing, and returning processes.",
    tech: ["PHP", "Tailwwind CSS", "PostgreSQL"],
  },
};
