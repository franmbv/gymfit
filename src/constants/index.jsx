import { Dumbbell} from "lucide-react";
import { PersonStanding } from "lucide-react";
import { Users } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { MessageCircleHeart } from "lucide-react";
import { Store } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures/user5.png";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [
  { label: "Características", href: "#feature" },
  { label: "Ventajas", href: "#workflow" },
  { label: "Precio", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "María González",
    image: user1,
    text: "Desde que me uní a este gimnasio, he visto una gran mejora en mi salud y estado físico. Los entrenadores son muy profesionales y siempre están dispuestos a ayudar.",
  },
  {
    user: "Carlos Rodríguez",
    image: user2,
    text: "El ambiente aquí es increíble. Siempre me siento motivado para entrenar y he hecho muchos amigos nuevos. ¡Recomiendo este gimnasio a todos!",
  },
  {
    user: "Ana López",
    image: user3,
    text: "Las clases de fitness son fantásticas. Me encanta la variedad y cómo los instructores hacen que cada sesión sea divertida y desafiante.",
  },
  {
    user: "Jorge Martínez",
    image: user4,
    text: "“He probado varios gimnasios en la ciudad, pero este es el mejor. Las instalaciones son de primera y siempre están limpias y bien mantenidas.",
  },
  {
    user: "Lucía Pérez",
    image: user5,
    text: "El plan de nutrición que ofrecen aquí ha cambiado mi vida. No solo he perdido peso, sino que también me siento más saludable y con más energía.",
  },
  {
    user: "Pedro Sánchez",
    image: user6,
    text: "Los entrenadores personales son excepcionales. Gracias a ellos, he alcanzado metas que nunca pensé que podría lograr. ¡Estoy muy agradecido!",
  },
];

export const features = [
  {
    icon: <Dumbbell />,
    text: "Equipamiento de ultima generacion",
    description:
      "Contamos con maquinas y equipos modernos para todo tipo de equipamiento.",
  },
  {
    icon: <PersonStanding />,
    text: "Entrenadores certificados",
    description:
      "Nuestro equipo de entrenadores profesionales está listo para ayudarte a alcanzar tus objetivos.",
  },
  {
    icon: <Users />,
    text: "Clases grupales variadas",
    description:
      "Ofrecemos una amplia gama de clases, desde yoga y pilates hasta spinning y HIIT.",
  },
  {
    icon: <BookOpenCheck />,
    text: "Entrenamientos personalizados",
    description:
      "Diseñamos rutinas especificas para cada miembro, adaptadas a sus necesidades y metas.",
  },
  {
    icon: <Store />,
    text: "Instalaciones de primera calidad",
    description:
      "Disfruta de vestuarios cómodos, saunas y áreas de relajación.",
  },
  {
    icon: <MessageCircleHeart />,
    text: "Ambiente motivador",
    description:
      "Un entorno positivo y motivador que te ayudará a mantenerte enfocado y comprometido con tu entrenamiento.",
  },
];

export const checklistItems = [
  {
    title: "Transforma tu cuerpo fácilmente",
    description:
      "Mejora tu salud y bienestar con entrenamientos personalizados.",
  },
  {
    title: "Entrena sin preocupaciones",
    description:
      "Disfruta de un ambiente seguro y motivador para alcanzar tus metas.",
  },
  {
    title: "Asistencia profesional siempre disponible",
    description:
      "Nuestros entrenadores te guiarán para maximizar tus resultados.",
  },
  {
    title: "Resultados visibles en semanas",
    description:
      "Sigue tu progreso y celebra cada logro en tu camino hacia una vida más saludable.",
  },
];

export const pricingOptions = [
  {
    title: "Básico",
    price: "$5",
    features: [
      "Acceso a equipos de cardio",
      "Acceso a vestuarios",
      "Una clase de fitness al mes",
    ],
  },
  {
    title: "Pro",
    price: "$25",
    features: [
      "Acceso a todos los equipos del gimnasio",
      "Acceso a vestuarios con duchas",
      "Cinco clases de fitness al mes",
      "Bolsa de gimnasio gratis al registrarse",
    ],
  },
  {
    title: "Ejecutivo",
    price: "$200",
    features: [
      "Todos los beneficios del Plan Estándar",
      "Sesiones de entrenamiento personal dos veces al mes",
      "Servicios de consulta nutricional",
      "Acceso a área VIP",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Blog" },
  { href: "#", text: "Terminos y condiciones" },
  { href: "#", text: "Preguntas Frecuentes (FAQ)" },
  { href: "#", text: "Politicas de privacidad" },
];

export const platformLinks = [
  { href: "https://www.instagram.com/", text: "Instagram" },
  { href: "https://www.facebook.com/?locale=es_LA", text: "Facebook" },
  { href: "https://twitter.com/?lang=es", text: "X" },
  { href: "https://www.google.com/maps/@39.550051,-105.782067,6z?hl=es", text: "Maps" }
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferencias" },
  { href: "#", text: "Empleos" },
];
