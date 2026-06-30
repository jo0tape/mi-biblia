import type { Genealogy } from "../lib/types";

export const GENEALOGIES: Record<string, Genealogy> = {
  "adan-noe": {
    title: "De Adán a Noé",
    ref: "Génesis 5",
    narrative: `Cada entrada sigue el mismo ritmo: vivió X años, engendró, vivió Y años más, y murió. Ese redoble — 'y murió... y murió...' — es deliberado. Es el eco de Génesis 3.

Dos personas rompen el patrón. Enoc no muere — 'caminó con Dios y desapareció'. Su vida también es la más corta de la lista: 365 años. Como si el tiempo no fuera el punto.

Matusalén vivió 969 años — el más longevo de la Biblia — y murió el mismo año del diluvio. Su nombre en hebreo podría significar 'cuando muera, vendrá el juicio'.`,
    nodes: [
      {n:"Adán",      y:930, note:"Primer hombre. Adam = tierra (adamah). Su nombre lo ata a la creación.", m:"start", book:"genesis", chapter:1},
      {n:"Set",       y:912, note:"Nacido después de la muerte de Abel. La línea elegida continúa.", m:null, book:"genesis", chapter:4},
      {n:"Enós",      y:905, note:"En su tiempo 'se comenzó a invocar el nombre de Jehová'.", m:null, book:"genesis", chapter:5},
      {n:"Cainán",    y:910, note:null, m:null, book:"genesis", chapter:5},
      {n:"Mahalaleel",y:895, note:null, m:null, book:"genesis", chapter:5},
      {n:"Jared",     y:962, note:null, m:null, book:"genesis", chapter:5},
      {n:"Enoc",      y:365, note:"No murió. 'Caminó con Dios y desapareció.' La única excepción.", m:"special", book:"genesis", chapter:5},
      {n:"Matusalén", y:969, note:"El más longevo de la Biblia. Murió el año del diluvio.", m:"special", book:"genesis", chapter:5},
      {n:"Lámec",     y:777, note:"Profetizó: 'Éste nos aliviará de nuestras obras.'", m:null, book:"genesis", chapter:5},
      {n:"Noé",       y:950, note:"El único 'justo' de su generación. Construyó el arca.", m:"end", book:"genesis", chapter:6},
    ],
  },
  "abraham-jesus": {
    title: "De Abraham a Jesús",
    ref: "Mateo 1:1-17",
    narrative: `Mateo organiza la lista en tres grupos de catorce generaciones: Abraham→David, David→exilio en Babilonia, exilio→Jesús. La historia tiene forma, dirección y destino.

Cinco mujeres aparecen — algo inusual en el mundo antiguo. Tamar, Rahab, Rut, Betsabé, María. Todas con historias complicadas. Una sola cosa en común: Dios usó sus historias para continuar la suya.`,
    nodes: [
      {n:"Abraham",  y:null, note:"La promesa: 'En ti serán benditas todas las familias de la tierra.'", m:"end", book:"genesis", chapter:12},
      {n:"Isaac",    y:null, note:"El hijo prometido, nacido cuando era humanamente imposible.", m:null, book:"genesis", chapter:21},
      {n:"Jacob",    y:null, note:"Renombrado Israel. Sus doce hijos son las doce tribus.", m:null, book:"genesis", chapter:32},
      {n:"Judá",     y:null, note:"De su tribu viene el rey. David y Jesús pertenecen a Judá.", m:null, book:"genesis", chapter:38},
      {n:"Rahab ✦",  y:null, note:"Prostituta de Jericó. Extranjera. Protegió a los espías de Israel.", m:"special", book:"josue", chapter:2},
      {n:"Rut ✦",   y:null, note:"Moabita, viuda, extranjera. Eligió al pueblo de Dios. Bisabuela de David.", m:"special", book:"rut", chapter:1},
      {n:"David",    y:null, note:"El rey prometido. 'Tu trono será estable para siempre.'", m:"end", book:"1samuel", chapter:16},
      {n:"Betsabé ✦",y:null, note:"'La que había sido mujer de Urías.' Mateo no borra el pecado de David.", m:"special", book:"2samuel", chapter:11},
      {n:"· · · 14 generaciones · · ·", y:null, note:"El exilio en Babilonia. La historia en su momento más oscuro.", m:"dots"},
      {n:"José",     y:null, note:"Padre legal de Jesús. Su adopción le da el título de 'Hijo de David'.", m:null, book:"mateo", chapter:1},
      {n:"Jesús",    y:null, note:"El Cristo. Aquí termina la genealogía y comienza el evangelio.", m:"end", book:"mateo", chapter:1},
    ],
  },
  "tabla-naciones": {
    title: "La tabla de las naciones",
    ref: "Génesis 10",
    narrative: `Génesis 10 es un mapa del mundo antiguo conocido. Setenta naciones — número simbólico de totalidad. Después del diluvio y antes de Babel, la humanidad se expande.

La lista no es étnica en el sentido moderno. Es geopolítica: cada nombre es un pueblo o región. Esta tabla traza el mundo en el que Abraham será llamado para ser bendición para todas las naciones.`,
    nodes: [
      {n:"Noé",       y:null, note:"El punto de partida después del diluvio.", m:"start", book:"genesis", chapter:9},
      {n:"Sem",       y:null, note:"Pueblos semíticos: el grupo que incluye a Abraham y a Israel.", m:"special", book:"genesis", chapter:10},
      {n:"Cam",       y:null, note:"Egipto, Canaán, Babilonia, Etiopía. Los grandes imperios del AT.", m:null, book:"genesis", chapter:10},
      {n:"Jafet",     y:null, note:"Pueblos del norte y el Mediterráneo: griegos, iranios, anatólicos.", m:null, book:"genesis", chapter:10},
      {n:"Babel/Nimrod",y:null, note:"El primer gran reino: Nimrod construye Babel. La sombra que viene.", m:"special", book:"genesis", chapter:10},
      {n:"Canaán",    y:null, note:"La tierra prometida a Abraham habita aquí. La tensión del AT comienza.", m:null, book:"genesis", chapter:10},
      {n:"Arfaxad",   y:null, note:"El hijo de Sem de quien desciende Abraham.", m:"end", book:"genesis", chapter:11},
    ],
  },
  "sem-abraham": {
    title: "De Sem a Abraham",
    ref: "Génesis 11:10-26",
    narrative: `La genealogía post-diluvio que conecta a Noé con Abraham. El patrón es el mismo que Génesis 5 pero las edades van disminuyendo — el efecto del pecado sobre la vida humana continúa.

La lista termina en Taré, el padre de Abraham. Taré salió de Ur de los Caldeos con la intención de llegar a Canaán — pero se detuvo en Harán y murió allí. Lo que el padre no pudo terminar, Dios lo llevaría a cabo a través del hijo.`,
    nodes: [
      {n:"Sem",      y:600, note:"Hijo de Noé. Sobrevivió el diluvio.", m:"start", book:"genesis", chapter:9},
      {n:"Arfaxad",  y:438, note:null, m:null, book:"genesis", chapter:11},
      {n:"Sala",     y:433, note:null, m:null, book:"genesis", chapter:11},
      {n:"Heber",    y:464, note:"De aquí viene el nombre 'hebreo'.", m:"special", book:"genesis", chapter:11},
      {n:"Peleg",    y:239, note:"'En sus días fue dividida la tierra' — posible referencia a Babel.", m:"special", book:"genesis", chapter:11},
      {n:"Reu",      y:239, note:null, m:null, book:"genesis", chapter:11},
      {n:"Serug",    y:230, note:null, m:null, book:"genesis", chapter:11},
      {n:"Nacor",    y:148, note:null, m:null, book:"genesis", chapter:11},
      {n:"Taré",     y:205, note:"Salió de Ur rumbo a Canaán. Se detuvo en Harán y murió allí.", m:null, book:"genesis", chapter:11},
      {n:"Abraham",  y:175, note:"El destino del viaje que el padre comenzó pero no terminó.", m:"end", book:"genesis", chapter:12},
    ],
  },
  "censo-israel": {
    title: "El censo de Israel",
    ref: "Números 1-2",
    yLabel: "hombres",
    narrative: `Dios le pide a Moisés que cuente a todos los hombres de Israel mayores de 20 años capaces de ir a la guerra (Números 1:3). El resultado: 603.550 personas distribuidas en doce tribus.

El número parece frío, pero el texto da nombres y familias. Cada uno cuenta. El campamento se organiza alrededor del Tabernáculo: Dios en el centro, las tribus en derredor. La distribución del espacio es una declaración: el Dios que liberó a Israel en el Éxodo ahora acampa en medio de ellos.`,
    nodes: [
      {n:"Rubén",    y:46500, note:"El primogénito de Jacob — la tribu que perdió el liderazgo.", m:null, book:"numeros", chapter:1},
      {n:"Simeón",   y:59300, note:null, m:null, book:"numeros", chapter:1},
      {n:"Gad",      y:45650, note:null, m:null, book:"numeros", chapter:1},
      {n:"Judá",     y:74600, note:"La tribu más numerosa. De ella vendrá el rey David y el Mesías.", m:"special", book:"numeros", chapter:1},
      {n:"Isacar",   y:54400, note:null, m:null, book:"numeros", chapter:1},
      {n:"Zabulón",  y:57400, note:null, m:null, book:"numeros", chapter:1},
      {n:"Efraín",   y:40500, note:"Un hijo de José ocupa el lugar de su padre entre las tribus.", m:null, book:"numeros", chapter:1},
      {n:"Manasés",  y:32200, note:"El otro hijo de José — la tribu más pequeña del censo.", m:null, book:"numeros", chapter:1},
      {n:"Benjamín", y:35400, note:"La tribu más pequeña del sur. Producirá al rey Saúl y al apóstol Pablo.", m:"special", book:"numeros", chapter:1},
      {n:"Dan",      y:62700, note:null, m:null, book:"numeros", chapter:1},
      {n:"Aser",     y:41500, note:null, m:null, book:"numeros", chapter:1},
      {n:"Neftalí",  y:53400, note:null, m:null, book:"numeros", chapter:1},
      {n:"Leví",     y:null,  note:"No contada en el censo militar — dedicada al servicio del Tabernáculo.", m:"special", book:"numeros", chapter:1},
    ],
  },
};
