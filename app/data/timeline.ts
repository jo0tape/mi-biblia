export type TimelineEra = {
  id: string;
  name: string;
  color: string;
  yearRange: string;
};

export type TimelineEvent = {
  id: string;
  eraId: string;
  yearLabel: string;
  yearSort: number; // negativo = a.C., positivo = d.C.
  title: string;
  desc: string;
  book?: string;
  chapter?: number;
  isKey?: boolean;
};

export const ERAS: TimelineEra[] = [
  { id:"origenes",  name:"Los orígenes",         color:"#8B5E2A", yearRange:"Sin fecha exacta" },
  { id:"patriarcas",name:"Los patriarcas",        color:"#5A7A3A", yearRange:"~2000–1700 a.C." },
  { id:"exodo",     name:"Egipto y el Éxodo",     color:"#8B4A1A", yearRange:"~1700–1400 a.C." },
  { id:"conquista", name:"Conquista y jueces",    color:"#3A5A8B", yearRange:"~1400–1050 a.C." },
  { id:"monarquia", name:"La monarquía",          color:"#6B3A8B", yearRange:"~1050–586 a.C." },
  { id:"profetas",  name:"Los profetas y el exilio",color:"#8B3A3A", yearRange:"~800–538 a.C." },
  { id:"retorno",   name:"El retorno",            color:"#3A7A6B", yearRange:"~538–400 a.C." },
  { id:"silencio",  name:"400 años de silencio",  color:"#6B6B6B", yearRange:"~400–5 a.C." },
  { id:"nt",        name:"El Nuevo Testamento",   color:"#2E5F8A", yearRange:"~5 a.C. – 100 d.C." },
];

export const TIMELINE: TimelineEvent[] = [

  // ─── ORÍGENES ──────────────────────────────────────────────────────────────
  {
    id:"creacion", eraId:"origenes", yearLabel:"El principio", yearSort:-10000,
    title:"La Creación",
    desc:"Génesis 1 describe a Dios creando el mundo en seis días y declarando todo 'muy bueno'. El ser humano aparece en el clímax, hecho 'a imagen de Dios'.",
    book:"genesis", chapter:1, isKey:true,
  },
  {
    id:"caida", eraId:"origenes", yearLabel:"El principio", yearSort:-9999,
    title:"La caída",
    desc:"Adán y Eva desobedecen en el jardín. La primera promesa de redención — que la simiente de la mujer herirá la cabeza de la serpiente — aparece en este capítulo.",
    book:"genesis", chapter:3, isKey:true,
  },
  {
    id:"diluvio", eraId:"origenes", yearLabel:"~2400 a.C. (trad.)", yearSort:-2400,
    title:"El diluvio y Noé",
    desc:"Noé construye el arca. El diluvio viene. Dios hace el primer gran pacto con la humanidad: el arco iris como señal de que no habrá otro diluvio.",
    book:"genesis", chapter:6, isKey:true,
  },
  {
    id:"babel", eraId:"origenes", yearLabel:"~2200 a.C. (trad.)", yearSort:-2200,
    title:"La Torre de Babel",
    desc:"La humanidad intenta construir una torre que llegue al cielo. Las lenguas se dispersan. Este evento prepara el escenario para el llamado de Abraham.",
    book:"genesis", chapter:11,
  },

  // ─── PATRIARCAS ────────────────────────────────────────────────────────────
  {
    id:"abraham-llamado", eraId:"patriarcas", yearLabel:"~2091 a.C.", yearSort:-2091,
    title:"El llamado de Abraham",
    desc:"Dios llama a Abram a salir de Ur de los Caldeos. Le promete tierra, descendencia y que en él serán benditas todas las familias de la tierra.",
    book:"genesis", chapter:12, isKey:true,
  },
  {
    id:"pacto-abraham", eraId:"patriarcas", yearLabel:"~2081 a.C.", yearSort:-2081,
    title:"El pacto con Abraham",
    desc:"Dios hace un pacto formal con Abraham: pasa solo entre los animales divididos mientras Abraham duerme. Solo Dios compromete su palabra.",
    book:"genesis", chapter:15,
  },
  {
    id:"isaac", eraId:"patriarcas", yearLabel:"~1991 a.C.", yearSort:-1991,
    title:"El nacimiento de Isaac",
    desc:"Sara da a luz a Isaac a los 90 años. El hijo de la promesa nace cuando era humanamente imposible. Su nombre significa 'él ríe'.",
    book:"genesis", chapter:21,
  },
  {
    id:"sacrificio-isaac", eraId:"patriarcas", yearLabel:"~1975 a.C.", yearSort:-1975,
    title:"El sacrificio de Isaac",
    desc:"Dios pide a Abraham que ofrezca a Isaac. Abraham obedece. En el último momento, Dios provee un carnero. 'Dios se proveerá' se convierte en nombre del lugar.",
    book:"genesis", chapter:22, isKey:true,
  },
  {
    id:"jacob-israel", eraId:"patriarcas", yearLabel:"~1909 a.C.", yearSort:-1909,
    title:"Jacob lucha y se convierte en Israel",
    desc:"Jacob pasa una noche luchando con Dios. Al amanecer su nombre es cambiado a Israel — 'el que lucha con Dios'. Sus doce hijos son las doce tribus.",
    book:"genesis", chapter:32,
  },
  {
    id:"jose-vendido", eraId:"patriarcas", yearLabel:"~1898 a.C.", yearSort:-1898,
    title:"José vendido a Egipto",
    desc:"Los hermanos de José lo venden como esclavo a una caravana que va a Egipto. Décadas después dirá: 'Vosotros pensasteis mal, pero Dios lo encaminó a bien.'",
    book:"genesis", chapter:37, isKey:true,
  },
  {
    id:"jose-gobernador", eraId:"patriarcas", yearLabel:"~1885 a.C.", yearSort:-1885,
    title:"José, gobernador de Egipto",
    desc:"Después de la prisión, José interpreta los sueños del faraón y asciende al cargo más alto de Egipto. Su familia huye del hambre y se reencuentra con él.",
    book:"genesis", chapter:41,
  },

  // ─── ÉXODO ─────────────────────────────────────────────────────────────────
  {
    id:"esclavitud", eraId:"exodo", yearLabel:"~1600 a.C.", yearSort:-1600,
    title:"Israel esclavo en Egipto",
    desc:"Han pasado generaciones desde José. Los descendientes de Israel son ahora mano de obra forzada del Imperio. El libro de Éxodo abre con una lista de nombres — no son una masa anónima.",
    book:"exodo", chapter:1,
  },
  {
    id:"zarza", eraId:"exodo", yearLabel:"~1446 a.C.", yearSort:-1446,
    title:"La zarza ardiente",
    desc:"Moisés tiene 80 años y lleva 40 en el desierto. Dios se aparece en una zarza que arde pero no se consume y le revela su nombre: YO SOY EL QUE SOY.",
    book:"exodo", chapter:3, isKey:true,
  },
  {
    id:"pascua", eraId:"exodo", yearLabel:"~1446 a.C.", yearSort:-1445,
    title:"La Pascua y la salida de Egipto",
    desc:"La décima plaga — el ángel de la muerte. La sangre del cordero en los postes protege las casas israelitas. Israel parte esa misma noche.",
    book:"exodo", chapter:12, isKey:true,
  },
  {
    id:"mar-rojo", eraId:"exodo", yearLabel:"~1446 a.C.", yearSort:-1444,
    title:"El cruce del Mar Rojo",
    desc:"Atrapados entre el mar y el ejército egipcio. Moisés dice: 'Estad firmes y ved la salvación de Dios.' El mar se abre. El ejército es destruido.",
    book:"exodo", chapter:14, isKey:true,
  },
  {
    id:"sinai", eraId:"exodo", yearLabel:"~1446 a.C.", yearSort:-1443,
    title:"Los Diez Mandamientos en el Sinaí",
    desc:"Israel acampa al pie del monte. Dios habla desde el fuego. Los mandamientos comienzan no con una orden sino con una declaración de identidad: 'Yo soy el Señor tu Dios que te saqué de Egipto.'",
    book:"exodo", chapter:20, isKey:true,
  },

  // ─── CONQUISTA Y JUECES ────────────────────────────────────────────────────
  {
    id:"desierto-espias", eraId:"conquista", yearLabel:"~1445 a.C.", yearSort:-1445,
    title:"Los doce espías",
    desc:"Al borde de la tierra prometida. Diez espías dicen: no podemos. Dos — Caleb y Josué — dicen: podemos. Israel elige creer a los diez. Cuarenta años más en el desierto.",
    book:"numeros", chapter:13,
  },
  {
    id:"josue-entra", eraId:"conquista", yearLabel:"~1406 a.C.", yearSort:-1406,
    title:"Josué entra a la tierra",
    desc:"Moisés muere. Josué recibe el encargo: 'Sé fuerte y valiente.' Israel cruza el Jordán y comienza la conquista de Canaán.",
    book:"josue", chapter:1, isKey:true,
  },

  // ─── LA MONARQUÍA ──────────────────────────────────────────────────────────
  {
    id:"samuel-uncia-saul", eraId:"monarquia", yearLabel:"~1050 a.C.", yearSort:-1050,
    title:"Samuel unge al primer rey",
    desc:"Israel pide un rey 'como las otras naciones.' Samuel advierte las consecuencias. Dios accede. Saúl es ungido — alto, apuesto, y prometedor.",
    book:"1samuel", chapter:10,
  },
  {
    id:"david-ungido", eraId:"monarquia", yearLabel:"~1025 a.C.", yearSort:-1025,
    title:"David ungido rey",
    desc:"Dios envía a Samuel a ungir a uno de los hijos de Isaí. Samuel mira los mayores. Dios dice: 'El hombre mira la apariencia exterior, pero yo miro el corazón.' Es el menor: David.",
    book:"1samuel", chapter:16, isKey:true,
  },
  {
    id:"goliat", eraId:"monarquia", yearLabel:"~1025 a.C.", yearSort:-1024,
    title:"David y Goliat",
    desc:"El campeón filisteo desafía al ejército de Israel. El joven David dice: 'Tú vienes con espada; yo vengo en el nombre de Jehová.' Cinco piedras. Una honda.",
    book:"1samuel", chapter:17, isKey:true,
  },
  {
    id:"pacto-davidico", eraId:"monarquia", yearLabel:"~1000 a.C.", yearSort:-1000,
    title:"El pacto con David",
    desc:"Dios promete a David que su linaje gobernará para siempre. 'Tu trono será establecido eternamente.' Esta promesa es el fundamento de toda la esperanza mesiánica del AT.",
    book:"2samuel", chapter:7, isKey:true,
  },
  {
    id:"templo-salomon", eraId:"monarquia", yearLabel:"~966 a.C.", yearSort:-966,
    title:"Salomón construye el Templo",
    desc:"El hijo de David completa lo que su padre soñó. El Templo de Jerusalén se convierte en el centro político, económico y espiritual de Israel por cuatro siglos.",
    book:"1reyes", chapter:8, isKey:true,
  },
  {
    id:"division-reino", eraId:"monarquia", yearLabel:"~930 a.C.", yearSort:-930,
    title:"El reino se divide",
    desc:"A la muerte de Salomón, el reino se rompe en dos: Israel al norte (diez tribus) y Judá al sur (dos tribus). Nunca volvieron a unirse.",
    book:"1reyes", chapter:12,
  },
  {
    id:"elias-carmelo", eraId:"monarquia", yearLabel:"~875 a.C.", yearSort:-875,
    title:"Elías en el Monte Carmelo",
    desc:"Elías desafía a 450 profetas de Baal. Fuego del cielo consume el sacrificio. Todo Israel ve. Poco después, Elías cae en depresión bajo un árbol y pide morir.",
    book:"1reyes", chapter:18, isKey:true,
  },

  // ─── PROFETAS Y EXILIO ──────────────────────────────────────────────────────
  {
    id:"isaias-llamado", eraId:"profetas", yearLabel:"~740 a.C.", yearSort:-740,
    title:"El llamado de Isaías",
    desc:"Isaías ve el trono de Dios y escucha: 'Santo, santo, santo.' Responde: '¡Heme aquí, envíame a mí!' Su libro contiene las profecías más detalladas sobre el Mesías.",
    book:"isaias", chapter:6,
  },
  {
    id:"norte-cae", eraId:"profetas", yearLabel:"~722 a.C.", yearSort:-722,
    title:"El reino del norte cae",
    desc:"Asiria derrota al reino de Israel del norte y deporta a su población. Las diez tribus nunca regresan — quedan dispersas en la historia. Solo Judá sobrevive.",
    book:"2reyes", chapter:17, isKey:true,
  },
  {
    id:"isaias-53", eraId:"profetas", yearLabel:"~700 a.C.", yearSort:-700,
    title:"Isaías 53: el siervo sufriente",
    desc:"700 años antes de la crucifixión, Isaías describe a alguien herido 'por nuestras rebeliones'. El NT cita este capítulo más que ningún otro texto del AT.",
    book:"isaias", chapter:53, isKey:true,
  },
  {
    id:"jeremias-llamado", eraId:"profetas", yearLabel:"~627 a.C.", yearSort:-627,
    title:"El llamado de Jeremías",
    desc:"'Antes que te formara en el vientre te conocí.' Jeremías profetizará durante 40 años mientras Jerusalén marcha hacia su destrucción. Nadie lo escuchará.",
    book:"jeremias", chapter:1,
  },
  {
    id:"daniel-babilonia", eraId:"profetas", yearLabel:"~605 a.C.", yearSort:-605,
    title:"Daniel llevado a Babilonia",
    desc:"El primer exilio. Jóvenes de élite israelitas son llevados a la capital del Imperio. Daniel decide desde el primer día no comprometer su identidad.",
    book:"daniel", chapter:1,
  },
  {
    id:"templo-destruido", eraId:"profetas", yearLabel:"~586 a.C.", yearSort:-586,
    title:"El Templo destruido, el exilio",
    desc:"Nabucodonosor destruye Jerusalén y el Templo. El pueblo es llevado a Babilonia. Es el momento más oscuro de la historia de Israel. Jeremías lo documenta en Lamentaciones.",
    book:"2reyes", chapter:25, isKey:true,
  },
  {
    id:"jeremias-29", eraId:"profetas", yearLabel:"~594 a.C.", yearSort:-594,
    title:"La carta de Jeremías al exilio",
    desc:"Desde Jerusalén, Jeremías escribe a los deportados en Babilonia: no esperen un regreso rápido. Establézcanse. Y entonces la promesa: 'Tengo planes de bienestar y no de mal.'",
    book:"jeremias", chapter:29,
  },
  {
    id:"foso-leones", eraId:"profetas", yearLabel:"~538 a.C.", yearSort:-538,
    title:"Daniel en el foso de los leones",
    desc:"Un decreto ordena que nadie ore a ningún dios durante 30 días. Daniel abre su ventana hacia Jerusalén y ora tres veces al día como siempre. El foso. Los leones. La mañana.",
    book:"daniel", chapter:6, isKey:true,
  },

  // ─── RETORNO ───────────────────────────────────────────────────────────────
  {
    id:"decreto-ciro", eraId:"retorno", yearLabel:"~538 a.C.", yearSort:-537,
    title:"El decreto de Ciro: regreso del exilio",
    desc:"Isaías lo había predicho 150 años antes, incluso nombrando a Ciro. El rey persa emite un decreto permitiendo a los judíos regresar a su tierra y reconstruir el Templo.",
    book:"esdras", chapter:1, isKey:true,
  },
  {
    id:"templo-reconstruido", eraId:"retorno", yearLabel:"~516 a.C.", yearSort:-516,
    title:"El Templo reconstruido",
    desc:"Después de 70 años, el Templo es reconstruido. No tan glorioso como el de Salomón — algunos de los ancianos que recordaban el original lloran. Los jóvenes que nunca lo vieron gritan de alegría.",
    book:"esdras", chapter:6,
  },
  {
    id:"ester", eraId:"retorno", yearLabel:"~480 a.C.", yearSort:-480,
    title:"Ester salva a su pueblo",
    desc:"Una joven judía se convierte en reina de Persia. Cuando su pueblo es amenazado de exterminio, actúa: '¿Quién sabe si para esta hora has llegado al reino?'",
    book:"ester", chapter:4, isKey:true,
  },
  {
    id:"nehemias-muros", eraId:"retorno", yearLabel:"~445 a.C.", yearSort:-445,
    title:"Nehemías reconstruye los muros",
    desc:"Las murallas de Jerusalén siguen en ruinas. Nehemías obtiene permiso del rey persa, viaja, organiza al pueblo y reconstruye los muros en 52 días.",
    book:"nehemias", chapter:1,
  },

  // ─── 400 AÑOS DE SILENCIO ──────────────────────────────────────────────────
  {
    id:"silencio", eraId:"silencio", yearLabel:"~430–5 a.C.", yearSort:-430,
    title:"400 años sin profetas",
    desc:"Malaquías es el último profeta registrado del AT. Durante cuatro siglos no hay voz profética en Israel. El Imperio Griego, luego los Macabeos, luego Roma. El pueblo espera al Mesías.",
    isKey:true,
  },
  {
    id:"roma-ocupa", eraId:"silencio", yearLabel:"~63 a.C.", yearSort:-63,
    title:"Roma ocupa Israel",
    desc:"Pompeyo conquista Jerusalén. Israel queda bajo dominio romano. El César se convierte en la figura política dominante del mundo en que Jesús vivirá y predicará.",
  },

  // ─── NUEVO TESTAMENTO ──────────────────────────────────────────────────────
  {
    id:"nacimiento-jesus", eraId:"nt", yearLabel:"~5 a.C.", yearSort:-5,
    title:"El nacimiento de Jesús",
    desc:"Un censo fuerza a María y José a ir a Belén — la ciudad de David. Allí nace Jesús. Pastores y magos. El ángel dice: 'No temáis; os doy nuevas de gran gozo.'",
    book:"lucas", chapter:2, isKey:true,
  },
  {
    id:"juan-bautista", eraId:"nt", yearLabel:"~28 d.C.", yearSort:28,
    title:"Juan el Bautista comienza",
    desc:"Después de 400 años de silencio, una voz en el desierto. Juan bautiza en el Jordán y anuncia: 'Yo os bautizo con agua, pero viene uno más poderoso que yo.'",
    book:"marcos", chapter:1,
  },
  {
    id:"bautismo-jesus", eraId:"nt", yearLabel:"~28 d.C.", yearSort:28,
    title:"El bautismo de Jesús",
    desc:"Jesús se bautiza con Juan. El Espíritu desciende como paloma. Una voz del cielo dice: 'Este es mi Hijo amado.' Su ministerio público comienza.",
    book:"marcos", chapter:1, isKey:true,
  },
  {
    id:"ministerio", eraId:"nt", yearLabel:"~28–30 d.C.", yearSort:29,
    title:"El ministerio de Jesús",
    desc:"Tres años aproximadamente de enseñanza, sanidades, parábolas y confrontación con las autoridades. La pregunta central de Marcos: '¿Quién es este hombre?'",
    book:"marcos", chapter:4,
  },
  {
    id:"entrada-jerusalen", eraId:"nt", yearLabel:"~30 d.C.", yearSort:30,
    title:"La entrada a Jerusalén",
    desc:"Jesús entra a Jerusalén en un burro — exactamente como Zacarías 9:9 describió 500 años antes. La multitud grita Hosanna. Los líderes religiosos observan.",
    book:"marcos", chapter:11,
  },
  {
    id:"ultima-cena", eraId:"nt", yearLabel:"~30 d.C.", yearSort:30,
    title:"La última cena",
    desc:"La noche de Pascua, Jesús toma el pan y el vino y los resignifica: 'Esto es mi cuerpo... esto es mi sangre del nuevo pacto.' Después, Getsemaní.",
    book:"marcos", chapter:14, isKey:true,
  },
  {
    id:"crucifixion", eraId:"nt", yearLabel:"~30 d.C.", yearSort:30,
    title:"La crucifixión",
    desc:"Jesús muere en una cruz fuera de Jerusalén. Las palabras finales en Marcos: el grito del Salmo 22. El centurión romano dice: 'Verdaderamente este hombre era el Hijo de Dios.'",
    book:"marcos", chapter:15, isKey:true,
  },
  {
    id:"resurreccion", eraId:"nt", yearLabel:"~30 d.C.", yearSort:30,
    title:"La resurrección",
    desc:"Las mujeres van al sepulcro de madrugada. Encuentran la piedra removida. Un mensajero dice: 'No está aquí; ha resucitado.' El final más abrupto de todos los evangelios.",
    book:"marcos", chapter:16, isKey:true,
  },
  {
    id:"pentecostes", eraId:"nt", yearLabel:"~30 d.C.", yearSort:30,
    title:"Pentecostés",
    desc:"50 días después de la crucifixión, en la fiesta judía de la cosecha, el Espíritu llega sobre los seguidores de Jesús. 3.000 personas se suman ese día. La iglesia nace.",
    book:"hechos", chapter:2, isKey:true,
  },
  {
    id:"pablo-conversion", eraId:"nt", yearLabel:"~34 d.C.", yearSort:34,
    title:"La conversión de Pablo",
    desc:"Saulo, el perseguidor, es derribado en el camino a Damasco por una luz y una voz: 'Saulo, ¿por qué me persigues?' El enemigo más activo del movimiento se convierte en su mayor propagador.",
    book:"hechos", chapter:9, isKey:true,
  },
  {
    id:"viajes-pablo", eraId:"nt", yearLabel:"~46–57 d.C.", yearSort:46,
    title:"Los viajes misioneros de Pablo",
    desc:"Tres viajes a través del Mediterráneo. Pablo funda comunidades en Turquía, Grecia y Macedonia. Sus cartas a estas comunidades forman la mitad del Nuevo Testamento.",
    book:"hechos", chapter:13,
  },
  {
    id:"templo-destruido-70", eraId:"nt", yearLabel:"70 d.C.", yearSort:70,
    title:"El Templo destruido por Roma",
    desc:"Roma aplasta una revuelta judía y destruye el Templo de Jerusalén. 'No quedará piedra sobre piedra' — Jesús lo había dicho en Marcos 13. El Templo nunca fue reconstruido.",
    isKey:true,
  },
  {
    id:"apocalipsis", eraId:"nt", yearLabel:"~95 d.C.", yearSort:95,
    title:"El Apocalipsis",
    desc:"Juan, en el exilio en la isla de Patmos, recibe una visión del fin de la historia. El libro termina con la nueva Jerusalén descendiendo del cielo: 'He aquí, hago nuevas todas las cosas.'",
    book:"apocalipsis", chapter:21, isKey:true,
  },
];
