import type { GuidedDay, ReadingTheme } from "../lib/types";

export const GUIDED: GuidedDay[] = [
  {day:1,book:"marcos",ch:1},{day:2,book:"marcos",ch:2},{day:3,book:"marcos",ch:3},
  {day:4,book:"marcos",ch:4},{day:5,book:"juan",ch:1},{day:6,book:"juan",ch:3},
  {day:7,book:"genesis",ch:1},{day:8,book:"genesis",ch:2},{day:9,book:"genesis",ch:3},
  {day:10,book:"genesis",ch:4},{day:11,book:"genesis",ch:5},{day:12,book:"genesis",ch:6},
  {day:13,book:"genesis",ch:9},{day:14,book:"genesis",ch:10},{day:15,book:"genesis",ch:11},
  {day:16,book:"genesis",ch:12},{day:17,book:"genesis",ch:15},{day:18,book:"genesis",ch:22},
  {day:19,book:"exodo",ch:1},{day:20,book:"exodo",ch:3},{day:21,book:"exodo",ch:12},
  {day:22,book:"exodo",ch:20},{day:23,book:"numeros",ch:13},{day:24,book:"salmos",ch:1},
  {day:25,book:"salmos",ch:22},{day:26,book:"salmos",ch:23},{day:27,book:"mateo",ch:1},
  {day:28,book:"mateo",ch:5},{day:29,book:"hechos",ch:1},{day:30,book:"hechos",ch:2},
  {day:31,book:"romanos",ch:1},{day:32,book:"romanos",ch:3},{day:33,book:"romanos",ch:8},
  {day:34,book:"marcos",ch:8},{day:35,book:"marcos",ch:10},{day:36,book:"marcos",ch:14},
  {day:37,book:"marcos",ch:16},{day:38,book:"juan",ch:11},{day:39,book:"lucas",ch:1},
  {day:40,book:"lucas",ch:15},
];

const CUANDO_TODO_FALLA: GuidedDay[] = [
  {day:1,book:"salmos",ch:46},{day:2,book:"salmos",ch:23},
  {day:3,book:"mateo",ch:11},{day:4,book:"romanos",ch:8},
  {day:5,book:"juan",ch:11},{day:6,book:"lucas",ch:15},
  {day:7,book:"salmos",ch:34},
];

const SALMOS_ALMA: GuidedDay[] = [
  {day:1,book:"salmos",ch:1},{day:2,book:"salmos",ch:22},
  {day:3,book:"salmos",ch:23},{day:4,book:"salmos",ch:27},
  {day:5,book:"salmos",ch:46},{day:6,book:"salmos",ch:51},
  {day:7,book:"salmos",ch:100},
];

const LA_PROMESA: GuidedDay[] = [
  {day:1,book:"genesis",ch:12},{day:2,book:"genesis",ch:15},
  {day:3,book:"genesis",ch:22},{day:4,book:"exodo",ch:3},
  {day:5,book:"exodo",ch:12},{day:6,book:"exodo",ch:20},
  {day:7,book:"isaias",ch:53},{day:8,book:"lucas",ch:1},
  {day:9,book:"mateo",ch:1},{day:10,book:"lucas",ch:2},
  {day:11,book:"marcos",ch:1},{day:12,book:"juan",ch:1},
  {day:13,book:"romanos",ch:3},{day:14,book:"romanos",ch:8},
];

const CONOCE_PABLO: GuidedDay[] = [
  {day:1,book:"hechos",ch:9},{day:2,book:"galatas",ch:1},
  {day:3,book:"romanos",ch:1},{day:4,book:"romanos",ch:3},
  {day:5,book:"romanos",ch:8},{day:6,book:"1corintios",ch:13},
  {day:7,book:"1corintios",ch:15},{day:8,book:"efesios",ch:2},
  {day:9,book:"efesios",ch:6},{day:10,book:"filipenses",ch:4},
  {day:11,book:"galatas",ch:5},{day:12,book:"colosenses",ch:1},
  {day:13,book:"2timoteo",ch:3},{day:14,book:"2timoteo",ch:4},
];

const MUJERES_BIBLIA: GuidedDay[] = [
  {day:1,book:"genesis",ch:24}, // Rebeca
  {day:2,book:"rut",ch:1},      // La decisión de Rut
  {day:3,book:"rut",ch:4},      // La redención
  {day:4,book:"ester",ch:4},    // Para esta hora
  {day:5,book:"ester",ch:7},    // El banquete
  {day:6,book:"lucas",ch:1},    // María y el Magnificat
  {day:7,book:"lucas",ch:8},    // María Magdalena liberada
  {day:8,book:"juan",ch:20},    // Primera testigo
];

const LOS_PROFETAS: GuidedDay[] = [
  {day:1,book:"isaias",ch:40},  // Consolad a mi pueblo
  {day:2,book:"isaias",ch:53},  // El siervo sufriente
  {day:3,book:"jeremias",ch:29},// La carta al exilio
  {day:4,book:"daniel",ch:1},   // Daniel no cede
  {day:5,book:"daniel",ch:6},   // El foso de los leones
  {day:6,book:"jonas",ch:1},    // La huida
  {day:7,book:"jonas",ch:4},    // La ira y la misericordia
  {day:8,book:"amos",ch:5},     // La justicia como torrente
];

const VIDA_JESUS: GuidedDay[] = [
  {day:1,book:"lucas",ch:2},    // El nacimiento
  {day:2,book:"marcos",ch:1},   // El ministerio comienza
  {day:3,book:"lucas",ch:4},    // Nazaret y el año jubilar
  {day:4,book:"marcos",ch:4},   // Las parábolas
  {day:5,book:"juan",ch:3},     // Nicodemo y Juan 3:16
  {day:6,book:"marcos",ch:8},   // ¿Quién soy?
  {day:7,book:"juan",ch:11},    // La resurrección de Lázaro
  {day:8,book:"marcos",ch:14},  // La última cena
  {day:9,book:"marcos",ch:16},  // La resurrección
  {day:10,book:"juan",ch:20},   // Primera testigo
];

const SABIDURIA: GuidedDay[] = [
  {day:1,book:"job",ch:1},         // La catástrofe
  {day:2,book:"job",ch:38},        // Dios habla desde el torbellino
  {day:3,book:"salmos",ch:1},      // El árbol junto al río
  {day:4,book:"salmos",ch:23},     // El buen pastor
  {day:5,book:"salmos",ch:139},    // Me conociste antes de nacer
  {day:6,book:"proverbios",ch:3},  // Confía en el Señor
  {day:7,book:"eclesiastes",ch:3}, // Para todo hay una estación
];

const PRIMEROS_PASOS: GuidedDay[] = [
  {day:1,book:"genesis",ch:1},  // La Creación
  {day:2,book:"genesis",ch:3},  // La caída
  {day:3,book:"marcos",ch:1},   // El evangelio comienza
  {day:4,book:"juan",ch:3},     // Juan 3:16
  {day:5,book:"marcos",ch:16},  // La resurrección
];

export const THEMES: ReadingTheme[] = [
  { id:"primeros-pasos",   name:"Primeros pasos",      desc:"5 capítulos. Las historias más importantes si nunca has leído la Biblia.", days:5,  plan:PRIMEROS_PASOS },
  { id:"guided-40",        name:"Ruta de 40 días",     desc:"Un recorrido completo por los libros más importantes.", days:40, plan:GUIDED },
  { id:"vida-jesus",       name:"La vida de Jesús",    desc:"10 días siguiendo a Jesús desde Belén hasta la resurrección.", days:10, plan:VIDA_JESUS },
  { id:"cuando-todo-falla",name:"Cuando todo falla",   desc:"7 lecturas para los momentos más difíciles.", days:7,  plan:CUANDO_TODO_FALLA },
  { id:"sabiduria",        name:"Sabiduría",           desc:"Job, Salmos, Proverbios, Eclesiastés — cómo vivir.", days:7,  plan:SABIDURIA },
  { id:"salmos-alma",      name:"Salmos para el alma", desc:"Los 7 salmos más profundos del Salterio.", days:7,  plan:SALMOS_ALMA },
  { id:"mujeres-biblia",   name:"Mujeres de la Biblia",desc:"8 historias de mujeres que cambiaron el rumbo de la historia.", days:8,  plan:MUJERES_BIBLIA },
  { id:"los-profetas",     name:"Los profetas",        desc:"Las voces que hablaron verdad al poder.", days:8,  plan:LOS_PROFETAS },
  { id:"la-promesa",       name:"La promesa",          desc:"De Abraham a Jesús: el hilo que une toda la Biblia.", days:14, plan:LA_PROMESA },
  { id:"conoce-pablo",     name:"Conoce a Pablo",      desc:"Del perseguidor al apóstol — la vida y las cartas de Pablo.", days:14, plan:CONOCE_PABLO },
];
