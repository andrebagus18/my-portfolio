import homePpdb from "../assets/home-ppdb.webp";
import loginPpdb from "../assets/login-ppdb.webp";
import regisPpdb from "../assets/register-ppdb.webp";
import adminPpdb from "../assets/admin-ppdb.webp";
import panitiaPpdb from "../assets/panitia-ppdb.webp";
import siswaPpdb from "../assets/dashboard-siswa-ppdb.webp";
import todo from "../assets/toDoApp.webp";
import libooks from "../assets/libooks.webp";
import loginLibooks from "../assets/login-libooks.webp";
import registerLibooks from "../assets/register-libooks.webp";
import homeEcommerce from "../assets/home-ecommerce.webp";
import loginEcommerce from "../assets/login-ecommerce.webp";
import registerEcommerce from "../assets/register-ecommerce.webp";
import calc1 from "../assets/calc1.webp";
import dashSiswa1 from "../assets/dashSiswa1.webp";

export const projects = {
  ppdb: {
    title: "PPDB Online",
    image: [homePpdb, loginPpdb, regisPpdb, adminPpdb, panitiaPpdb, siswaPpdb],
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

  ecommerce: {
    title: "Simple E-commerce",
    image: [homeEcommerce, loginEcommerce, registerEcommerce],
    desc: "A simple e-commerce web application designed to simplify product management and online sales. It helps users browse products and provides a structured interface for managing product information and transactions, reducing the need for manual product management.",
    tech: ["PHP", "CSS3", "PostgreSQL"],
  },

  calc: {
    title: "Calculator",
    image: [calc1],
    desc: "A simple calculator application that solves basic arithmetic calculations through an intuitive and responsive interface. It allows users to perform calculations quickly and accurately without relying on manual calculations.",
    tech: ["Javascript", "CSS3"],
  },

  dashSiswa: {
    title: "Student Dashboard",
    image: [dashSiswa1],
    desc: "A student dashboard designed to centralize academic information in one place. It helps students easily access academic data, announcements, and progress information through a simple and responsive interface.",
    tech: ["Javascript", "CSS3"],
  },
};
