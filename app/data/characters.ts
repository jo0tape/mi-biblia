import type { Character } from "../lib/types";

export const CHARACTERS: Character[] = [

  // ─── ANTIGUO TESTAMENTO ──────────────────────────────────────────────────

  {
    id: "noe",
    name: "Noé",
    emoji: "🌊",
    bio: "El único hombre que Dios consideró justo en su generación. Construyó el arca durante décadas sin ver la lluvia, obedeciendo una instrucción que debió parecer absurda a todos. Su historia es sobre la fidelidad en la oscuridad y el primer gran pacto de Dios con la humanidad.",
    chapters: [
      { book:"genesis", ch:6,  note:"El llamado: 'Noé halló gracia ante los ojos de Dios'" },
      { book:"genesis", ch:7,  note:"El diluvio: cuarenta días y cuarenta noches" },
      { book:"genesis", ch:8,  note:"La paloma y el olivo: el agua baja" },
      { book:"genesis", ch:9,  note:"El pacto del arco iris: 'nunca más'" },
      { book:"hebreos", ch:11, note:"En el salón de la fe: 'preparó el arca por la fe'" },
    ],
  },

  {
    id: "abraham",
    name: "Abraham",
    emoji: "🏕️",
    bio: "El padre de la fe. Dios lo llamó de Ur de los Caldeos a los 75 años y le prometió tierra, descendencia y bendición para todas las naciones. Fue el primero en creer sin ver, y su historia es el hilo que conecta toda la Biblia hasta el Nuevo Testamento.",
    chapters: [
      { book:"genesis", ch:12, note:"El llamado: Dios le pide dejar todo sin decirle a dónde" },
      { book:"genesis", ch:15, note:"El pacto: Dios pasa solo entre los animales" },
      { book:"genesis", ch:17, note:"El nombre: Abram se convierte en Abraham" },
      { book:"genesis", ch:18, note:"La promesa confirmada: tres visitantes y la risa de Sara" },
      { book:"genesis", ch:22, note:"La prueba mayor: el sacrificio de Isaac" },
      { book:"hebreos", ch:11, note:"El salón de la fe del Nuevo Testamento" },
    ],
  },

  {
    id: "sara",
    name: "Sara",
    emoji: "😄",
    bio: "La esposa de Abraham, que se rio cuando un ángel le dijo que tendría un hijo a los 90 años. Ese hijo — Isaac — nació exactamente como fue prometido. Su risa pasó de ser incredulidad a ser el nombre de su hijo: 'Isaac' significa 'él ríe'.",
    chapters: [
      { book:"genesis", ch:12, note:"En Egipto: Abraham dice que es su hermana" },
      { book:"genesis", ch:16, note:"Agar e Ismael: Sara intenta resolver el problema a su manera" },
      { book:"genesis", ch:18, note:"La risa: escucha la promesa detrás de la carpa" },
      { book:"genesis", ch:21, note:"El nacimiento de Isaac: 'Dios me ha hecho reír'" },
    ],
  },

  {
    id: "jacob",
    name: "Jacob / Israel",
    emoji: "🤼",
    bio: "El hijo menor de Isaac que engañó a su hermano y más tarde luchó toda una noche con Dios. Su nombre fue cambiado a Israel — 'el que lucha con Dios' — y sus doce hijos se convirtieron en las doce tribus que forman el pueblo de la Biblia. Una persona complicada que Dios usó de maneras extraordinarias.",
    chapters: [
      { book:"genesis", ch:25, note:"El nacimiento: agarra el talón de Esaú en el vientre" },
      { book:"genesis", ch:27, note:"El engaño: le roba la bendición a su padre ciego" },
      { book:"genesis", ch:28, note:"La escalera al cielo: el pacto confirmado" },
      { book:"genesis", ch:32, note:"La lucha: toda una noche, hasta que amanece, y nace el nombre Israel" },
      { book:"genesis", ch:37, note:"Como padre: el favorito es José, y eso destruye la familia" },
    ],
  },

  {
    id: "jose-genesis",
    name: "José (hijo de Jacob)",
    emoji: "🎨",
    bio: "El undécimo hijo de Jacob, vendido como esclavo por sus propios hermanos. La historia más larga de Génesis: esclavo en Egipto, acusado falsamente, preso, olvidado, y finalmente segundo del faraón. Al final, dice a sus hermanos la frase más poderosa del libro: 'Vosotros pensasteis hacerme mal, pero Dios lo encaminó a bien.'",
    chapters: [
      { book:"genesis", ch:37, note:"La túnica y la venta: los hermanos lo traicionan" },
      { book:"genesis", ch:39, note:"Esclavo con Potifar: falsamente acusado, a prisión" },
      { book:"genesis", ch:40, note:"En la cárcel: interpreta los sueños del copero y el panadero" },
      { book:"genesis", ch:41, note:"Los sueños del faraón: José asciende de la prisión al poder" },
      { book:"genesis", ch:45, note:"El perdón: 'No os entristezcáis... Dios me envió delante de vosotros'" },
      { book:"genesis", ch:50, note:"La gracia final: perdona a sus hermanos tras la muerte de Jacob" },
    ],
  },

  {
    id: "moises",
    name: "Moisés",
    emoji: "🔥",
    bio: "El libertador de Israel. Nació esclavo, creció como príncipe egipcio, huyó al desierto y fue llamado a los 80 años desde una zarza ardiente para sacar a dos millones de personas del Imperio más poderoso del mundo. Es el legislador, el intercesor y el profeta central del Antiguo Testamento.",
    chapters: [
      { book:"exodo", ch:2,  note:"El nacimiento: en una cesta en el río, encontrado por la hija del faraón" },
      { book:"exodo", ch:3,  note:"La zarza ardiente: 'YO SOY EL QUE SOY'" },
      { book:"exodo", ch:12, note:"La Pascua: la décima plaga y la partida" },
      { book:"exodo", ch:14, note:"El mar abierto: el ejército de Egipto destruido" },
      { book:"exodo", ch:20, note:"Los Diez Mandamientos: en el monte Sinaí" },
      { book:"deuteronomio", ch:34, note:"La muerte: ve la tierra prometida sin entrar" },
    ],
  },

  {
    id: "rut",
    name: "Rut",
    emoji: "🌾",
    bio: "Una viuda moabita — extranjera, pobre y sin opciones — que eligió quedarse con su suegra Noemí en lugar de volver a su pueblo. Su lealtad dice: 'Tu pueblo será mi pueblo, y tu Dios mi Dios.' Se convierte en bisabuela de David y aparece en la genealogía de Jesús.",
    chapters: [
      { book:"rut", ch:1, note:"La decisión: 'A donde tú fueres, iré yo'" },
      { book:"rut", ch:2, note:"Los campos de Boaz: la providencia en lo cotidiano" },
      { book:"rut", ch:3, note:"La petición: 'Extiende el borde de tu manto sobre tu sierva'" },
      { book:"rut", ch:4, note:"La redención: Boaz como pariente redentor, bisabuelo de David" },
    ],
  },

  {
    id: "samuel",
    name: "Samuel",
    emoji: "🏺",
    bio: "El último juez y el primer gran profeta de Israel. Nació de la oración desesperada de su madre Ana. Unge a los dos primeros reyes de Israel — Saúl y David — y sirve de bisagra entre la era de los jueces y la monarquía. Su vida completa es un ejemplo de escuchar y obedecer.",
    chapters: [
      { book:"1samuel", ch:1,  note:"El nacimiento: la oración de Ana en el Templo" },
      { book:"1samuel", ch:3,  note:"La primera revelación: 'Habla, Señor, que tu siervo escucha'" },
      { book:"1samuel", ch:8,  note:"Israel pide rey: Samuel advierte las consecuencias" },
      { book:"1samuel", ch:16, note:"Unge a David: 'El hombre mira la apariencia exterior, Dios el corazón'" },
    ],
  },

  {
    id: "david",
    name: "David",
    emoji: "🎵",
    bio: "El rey según el corazón de Dios. Pastor, poeta, guerrero y rey. Sus salmos muestran la gama completa de la experiencia humana ante Dios: adoración, duda, pecado y perdón. Cometió adulterio y ordenó un asesinato. Y también escribió los Salmos 23 y 51. Su historia es la historia de la gracia que no rinde.",
    chapters: [
      { book:"1samuel", ch:17, note:"David y Goliat: 'La batalla es del Señor'" },
      { book:"2samuel", ch:7,  note:"El pacto davídico: 'Tu trono será establecido para siempre'" },
      { book:"2samuel", ch:11, note:"El pecado: Betsabé, Urías y la caída" },
      { book:"salmos",  ch:23, note:"El Señor es mi pastor" },
      { book:"salmos",  ch:51, note:"El arrepentimiento después del pecado con Betsabé" },
    ],
  },

  {
    id: "ester",
    name: "Ester",
    emoji: "👸",
    bio: "Una joven judía en el exilio que se convierte en reina de Persia. Cuando su pueblo es amenazado de exterminio por el malvado Amán, su primo Mardoqueo le dice la frase más famosa del libro: '¿Quién sabe si para esta hora has llegado al reino?' Ester arriesga su vida y salva a su pueblo.",
    chapters: [
      { book:"ester", ch:2, note:"La reina: Ester favorecida por el rey Asuero" },
      { book:"ester", ch:4, note:"El momento decisivo: '¿Y quién sabe si para esta hora...?'" },
      { book:"ester", ch:5, note:"El primer banquete: el plan comienza" },
      { book:"ester", ch:7, note:"El segundo banquete: Amán es expuesto y cae" },
      { book:"ester", ch:9, note:"La salvación: el pueblo celebra el Purim" },
    ],
  },

  {
    id: "job",
    name: "Job",
    emoji: "💔",
    bio: "Un hombre sin culpa que lo pierde todo — hijos, riquezas, salud — sin razón aparente. Sus amigos le explican que debe haber pecado. Dios responde no con explicaciones sino con presencia. La historia de Job es la más honesta de la Biblia sobre el sufrimiento sin respuesta.",
    chapters: [
      { book:"job", ch:1,  note:"La catástrofe: 'El Señor dio, el Señor quitó; sea el nombre de Jehová bendito'" },
      { book:"job", ch:3,  note:"La queja: maldice el día en que nació" },
      { book:"job", ch:19, note:"La fe imposible: 'Sé que mi Redentor vive'" },
      { book:"job", ch:38, note:"La respuesta de Dios: habla desde el torbellino" },
      { book:"job", ch:42, note:"La restauración — y lo que realmente cambió" },
    ],
  },

  {
    id: "elias",
    name: "Elías",
    emoji: "⚡",
    bio: "El profeta más dramático del Antiguo Testamento. Cerró los cielos, llamó fuego del cielo ante 450 profetas de Baal, y cayó en depresión bajo un árbol pidiendo morir. Fue llevado al cielo en un torbellino sin morir — y aparece siglos después en la transfiguración de Jesús.",
    chapters: [
      { book:"1reyes", ch:17, note:"El anuncio: 'No habrá lluvia sino por mi palabra'" },
      { book:"1reyes", ch:18, note:"El desafío en el Monte Carmelo: el fuego del cielo" },
      { book:"1reyes", ch:19, note:"La depresión: bajo el árbol de enebro pide morir" },
      { book:"2reyes", ch:2,  note:"La ascensión: llevado al cielo en un torbellino" },
      { book:"lucas",  ch:9,  note:"La transfiguración: aparece con Moisés ante Jesús" },
    ],
  },

  {
    id: "salomon",
    name: "Salomón",
    emoji: "🏛️",
    bio: "El hijo de David, el rey más sabio y más rico de Israel. Construyó el Templo. Escribió Proverbios, Cantares y posiblemente Eclesiastés. Al final, su corazón fue desviado hacia otros dioses por sus muchas esposas — la misma sabiduría que lo hizo famoso no le sirvió para protegerse a sí mismo.",
    chapters: [
      { book:"1reyes",    ch:3,  note:"El sueño en Gabaón: pide sabiduría, no riquezas" },
      { book:"1reyes",    ch:8,  note:"La dedicación del Templo: la oración más larga de la Biblia" },
      { book:"proverbios", ch:1, note:"El comienzo de la sabiduría" },
      { book:"1reyes",    ch:11, note:"El fracaso: las esposas extranjeras y los dioses ajenos" },
      { book:"eclesiastes", ch:12, note:"La conclusión: 'Teme a Dios y guarda sus mandamientos'" },
    ],
  },

  {
    id: "isaias",
    name: "Isaías",
    emoji: "📜",
    bio: "El más citado de los profetas del Antiguo Testamento en el Nuevo Testamento. Vivió en Jerusalén en el siglo VIII a.C. Sus profecías van desde el juicio inmediato hasta visiones del fin. El capítulo 53 — el 'Siervo Sufriente' — es la profecía más detallada sobre la muerte de Jesús escrita siglos antes.",
    chapters: [
      { book:"isaias", ch:6,  note:"La visión del trono: 'Santo, santo, santo' — el llamado de Isaías" },
      { book:"isaias", ch:7,  note:"La señal: 'Una virgen concebirá y llamará su nombre Emanuel'" },
      { book:"isaias", ch:40, note:"Consuelo: 'Los que esperan en Jehová renovarán sus fuerzas'" },
      { book:"isaias", ch:53, note:"El siervo sufriente: la profecía más clara sobre la cruz" },
      { book:"isaias", ch:61, note:"El ungido: el texto que Jesús lee en la sinagoga de Nazaret" },
    ],
  },

  {
    id: "jeremias",
    name: "Jeremías",
    emoji: "😢",
    bio: "El profeta que nadie quiso escuchar. Predicó durante 40 años en Jerusalén mientras la ciudad marchaba hacia su destrucción. Fue encarcelado, tirado a un pozo, vio destruir el Templo y todo lo que amaba. Aun así escribió la profecía más profunda sobre el futuro: el Nuevo Pacto.",
    chapters: [
      { book:"jeremias", ch:1,  note:"El llamado: 'Antes que te formara en el vientre te conocí'" },
      { book:"jeremias", ch:20, note:"El lamento: quiere renunciar pero la palabra arde en sus huesos" },
      { book:"jeremias", ch:29, note:"La carta al exilio: 'Planes de bienestar y no de mal'" },
      { book:"jeremias", ch:31, note:"El Nuevo Pacto: la ley escrita en el corazón" },
    ],
  },

  {
    id: "daniel",
    name: "Daniel",
    emoji: "🦁",
    bio: "Un joven judío llevado al exilio en Babilonia que se negó a comprometer su fe. Sus historias — el foso de los leones, el horno de fuego de sus amigos, las visiones del fin — son algunas de las más memorables de la Biblia. Vivió fielmente bajo tres imperios diferentes y llegó a viejo sin traicionar nada.",
    chapters: [
      { book:"daniel", ch:1, note:"La decisión: no contaminarse con la comida del rey" },
      { book:"daniel", ch:3, note:"El horno de fuego: 'Nuestro Dios puede librarnos — y si no, de igual manera'" },
      { book:"daniel", ch:6, note:"El foso de los leones: el decreto injusto y la fidelidad" },
      { book:"daniel", ch:7, note:"La visión del Hijo del Hombre — que Jesús usará para describirse" },
    ],
  },

  {
    id: "jonas",
    name: "Jonás",
    emoji: "🐋",
    bio: "El profeta que huyó en dirección contraria cuando Dios lo llamó. La historia de Jonás no es principalmente sobre la ballena — es sobre un profeta que no quería ver a sus enemigos recibir gracia. Y sobre un Dios que cuida más a Nínive que a la comodidad de su profeta.",
    chapters: [
      { book:"jonas", ch:1, note:"La huida: en el barco rumbo a Tarsis, lejos de Dios" },
      { book:"jonas", ch:2, note:"La oración desde el vientre del gran pez" },
      { book:"jonas", ch:3, note:"La predicación: Nínive entera se arrepiente" },
      { book:"jonas", ch:4, note:"La rabia: Jonás no entiende la misericordia de Dios" },
    ],
  },

  // ─── NUEVO TESTAMENTO ────────────────────────────────────────────────────

  {
    id: "jesus-marcos",
    name: "Jesús (en Marcos)",
    emoji: "✝️",
    bio: "Marcos presenta a Jesús en acción constante — sin infancia, sin genealogía. La pregunta del evangelio es una sola: '¿Quién es este hombre?' Y el evangelio acumula evidencias sin dar la respuesta explícita hasta el final, para que sea el lector quien la saque.",
    chapters: [
      { book:"marcos", ch:1,  note:"El inicio: bautismo, tentación, primeros milagros" },
      { book:"marcos", ch:4,  note:"Las parábolas del Reino" },
      { book:"marcos", ch:8,  note:"La pregunta central: '¿Y vosotros, quién decís que soy?'" },
      { book:"marcos", ch:10, note:"El camino a Jerusalén: el que vino a servir" },
      { book:"marcos", ch:14, note:"La última cena y Getsemaní" },
      { book:"marcos", ch:16, note:"La resurrección" },
    ],
  },

  {
    id: "maria-nazaret",
    name: "María de Nazaret",
    emoji: "🌿",
    bio: "Una joven de Galilea que aparece en los cuatro evangelios y en Hechos. El relato la muestra haciendo preguntas cuando recibe un anuncio que no pidió, guardando cosas que no entiende 'en su corazón', interviniendo en una boda, y presente al pie de la cruz cuando la mayoría había huido. Su historia recorre toda la narrativa del Nuevo Testamento.",
    chapters: [
      { book:"lucas", ch:1,  note:"Recibe el anuncio del ángel — pregunta '¿cómo puede ser esto?' antes de decir sí" },
      { book:"lucas", ch:2,  note:"El nacimiento en Belén y la presentación en el Templo — 'guardaba todas estas cosas en su corazón'" },
      { book:"marcos", ch:3, note:"La familia de Jesús va a buscarlo porque creen que 'está fuera de sí'" },
      { book:"juan",  ch:2,  note:"Las bodas de Caná: 'Haced lo que él os diga'" },
      { book:"juan",  ch:19, note:"Al pie de la cruz cuando la mayoría de los discípulos no estaba" },
      { book:"hechos", ch:1, note:"Entre los que se reunían en Jerusalén después de la ascensión" },
    ],
  },

  {
    id: "maria-magdalena",
    name: "María Magdalena",
    emoji: "🌺",
    bio: "La primera testigo de la resurrección. Había sido librada de siete demonios y se convirtió en una de las seguidoras más fieles de Jesús. Estuvo al pie de la cruz cuando la mayoría huyó, y fue la primera persona en escuchar el nombre de Jesús pronunciado por el Resucitado.",
    chapters: [
      { book:"lucas", ch:8,  note:"La liberación: Jesús la sana de siete demonios" },
      { book:"juan",  ch:19, note:"Al pie de la cruz: cuando los discípulos habían huido" },
      { book:"juan",  ch:20, note:"La primera testigo: 'He visto al Señor'" },
      { book:"marcos", ch:16, note:"Enviada a anunciar la resurrección" },
    ],
  },

  {
    id: "pedro",
    name: "Pedro",
    emoji: "🪨",
    bio: "El pescador impulsivo que se convirtió en roca de la iglesia. Confesó a Jesús como el Cristo y minutos después fue llamado Satanás. Negó a Jesús tres veces y fue restaurado tres veces. Su historia es la historia de la gracia que no abandona.",
    chapters: [
      { book:"marcos",  ch:8,  note:"La gran confesión: 'Tú eres el Cristo'" },
      { book:"juan",    ch:21, note:"La restauración: 'Simón, ¿me amas?'" },
      { book:"hechos",  ch:2,  note:"El sermón de Pentecostés" },
      { book:"hechos",  ch:10, note:"La visión: el evangelio se abre a los gentiles" },
      { book:"1pedro",  ch:1,  note:"Carta a los dispersos: esperanza viva" },
    ],
  },

  {
    id: "juan",
    name: "Juan",
    emoji: "💡",
    bio: "El discípulo a quien Jesús amaba. Pescador convertido en el teólogo más profundo del Nuevo Testamento. Escribió el evangelio de Juan, tres cartas y el Apocalipsis. Su obsesión es el amor — la palabra aparece más de 40 veces en su evangelio.",
    chapters: [
      { book:"juan",  ch:1,  note:"En el principio era el Verbo" },
      { book:"juan",  ch:3,  note:"El nuevo nacimiento y Juan 3:16" },
      { book:"juan",  ch:11, note:"La resurrección de Lázaro y las lágrimas de Jesús" },
      { book:"1juan", ch:1,  note:"'Lo que hemos visto con nuestros ojos y palpado con nuestras manos'" },
      { book:"1juan", ch:4,  note:"'Dios es amor'" },
    ],
  },

  {
    id: "nicodemo",
    name: "Nicodemo",
    emoji: "🌙",
    bio: "Un fariseo y miembro del Sanedrín que fue a ver a Jesús de noche — probablemente para no ser visto. La conversación produjo Juan 3:16. Aparece dos veces más en el evangelio de Juan, siempre un poco más valiente. Su historia es la historia del que busca en secreto.",
    chapters: [
      { book:"juan", ch:3,  note:"La visita nocturna: 'nacer de nuevo' y Juan 3:16" },
      { book:"juan", ch:7,  note:"La defensa tímida ante el Sanedrín" },
      { book:"juan", ch:19, note:"El entierro: trae 100 libras de especias — ya no es de noche" },
    ],
  },

  {
    id: "zaqueo",
    name: "Zaqueo",
    emoji: "🌳",
    bio: "El jefe de los publicanos de Jericó — rico, odiado, y demasiado pequeño para ver por encima de la multitud. Subió a un árbol para ver pasar a Jesús. Jesús lo llamó por nombre y anunció que se quedaría en su casa. Ese almuerzo cambió todo: Zaqueo devolvió cuatro veces lo robado sin que nadie se lo pidiera.",
    chapters: [
      { book:"lucas", ch:19, note:"La historia completa: 'Hoy ha llegado la salvación a esta casa'" },
    ],
  },

  {
    id: "pablo",
    name: "Pablo",
    emoji: "✉️",
    bio: "El apóstol de los gentiles. Fariseo brillante que persiguió a los cristianos hasta que Jesús lo detuvo en el camino a Damasco. Sus cartas definen la teología cristiana y sus viajes misioneros llevaron el evangelio hasta los bordes del Imperio Romano.",
    chapters: [
      { book:"hechos",       ch:9,  note:"La conversión en el camino a Damasco" },
      { book:"galatas",      ch:1,  note:"Su evangelio viene de revelación directa" },
      { book:"romanos",      ch:1,  note:"El evangelio, poder de Dios" },
      { book:"1corintios",   ch:13, note:"El himno del amor" },
      { book:"filipenses",   ch:4,  note:"La paz que sobrepasa todo entendimiento" },
      { book:"2timoteo",     ch:4,  note:"Sus últimas palabras antes de morir" },
    ],
  },

  {
    id: "esteban",
    name: "Esteban",
    emoji: "✨",
    bio: "Uno de los siete elegidos para administrar la distribución de alimentos en Jerusalén. Hechos lo describe como 'lleno de fe y del Espíritu Santo.' Ante el Sanedrín recorre toda la historia de Israel desde Abraham hasta Salomón y termina confrontando a sus acusadores. Mientras lo apedreaban, dijo: 'Veo los cielos abiertos.' Entre los que aprobaron su muerte estaba un joven llamado Saulo.",
    chapters: [
      { book:"hechos", ch:6, note:"La elección entre los siete y las primeras señales" },
      { book:"hechos", ch:7, note:"El discurso ante el Sanedrín y la muerte" },
    ],
  },

  // ─── LOS APÓSTOLES ───────────────────────────────────────────────────────

  {
    id: "andres",
    name: "Andrés",
    emoji: "🎣",
    bio: "El hermano de Pedro, pescador del mar de Galilea. Juan 1 lo muestra como el primero en seguir a Jesús — y lo primero que hace es ir a buscar a su hermano Simón y llevárselo. En los evangelios aparece en momentos donde alguien necesita ser conectado con alguien más: trae al niño con los panes, lleva a unos griegos que quieren ver a Jesús.",
    chapters: [
      { book:"juan",   ch:1,  note:"El primero en seguir a Jesús — y trae a Pedro" },
      { book:"juan",   ch:6,  note:"El niño con cinco panes y dos peces: 'pero ¿qué es esto para tantos?'" },
      { book:"juan",   ch:12, note:"Lleva a unos griegos que quieren ver a Jesús" },
      { book:"marcos", ch:13, note:"Pregunta privada a Jesús sobre el fin del Templo" },
    ],
  },

  {
    id: "santiago-zebedeo",
    name: "Santiago (hijo de Zebedeo)",
    emoji: "⚡",
    bio: "Hermano de Juan, pescador. Junto con Pedro y Juan forma el círculo más cercano a Jesús — presentes en la transfiguración y en Getsemaní. Él y Juan piden los puestos de honor en el reino; Jesús les responde preguntando si pueden beber la copa que él va a beber. Santiago fue el primero de los doce en morir: Herodes lo hizo ejecutar con la espada.",
    chapters: [
      { book:"marcos", ch:1,  note:"El llamado: deja la barca y a su padre" },
      { book:"marcos", ch:9,  note:"La transfiguración en el monte" },
      { book:"marcos", ch:10, note:"Pide el puesto de honor — la respuesta sobre la copa" },
      { book:"marcos", ch:14, note:"En Getsemaní: se queda dormido tres veces" },
      { book:"hechos", ch:12, note:"Herodes lo hace ejecutar con la espada" },
    ],
  },

  {
    id: "felipe-apostol",
    name: "Felipe",
    emoji: "🗺️",
    bio: "De Betsaida, la misma ciudad de Pedro y Andrés. En Juan 1 es el primero al que Jesús le dice directamente 'sígueme', y Felipe va de inmediato a buscar a Natanael. En la última cena hace la pregunta que da lugar a una de las frases más directas del evangelio de Juan. En Hechos 8 explica el libro de Isaías a un funcionario etíope que lo lee sin entenderlo.",
    chapters: [
      { book:"juan",   ch:1,  note:"Llamado por Jesús — y trae a Natanael" },
      { book:"juan",   ch:6,  note:"Jesús le pregunta cómo alimentar a la multitud: 'doscientos denarios no bastarían'" },
      { book:"juan",   ch:14, note:"'Señor, muéstranos al Padre' — 'El que me ha visto a mí ha visto al Padre'" },
      { book:"hechos", ch:8,  note:"Explica Isaías 53 al etíope que viaja leyendo sin entender" },
    ],
  },

  {
    id: "tomas",
    name: "Tomás",
    emoji: "🔎",
    bio: "Llamado 'Dídimo' (gemelo). Los evangelios lo muestran como alguien que habla cuando los demás callan, que dice lo que piensa aunque suene mal. Cuando Jesús dice que van a Judea donde querían apedrearlo, Tomás dice: 'Vamos también nosotros, para morir con él.' Después de la resurrección dice que no creerá sin ver. Cuando Jesús aparece, Tomás dice la frase más directa de todo el evangelio.",
    chapters: [
      { book:"juan",   ch:11, note:"'Vayamos también nosotros para morir con él'" },
      { book:"juan",   ch:14, note:"'Señor, no sabemos a dónde vas, ¿cómo podemos saber el camino?'" },
      { book:"juan",   ch:20, note:"La duda, el encuentro y '¡Señor mío y Dios mío!'" },
    ],
  },

  {
    id: "mateo-levi",
    name: "Mateo / Leví",
    emoji: "📊",
    bio: "Recaudador de impuestos en Capernaúm. El relato de su llamado es uno de los más cortos del evangelio: Jesús pasa, lo ve sentado en su puesto de cobro, dice 'sígueme' — y Mateo se levanta y sigue. Ese mismo día Jesús come en su casa con otros recaudadores de impuestos y personas de la misma categoría social. Es identificado como el autor del primer evangelio.",
    chapters: [
      { book:"mateo",  ch:9,  note:"El llamado: 'Sígueme' — y Leví se levanta" },
      { book:"mateo",  ch:9,  note:"La cena: Jesús come con publicanos y pecadores en su casa" },
      { book:"marcos", ch:2,  note:"La misma escena en la versión de Marcos" },
    ],
  },

  {
    id: "natanael",
    name: "Natanael / Bartolomé",
    emoji: "🌳",
    bio: "Cuando Felipe le dice que han encontrado al que describió Moisés — Jesús de Nazaret — Natanael responde: '¿De Nazaret puede salir algo bueno?' Su escepticismo inicial es total. Jesús lo ve venir y dice: 'He aquí un verdadero israelita, en quien no hay engaño.' Natanael pregunta cómo lo conoce. 'Antes que Felipe te llamara, cuando estabas debajo de la higuera, te vi.' Natanael responde con una declaración completa.",
    chapters: [
      { book:"juan", ch:1,  note:"El escéptico y la higuera — 'Rabí, tú eres el Hijo de Dios'" },
      { book:"juan", ch:21, note:"Presente en el lago de Tiberias después de la resurrección" },
    ],
  },

  {
    id: "judas-iscariote",
    name: "Judas Iscariote",
    emoji: "💰",
    bio: "Uno de los doce, encargado de la bolsa del grupo. Los evangelios registran su historia sin adornos: fue a los sumos sacerdotes preguntando qué le darían por entregar a Jesús, acordaron treinta piezas de plata. En el huerto de Getsemaní lo identificó con un beso. Cuando vio que Jesús había sido condenado, el texto dice que 'tuvo remordimiento', devolvió el dinero y los sacerdotes le respondieron que era su problema. El final de su historia está en Mateo 27 y en Hechos 1.",
    chapters: [
      { book:"juan",   ch:12, note:"El incidente del perfume: critica a María por derrochar" },
      { book:"juan",   ch:13, note:"La última cena: 'Lo que vas a hacer, hazlo pronto'" },
      { book:"marcos", ch:14, note:"El acuerdo con los sacerdotes y el beso en Getsemaní" },
      { book:"mateo",  ch:27, note:"El remordimiento, la devolución del dinero, el final" },
    ],
  },

];
