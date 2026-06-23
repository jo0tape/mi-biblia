"use client";
import { useState, useRef, useEffect } from "react";

// ─── TOKENS ───────────────────────────────────────────────────────────────────
const C = {
  bg:      "#FAFAF8",
  surface: "#FFFFFF",
  card:    "#F5F3EF",
  border:  "#E8E4DC",
  borderD: "#D4CFC4",
  amber:   "#8B5E2A",
  amberL:  "#C4873E",
  amberBg: "#FDF6ED",
  text:    "#1C1814",
  dim:     "#6B6358",
  faint:   "#B8B0A4",
  fainter: "#E0DBD3",
  green:   "#3D6B4A",
  greenBg: "#EDF5F0",
  blue:    "#2E5F8A",
  blueBg:  "#EDF3FA",
  red:     "#8B2A2A",
};

// ─── PROYECTO BIBLIA — IDs EN ESPAÑOL ────────────────────────────────────────
const PB_VIDEOS = {
  genesis1:   { id: "HQMKA6w5ZZM", title: "Resumen de Génesis (parte 1)" },
  genesis2:   { id: "MC8BqGu9B8A", title: "Resumen de Génesis (parte 2)" },
  exodo1:     { id: "qLoOqOTqDo4", title: "Resumen de Éxodo (parte 1)" },
  exodo2:     { id: "SQ2zVmtGBYY", title: "Resumen de Éxodo (parte 2)" },
  salmos:     { id: "j9phNEaPrv8", title: "Resumen de Salmos" },
  marcos:     { id: "gsXLQkppzUc", title: "Resumen de Marcos" },
  juan1:      { id: "A_BYskCtAHQ", title: "Resumen de Juan (parte 1)" },
  juan2:      { id: "m4HCobFexTM", title: "Resumen de Juan (parte 2)" },
  mateo1:     { id: "3Dv4-n6OYGI", title: "Resumen de Mateo (parte 1)" },
  romanos1:   { id: "UoIFpkFoKC0", title: "Resumen de Romanos (parte 1)" },
  romanos2:   { id: "Ob8SZF5_FmI", title: "Resumen de Romanos (parte 2)" },
  hechos1:    { id: "oNNZO2i9QAo", title: "Resumen de Hechos (parte 1)" },
  genesis_at: { id: "VL8YhTkuiv0", title: "Resumen del Antiguo Testamento" },
  que_es:     { id: "GQI72THyO5I", title: "¿Qué es la Biblia?" },
  reino:      { id: "xmFPS0f-kzs", title: "El Reino de Dios" },
  pacto:      { id: "zc6gXS7VGJE", title: "El Pacto" },
  imagen:     { id: "YbipxLDtY8c", title: "Imagen de Dios" },
};

// ─── PORTADAS — Unsplash (libres, sin API key en modo source) ────────────────
const COVERS = [
  { id:"mountains",  url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", label:"Montañas" },
  { id:"desert",     url:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80", label:"Desierto" },
  { id:"sea",        url:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80", label:"Mar" },
  { id:"forest",     url:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", label:"Bosque" },
  { id:"sunrise",    url:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80", label:"Amanecer" },
  { id:"wheat",      url:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", label:"Campos" },
  { id:"stars",      url:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80", label:"Estrellas" },
  { id:"olive",      url:"https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800&q=80", label:"Olivos" },
  { id:"river",      url:"https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80", label:"Río" },
  { id:"candle",     url:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=80", label:"Luz" },
  { id:"dove",       url:"https://images.unsplash.com/photo-1559628233-100c798642b6?w=800&q=80", label:"Paloma" },
  { id:"path",       url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", label:"Camino" },
];

// ─── CONTEXTO CAPÍTULOS ───────────────────────────────────────────────────────
const CTX = {
"genesis-1":{ title:"En el principio", context:`En el mundo antiguo los relatos de creación describían dioses en conflicto. El Enuma Elish babilónico describe a Marduk matando al monstruo del caos y construyendo el mundo con su cuerpo. Los seres humanos son creados como esclavos de los dioses.

Génesis 1 responde con una visión radicalmente diferente: un solo Dios, sin competencia, sin conflicto, crea libremente por la palabra. La estructura es poética y deliberada — seis días en dos columnas paralelas: los días 1-3 crean espacios, los días 4-6 los llenan. El ser humano aparece en el clímax.`, stake:"En Egipto solo el faraón era imagen del dios. Aquí toda la humanidad lo es. La dignidad humana no depende del rango ni del mérito — es una condición de origen.", keyVerse:"Génesis 1:27", keyText:"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.", highlights:["imagen de dios"], video: PB_VIDEOS.genesis1, genealogy:null },
"genesis-2":{ title:"El jardín y el ser humano", context:`El capítulo 2 es un zoom sobre el día 6. Si el capítulo 1 es la perspectiva cósmica, el 2 es la perspectiva íntima.

Dios forma al hombre del polvo — adam de adamah, tierra de la tierra. Luego sopla en sus narices aliento de vida. Es la imagen más cercana de la Biblia: cara a cara, Dios y el ser humano.

El árbol del conocimiento del bien y del mal representa la autonomía moral total — vivir como si Dios no existiera, decidir por cuenta propia qué es bueno y malo.`, stake:"La primera cosa que Dios declara 'no buena' no es el pecado. Es la soledad. La comunidad es estructural al diseño original de Dios.", keyVerse:"Génesis 2:7", keyText:"Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.", highlights:["pacto"], video: PB_VIDEOS.genesis1, genealogy:null },
"genesis-3":{ title:"La caída", context:`La serpiente es descrita como 'astuta' — misma raíz hebrea que 'desnudos' en el capítulo 2. La inocencia se convertirá en vergüenza.

La tentación tiene tres capas: el árbol era 'bueno para comer' (deseo físico), 'agradable a los ojos' (deseo estético) y 'codiciable para alcanzar sabiduría' (deseo de poder). No es impulso irracional — es una decisión deliberada.

Luego del juicio, algo notable: Dios mismo hace túnicas de pieles y los viste. En el momento del castigo, hay también cuidado.`, stake:"El versículo 15 es el 'protoevangelio' — la primera promesa de redención. En medio del primer juicio hay una promesa: un descendiente de la mujer vencerá a la serpiente. La Biblia tardará 39 libros más en revelar quién es.", keyVerse:"Génesis 3:15", keyText:"Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.", highlights:["redencion","pacto"], video: PB_VIDEOS.genesis1, genealogy:null },
"genesis-5":{ title:"Genealogía: de Adán a Noé", context:`Cada entrada sigue el mismo ritmo: vivió X años, engendró, vivió Y años más, y murió. El narrador lo hace deliberadamente. Ese redoble — 'y murió... y murió... y murió' — es el eco de Génesis 3.

Pero hay dos interrupciones que rompen el patrón. Enoc no muere: 'caminó con Dios, y desapareció, porque le llevó Dios.' Matusalén vivió 969 años — el más longevo — y murió el mismo año del diluvio.`, stake:"En una lista donde todos mueren, Enoc es la excepción. La Biblia planta aquí la pregunta que tardará siglos en responder: ¿tiene la muerte la última palabra?", keyVerse:"Génesis 5:24", keyText:"Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios.", highlights:[], video: PB_VIDEOS.genesis1, genealogy:"adan-noe" },
"genesis-12":{ title:"El llamado de Abraham", context:`Génesis 12 es el gran giro de la historia bíblica. Después de once capítulos de caída progresiva — Adán, Caín, el diluvio, Babel — Dios elige a un hombre para comenzar algo nuevo.

Abram tiene 75 años. No es joven ni está sin recursos. Ur de los Caldeos era una de las ciudades más avanzadas del mundo antiguo. Dejó civilización, no barbarie. Eso hace su obediencia más significativa.`, stake:"La promesa a Abraham es la razón de todo lo que sigue en la Biblia: tierra, descendencia y que en él serían benditas todas las familias de la tierra. Todo el Nuevo Testamento es el relato de cómo esa promesa se cumple en Jesús.", keyVerse:"Génesis 12:2-3", keyText:"Y haré de ti una nación grande, y te bendeciré... y serán benditas en ti todas las familias de la tierra.", highlights:["pacto","abraham"], video: PB_VIDEOS.genesis2, genealogy:null },
"marcos-1":{ title:"El comienzo del evangelio", context:`Marcos no tiene genealogía ni relato de infancia. Primera palabra en griego: arjé — principio. La misma palabra con que abre Génesis en la Septuaginta. Marcos está diciendo: esto es un nuevo comienzo.

La palabra favorita de Marcos es 'enseguida' (euthus en griego) — aparece 41 veces en 16 capítulos. Jesús actúa antes de que tengamos tiempo de prepararnos. Juan el Bautista es presentado como el cumplimiento de Malaquías 3:1 e Isaías 40:3.`, stake:"La pregunta central: ¿quién tiene autoridad? Los espíritus inmundos reconocen a Jesús antes que los humanos. La naturaleza obedece. Los enfermos sanan. Marcos acumula evidencias sin dar la respuesta — eso lo hace el lector.", keyVerse:"Marcos 1:15", keyText:"El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.", highlights:["reino de dios","arrepentíos","escribas","espíritu inmundo"], video: PB_VIDEOS.marcos, genealogy:null },
"marcos-2":{ title:"El Hijo del Hombre perdona pecados", context:`Cuatro hombres no podían entrar por la puerta. Subieron al techo y lo abrieron. Los techos del siglo I en Palestina eran de vigas con ramas y barro compactado — posible pero costoso. Marcos dice que Jesús 'vio la fe de ellos' — no la del paralítico solo, sino la de los cuatro expresada en acción.

Jesús dice algo que nadie esperaba: 'tus pecados te son perdonados.' Los escribas razonan correctamente: solo Dios puede hacer eso. Jesús los escucha — Marcos dice que 'conoció en su espíritu' lo que pensaban.`, stake:"La sanidad demuestra la afirmación: si tiene autoridad para sanar lo visible, tiene autoridad para perdonar lo invisible. Marcos deja la pregunta de identidad abierta para que el lector la resuelva.", keyVerse:"Marcos 2:17", keyText:"No he venido a llamar a justos, sino a pecadores.", highlights:["fariseos","publicanos","pecadores","blasfemia","escribas"], video: PB_VIDEOS.marcos, genealogy:null },
"marcos-3":{ title:"Los doce y la nueva familia", context:`Fariseos y herodianos — grupos que normalmente se detestaban — se unen para destruirlo. Jesús sube a un monte (lenguaje que evoca el Sinaí) y llama a doce. El número no es casual: doce tribus de Israel. Está constituyendo un nuevo Israel en torno a sí mismo.

La lista es diversa: pescadores, un recaudador de impuestos, un zelote (miembro de un movimiento de resistencia armada), y Judas el que lo entregaría. Marcos incluye el final desde el principio.`, stake:"La familia de Jesús viene a buscarlo. Afuera. Los escribas dicen que tiene un demonio. Jesús responde: ¿quién es mi familia? Los que hacen la voluntad de Dios. El reino redefine los lazos más profundos que conocemos.", keyVerse:"Marcos 3:35", keyText:"Porque todo aquel que hace la voluntad de Dios, ése es mi hermano, y mi hermana, y mi madre.", highlights:["fariseos","reino de dios"], video: PB_VIDEOS.marcos, genealogy:null },
"juan-1":{ title:"El Verbo se hizo carne", context:`Juan abre con las mismas palabras que Génesis: 'En el principio'. No es accidental. Juan está reescribiendo el inicio de la historia.

El protagonista del principio es identificado: el Verbo (Logos en griego). Logos significa palabra pero también razón, orden, principio organizador. Para los filósofos griegos era la razón que ordenaba el universo. Para Juan, ese Logos no es una fuerza impersonal — es una persona.`, stake:"La encarnación es la afirmación más audaz del Nuevo Testamento: el mismo agente de la creación entró en su propia creación. Juan 1:14 es el versículo que separa al cristianismo de toda otra religión del mundo.", keyVerse:"Juan 1:14", keyText:"Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.", highlights:["verbo","gracia","pacto"], video: PB_VIDEOS.juan1, genealogy:null },
"salmos-23":{ title:"El Señor es mi pastor", context:`David era pastor antes de ser rey. La metáfora no era abstracta para él — había protegido ovejas de leones y osos (1 Samuel 17:34-36), conocía el oficio desde adentro.

En el mundo antiguo, 'pastor' era también título para los reyes. Los buenos reyes cuidaban a su pueblo como el pastor a sus ovejas. Ezequiel 34 desarrolla esta metáfora: Dios juzgará a los pastores de Israel que se aprovecharon. Jesús recoge todo eso en Juan 10: 'Yo soy el buen pastor.'`, stake:"Este salmo no promete que nada malo pasará — promete compañía en lo malo. 'Aunque ande en valle de sombra de muerte' no dice 'aunque evite el valle'. El pastor no elimina el peligro — acompaña en él.", keyVerse:"Salmos 23:4", keyText:"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.", highlights:["pastor"], video: PB_VIDEOS.salmos, genealogy:null },
"romanos-1":{ title:"El evangelio, poder de Dios", context:`Pablo escribe a una iglesia que no fundó, en la ciudad más poderosa del mundo. Roma era el centro del Imperio. El César era considerado hijo de dios y señor del mundo.

En ese contexto, Pablo dice: 'No me avergüenzo del evangelio.' La palabra griega euangelion era usada en el Imperio para anunciar victorias militares o el nacimiento de un emperador. Pablo toma ese lenguaje político y dice: hay un evangelio más grande que el de Roma.`, stake:"Pablo va a pasar 8 capítulos describiendo el problema de la humanidad antes de llegar a la solución. La grandeza de la gracia solo se entiende sobre el fondo de la gravedad del problema.", keyVerse:"Romanos 1:16", keyText:"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.", highlights:["evangelio","justificacion","redencion"], video: PB_VIDEOS.romanos1, genealogy:null },
"mateo-1":{ title:"El libro de la genealogía", context:`Mateo abre con una genealogía porque quiere decir algo antes de decir nada. Para sus lectores judíos, 'Jesús, hijo de David, hijo de Abraham' no era decoración — era una declaración de identidad: este hombre es la conclusión de la historia que comenzó hace 2000 años.

Mateo incluye cinco mujeres — algo inusual en el mundo antiguo. Tamar, Rahab, Rut, Betsabé y María. Cada una tiene una historia complicada. Juntas dicen: Dios escribe recto con líneas torcidas.`, stake:"Esta genealogía es la síntesis de todo el Antiguo Testamento. Sin ella, Jesús aparece de la nada. Con ella, es el punto de llegada de 2000 años de promesas.", keyVerse:"Mateo 1:23", keyText:"He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.", highlights:["pacto","abraham"], video: PB_VIDEOS.mateo1, genealogy:"abraham-jesus" },
"genesis-4":{ title:"Caín y Abel", context:"El primer homicidio. Caín no mata a un extraño — mata a su hermano. La violencia entra a la familia humana desde adentro.\n\nDios pregunta: '¿Dónde está Abel tu hermano?' No porque no lo sepa — sino para que Caín se ubique. La respuesta — '¿Soy acaso guarda de mi hermano?' — es la pregunta que toda la Biblia responde: sí, lo eres.", stake:"La ciudad que construye Caín es el inicio de la civilización humana sin Dios. El problema no es la estructura social — es el corazón humano.", keyVerse:"Génesis 4:9", keyText:"¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano?", highlights:["pecado","sacrificio"], video:PB.genesis1, genealogy:null },
"genesis-6":{ title:"El diluvio — la decisión de Dios", context:"'Y se arrepintió Jehová de haber hecho al hombre en la tierra, y le dolió en su corazón.' Dios siente dolor.\n\nNoé 'halló gracia ante los ojos de Jehová' — primera vez que aparece la palabra gracia en la Biblia. No dice que Noé era perfecto. Dice que caminó con Dios.", stake:"El diluvio es una reversión de la creación. Las aguas del caos vuelven. Pero hay un arca. Siempre hay un remanente.", keyVerse:"Génesis 6:8", keyText:"Pero Noé halló gracia ante los ojos de Jehová.", highlights:["gracia","pacto"], video:PB.genesis1, genealogy:null },
"genesis-9":{ title:"El pacto con Noé", context:"Después del diluvio, Dios hace un pacto con toda la humanidad. El arco iris es la señal. Lo notable: es una promesa unilateral de Dios. No depende de que los humanos cumplan su parte.", stake:"Este es el primero de los grandes pactos bíblicos. La promesa es universal: Dios no volverá a destruir la tierra con agua. La historia tiene futuro.", keyVerse:"Génesis 9:13", keyText:"Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra.", highlights:["pacto","gracia"], video:PB.genesis1, genealogy:null },
"genesis-10":{ title:"La tabla de las naciones", context:"Génesis 10 es un mapa del mundo antiguo. Cada nombre es un pueblo o región. Jafet: pueblos del norte y el Mediterráneo. Cam: Egipto, Canaán, Babilonia. Sem: los pueblos semíticos.\n\nViene después del diluvio y antes de Babel. La humanidad se expande.", stake:"Todos los pueblos tienen historia y origen común. La promesa a Abraham — 'bendición para todas las naciones' — cobra fuerza cuando ves que todas las naciones ya están nombradas.", keyVerse:"Génesis 10:1", keyText:"Estas son las generaciones de los hijos de Noé: Sem, Cam y Jafet, a quienes nacieron hijos después del diluvio.", highlights:[], video:PB.genesis1, genealogy:"tabla-naciones" },
"genesis-11":{ title:"La torre de Babel", context:"Babel es el clímax de Génesis 1-11. Humanidad unida, un solo idioma — y elige usar esa unidad para construir hacia arriba: 'hagámonos un nombre'.\n\nEl problema no es la ambición. Es la dirección: hacia adentro, en vez de hacia afuera y hacia los demás.", stake:"La dispersión en Babel no es solo juicio — es la preparación para Génesis 12. Con las naciones dispersas, Dios llama a Abraham para ser bendición para todas ellas.", keyVerse:"Génesis 11:4", keyText:"Y dijeron: Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre.", highlights:[], video:PB.genesis1, genealogy:"sem-abraham" },
"genesis-15":{ title:"El pacto con Abraham", context:"Abraham pregunta: '¿Qué me darás, si sigo siendo sin hijo?' Lo que sigue es uno de los rituales de pacto más antiguos: animales partidos en dos, una antorcha de fuego que pasa por en medio. Solo Dios pasa — Abraham está dormido. Es un pacto unilateral.", stake:"'Y creyó a Jehová, y le fue contado por justicia.' Este versículo — citado tres veces en el NT — es la base de toda la teología de la fe.", keyVerse:"Génesis 15:6", keyText:"Y creyó a Jehová, y le fue contado por justicia.", highlights:["pacto","fe","justificacion"], video:PB.genesis2, genealogy:null },
"genesis-22":{ title:"El sacrificio de Isaac", context:"Dios le pide a Abraham que ofrezca a Isaac — el hijo de la promesa. Abraham obedece. Isaac pregunta: '¿Dónde está el cordero para el holocausto?' Abraham responde: 'Dios se proveerá.'\n\nDios detiene el sacrificio.", stake:"Los lectores del NT vieron en esto algo mucho más grande de lo que Abraham podía imaginar. Esta historia prefigura lo que el NT desarrollará plenamente.", keyVerse:"Génesis 22:8", keyText:"Y respondió Abraham: Dios se proveerá de cordero para el holocausto, hijo mío.", highlights:["sacrificio","fe","pacto"], video:PB.genesis2, genealogy:null },
"exodo-1":{ title:"La esclavitud en Egipto", context:"Han pasado 400 años desde José. Los descendientes de Israel son ahora esclavos. El libro abre con una lista de nombres — los hijos de Israel. No son una masa anónima. Son personas con nombre.", stake:"La esclavitud en Egipto es el contexto para la historia más grande. La liberación que viene será el patrón de redención para toda la Biblia.", keyVerse:"Éxodo 1:12", keyText:"Pero cuanto más los oprimían, tanto más se multiplicaban y crecían.", highlights:["redencion"], video:PB.exodo1, genealogy:null },
"exodo-3":{ title:"La zarza ardiente", context:"Moisés lleva 40 años en el desierto. Tiene 80 años. Desde lo humano, su historia ya terminó.\n\nDios se aparece en una zarza que arde pero no se consume. La primera cosa que Dios dice: 'He visto la aflicción de mi pueblo.'", stake:"El nombre de Dios — YO SOY EL QUE SOY (YHWH) — es el nombre más importante de toda la Biblia. No es solo un nombre: es una declaración de su naturaleza.", keyVerse:"Éxodo 3:14", keyText:"Y respondió Dios a Moisés: YO SOY EL QUE SOY.", highlights:["moises"], video:PB.exodo1, genealogy:null },
"exodo-12":{ title:"La Pascua", context:"La décima plaga — la muerte de los primogénitos. El cordero sin defecto, la sangre sobre los postes, la comida de pie listos para partir.\n\nJesús celebra la Pascua la noche antes de su crucifixión. El NT presenta a Jesús como el Cordero Pascual definitivo.", stake:"La Pascua es el nacimiento de Israel como pueblo. Cada año la celebración dice: somos los que fuimos liberados. La identidad de Israel está fundada en un acto de liberación de Dios.", keyVerse:"Éxodo 12:13", keyText:"Y la sangre os será por señal; y veré la sangre, y pasaré de vosotros.", highlights:["sacrificio","redencion","pacto"], video:PB.exodo1, genealogy:null },
"exodo-20":{ title:"Los Diez Mandamientos", context:"Los Mandamientos llegan precedidos por un preámbulo: 'Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto.' Primero la liberación, luego la ley.\n\nLa ley no es el camino para ganarse el amor de Dios. Es la respuesta al amor ya demostrado.", stake:"Los mandamientos describen cómo se ve la vida en comunidad cuando Dios es el centro. No son una lista de requisitos — son un retrato de la vida liberada.", keyVerse:"Éxodo 20:2", keyText:"Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre.", highlights:["ley","pacto","moises"], video:PB.exodo2, genealogy:null },
"numeros-1":{ title:"El censo de Israel", context:"Números abre con un censo. ¿Por qué? Porque cada persona cuenta. Los 603,550 hombres son personas reales con nombre. El censo dice: Dios conoce a cada uno.", stake:"El censo no es burocracia — es preparación. Israel está a punto de entrar en la tierra prometida. El campamento se organiza alrededor del Tabernáculo.", keyVerse:"Números 1:2", keyText:"Tomad el censo de toda la congregación de los hijos de Israel por sus familias, con la cuenta de los nombres.", highlights:[], video:PB.numeros, genealogy:"censo-israel" },
"numeros-13":{ title:"Los doce espías", context:"Israel llega al borde de la tierra prometida. Se envían doce espías. Cuarenta días explorando.\n\nDiez espías dicen: no podemos. Dos — Caleb y Josué — dicen: podemos, porque Dios está con nosotros. Israel elige creer a los diez.", stake:"La consecuencia: cuarenta años más en el desierto. La incredulidad tiene costo. Pero la historia no termina ahí.", keyVerse:"Números 13:30", keyText:"Entonces Caleb hizo callar al pueblo, y dijo: Subamos luego, y tomemos posesión de ella.", highlights:["fe"], video:PB.numeros, genealogy:null },
"levitico-1":{ title:"Los holocaustos", context:"Levítico es el libro que más gente abandona. Pero la clave está en el primer versículo: 'Jehová llamó a Moisés, y habló con él desde el tabernáculo.' Dios está en medio del campamento. Levítico describe cómo vivir en presencia de un Dios santo.", stake:"La pregunta de Levítico no es '¿qué debo hacer?' sino '¿cómo puedo estar en presencia de Dios?' Los sacrificios no son magia — son el reconocimiento de que la relación con Dios tiene un costo.", keyVerse:"Levítico 1:4", keyText:"Y pondrá su mano sobre la cabeza del holocausto, y será aceptado para expiación suya.", highlights:["sacrificio","tabernáculo","expiacion"], video:null, genealogy:null },
"marcos-4":{ title:"Las parábolas del reino", context:"Jesús empieza a enseñar en parábolas. No para complicar — sino porque el reino de Dios es tan diferente a lo que la gente espera que solo una historia puede acercarse a describirlo.", stake:"Las parábolas son una prueba de actitud: los que tienen 'oídos para oír' entienden. Los que se acercan con curiosidad genuina reciben más.", keyVerse:"Marcos 4:20", keyText:"Y éstos son los que fueron sembrados en buena tierra: los que oyen la palabra y la reciben, y dan fruto a treinta, a sesenta, y a ciento por uno.", highlights:["reino de dios"], video:PB.marcos, genealogy:null },
"marcos-8":{ title:"¿Quién es Jesús?", context:"El capítulo 8 es el centro del evangelio de Marcos. Jesús pregunta: '¿Quién dice la gente que soy yo?' Luego: '¿Y vosotros, quién decís que soy?'\n\nPedro responde: 'Tú eres el Cristo.'", stake:"Inmediatamente después, Jesús habla de su muerte. Pedro lo reprende. Jesús lo llama Satanás. Confesar a Jesús como Cristo significa seguirlo hasta la cruz — no solo en el triunfo.", keyVerse:"Marcos 8:29", keyText:"Y vosotros, ¿quién decís que soy? Respondiendo Pedro, le dijo: Tú eres el Cristo.", highlights:["mesias","reino de dios"], video:PB.marcos, genealogy:null },
"marcos-10":{ title:"El camino a Jerusalén", context:"Jesús va hacia Jerusalén. Los discípulos van detrás con miedo. En el camino, Jacobo y Juan piden los puestos de honor en el reino.", stake:"El reino invierte la lógica del poder: 'el que quiera ser el primero entre vosotros, será siervo de todos.' El Hijo del Hombre vino a servir, no a ser servido.", keyVerse:"Marcos 10:45", keyText:"Porque el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.", highlights:["redencion","mesias","fe"], video:PB.marcos, genealogy:null },
"marcos-14":{ title:"La última cena y Getsemaní", context:"Jesús celebra la Pascua con sus discípulos. Toma el pan y lo resignifica: 'esto es mi cuerpo'. Toma la copa: 'esto es mi sangre del nuevo pacto'.\n\nEn Getsemaní ora: 'Abba, Padre, aparta de mí esta copa; mas no lo que yo quiero, sino lo que tú.'", stake:"Getsemaní es el momento más humano de Jesús en los evangelios. La obediencia no fue fácil. Eso es lo que la hace significativa.", keyVerse:"Marcos 14:36", keyText:"Y decía: Abba, Padre, todas las cosas son posibles para ti; aparta de mí esta copa; mas no lo que yo quiero, sino lo que tú.", highlights:["pacto","sacrificio"], video:PB.marcos, genealogy:null },
"marcos-16":{ title:"La resurrección", context:"Las mujeres van al sepulcro muy de mañana. Encuentran la piedra removida y un joven que dice: 'No está aquí; ha resucitado.'\n\nEl final más antiguo de Marcos termina en el versículo 8: huyeron del sepulcro, porque tenían miedo. Un final abrupto.", stake:"La resurrección no es el final tranquilo de una historia bonita — es el inicio de algo que el mundo aún no sabe cómo manejar.", keyVerse:"Marcos 16:6", keyText:"Buscáis a Jesús nazareno, el que fue crucificado; ha resucitado, no está aquí.", highlights:["mesias","redencion"], video:PB.marcos, genealogy:null },
"juan-3":{ title:"El nuevo nacimiento", context:"Nicodemo es fariseo y miembro del Sanedrín. Va a Jesús de noche. Jesús le dice: 'el que no naciere de nuevo, no puede ver el reino de Dios.'\n\nNicodemo entiende en sentido literal. Jesús habla de algo diferente.", stake:"Juan 3:16 está en este contexto: una conversación nocturna con un religioso que busca pero no entiende. La gracia no llega solo a los que ya lo tienen resuelto.", keyVerse:"Juan 3:16", keyText:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda.", highlights:["gracia","fe","reino de dios","fariseos"], video:PB.juan1, genealogy:null },
"juan-11":{ title:"La resurrección de Lázaro", context:"Lázaro lleva cuatro días muerto. Cuatro días era significativo — se creía que el alma abandonaba el cuerpo al tercer día.\n\nJesús llora. El versículo más corto de la Biblia y uno de los más profundos.", stake:"Antes de resucitar a Lázaro, Jesús dice: 'Yo soy la resurrección y la vida.' No dice que trae resurrección. Dice que ES la resurrección. La diferencia lo es todo.", keyVerse:"Juan 11:25", keyText:"Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.", highlights:["fe","redencion"], video:PB.juan2, genealogy:null },
"lucas-1":{ title:"El anuncio y el Magnificat", context:"Lucas abre con una dedicatoria — el único evangelio que lo hace. El ángel visita a María. Su respuesta — 'Hágase conmigo conforme a tu palabra' — es el modelo bíblico de fe.", stake:"El Magnificat de María (vv.46-55) es una de las canciones más revolucionarias de la Biblia. Dios 'derribó a los poderosos de sus tronos y exaltó a los humildes'. El reino invierte el orden del mundo.", keyVerse:"Lucas 1:52", keyText:"Quitó de los tronos a los poderosos, y exaltó a los humildes.", highlights:["reino de dios","gracia"], video:PB.lucas1, genealogy:null },
"lucas-15":{ title:"Las tres parábolas de lo perdido", context:"Tres parábolas en secuencia: la oveja perdida, la moneda perdida, el hijo pródigo. La lógica de las tres es la misma: algo que se pierde es buscado con pasión, y cuando aparece hay fiesta.\n\nEl padre ve al hijo 'de lejos' — estaba mirando el camino.", stake:"La parábola termina con el hijo mayor afuera, enojado. La pregunta final es para él — y para el lector: ¿entras a la fiesta?", keyVerse:"Lucas 15:20", keyText:"Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió.", highlights:["redencion","gracia","pecado"], video:PB.lucas1, genealogy:null },
"hechos-1":{ title:"El mandato y la ascensión", context:"Lucas continúa su historia — Hechos es la segunda parte. Los discípulos preguntan: '¿restaurarás el reino a Israel?' Siguen esperando un reino político.\n\nJesús los redirige: 'recibiréis poder cuando el Espíritu Santo haya venido sobre vosotros.'", stake:"La Gran Comisión: 'me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.' La historia se expande en círculos.", keyVerse:"Hechos 1:8", keyText:"Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos.", highlights:["reino de dios","apostol"], video:PB.hechos1, genealogy:null },
"hechos-2":{ title:"Pentecostés", context:"Cincuenta días después de la Pascua. Viento y fuego. Los discípulos hablan en idiomas que no conocen. Los judíos de la diáspora en Jerusalén escuchan — cada uno en su propio idioma.\n\nEs la inversión de Babel. En Babel la humanidad fue dispersada. En Pentecostés es reunida.", stake:"Pedro predica: el Espíritu se derrama sobre toda carne — hijos e hijas, jóvenes y viejos, siervos y siervas. El reino no tiene élite.", keyVerse:"Hechos 2:17", keyText:"Y en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne.", highlights:["reino de dios","redencion","bautismo"], video:PB.hechos1, genealogy:null },
"romanos-3":{ title:"La justicia de Dios", context:"Pablo ha pasado dos capítulos describiendo el problema. Ahora llega el giro: 'Pero ahora, aparte de la ley, se ha manifestado la justicia de Dios.'\n\nLa justificación no es que Dios haga la vista gorda. Es que Cristo carga con el costo.", stake:"Romanos 3:23-24: 'todos pecaron y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia.' Todos el problema. Todos la solución.", keyVerse:"Romanos 3:23-24", keyText:"Por cuanto todos pecaron, y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia.", highlights:["justificacion","redencion","gracia","pecado","fe"], video:PB.romanos1, genealogy:null },
"romanos-8":{ title:"Sin condenación", context:"El capítulo más celebrado de Romanos. Abre con 'ninguna condenación hay para los que están en Cristo Jesús' y cierra con 'Nada nos podrá separar del amor de Dios.'\n\nEn el medio: sufrimiento, el Espíritu que intercede, y la certeza de que Dios trabaja en todo.", stake:"Romanos 8:28 no promete que todo saldrá bien en términos humanos. Promete que Dios trabaja en todo. La diferencia importa.", keyVerse:"Romanos 8:38-39", keyText:"Estoy seguro de que ni la muerte, ni la vida... ni ninguna otra cosa creada nos podrá separar del amor de Dios.", highlights:["gracia","fe","redencion"], video:PB.romanos1, genealogy:null },
"salmos-1":{ title:"El camino del justo", context:"El libro de los Salmos abre con una imagen: un árbol plantado junto a corrientes de aguas. No es una imagen de esfuerzo — es una imagen de fuente.\n\nEl hombre bienaventurado no es el que trabaja más duro. Es el que tiene sus raíces en el lugar correcto.", stake:"Los Salmos no son principalmente promesas de Dios — son la respuesta del ser humano a Dios. Es el libro de oración de Israel. Incluye alegría, duda, ira y fe.", keyVerse:"Salmos 1:3", keyText:"Será como árbol plantado junto a corrientes de aguas, que da su fruto en su tiempo.", highlights:["ley","fe"], video:PB.salmos, genealogy:null },
"salmos-22":{ title:"Mi Dios, ¿por qué me has abandonado?", context:"Las palabras que Jesús gritó desde la cruz (Mateo 27:46). El salmo fue escrito por David siglos antes.\n\nEl salmo abre en la oscuridad absoluta y termina en adoración universal.", stake:"Dios no es ajeno al sufrimiento. El grito de Jesús desde la cruz es el grito de toda la humanidad — y Dios lo escucha desde adentro, no desde afuera.", keyVerse:"Salmos 22:1", keyText:"Dios mío, Dios mío, ¿por qué me has desamparado?", highlights:["fe","mesias"], video:PB.salmos, genealogy:null },
"mateo-5":{ title:"El Sermón del Monte", context:"Jesús sube a un monte y enseña. El paralelo con Moisés en el Sinaí es deliberado. Moisés recibió la ley en un monte. Jesús la interpreta y profundiza desde un monte.\n\nLas Bienaventuranzas no son consejos para una vida exitosa — son la descripción de quiénes son los ciudadanos del reino de Dios.", stake:"'Oísteis que fue dicho... pero yo os digo.' Jesús no cancela la ley — la radicaliza. El problema no es el acto externo sino el corazón que lo genera.", keyVerse:"Mateo 5:3", keyText:"Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos.", highlights:["reino de dios","ley","fe"], video:PB.mateo1, genealogy:null },
};

// ─── GENEALOGÍAS ─────────────────────────────────────────────────────────────
const GENEALOGIES = {
"adan-noe":{ title:"De Adán a Noé", ref:"Génesis 5",
  narrative:`Cada entrada sigue el mismo ritmo: vivió X años, engendró, vivió Y años más, y murió. Ese redoble — 'y murió... y murió...' — es deliberado. Es el eco de Génesis 3.

Dos personas rompen el patrón. Enoc no muere — 'caminó con Dios y desapareció'. Su vida también es la más corta de la lista: 365 años. Como si el tiempo no fuera el punto.

Matusalén vivió 969 años — el más longevo de la Biblia — y murió el mismo año del diluvio. Su nombre en hebreo podría significar 'cuando muera, vendrá el juicio'.`,
  nodes:[
    {n:"Adán",y:930,note:"Primer hombre. Adam = tierra (adamah). Su nombre lo ata a la creación.",m:"start"},
    {n:"Set",y:912,note:"Nacido después de la muerte de Abel. La línea elegida continúa.",m:null},
    {n:"Enós",y:905,note:"En su tiempo 'se comenzó a invocar el nombre de Jehová'.",m:null},
    {n:"Cainán",y:910,note:null,m:null},
    {n:"Mahalaleel",y:895,note:null,m:null},
    {n:"Jared",y:962,note:null,m:null},
    {n:"Enoc",y:365,note:"No murió. 'Caminó con Dios y desapareció.' La única excepción.",m:"special"},
    {n:"Matusalén",y:969,note:"El más longevo de la Biblia. Murió el año del diluvio.",m:"special"},
    {n:"Lámec",y:777,note:"Profetizó: 'Éste nos aliviará de nuestras obras.'",m:null},
    {n:"Noé",y:950,note:"El único 'justo' de su generación. Construyó el arca.",m:"end"},
  ]
},
"abraham-jesus":{ title:"De Abraham a Jesús", ref:"Mateo 1:1-17",
  narrative:`Mateo organiza la lista en tres grupos de catorce generaciones: Abraham→David, David→exilio en Babilonia, exilio→Jesús. La historia tiene forma, dirección y destino.

Cinco mujeres aparecen — algo inusual en el mundo antiguo. Tamar, Rahab, Rut, Betsabé, María. Todas con historias complicadas. Una sola cosa en común: Dios usó sus historias para continuar la suya.`,
  nodes:[
    {n:"Abraham",y:null,note:"La promesa: 'En ti serán benditas todas las familias de la tierra.'",m:"end"},
    {n:"Isaac",y:null,note:"El hijo prometido, nacido cuando era humanamente imposible.",m:null},
    {n:"Jacob",y:null,note:"Renombrado Israel. Sus doce hijos son las doce tribus.",m:null},
    {n:"Judá",y:null,note:"De su tribu viene el rey. David y Jesús pertenecen a Judá.",m:null},
    {n:"Rahab ✦",y:null,note:"Prostituta de Jericó. Extranjera. Protegió a los espías de Israel.",m:"special"},
    {n:"Rut ✦",y:null,note:"Moabita, viuda, extranjera. Eligió al pueblo de Dios. Bisabuela de David.",m:"special"},
    {n:"David",y:null,note:"El rey prometido. 'Tu trono será estable para siempre.'",m:"end"},
    {n:"Betsabé ✦",y:null,note:"'La que había sido mujer de Urías.' Mateo no borra el pecado de David.",m:"special"},
    {n:"· · · 14 generaciones · · ·",y:null,note:"El exilio en Babilonia. La historia en su momento más oscuro.",m:"dots"},
    {n:"José",y:null,note:"Padre legal de Jesús. Su adopción le da el título de 'Hijo de David'.",m:null},
    {n:"Jesús",y:null,note:"El Cristo. Aquí termina la genealogía y comienza el evangelio.",m:"end"},
  ]
},
};

// ─── DICCIONARIO ─────────────────────────────────────────────────────────────
const DICT = {
"reino de dios":{term:"Reino de Dios",type:"Concepto central",short:"El gobierno activo de Dios irrumpiendo en la historia.",body:`No es principalmente un lugar — es el reinado activo de Dios que trastorna el orden existente. Jesús proclamó que ese reino había llegado en su persona y sus actos.

Israel esperaba un rey que los liberara de Roma. Jesús resignificó ese lenguaje: el reino no llega con ejércitos sino con sanidades, con el perdón de pecados, con la inclusión de los excluidos.

El reino tiene una tensión intrínseca: ya llegó en Jesús, pero su consumación es futura. El cristiano vive en ese espacio intermedio.`,verses:["Marcos 1:15","Mateo 6:10","Lucas 17:20-21","Apocalipsis 11:15"],video:PB_VIDEOS.reino},
"arrepentíos":{term:"Arrepentimiento",type:"Concepto teológico",short:"Cambio de dirección, no solo de sentimiento.",body:`La palabra griega es metanoia — literalmente 'cambio de mente' o 'cambio de dirección'. No es principalmente culpa o tristeza, aunque puede incluirlos.

Arrepentirse significa girar hacia una dirección diferente. El primer anuncio de Jesús en Marcos incluye dos elementos: arrepentíos (giren) y creed (confíen). Los dos van juntos.`,verses:["Marcos 1:15","Lucas 15:11-32","Hechos 2:38"],video:null},
"escribas":{term:"Escribas",type:"Rol religioso",short:"Expertos en la Ley de Moisés, maestros e intérpretes.",body:`Los escribas eran los intérpretes profesionales de la Torá. Siempre citaban autoridades anteriores: 'Rabí Fulano dijo...'

Jesús decía: 'Pero yo os digo...' Sin citar a nadie. Esa diferencia era lo que asombraba a la gente y lo que escandalizaba a los líderes religiosos.`,verses:["Marcos 1:22","Marcos 2:6-7"],video:null},
"espíritu inmundo":{term:"Espíritu inmundo",type:"Concepto bíblico",short:"Fuerza espiritual hostil al ser humano y a Dios.",body:`Lo notable en Marcos 1 es que el espíritu inmundo sabe quién es Jesús antes que nadie: 'Sé quién eres: el Santo de Dios.' Los poderes contrarios al reino reconocen su llegada antes que los humanos.

Los exorcismos en los evangelios son señales de que el reino de Dios está irrumpiendo — el poder del mal está siendo desplazado.`,verses:["Marcos 1:23-27","Marcos 3:11","Lucas 10:18"],video:null},
"fariseos":{term:"Fariseos",type:"Grupo religioso",short:"Movimiento religioso judío del siglo I, guardianes estrictos de la Ley.",body:`Nacieron en el siglo II a.C. como reacción a la helenización forzada. Eran los guardianes de la identidad judía. Conocían la Escritura en profundidad y añadían tradición oral para aplicarla.

La crítica de Jesús no era que conocieran mal la ley — era que habían convertido la observancia en un sistema de autojustificación, perdiendo de vista lo que la ley señalaba.`,verses:["Mateo 23:23-28","Lucas 18:9-14","Juan 3:1"],video:null},
"publicanos":{term:"Publicanos",type:"Rol social",short:"Cobradores de impuestos judíos al servicio del Imperio Romano.",body:`Eran considerados traidores por colaborar con Roma y cobrar más de lo debido. En la jerarquía social judía del siglo I estaban en el nivel más bajo.

Comer con alguien era señal de comunidad y aceptación — por eso escandalizaba que Jesús comiera con ellos. Era una declaración pública de que pertenecían al reino de Dios.`,verses:["Marcos 2:15-17","Lucas 19:1-10"],video:null},
"pecadores":{term:"Pecadores",type:"Término social",short:"En el siglo I, categoría social de excluidos del sistema religioso.",body:`No era solo una categoría moral — era social. Incluía a quienes ejercían oficios impuros, quienes no cumplían normas de pureza ritual, quienes vivían al margen de la sinagoga.

Jesús no solo perdona pecados en sentido abstracto — come con los excluidos del sistema. Eso era una declaración pública de que el acceso al reino no pasaba por los canales religiosos establecidos.`,verses:["Marcos 2:16-17","Lucas 15:1-2"],video:null},
"blasfemia":{term:"Blasfemia",type:"Concepto religioso",short:"Usurpar de manera presuntuosa lo que pertenece solo a Dios.",body:`En el contexto judío del siglo I, blasfemia era usurpar algo que solo pertenecía a Dios.

Cuando Jesús dice 'tus pecados te son perdonados', los escribas razonan correctamente: solo Dios puede perdonar pecados. Si un hombre dice eso, o es Dios o blasfema. No hay término medio.`,verses:["Marcos 2:7","Juan 10:33"],video:null},
"imagen de dios":{term:"Imagen de Dios",type:"Concepto teológico",short:"La dignidad intrínseca de todo ser humano como representante de Dios.",body:`La frase hebrea es tselem Elohim. En el mundo antiguo la 'imagen' de un dios era la estatua que lo representaba en su templo. En Egipto, solo el faraón era imagen del dios.

Génesis 1:27 democratiza ese concepto de manera explosiva: toda la humanidad lleva la imagen de Dios. La dignidad humana no depende del rango ni del mérito — es una condición de origen.`,verses:["Génesis 1:26-27","Génesis 9:6","Santiago 3:9"],video:PB_VIDEOS.imagen},
"pacto":{term:"Pacto",type:"Concepto teológico",short:"Promesa de relación permanente entre Dios y personas.",body:`No es un contrato — es una promesa de relación, similar al matrimonio en su profundidad. En el mundo antiguo los pactos entre reyes y vasallos seguían una estructura fija: historia, condiciones, testigos, bendiciones y maldiciones.

La Biblia puede leerse como la historia de los pactos de Dios: con Noé, Abraham, Moisés, David, y el Nuevo Pacto en Jesús. Cada uno amplía el anterior.`,verses:["Génesis 15:18","Jeremías 31:31-34","Lucas 22:20"],video:PB_VIDEOS.pacto},
"redencion":{term:"Redención",type:"Concepto teológico",short:"Rescate mediante el pago de un precio — liberación del cautiverio.",body:`En la antigüedad 'redimir' era comprar la libertad de un esclavo. En Israel existía el go'el — el pariente redentor — con responsabilidad de rescatar a un familiar empobrecido.

El Éxodo es el patrón de redención en toda la Biblia. Cuando los profetas anunciaban una 'nueva redención', la describían como un 'nuevo Éxodo'. El Nuevo Testamento presenta a Jesús como el Go'el definitivo.`,verses:["Éxodo 6:6","Rut 4:14","Isaías 43:1","Marcos 10:45","Efesios 1:7"],video:null},
"evangelio":{term:"Evangelio",type:"Concepto central",short:"Buenas noticias — el anuncio de que el reino de Dios llegó en Jesús.",body:`La palabra griega euangelion era usada en el Imperio Romano para anunciar victorias militares o el nacimiento de un emperador. Era un anuncio público de que algo decisivo había ocurrido.

Cuando Marcos dice 'principio del evangelio', usa ese lenguaje político: hay un nuevo rey, y no es el César.`,verses:["Marcos 1:1","Romanos 1:16","1 Corintios 15:1-4"],video:null},
"justificacion":{term:"Justificación",type:"Concepto teológico",short:"Declaración judicial por la cual Dios considera justo al creyente.",body:`No es un proceso gradual de mejora moral — es un veredicto que ocurre en el momento de la fe.

La distinción de Pablo: la justificación es 'por fe, no por obras'. No porque las obras no importen — importan enormemente — sino porque la base de la relación con Dios no es el mérito humano sino la fidelidad de Cristo.`,verses:["Génesis 15:6","Romanos 3:21-26","Gálatas 2:16"],video:null},
"verbo":{term:"El Verbo (Logos)",type:"Concepto teológico",short:"La Palabra de Dios que se hizo carne — identificado con Jesús en Juan 1.",body:`Logos significa palabra pero también razón, orden, principio organizador. Para los filósofos griegos el Logos era la razón que ordenaba el universo.

Juan dice: ese Logos no es una fuerza impersonal — es una persona, y se hizo carne. El agente de la creación entró en su propia creación.`,verses:["Juan 1:1-14","Colosenses 1:15-17"],video:null},
"gracia":{term:"Gracia",type:"Concepto teológico",short:"Favor inmerecido — Dios actuando a favor de quien no lo merece.",body:`La palabra griega es charis. Describía el favor de un superior hacia un inferior sin que el inferior hubiera hecho algo para merecerlo.

En el NT la gracia es el carácter fundamental de la acción de Dios hacia la humanidad. No es que Dios ignore el problema — es que actúa para resolverlo a un costo que paga él mismo.`,verses:["Juan 1:14","Efesios 2:8-9","Romanos 5:8"],video:null},
"pastor":{term:"Pastor (metáfora)",type:"Imagen bíblica",short:"Imagen de Dios como quien guía, protege y busca a los que se pierden.",body:`David era pastor antes de ser rey. La metáfora no era abstracta — había protegido ovejas de leones y osos.

En el mundo antiguo 'pastor' era también título para los reyes. Los buenos reyes cuidaban a su pueblo como el pastor a sus ovejas. Jesús dice en Juan 10: 'Yo soy el buen pastor.'`,verses:["Salmos 23:1","Ezequiel 34:11-16","Juan 10:11-14"],video:null},
"abraham":{term:"Abraham",type:"Patriarca",short:"El padre de la fe. El primero al que Dios llamó para comenzar un pueblo.",body:`Nacido en Ur de los Caldeos — una de las ciudades más avanzadas del mundo antiguo. Dejó civilización, no barbarie.

Dios le prometió tierra, descendencia y que en él serían benditas todas las familias de la tierra. Esas tres promesas son el motor de toda la Biblia. Jesús es el cumplimiento de las tres.`,verses:["Génesis 12:1-3","Génesis 15:6","Romanos 4:3"],video:null},
};

// ─── LIBROS ───────────────────────────────────────────────────────────────────
const BOOKS=[
  {id:"genesis",api:"GEN",name:"Génesis",testament:"AT",chapters:50,section:"Pentateuco"},
  {id:"exodo",api:"EXO",name:"Éxodo",testament:"AT",chapters:40,section:"Pentateuco"},
  {id:"levitico",api:"LEV",name:"Levítico",testament:"AT",chapters:27,section:"Pentateuco"},
  {id:"numeros",api:"NUM",name:"Números",testament:"AT",chapters:36,section:"Pentateuco"},
  {id:"deuteronomio",api:"DEU",name:"Deuteronomio",testament:"AT",chapters:34,section:"Pentateuco"},
  {id:"josue",api:"JOS",name:"Josué",testament:"AT",chapters:24,section:"Historia"},
  {id:"jueces",api:"JDG",name:"Jueces",testament:"AT",chapters:21,section:"Historia"},
  {id:"rut",api:"RUT",name:"Rut",testament:"AT",chapters:4,section:"Historia"},
  {id:"1samuel",api:"1SA",name:"1 Samuel",testament:"AT",chapters:31,section:"Historia"},
  {id:"2samuel",api:"2SA",name:"2 Samuel",testament:"AT",chapters:24,section:"Historia"},
  {id:"1reyes",api:"1KI",name:"1 Reyes",testament:"AT",chapters:22,section:"Historia"},
  {id:"2reyes",api:"2KI",name:"2 Reyes",testament:"AT",chapters:25,section:"Historia"},
  {id:"1cronicas",api:"1CH",name:"1 Crónicas",testament:"AT",chapters:29,section:"Historia"},
  {id:"2cronicas",api:"2CH",name:"2 Crónicas",testament:"AT",chapters:36,section:"Historia"},
  {id:"esdras",api:"EZR",name:"Esdras",testament:"AT",chapters:10,section:"Historia"},
  {id:"nehemias",api:"NEH",name:"Nehemías",testament:"AT",chapters:13,section:"Historia"},
  {id:"ester",api:"EST",name:"Ester",testament:"AT",chapters:10,section:"Historia"},
  {id:"job",api:"JOB",name:"Job",testament:"AT",chapters:42,section:"Poesía"},
  {id:"salmos",api:"PSA",name:"Salmos",testament:"AT",chapters:150,section:"Poesía"},
  {id:"proverbios",api:"PRO",name:"Proverbios",testament:"AT",chapters:31,section:"Poesía"},
  {id:"eclesiastes",api:"ECC",name:"Eclesiastés",testament:"AT",chapters:12,section:"Poesía"},
  {id:"cantares",api:"SNG",name:"Cantares",testament:"AT",chapters:8,section:"Poesía"},
  {id:"isaias",api:"ISA",name:"Isaías",testament:"AT",chapters:66,section:"Profetas mayores"},
  {id:"jeremias",api:"JER",name:"Jeremías",testament:"AT",chapters:52,section:"Profetas mayores"},
  {id:"lamentaciones",api:"LAM",name:"Lamentaciones",testament:"AT",chapters:5,section:"Profetas mayores"},
  {id:"ezequiel",api:"EZK",name:"Ezequiel",testament:"AT",chapters:48,section:"Profetas mayores"},
  {id:"daniel",api:"DAN",name:"Daniel",testament:"AT",chapters:12,section:"Profetas mayores"},
  {id:"oseas",api:"HOS",name:"Oseas",testament:"AT",chapters:14,section:"Profetas menores"},
  {id:"joel",api:"JOL",name:"Joel",testament:"AT",chapters:3,section:"Profetas menores"},
  {id:"amos",api:"AMO",name:"Amós",testament:"AT",chapters:9,section:"Profetas menores"},
  {id:"jonas",api:"JON",name:"Jonás",testament:"AT",chapters:4,section:"Profetas menores"},
  {id:"miqueas",api:"MIC",name:"Miqueas",testament:"AT",chapters:7,section:"Profetas menores"},
  {id:"abdias",api:"OBA",name:"Abdías",testament:"AT",chapters:1,section:"Profetas menores"},
  {id:"nahum",api:"NAM",name:"Nahúm",testament:"AT",chapters:3,section:"Profetas menores"},
  {id:"habacuc",api:"HAB",name:"Habacuc",testament:"AT",chapters:3,section:"Profetas menores"},
  {id:"sofonias",api:"ZEP",name:"Sofonías",testament:"AT",chapters:3,section:"Profetas menores"},
  {id:"hageo",api:"HAG",name:"Hageo",testament:"AT",chapters:2,section:"Profetas menores"},
  {id:"zacarias",api:"ZEC",name:"Zacarías",testament:"AT",chapters:14,section:"Profetas menores"},
  {id:"malaquias",api:"MAL",name:"Malaquías",testament:"AT",chapters:4,section:"Profetas menores"},
  {id:"mateo",api:"MAT",name:"Mateo",testament:"NT",chapters:28,section:"Evangelios"},
  {id:"marcos",api:"MRK",name:"Marcos",testament:"NT",chapters:16,section:"Evangelios"},
  {id:"lucas",api:"LUK",name:"Lucas",testament:"NT",chapters:24,section:"Evangelios"},
  {id:"juan",api:"JHN",name:"Juan",testament:"NT",chapters:21,section:"Evangelios"},
  {id:"hechos",api:"ACT",name:"Hechos",testament:"NT",chapters:28,section:"Historia NT"},
  {id:"romanos",api:"ROM",name:"Romanos",testament:"NT",chapters:16,section:"Cartas de Pablo"},
  {id:"1corintios",api:"1CO",name:"1 Corintios",testament:"NT",chapters:16,section:"Cartas de Pablo"},
  {id:"2corintios",api:"2CO",name:"2 Corintios",testament:"NT",chapters:13,section:"Cartas de Pablo"},
  {id:"galatas",api:"GAL",name:"Gálatas",testament:"NT",chapters:6,section:"Cartas de Pablo"},
  {id:"efesios",api:"EPH",name:"Efesios",testament:"NT",chapters:6,section:"Cartas de Pablo"},
  {id:"filipenses",api:"PHP",name:"Filipenses",testament:"NT",chapters:4,section:"Cartas de Pablo"},
  {id:"colosenses",api:"COL",name:"Colosenses",testament:"NT",chapters:4,section:"Cartas de Pablo"},
  {id:"1tesalonicenses",api:"1TH",name:"1 Tesalonicenses",testament:"NT",chapters:5,section:"Cartas de Pablo"},
  {id:"2tesalonicenses",api:"2TH",name:"2 Tesalonicenses",testament:"NT",chapters:3,section:"Cartas de Pablo"},
  {id:"1timoteo",api:"1TI",name:"1 Timoteo",testament:"NT",chapters:6,section:"Cartas de Pablo"},
  {id:"2timoteo",api:"2TI",name:"2 Timoteo",testament:"NT",chapters:4,section:"Cartas de Pablo"},
  {id:"tito",api:"TIT",name:"Tito",testament:"NT",chapters:3,section:"Cartas de Pablo"},
  {id:"filemon",api:"PHM",name:"Filemón",testament:"NT",chapters:1,section:"Cartas de Pablo"},
  {id:"hebreos",api:"HEB",name:"Hebreos",testament:"NT",chapters:13,section:"Cartas generales"},
  {id:"santiago",api:"JAS",name:"Santiago",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"1pedro",api:"1PE",name:"1 Pedro",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"1juan",api:"1JN",name:"1 Juan",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"2pedro",api:"2PE",name:"2 Pedro",testament:"NT",chapters:3,section:"Cartas generales"},
  {id:"2juan",api:"2JN",name:"2 Juan",testament:"NT",chapters:1,section:"Cartas generales"},
  {id:"3juan",api:"3JN",name:"3 Juan",testament:"NT",chapters:1,section:"Cartas generales"},
  {id:"judas",api:"JUD",name:"Judas",testament:"NT",chapters:1,section:"Cartas generales"},
  {id:"apocalipsis",api:"REV",name:"Apocalipsis",testament:"NT",chapters:22,section:"Profecía"},
];

const GUIDED=[
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

const DAILY_V=[
  {ref:"Génesis 1:27",text:"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",note:"En Egipto solo el faraón era imagen del dios. Aquí toda la humanidad lo es. La dignidad humana es una condición de origen, no un logro."},
  {ref:"Marcos 1:15",text:"El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.",note:"Jesús no dice 'el reino vendrá algún día'. Dice que llegó. La historia esperaba este momento."},
  {ref:"Génesis 3:15",text:"Ésta te herirá en la cabeza, y tú le herirás en el calcañar.",note:"El primer evangelio de la Biblia. En medio del primer juicio, la primera promesa de redención."},
  {ref:"Marcos 2:17",text:"No he venido a llamar a justos, sino a pecadores.",note:"La gracia no busca a los que ya lo tienen resuelto — busca a los que saben que no."},
  {ref:"Juan 1:14",text:"Y aquel Verbo fue hecho carne, y habitó entre nosotros, lleno de gracia y de verdad.",note:"El mismo agente de la creación entró en su propia creación. La afirmación más audaz del NT."},
  {ref:"Salmos 23:4",text:"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.",note:"El pastor no elimina el valle de sombra — acompaña en él."},
  {ref:"Génesis 2:18",text:"No es bueno que el hombre esté solo.",note:"La primera cosa que Dios declara 'no buena' no es el pecado. Es la soledad."},
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const gb=id=>BOOKS.find(b=>b.id===id);
const gc=(bid,ch)=>CTX[`${bid}-${ch}`]||null;

function useLS(key,def){
  const [v,sv]=useState(()=>{try{const s=localStorage.getItem(key);return s?JSON.parse(s):def;}catch{return def;}});
  const set=val=>{sv(val);try{localStorage.setItem(key,JSON.stringify(val));}catch{}};
  return[v,set];
}

function tok(text,hl){
  if(!hl?.length)return[{text,h:false}];
  const lo=text.toLowerCase(),hits=[];
  hl.forEach(w=>{let i=0;while((i=lo.indexOf(w.toLowerCase(),i))!==-1){hits.push({s:i,e:i+w.length,w});i+=w.length;}});
  if(!hits.length)return[{text,h:false}];
  hits.sort((a,b)=>a.s-b.s);
  const pts=[];let c=0;
  hits.forEach(h=>{if(h.s>c)pts.push({text:text.slice(c,h.s),h:false});pts.push({text:text.slice(h.s,h.e),h:true,w:h.w});c=h.e;});
  if(c<text.length)pts.push({text:text.slice(c),h:false});
  return pts;
}

// ─── ATOMS ───────────────────────────────────────────────────────────────────
const Chip=({children,color=C.amber})=><span style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color,background:color+"18",padding:"3px 9px",borderRadius:4}}>{children}</span>;

function VideoCard({v}){
  if(!v)return null;
  return(
    <a href={`https://www.youtube.com/watch?v=${v.id}`}target="_blank"rel="noopener noreferrer"
      style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",textDecoration:"none"}}>
      <div style={{position:"relative",width:90,flexShrink:0}}>
        <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}alt={v.title}style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.25)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(255,255,255,.95)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#000"}}>▶</div>
        </div>
      </div>
      <div style={{padding:"10px 14px",flex:1}}>
        <p style={{fontSize:10,color:"#C05621",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",marginBottom:4}}>Proyecto Biblia · YouTube</p>
        <p style={{fontSize:13,color:C.text,fontWeight:600,lineHeight:1.4}}>{v.title}</p>
        <p style={{fontSize:11,color:C.dim,marginTop:4}}>Gratis · En español</p>
      </div>
    </a>
  );
}

function DictModal({entry,onClose}){
  if(!entry)return null;
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:300,display:"flex",alignItems:"flex-end"}}onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}style={{background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:430,margin:"0 auto",maxHeight:"85vh",overflowY:"auto",boxShadow:"0 -8px 32px rgba(0,0,0,.12)",animation:"slideUp .22s ease"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}><div style={{width:32,height:3,borderRadius:2,background:C.border}}/></div>
        <div style={{padding:"14px 20px 44px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
            <div style={{flex:1,paddingRight:12}}><Chip>{entry.type}</Chip><h3 style={{fontSize:24,fontWeight:900,color:C.text,marginTop:8}}>{entry.term}</h3><p style={{fontSize:14,color:C.dim,marginTop:4,lineHeight:1.5}}>{entry.short}</p></div>
            <button onClick={onClose}style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"50%",width:32,height:32,cursor:"pointer",color:C.dim,fontSize:16,flexShrink:0}}>✕</button>
          </div>
          <div style={{height:1,background:C.border,margin:"0 0 16px"}}/>
          <p style={{fontSize:14,color:C.dim,lineHeight:1.85,whiteSpace:"pre-line",marginBottom:20}}>{entry.body}</p>
          {entry.verses?.length>0&&<div style={{marginBottom:20}}><p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:8}}>Versículos</p><div style={{display:"flex",flexWrap:"wrap",gap:6}}>{entry.verses.map(v=><span key={v}style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:6,padding:"4px 10px",fontSize:12,color:C.dim}}>{v}</span>)}</div></div>}
          {entry.video&&<VideoCard v={entry.video}/>}
        </div>
      </div>
    </div>
  );
}

function GenealogyBlock({id}){
  const g=GENEALOGIES[id];if(!g)return null;
  return(
    <div style={{background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:12,padding:16}}>
      <p style={{fontSize:10,color:C.amber,fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:10}}>Árbol narrativo · {g.ref}</p>
      <p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.85,whiteSpace:"pre-line",marginBottom:16}}>{g.narrative}</p>
      {g.nodes.map((node,i)=>{
        const isLast=i===g.nodes.length-1;const isDots=node.m==="dots";
        const col=node.m==="special"?"#C05621":node.m==="end"?C.amber:C.faint;
        return(<div key={i}style={{display:"flex",gap:12}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}>
            {isDots?<div style={{width:8,height:8,borderRadius:"50%",background:C.faint,margin:"11px 11px"}}/>:<div style={{width:28,height:28,borderRadius:4,border:`2px solid ${col}`,background:node.m?col+"18":C.surface,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:col}}>{i+1}</div>}
            {!isLast&&<div style={{width:2,flex:1,minHeight:8,background:C.border,marginTop:2,marginBottom:2}}/>}
          </div>
          <div style={{flex:1,paddingBottom:10}}>
            {isDots?<p style={{fontSize:12,color:C.faint,fontStyle:"italic",paddingTop:8}}>{node.n}</p>:<div style={{background:C.surface,border:`1px solid ${node.m?col+"30":C.border}`,borderRadius:8,padding:"9px 12px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:node.note?3:0}}><span style={{fontSize:13,fontWeight:800,color:node.m?col:C.text}}>{node.n}</span>{node.y&&<span style={{fontSize:11,color:C.dim}}>{node.y} años</span>}</div>{node.note&&<p style={{fontSize:12,color:node.m?col:C.dim,lineHeight:1.6}}>{node.note}</p>}</div>}
          </div>
        </div>);
      })}
    </div>
  );
}

// ─── COVER PICKER ────────────────────────────────────────────────────────────
function CoverPicker({current,onSelect,onClose}){
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:400,display:"flex",alignItems:"flex-end"}}onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}style={{background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:430,margin:"0 auto",maxHeight:"80vh",overflowY:"auto",boxShadow:"0 -8px 32px rgba(0,0,0,.15)",animation:"slideUp .22s ease"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}><div style={{width:32,height:3,borderRadius:2,background:C.border}}/></div>
        <div style={{padding:"14px 20px 40px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <h3 style={{fontSize:18,fontWeight:900,color:C.text}}>Elige tu portada</h3>
            <button onClick={onClose}style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"50%",width:32,height:32,cursor:"pointer",color:C.dim,fontSize:16}}>✕</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            {COVERS.map(cover=>(
              <button key={cover.id}onClick={()=>{onSelect(cover);onClose();}}
                style={{position:"relative",aspectRatio:"3/2",borderRadius:10,overflow:"hidden",border:`3px solid ${current?.id===cover.id?C.amber:C.border}`,cursor:"pointer",padding:0}}>
                <img src={cover.url}alt={cover.label}style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.2)",display:"flex",alignItems:"flex-end",padding:"6px"}}>
                  <p style={{fontSize:10,color:"#fff",fontWeight:700,textShadow:"0 1px 3px rgba(0,0,0,.6)"}}>{cover.label}</p>
                </div>
                {current?.id===cover.id&&<div style={{position:"absolute",top:4,right:4,width:18,height:18,borderRadius:"50%",background:C.amber,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#fff"}}>✓</div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── READER ──────────────────────────────────────────────────────────────────
function Reader({bookId,chapter,onWord,onBack}){
  const book=gb(bookId);const ctx=gc(bookId,chapter);
  const [verses,setVerses]=useState([]);const[loading,setLoading]=useState(true);const[error,setError]=useState(null);
  const[ctxOpen,setCtxOpen]=useState(false);

  useEffect(()=>{
    setLoading(true);setError(null);setVerses([]);
    const apiCode=book?.api||bookId.toUpperCase();
    // HelloAO Lab — Free Bible API, sin key, RVR09 (Reina-Valera 1909, dominio público)
    fetch(`https://bible.helloao.org/api/RVR09/${apiCode}/${chapter}.json`)
      .then(r=>{if(!r.ok)throw new Error("Sin conexión");return r.json();})
      .then(d=>{
        // HelloAO structure: { chapter: { verses: [{number, content}] } }
        const raw = d?.chapter?.verses || d?.verses || [];
        setVerses(raw.map(v=>({
          v: v.number ?? v.verse ?? v.verseNumber,
          t: (v.content ?? v.text ?? "").replace(/<[^>]+>/g,"").trim()
        })).filter(v=>v.t));
        setLoading(false);
      })
      .catch(e=>{setError(e.message);setLoading(false);});
  },[bookId,chapter]);

  const hl=ctx?.highlights||[];

  return(
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18,flexWrap:"wrap"}}>
        <button onClick={()=>onBack("back")}style={{background:"none",border:"none",color:C.amber,fontSize:15,fontWeight:700,cursor:"pointer",padding:0}}>←</button>
        <Chip color={C.amber}>{book?.name} {chapter}</Chip>
        <span style={{fontSize:11,color:C.faint,background:C.card,border:`1px solid ${C.border}`,borderRadius:20,padding:"3px 9px",fontWeight:600}}>RVR1909</span>
      </div>

      {ctx&&(<button onClick={()=>setCtxOpen(o=>!o)}style={{background:ctxOpen?C.amberBg:C.card,border:`1px solid ${ctxOpen?C.amber+"60":C.border}`,borderRadius:10,padding:"10px 14px",color:ctxOpen?C.amber:C.dim,fontSize:12,fontWeight:700,cursor:"pointer",width:"100%",textAlign:"left",marginBottom:14,display:"flex",justifyContent:"space-between"}}><span>{ctxOpen?"Ocultar contexto histórico":"Ver contexto histórico"}</span><span>{ctxOpen?"▲":"▼"}</span></button>)}
      {ctxOpen&&ctx&&(<div style={{background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:12,padding:16,marginBottom:16}}><p style={{fontSize:14,color:"#7B4A1A",lineHeight:1.9,whiteSpace:"pre-line"}}>{ctx.context}</p></div>)}

      {ctx?.genealogy&&<div style={{marginBottom:16}}><GenealogyBlock id={ctx.genealogy}/></div>}

      {hl.length>0&&(<div style={{background:C.blueBg,border:`1px solid ${C.blue}20`,borderRadius:8,padding:"8px 12px",marginBottom:16,display:"flex",gap:8,alignItems:"center"}}><span style={{color:C.blue}}>◈</span><p style={{fontSize:12,color:C.blue}}>Las <span style={{color:C.amber,textDecoration:"underline dotted",textUnderlineOffset:3,fontWeight:600}}>palabras subrayadas</span> tienen explicación</p></div>)}

      {loading&&(<div style={{padding:"40px 0",textAlign:"center"}}><div style={{width:28,height:28,border:`3px solid ${C.border}`,borderTopColor:C.amber,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 12px"}}/><p style={{fontSize:13,color:C.dim}}>Cargando {book?.name} {chapter}…</p></div>)}
      {!loading&&error&&(<div style={{background:"#FEF2F2",border:`1px solid ${C.red}20`,borderRadius:12,padding:16,marginBottom:16}}><p style={{fontSize:13,color:C.red,marginBottom:4,fontWeight:600}}>No se pudo cargar el texto</p><p style={{fontSize:12,color:"#991B1B"}}>Verifica tu conexión a internet. El texto se carga desde bible.helloao.org — Reina-Valera 1909, dominio público, sin costo ni key.</p></div>)}
      {verses.length>0&&(<div style={{marginBottom:24}}>{verses.map(v=>{const pts=tok(v.t,hl);return(<div key={v.v}style={{display:"flex",gap:12,marginBottom:18}}><span style={{fontSize:10,fontWeight:800,color:C.amberL,minWidth:18,marginTop:5,flexShrink:0,opacity:.7}}>{v.v}</span><p style={{fontSize:17,lineHeight:1.85,color:C.text,flex:1}}>{pts.map((p,i)=>p.h?<span key={i}onClick={()=>{const e=DICT[p.w];if(e)onWord(e);}}style={{color:C.amber,textDecoration:"underline",textDecorationStyle:"dotted",textUnderlineOffset:4,cursor:"pointer",fontWeight:600}}>{p.text}</span>:<span key={i}>{p.text}</span>)}</p></div>);})}</div>)}

      {ctx&&(<>
        <div style={{borderLeft:`3px solid ${C.amber}`,paddingLeft:16,marginBottom:18}}>
          <p style={{fontSize:10,color:C.amber,fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:8}}>Versículo central</p>
          <p style={{fontSize:17,fontStyle:"italic",color:C.text,lineHeight:1.65,marginBottom:6}}>"{ctx.keyText}"</p>
          <p style={{fontSize:11,color:C.amber,fontWeight:700}}>{ctx.keyVerse}</p>
        </div>
        <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px",marginBottom:18}}>
          <p style={{fontSize:10,color:C.dim,fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:6}}>Lo que está en juego</p>
          <p style={{fontSize:14,color:C.dim,lineHeight:1.8,whiteSpace:"pre-line"}}>{ctx.stake}</p>
        </div>
        {ctx.video&&<VideoCard v={ctx.video}/>}
      </>)}

      <div style={{display:"flex",gap:10,marginTop:20}}>
        {chapter>1&&<button onClick={()=>onBack("prev")}style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:12,color:C.dim,fontSize:13,fontWeight:700,cursor:"pointer"}}>← Cap. {chapter-1}</button>}
        {chapter<(book?.chapters||50)&&<button onClick={()=>onBack("next")}style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:12,color:C.dim,fontSize:13,fontWeight:700,cursor:"pointer"}}>Cap. {chapter+1} →</button>}
      </div>
    </div>
  );
}

// ─── BOOK PICKER ─────────────────────────────────────────────────────────────
function BookPicker({onSelect}){
  const[testament,setTestament]=useState("NT");const[sel,setSel]=useState(null);
  const books=BOOKS.filter(b=>b.testament===testament);
  const sections=[...new Set(books.map(b=>b.section))];
  if(sel){const nums=Array.from({length:sel.chapters},(_,i)=>i+1);return(<div><button onClick={()=>setSel(null)}style={{background:"none",border:"none",color:C.amber,fontSize:14,fontWeight:700,cursor:"pointer",padding:"0 0 14px",display:"block"}}>← Libros</button><h3 style={{fontSize:20,fontWeight:900,color:C.text,marginBottom:4}}>{sel.name}</h3><p style={{fontSize:12,color:C.dim,marginBottom:18}}>{sel.chapters} capítulos · {sel.section}</p><div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8}}>{nums.map(n=>(<button key={n}onClick={()=>onSelect(sel.id,n)}style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:8,padding:"13px 4px",fontSize:15,fontWeight:700,color:C.text,cursor:"pointer"}}>{n}</button>))}</div></div>);}
  return(<div><div style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",marginBottom:20}}>{[["NT","Nuevo Testamento"],["AT","Antiguo Testamento"]].map(([id,label])=>(<button key={id}onClick={()=>setTestament(id)}style={{flex:1,background:testament===id?C.amber:"none",color:testament===id?"#fff":C.dim,border:"none",padding:"12px 8px",fontSize:13,fontWeight:800,cursor:"pointer"}}>{label}</button>))}</div>{sections.map(sec=>(<div key={sec}style={{marginBottom:22}}><p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase",letterSpacing:".12em",marginBottom:10}}>{sec}</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>{books.filter(b=>b.section===sec).map(book=>(<button key={book.id}onClick={()=>setSel(book)}style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px",cursor:"pointer",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><p style={{fontSize:14,fontWeight:700,color:C.text}}>{book.name}</p><p style={{fontSize:11,color:C.dim}}>{book.chapters} cap.</p></div><span style={{color:C.faint,fontSize:16}}>›</span></button>))}</div></div>))}</div>);
}

// ─── TODAY ────────────────────────────────────────────────────────────────────
function TodayTab({progress,onMark,onRead,cover,onChangeCover}){
  const step=GUIDED[Math.min(progress.day,GUIDED.length-1)];
  const pct=Math.round((progress.day/GUIDED.length)*100);
  const dv=DAILY_V[Math.floor(Date.now()/86400000)%DAILY_V.length];
  const ctx=step?gc(step.book,step.ch):null;
  return(<div>
    {/* Hero portada */}
    <div style={{position:"relative",height:220,borderRadius:16,overflow:"hidden",marginBottom:16,background:`url(${cover?.url||COVERS[0].url}) center/cover`}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.55))"}}/>
      <div style={{position:"absolute",bottom:16,left:16,right:16}}>
        <p style={{fontSize:11,color:"rgba(255,255,255,.8)",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",marginBottom:4}}>Versículo del día</p>
        <p style={{fontSize:16,color:"#fff",fontStyle:"italic",lineHeight:1.5,marginBottom:6}}>"{dv.text}"</p>
        <p style={{fontSize:11,color:"rgba(255,255,255,.75)",fontWeight:600}}>{dv.ref}</p>
      </div>
      <button onClick={onChangeCover}style={{position:"absolute",top:12,right:12,background:"rgba(255,255,255,.2)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,.3)",borderRadius:20,padding:"5px 12px",fontSize:11,color:"#fff",fontWeight:700,cursor:"pointer"}}>🖼 Portada</button>
    </div>

    <p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.7,marginBottom:16,background:C.amberBg,border:`1px solid ${C.amber}20`,borderRadius:10,padding:"10px 14px"}}>{dv.note}</p>

    {/* Ruta */}
    {step&&(<div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <p style={{fontSize:11,color:C.dim,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em"}}>Ruta guiada · Día {progress.day+1}/{GUIDED.length}</p>
        <p style={{fontSize:11,color:C.amber,fontWeight:700}}>{pct}%</p>
      </div>
      <div style={{background:C.card,borderRadius:99,height:4,marginBottom:14}}>
        <div style={{background:C.amber,borderRadius:99,height:4,width:`${Math.max(pct,2)}%`,transition:"width .4s"}}/>
      </div>
      <p style={{fontSize:20,fontWeight:900,color:C.text,marginBottom:4}}>{gb(step.book)?.name} {step.ch}</p>
      {ctx&&<p style={{fontSize:13,color:C.dim,lineHeight:1.6,marginBottom:14}}>{ctx.stake?.slice(0,110)}…</p>}
      <div style={{display:"flex",gap:10}}>
        <button onClick={()=>onRead(step.book,step.ch)}style={{flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:13,fontSize:14,fontWeight:900,cursor:"pointer"}}>Leer ahora →</button>
        <button onClick={onMark}style={{flex:1,background:C.card,color:C.dim,border:`1px solid ${C.border}`,borderRadius:10,padding:13,fontSize:13,fontWeight:700,cursor:"pointer"}}>Ya leí ✓</button>
      </div>
    </div>)}

    <p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:10}}>Próximos días</p>
    {GUIDED.slice(progress.day,progress.day+4).map((s,i)=>(<div key={s.day}style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}><div style={{width:28,height:28,borderRadius:"50%",background:i===0?C.amber:C.card,border:`2px solid ${i===0?C.amber:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:i===0?"#fff":C.faint,flexShrink:0}}>{s.day}</div><p style={{fontSize:13,color:i===0?C.text:C.dim,fontWeight:i===0?700:400}}>{gb(s.book)?.name} {s.ch}</p></div>))}
  </div>);
}

// ─── EXPLORE ─────────────────────────────────────────────────────────────────
function ExploreTab({onWord}){
  const[view,setView]=useState("dict");const[q,setQ]=useState("");const[gId,setGId]=useState(null);
  const entries=Object.values(DICT).filter(e=>!q||e.term.toLowerCase().includes(q.toLowerCase())||e.short.toLowerCase().includes(q.toLowerCase()));
  const GLIST=[{id:"adan-noe",ref:"Génesis 5",title:"De Adán a Noé",sub:"10 generaciones. El redoble de la muerte y dos excepciones."},{id:"abraham-jesus",ref:"Mateo 1:1-17",title:"De Abraham a Jesús",sub:"42 generaciones. La historia de Israel en una lista."}];
  if(gId){const g=GLIST.find(g=>g.id===gId);return(<div><button onClick={()=>setGId(null)}style={{background:"none",border:"none",color:C.amber,fontSize:14,fontWeight:700,cursor:"pointer",padding:"0 0 16px",display:"block"}}>← Genealogías</button><Chip>{g?.ref}</Chip><h3 style={{fontSize:20,fontWeight:900,color:C.text,marginTop:10,marginBottom:18}}>{g?.title}</h3><GenealogyBlock id={gId}/></div>);}
  return(<div>
    <div style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",marginBottom:16}}>{[["dict","Diccionario"],["gen","Genealogías"]].map(([id,label])=>(<button key={id}onClick={()=>setView(id)}style={{flex:1,background:view===id?C.amber:"none",color:view===id?"#fff":C.dim,border:"none",padding:"11px",fontSize:13,fontWeight:800,cursor:"pointer"}}>{label}</button>))}</div>
    {view==="dict"&&<><input value={q}onChange={e=>setQ(e.target.value)}placeholder="Buscar término..."style={{width:"100%",background:C.surface,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",fontSize:15,color:C.text,outline:"none",boxSizing:"border-box",marginBottom:12}}/>{entries.map(e=>(<button key={e.term}onClick={()=>onWord(e)}style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 15px",cursor:"pointer",width:"100%",textAlign:"left",marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div style={{flex:1,paddingRight:10}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontSize:15,fontWeight:800,color:C.text}}>{e.term}</span><Chip>{e.type}</Chip></div><p style={{fontSize:13,color:C.dim,lineHeight:1.5}}>{e.short}</p></div><span style={{color:C.faint,fontSize:18}}>›</span></div></button>))}</>}
    {view==="gen"&&<><div style={{background:C.amberBg,border:`1px solid ${C.amber}20`,borderRadius:12,padding:"12px 14px",marginBottom:14}}><p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.7}}>Las genealogías bíblicas no son listas de nombres. Son argumentos teológicos — cada una dice algo que no podría decirse de otra manera.</p></div>{GLIST.map(g=>(<button key={g.id}onClick={()=>setGId(g.id)}style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:15,cursor:"pointer",width:"100%",textAlign:"left",marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><Chip>{g.ref}</Chip><p style={{fontSize:16,fontWeight:800,color:C.text,marginTop:8,marginBottom:4}}>{g.title}</p><p style={{fontSize:13,color:C.dim}}>{g.sub}</p></div><span style={{color:C.faint,fontSize:18,marginTop:4}}>›</span></div></button>))}</>}
  </div>);
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function Page(){
  const[tab,setTab]=useState("today");
  const[progress,setProgress]=useLS("bs_progress",{day:0});
  const[cover,setCover]=useLS("bs_cover",COVERS[0]);
  const[dictEntry,setDictEntry]=useState(null);
  const[reading,setReading]=useState(null);
  const[showCoverPicker,setShowCoverPicker]=useState(false);
  const topRef=useRef(null);

  const openReader=(bookId,chapter)=>{setReading({bookId,chapter});if(topRef.current)topRef.current.scrollTo(0,0);};
  const handleBack=(action)=>{
    if(action==="next")setReading(r=>({...r,chapter:r.chapter+1}));
    else if(action==="prev")setReading(r=>({...r,chapter:r.chapter-1}));
    else setReading(null);
    if(topRef.current)topRef.current.scrollTo(0,0);
  };

  const headerTitle=reading?`${gb(reading.bookId)?.name} ${reading.chapter}`:tab==="today"?"Hoy":tab==="read"?"Leer":"Explorar";
  const TABS=[{id:"today",icon:"◉",label:"Hoy"},{id:"read",icon:"☰",label:"Leer"},{id:"explore",icon:"◈",label:"Explorar"}];

  return(
    <div style={{background:C.bg,minHeight:"100vh",maxWidth:430,margin:"0 auto",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{`*{box-sizing:border-box;}button,a,input{font-family:inherit;}::-webkit-scrollbar{width:0;}input::placeholder{color:#B8B0A4;}@keyframes slideUp{from{transform:translateY(100%);}to{transform:translateY(0);}}@keyframes spin{to{transform:rotate(360deg);}}`}</style>

      {/* Header */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"52px 20px 14px",flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,.06)"}}>
        <p style={{fontSize:10,color:C.amber,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",marginBottom:3}}>Biblia Simple</p>
        <h1 style={{fontSize:20,fontWeight:900,color:C.text}}>{headerTitle}</h1>
      </div>

      {/* Content */}
      <div ref={topRef}style={{flex:1,overflowY:"auto",padding:"18px 18px 100px"}}>
        {reading?<Reader bookId={reading.bookId}chapter={reading.chapter}onWord={setDictEntry}onBack={handleBack}/>:
          tab==="today"?<TodayTab progress={progress}onMark={()=>setProgress(p=>({day:Math.min(p.day+1,GUIDED.length)}))}onRead={openReader}cover={cover}onChangeCover={()=>setShowCoverPicker(true)}/>:
          tab==="read"?<BookPicker onSelect={openReader}/>:
          <ExploreTab onWord={setDictEntry}/>}
      </div>

      {dictEntry&&<DictModal entry={dictEntry}onClose={()=>setDictEntry(null)}/>}
      {showCoverPicker&&<CoverPicker current={cover}onSelect={setCover}onClose={()=>setShowCoverPicker(false)}/>}

      {/* Nav */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"rgba(250,250,248,.97)",borderTop:`1px solid ${C.border}`,display:"flex",zIndex:100,backdropFilter:"blur(20px)"}}>
        {TABS.map(t=>{const active=!reading&&tab===t.id;return(
          <button key={t.id}onClick={()=>{setReading(null);setTab(t.id);}}style={{flex:1,background:"none",border:"none",padding:"12px 4px 18px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
            <span style={{fontSize:19,color:active?C.amber:C.faint}}>{t.icon}</span>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",color:active?C.amber:C.faint}}>{t.label}</span>
            {active&&<div style={{width:16,height:2,background:C.amber,borderRadius:1}}/>}
          </button>
        );})}
      </div>
    </div>
  );
}
