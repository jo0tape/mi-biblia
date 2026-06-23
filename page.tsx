"use client";
import { useState, useRef, useEffect } from "react";

const C = {
  bg:"#FAFAF8", surface:"#FFFFFF", card:"#F5F3EF", border:"#E8E4DC",
  amber:"#8B5E2A", amberL:"#C4873E", amberBg:"#FDF6ED",
  text:"#1C1814", dim:"#6B6358", faint:"#B8B0A4", fainter:"#E0DBD3",
  green:"#3D6B4A", greenBg:"#EDF5F0", blue:"#2E5F8A", blueBg:"#EDF3FA", red:"#8B2A2A",
};

const PB = {
  genesis1:{ id:"HQMKA6w5ZZM", title:"Resumen de Génesis (parte 1)" },
  genesis2:{ id:"MC8BqGu9B8A", title:"Resumen de Génesis (parte 2)" },
  marcos:  { id:"gsXLQkppzUc", title:"Resumen de Marcos" },
  juan1:   { id:"A_BYskCtAHQ", title:"Resumen de Juan (parte 1)" },
  mateo1:  { id:"3Dv4-n6OYGI", title:"Resumen de Mateo (parte 1)" },
  romanos1:{ id:"UoIFpkFoKC0", title:"Resumen de Romanos (parte 1)" },
  salmos:  { id:"j9phNEaPrv8", title:"Resumen de Salmos" },
  reino:   { id:"xmFPS0f-kzs", title:"El Reino de Dios" },
  pacto:   { id:"zc6gXS7VGJE", title:"El Pacto" },
  imagen:  { id:"YbipxLDtY8c", title:"Imagen de Dios" },
};

const COVERS = [
  { id:"mountains", url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", label:"Montañas" },
  { id:"desert",    url:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80", label:"Desierto" },
  { id:"sea",       url:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80", label:"Mar" },
  { id:"forest",    url:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", label:"Bosque" },
  { id:"sunrise",   url:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80", label:"Amanecer" },
  { id:"wheat",     url:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", label:"Campos" },
  { id:"stars",     url:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80", label:"Estrellas" },
  { id:"olive",     url:"https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800&q=80", label:"Olivos" },
  { id:"river",     url:"https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80", label:"Río" },
  { id:"candle",    url:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=80", label:"Luz" },
  { id:"path",      url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", label:"Camino" },
  { id:"dove",      url:"https://images.unsplash.com/photo-1559628233-100c798642b6?w=800&q=80", label:"Paloma" },
];

const CTX: Record<string,any> = {
"genesis-1":{ title:"En el principio", context:`En el mundo antiguo los relatos de creación describían dioses en conflicto. El Enuma Elish babilónico describe a Marduk matando al monstruo del caos y construyendo el mundo con su cuerpo.\n\nGénesis 1 responde con una visión radicalmente diferente: un solo Dios, sin competencia, sin conflicto, crea libremente por la palabra. La estructura es poética — seis días en dos columnas paralelas: los días 1-3 crean espacios, los días 4-6 los llenan.`, stake:"En Egipto solo el faraón era imagen del dios. Aquí toda la humanidad lo es. La dignidad humana no depende del rango ni del mérito — es una condición de origen.", keyVerse:"Génesis 1:27", keyText:"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.", highlights:["imagen de dios"], video:PB.genesis1, genealogy:null },
"genesis-2":{ title:"El jardín y el ser humano", context:`El capítulo 2 es un zoom sobre el día 6. Dios forma al hombre del polvo — adam de adamah, tierra de la tierra. Luego sopla en sus narices aliento de vida.\n\nEl árbol del conocimiento del bien y del mal representa la autonomía moral total — decidir por cuenta propia qué es bueno y malo, sin Dios.`, stake:"La primera cosa que Dios declara 'no buena' no es el pecado. Es la soledad. La comunidad es estructural al diseño original de Dios.", keyVerse:"Génesis 2:7", keyText:"Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.", highlights:["pacto"], video:PB.genesis1, genealogy:null },
"genesis-3":{ title:"La caída", context:`La tentación tiene tres capas: el árbol era 'bueno para comer' (deseo físico), 'agradable a los ojos' (estético) y 'codiciable para alcanzar sabiduría' (poder). No es impulso irracional — es una decisión deliberada.\n\nLuego del juicio, algo notable: Dios mismo hace túnicas de pieles y los viste. En el momento del castigo, hay también cuidado.`, stake:"El versículo 15 es el 'protoevangelio' — la primera promesa de redención. En medio del primer juicio hay una promesa: un descendiente de la mujer vencerá a la serpiente.", keyVerse:"Génesis 3:15", keyText:"Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.", highlights:["redencion","pacto"], video:PB.genesis1, genealogy:null },
"genesis-5":{ title:"Genealogía: de Adán a Noé", context:`Cada entrada sigue el mismo ritmo: vivió X años, engendró, vivió Y años más, y murió. Ese redoble — 'y murió... y murió...' — es deliberado. Es el eco de Génesis 3.\n\nDos personas rompen el patrón. Enoc no muere. Matusalén vivió 969 años y murió el mismo año del diluvio.`, stake:"En una lista donde todos mueren, Enoc es la excepción. ¿Tiene la muerte la última palabra?", keyVerse:"Génesis 5:24", keyText:"Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios.", highlights:[], video:PB.genesis1, genealogy:"adan-noe" },
"genesis-12":{ title:"El llamado de Abraham", context:`Génesis 12 es el gran giro de la historia bíblica. Después de once capítulos de caída — Adán, Caín, el diluvio, Babel — Dios elige a un hombre para comenzar algo nuevo.\n\nAbram tiene 75 años. Ur de los Caldeos era una de las ciudades más avanzadas del mundo. Dejó civilización, no barbarie.`, stake:"La promesa a Abraham es la razón de todo lo que sigue en la Biblia. Todo el Nuevo Testamento es el relato de cómo esa promesa se cumple en Jesús.", keyVerse:"Génesis 12:2-3", keyText:"Y haré de ti una nación grande, y te bendeciré... y serán benditas en ti todas las familias de la tierra.", highlights:["pacto","abraham"], video:PB.genesis2, genealogy:null },
"marcos-1":{ title:"El comienzo del evangelio", context:`Marcos no tiene genealogía ni infancia. Primera palabra en griego: arjé — principio. La misma con que abre Génesis. Marcos dice: esto es un nuevo comienzo.\n\nSu palabra favorita es 'enseguida' (euthus) — aparece 41 veces en 16 capítulos. Jesús actúa antes de que tengamos tiempo de prepararnos.`, stake:"¿Quién tiene autoridad? Los espíritus inmundos reconocen a Jesús antes que los humanos. La naturaleza obedece. Marcos acumula evidencias sin dar la respuesta — eso lo hace el lector.", keyVerse:"Marcos 1:15", keyText:"El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.", highlights:["reino de dios","arrepentíos","escribas","espíritu inmundo"], video:PB.marcos, genealogy:null },
"marcos-2":{ title:"El Hijo del Hombre perdona pecados", context:`Cuatro hombres no podían entrar. Subieron al techo y lo abrieron. Marcos dice que Jesús 'vio la fe de ellos' — no la del paralítico solo, sino la de los cuatro expresada en acción.\n\nJesús dice: 'tus pecados te son perdonados.' Los escribas razonan correctamente: solo Dios puede hacer eso.`, stake:"La sanidad demuestra la afirmación: si tiene autoridad para sanar lo visible, tiene autoridad para perdonar lo invisible.", keyVerse:"Marcos 2:17", keyText:"No he venido a llamar a justos, sino a pecadores.", highlights:["fariseos","publicanos","pecadores","blasfemia","escribas"], video:PB.marcos, genealogy:null },
"marcos-3":{ title:"Los doce y la nueva familia", context:`Fariseos y herodianos — grupos que normalmente se detestaban — se unen para destruirlo. Jesús sube a un monte y llama a doce. El número no es casual: doce tribus de Israel.\n\nLa familia de Jesús viene a buscarlo pensando que 'está fuera de sí'.`, stake:"¿Quién es la familia de Jesús? Los que hacen la voluntad de Dios. El reino redefine los lazos más profundos.", keyVerse:"Marcos 3:35", keyText:"Porque todo aquel que hace la voluntad de Dios, ése es mi hermano, y mi hermana, y mi madre.", highlights:["fariseos","reino de dios"], video:PB.marcos, genealogy:null },
"juan-1":{ title:"El Verbo se hizo carne", context:`Juan abre con las mismas palabras que Génesis: 'En el principio'. No es accidental. Juan está reescribiendo el inicio de la historia.\n\nEl Verbo (Logos en griego) no es una fuerza impersonal — es una persona. Y se hizo carne.`, stake:"La encarnación es la afirmación más audaz del NT: el mismo agente de la creación entró en su propia creación.", keyVerse:"Juan 1:14", keyText:"Y aquel Verbo fue hecho carne, y habitó entre nosotros, lleno de gracia y de verdad.", highlights:["verbo","gracia","pacto"], video:PB.juan1, genealogy:null },
"salmos-23":{ title:"El Señor es mi pastor", context:`David era pastor antes de ser rey. Había protegido ovejas de leones y osos. Conocía el oficio desde adentro.\n\nEn el mundo antiguo 'pastor' era también título para los reyes. Los buenos reyes cuidaban a su pueblo como el pastor a sus ovejas.`, stake:"Este salmo no promete que nada malo pasará — promete compañía en lo malo. El pastor no elimina el peligro — acompaña en él.", keyVerse:"Salmos 23:4", keyText:"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.", highlights:["pastor"], video:PB.salmos, genealogy:null },
"romanos-1":{ title:"El evangelio, poder de Dios", context:`Pablo escribe a Roma — el centro del Imperio. El César era considerado hijo de dios y señor del mundo.\n\nEn ese contexto, Pablo dice: 'No me avergüenzo del evangelio.' La palabra euangelion era usada en Roma para anunciar victorias imperiales. Pablo toma ese lenguaje y lo resignifica.`, stake:"Pablo pasará 8 capítulos describiendo el problema antes de llegar a la solución. La grandeza de la gracia solo se entiende sobre el fondo de la gravedad del problema.", keyVerse:"Romanos 1:16", keyText:"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree.", highlights:["evangelio","justificacion","redencion"], video:PB.romanos1, genealogy:null },
"mateo-1":{ title:"El libro de la genealogía", context:`Mateo abre con una genealogía porque quiere decir algo antes de decir nada. Para sus lectores judíos, 'Jesús, hijo de David, hijo de Abraham' era una declaración de identidad.\n\nMateo incluye cinco mujeres — inusual en el mundo antiguo. Todas con historias complicadas.`, stake:"Esta genealogía es la síntesis de todo el Antiguo Testamento. Sin ella, Jesús aparece de la nada. Con ella, es el punto de llegada de 2000 años de promesas.", keyVerse:"Mateo 1:23", keyText:"He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.", highlights:["pacto","abraham"], video:PB.mateo1, genealogy:"abraham-jesus" },
};

const GENEALOGIES: Record<string,any> = {
"adan-noe":{ title:"De Adán a Noé", ref:"Génesis 5",
  narrative:`Cada entrada sigue el mismo ritmo: vivió X años, engendró, vivió Y años más, y murió. Ese redoble — 'y murió... y murió...' — es deliberado. Es el eco de Génesis 3.\n\nDos personas rompen el patrón. Enoc no muere — 'caminó con Dios y desapareció'. Matusalén vivió 969 años y murió el mismo año del diluvio.`,
  nodes:[
    {n:"Adán",y:930,note:"Primer hombre. Adam = tierra (adamah).",m:"start"},
    {n:"Set",y:912,note:"Nacido después de la muerte de Abel. La línea continúa.",m:null},
    {n:"Enós",y:905,note:"En su tiempo se comenzó a invocar el nombre de Jehová.",m:null},
    {n:"Cainán",y:910,note:null,m:null},{n:"Mahalaleel",y:895,note:null,m:null},{n:"Jared",y:962,note:null,m:null},
    {n:"Enoc",y:365,note:"No murió. 'Caminó con Dios y desapareció.' La excepción.",m:"special"},
    {n:"Matusalén",y:969,note:"El más longevo. Murió el año del diluvio.",m:"special"},
    {n:"Lámec",y:777,note:"Profetizó sobre Noé: 'Éste nos aliviará.'",m:null},
    {n:"Noé",y:950,note:"El único 'justo' de su generación. Construyó el arca.",m:"end"},
  ]
},
"abraham-jesus":{ title:"De Abraham a Jesús", ref:"Mateo 1:1-17",
  narrative:`Mateo organiza la lista en tres grupos de catorce generaciones. La historia tiene forma, dirección y destino.\n\nCinco mujeres aparecen — inusual en el mundo antiguo. Tamar, Rahab, Rut, Betsabé, María. Todas con historias complicadas. Dios escribe recto con líneas torcidas.`,
  nodes:[
    {n:"Abraham",y:null,note:"La promesa: 'En ti serán benditas todas las familias de la tierra.'",m:"end"},
    {n:"Isaac",y:null,note:"El hijo prometido, nacido cuando era humanamente imposible.",m:null},
    {n:"Jacob",y:null,note:"Renombrado Israel. Sus doce hijos son las doce tribus.",m:null},
    {n:"Judá",y:null,note:"De su tribu vienen David y Jesús.",m:null},
    {n:"Rahab ✦",y:null,note:"Prostituta de Jericó. Extranjera. Incluida por Mateo.",m:"special"},
    {n:"Rut ✦",y:null,note:"Moabita, viuda. Bisabuela de David.",m:"special"},
    {n:"David",y:null,note:"El rey prometido. 'Tu trono será estable para siempre.'",m:"end"},
    {n:"Betsabé ✦",y:null,note:"'La que había sido mujer de Urías.' No borra el pecado de David.",m:"special"},
    {n:"· · · 14 generaciones · · ·",y:null,note:"El exilio en Babilonia.",m:"dots"},
    {n:"José",y:null,note:"Padre legal de Jesús. Le da el título de 'Hijo de David'.",m:null},
    {n:"Jesús",y:null,note:"El Cristo. Aquí termina la genealogía y comienza el evangelio.",m:"end"},
  ]
},
};

const DICT: Record<string,any> = {
"reino de dios":{term:"Reino de Dios",type:"Concepto central",short:"El gobierno activo de Dios irrumpiendo en la historia.",body:`No es principalmente un lugar — es el reinado activo de Dios que trastorna el orden existente.\n\nIsrael esperaba un rey que los liberara de Roma. Jesús resignificó ese lenguaje: el reino no llega con ejércitos sino con sanidades, con perdón, con la inclusión de los excluidos.\n\nTensión intrínseca: ya llegó en Jesús, pero su consumación es futura. El cristiano vive en ese espacio intermedio.`,verses:["Marcos 1:15","Mateo 6:10","Lucas 17:20-21","Apocalipsis 11:15"],video:PB.reino},
"arrepentíos":{term:"Arrepentimiento",type:"Concepto teológico",short:"Cambio de dirección, no solo de sentimiento.",body:`La palabra griega es metanoia — 'cambio de mente' o 'cambio de dirección'. No es principalmente culpa o tristeza.\n\nArrepentirse es girar hacia una dirección diferente. El primer anuncio de Jesús en Marcos incluye dos elementos: arrepentíos (giren) y creed (confíen). Los dos van juntos.`,verses:["Marcos 1:15","Lucas 15:11-32","Hechos 2:38"],video:null},
"escribas":{term:"Escribas",type:"Rol religioso",short:"Expertos en la Ley de Moisés, intérpretes de las Escrituras.",body:`Los escribas siempre citaban autoridades anteriores: 'Rabí Fulano dijo...'\n\nJesús decía: 'Pero yo os digo...' Sin citar a nadie. Esa diferencia era lo que asombraba a la gente y escandalizaba a los líderes.`,verses:["Marcos 1:22","Marcos 2:6-7"],video:null},
"espíritu inmundo":{term:"Espíritu inmundo",type:"Concepto bíblico",short:"Fuerza espiritual hostil al ser humano y a Dios.",body:`Lo notable en Marcos 1 es que el espíritu inmundo sabe quién es Jesús antes que nadie: 'Sé quién eres: el Santo de Dios.' Los poderes contrarios al reino reconocen su llegada antes que los humanos.\n\nLos exorcismos son señales de que el reino de Dios está irrumpiendo.`,verses:["Marcos 1:23-27","Marcos 3:11"],video:null},
"fariseos":{term:"Fariseos",type:"Grupo religioso",short:"Movimiento religioso judío del siglo I, guardianes estrictos de la Ley.",body:`Nacieron en el siglo II a.C. como reacción a la helenización forzada. Conocían la Escritura en profundidad.\n\nLa crítica de Jesús no era que conocieran mal la ley — era que habían convertido la observancia en un sistema de autojustificación.`,verses:["Mateo 23:23-28","Lucas 18:9-14","Juan 3:1"],video:null},
"publicanos":{term:"Publicanos",type:"Rol social",short:"Cobradores de impuestos judíos al servicio de Roma.",body:`Considerados traidores por colaborar con Roma. En la jerarquía social judía del siglo I estaban en el nivel más bajo.\n\nComer con alguien era señal de aceptación — por eso escandalizaba que Jesús comiera con ellos.`,verses:["Marcos 2:15-17","Lucas 19:1-10"],video:null},
"pecadores":{term:"Pecadores",type:"Término social",short:"En el siglo I, categoría social de excluidos del sistema religioso.",body:`No era solo una categoría moral — era social. Incluía a quienes ejercían oficios impuros o vivían al margen de la sinagoga.\n\nJesús no solo perdona pecados — come con los excluidos. Eso era una declaración pública de que pertenecían al reino.`,verses:["Marcos 2:16-17","Lucas 15:1-2"],video:null},
"blasfemia":{term:"Blasfemia",type:"Concepto religioso",short:"Usurpar de manera presuntuosa lo que pertenece solo a Dios.",body:`Cuando Jesús dice 'tus pecados te son perdonados', los escribas razonan correctamente: solo Dios puede perdonar pecados. Si un hombre dice eso, o es Dios o blasfema. No hay término medio.`,verses:["Marcos 2:7","Juan 10:33"],video:null},
"imagen de dios":{term:"Imagen de Dios",type:"Concepto teológico",short:"La dignidad intrínseca de todo ser humano como representante de Dios.",body:`En Egipto solo el faraón era imagen del dios. Génesis 1:27 democratiza ese concepto: toda la humanidad lleva la imagen de Dios.\n\nLa dignidad humana no depende del rango ni del mérito — es una condición de origen.`,verses:["Génesis 1:26-27","Génesis 9:6","Santiago 3:9"],video:PB.imagen},
"pacto":{term:"Pacto",type:"Concepto teológico",short:"Promesa de relación permanente entre Dios y personas.",body:`No es un contrato — es una promesa de relación, similar al matrimonio en su profundidad.\n\nLa Biblia puede leerse como la historia de los pactos de Dios: con Noé, Abraham, Moisés, David, y el Nuevo Pacto en Jesús. Cada uno amplía el anterior.`,verses:["Génesis 15:18","Jeremías 31:31-34","Lucas 22:20"],video:PB.pacto},
"redencion":{term:"Redención",type:"Concepto teológico",short:"Rescate mediante el pago de un precio.",body:`En la antigüedad 'redimir' era comprar la libertad de un esclavo. El Éxodo es el patrón de redención en toda la Biblia.\n\nCuando los profetas anunciaban una 'nueva redención', la describían como un 'nuevo Éxodo'. El NT presenta a Jesús como el redentor definitivo.`,verses:["Éxodo 6:6","Isaías 43:1","Marcos 10:45","Efesios 1:7"],video:null},
"evangelio":{term:"Evangelio",type:"Concepto central",short:"Buenas noticias — el anuncio de que el reino de Dios llegó en Jesús.",body:`La palabra griega euangelion era usada en Roma para anunciar victorias militares o el nacimiento de un emperador.\n\nCuando Marcos dice 'principio del evangelio', usa ese lenguaje político: hay un nuevo rey, y no es el César.`,verses:["Marcos 1:1","Romanos 1:16","1 Corintios 15:1-4"],video:null},
"justificacion":{term:"Justificación",type:"Concepto teológico",short:"Declaración judicial por la cual Dios considera justo al creyente.",body:`No es un proceso gradual — es un veredicto que ocurre en el momento de la fe.\n\nLa base no es el mérito humano sino la fidelidad de Cristo. 'Por fe, no por obras' — no porque las obras no importen, sino porque la relación con Dios no se gana.`,verses:["Génesis 15:6","Romanos 3:21-26","Gálatas 2:16"],video:null},
"verbo":{term:"El Verbo (Logos)",type:"Concepto teológico",short:"La Palabra de Dios que se hizo carne — identificado con Jesús en Juan 1.",body:`Logos significa palabra pero también razón, orden, principio organizador.\n\nJuan dice: ese Logos no es una fuerza impersonal — es una persona, y se hizo carne. El agente de la creación entró en su propia creación.`,verses:["Juan 1:1-14","Colosenses 1:15-17"],video:null},
"gracia":{term:"Gracia",type:"Concepto teológico",short:"Favor inmerecido — Dios actuando a favor de quien no lo merece.",body:`La palabra griega es charis — favor de un superior hacia un inferior sin mérito previo.\n\nEn el NT la gracia es el carácter fundamental de la acción de Dios. No ignora el problema — actúa para resolverlo a un costo que paga él mismo.`,verses:["Juan 1:14","Efesios 2:8-9","Romanos 5:8"],video:null},
"pastor":{term:"Pastor (metáfora)",type:"Imagen bíblica",short:"Imagen de Dios como quien guía, protege y busca a los que se pierden.",body:`David era pastor antes de ser rey. En el mundo antiguo 'pastor' era también título para los reyes. Los buenos reyes cuidaban a su pueblo como el pastor a sus ovejas.\n\nJesús dice en Juan 10: 'Yo soy el buen pastor.'`,verses:["Salmos 23:1","Ezequiel 34:11-16","Juan 10:11-14"],video:null},
"abraham":{term:"Abraham",type:"Patriarca",short:"El padre de la fe. El primero al que Dios llamó para comenzar un pueblo.",body:`Nacido en Ur de los Caldeos — una de las ciudades más avanzadas del mundo antiguo. Dejó civilización, no barbarie.\n\nDios le prometió tierra, descendencia y que en él serían benditas todas las familias de la tierra. Todo el NT es el relato de cómo esa promesa se cumple en Jesús.`,verses:["Génesis 12:1-3","Génesis 15:6","Romanos 4:3"],video:null},
};

const BOOKS = [
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
  {id:"job",api:"JOB",name:"Job",testament:"AT",chapters:42,section:"Poesía"},
  {id:"salmos",api:"PSA",name:"Salmos",testament:"AT",chapters:150,section:"Poesía"},
  {id:"proverbios",api:"PRO",name:"Proverbios",testament:"AT",chapters:31,section:"Poesía"},
  {id:"eclesiastes",api:"ECC",name:"Eclesiastés",testament:"AT",chapters:12,section:"Poesía"},
  {id:"isaias",api:"ISA",name:"Isaías",testament:"AT",chapters:66,section:"Profetas mayores"},
  {id:"jeremias",api:"JER",name:"Jeremías",testament:"AT",chapters:52,section:"Profetas mayores"},
  {id:"ezequiel",api:"EZK",name:"Ezequiel",testament:"AT",chapters:48,section:"Profetas mayores"},
  {id:"daniel",api:"DAN",name:"Daniel",testament:"AT",chapters:12,section:"Profetas mayores"},
  {id:"oseas",api:"HOS",name:"Oseas",testament:"AT",chapters:14,section:"Profetas menores"},
  {id:"joel",api:"JOL",name:"Joel",testament:"AT",chapters:3,section:"Profetas menores"},
  {id:"amos",api:"AMO",name:"Amós",testament:"AT",chapters:9,section:"Profetas menores"},
  {id:"jonas",api:"JON",name:"Jonás",testament:"AT",chapters:4,section:"Profetas menores"},
  {id:"miqueas",api:"MIC",name:"Miqueas",testament:"AT",chapters:7,section:"Profetas menores"},
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
  {id:"hebreos",api:"HEB",name:"Hebreos",testament:"NT",chapters:13,section:"Cartas generales"},
  {id:"santiago",api:"JAS",name:"Santiago",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"1pedro",api:"1PE",name:"1 Pedro",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"1juan",api:"1JN",name:"1 Juan",testament:"NT",chapters:5,section:"Cartas generales"},
  {id:"apocalipsis",api:"REV",name:"Apocalipsis",testament:"NT",chapters:22,section:"Profecía"},
];

const GUIDED = [
  {day:1,book:"marcos",ch:1},{day:2,book:"marcos",ch:2},{day:3,book:"marcos",ch:3},
  {day:4,book:"juan",ch:1},{day:5,book:"genesis",ch:1},{day:6,book:"genesis",ch:2},
  {day:7,book:"genesis",ch:3},{day:8,book:"genesis",ch:5},{day:9,book:"genesis",ch:12},
  {day:10,book:"salmos",ch:23},{day:11,book:"romanos",ch:1},{day:12,book:"mateo",ch:1},
];

const DAILY_V = [
  {ref:"Génesis 1:27",text:"Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",note:"En Egipto solo el faraón era imagen del dios. Aquí toda la humanidad lo es. La dignidad humana es una condición de origen."},
  {ref:"Marcos 1:15",text:"El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.",note:"Jesús no dice 'el reino vendrá algún día'. Dice que llegó. La historia esperaba este momento."},
  {ref:"Génesis 3:15",text:"Ésta te herirá en la cabeza, y tú le herirás en el calcañar.",note:"El primer evangelio de la Biblia. En medio del primer juicio, la primera promesa de redención."},
  {ref:"Marcos 2:17",text:"No he venido a llamar a justos, sino a pecadores.",note:"La gracia no busca a los que ya lo tienen resuelto — busca a los que saben que no."},
  {ref:"Juan 1:14",text:"Y aquel Verbo fue hecho carne, y habitó entre nosotros, lleno de gracia y de verdad.",note:"El mismo agente de la creación entró en su propia creación."},
  {ref:"Salmos 23:4",text:"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.",note:"El pastor no elimina el valle de sombra — acompaña en él."},
  {ref:"Génesis 2:18",text:"No es bueno que el hombre esté solo.",note:"La primera cosa que Dios declara 'no buena' no es el pecado. Es la soledad."},
];

const gb = (id: string) => BOOKS.find(b=>b.id===id);
const gc = (bid: string, ch: number) => CTX[`${bid}-${ch}`]||null;

function useLS<T>(key: string, def: T): [T, (v:T)=>void] {
  const [v,sv] = useState<T>(()=>{try{const s=localStorage.getItem(key);return s?JSON.parse(s):def;}catch{return def;}});
  const set = (val:T)=>{sv(val);try{localStorage.setItem(key,JSON.stringify(val));}catch{}};
  return [v,set];
}

function tok(text: string, hl: string[]) {
  if(!hl?.length) return [{text,h:false,w:""}];
  const lo=text.toLowerCase(), hits:any[]=[];
  hl.forEach(w=>{let i=0;while((i=lo.indexOf(w.toLowerCase(),i))!==-1){hits.push({s:i,e:i+w.length,w});i+=w.length;}});
  if(!hits.length) return [{text,h:false,w:""}];
  hits.sort((a,b)=>a.s-b.s);
  const pts:any[]=[];let c=0;
  hits.forEach(h=>{if(h.s>c)pts.push({text:text.slice(c,h.s),h:false,w:""});pts.push({text:text.slice(h.s,h.e),h:true,w:h.w});c=h.e;});
  if(c<text.length) pts.push({text:text.slice(c),h:false,w:""});
  return pts;
}

const Chip = ({children,color=C.amber}:{children:any,color?:string}) => (
  <span style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase" as any,color,background:color+"18",padding:"3px 9px",borderRadius:4}}>{children}</span>
);

function VideoCard({v}:{v:any}) {
  if(!v) return null;
  return (
    <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
      style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",textDecoration:"none"}}>
      <div style={{position:"relative",width:90,flexShrink:0}}>
        <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} style={{width:"100%",height:"100%",objectFit:"cover" as any,display:"block"}}/>
        <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.25)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:26,height:26,borderRadius:"50%",background:"rgba(255,255,255,.95)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9}}>▶</div>
        </div>
      </div>
      <div style={{padding:"10px 14px",flex:1}}>
        <p style={{fontSize:10,color:"#C05621",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase" as any,marginBottom:4}}>Proyecto Biblia · YouTube</p>
        <p style={{fontSize:13,color:C.text,fontWeight:600,lineHeight:1.4}}>{v.title}</p>
        <p style={{fontSize:11,color:C.dim,marginTop:4}}>Gratis · En español</p>
      </div>
    </a>
  );
}

function DictModal({entry,onClose}:{entry:any,onClose:()=>void}) {
  if(!entry) return null;
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:300,display:"flex",alignItems:"flex-end"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:430,margin:"0 auto",maxHeight:"85vh",overflowY:"auto" as any,boxShadow:"0 -8px 32px rgba(0,0,0,.12)"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}><div style={{width:32,height:3,borderRadius:2,background:C.border}}/></div>
        <div style={{padding:"14px 20px 44px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
            <div style={{flex:1,paddingRight:12}}><Chip>{entry.type}</Chip><h3 style={{fontSize:24,fontWeight:900,color:C.text,marginTop:8}}>{entry.term}</h3><p style={{fontSize:14,color:C.dim,marginTop:4,lineHeight:1.5}}>{entry.short}</p></div>
            <button onClick={onClose} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"50%",width:32,height:32,cursor:"pointer",color:C.dim,fontSize:16}}>&times;</button>
          </div>
          <div style={{height:1,background:C.border,margin:"0 0 16px"}}/>
          <p style={{fontSize:14,color:C.dim,lineHeight:1.85,whiteSpace:"pre-line" as any,marginBottom:20}}>{entry.body}</p>
          {entry.verses?.length>0&&<div style={{marginBottom:20}}><p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".1em",marginBottom:8}}>Versículos</p><div style={{display:"flex",flexWrap:"wrap" as any,gap:6}}>{entry.verses.map((vv:string)=><span key={vv} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:6,padding:"4px 10px",fontSize:12,color:C.dim}}>{vv}</span>)}</div></div>}
          {entry.video&&<VideoCard v={entry.video}/>}
        </div>
      </div>
    </div>
  );
}

function GenealogyBlock({id}:{id:string}) {
  const g=GENEALOGIES[id]; if(!g) return null;
  return (
    <div style={{background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:12,padding:16}}>
      <p style={{fontSize:10,color:C.amber,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".1em",marginBottom:10}}>Árbol narrativo · {g.ref}</p>
      <p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.85,whiteSpace:"pre-line" as any,marginBottom:16}}>{g.narrative}</p>
      {g.nodes.map((node:any,i:number)=>{
        const isLast=i===g.nodes.length-1; const isDots=node.m==="dots";
        const col=node.m==="special"?"#C05621":node.m==="end"?C.amber:C.faint;
        return (<div key={i} style={{display:"flex",gap:12}}>
          <div style={{display:"flex",flexDirection:"column" as any,alignItems:"center",flexShrink:0}}>
            {isDots?<div style={{width:8,height:8,borderRadius:"50%",background:C.faint,margin:"11px 11px"}}/>:<div style={{width:28,height:28,borderRadius:4,border:`2px solid ${col}`,background:node.m?col+"18":C.surface,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:col}}>{i+1}</div>}
            {!isLast&&<div style={{width:2,flex:1,minHeight:8,background:C.border,marginTop:2,marginBottom:2}}/>}
          </div>
          <div style={{flex:1,paddingBottom:10}}>
            {isDots?<p style={{fontSize:12,color:C.faint,fontStyle:"italic" as any,paddingTop:8}}>{node.n}</p>:<div style={{background:C.surface,border:`1px solid ${node.m?col+"30":C.border}`,borderRadius:8,padding:"9px 12px"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:node.note?3:0}}><span style={{fontSize:13,fontWeight:800,color:node.m?col:C.text}}>{node.n}</span>{node.y&&<span style={{fontSize:11,color:C.dim}}>{node.y} años</span>}</div>{node.note&&<p style={{fontSize:12,color:node.m?col:C.dim,lineHeight:1.6}}>{node.note}</p>}</div>}
          </div>
        </div>);
      })}
    </div>
  );
}

function CoverPicker({current,onSelect,onClose}:{current:any,onSelect:(c:any)=>void,onClose:()=>void}) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:400,display:"flex",alignItems:"flex-end"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:C.surface,borderRadius:"20px 20px 0 0",width:"100%",maxWidth:430,margin:"0 auto",maxHeight:"80vh",overflowY:"auto" as any,boxShadow:"0 -8px 32px rgba(0,0,0,.15)"}}>
        <div style={{display:"flex",justifyContent:"center",padding:"12px 0 0"}}><div style={{width:32,height:3,borderRadius:2,background:C.border}}/></div>
        <div style={{padding:"14px 20px 40px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <h3 style={{fontSize:18,fontWeight:900,color:C.text}}>Elige tu portada</h3>
            <button onClick={onClose} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:"50%",width:32,height:32,cursor:"pointer",color:C.dim,fontSize:16}}>&times;</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            {COVERS.map(cover=>(
              <button key={cover.id} onClick={()=>{onSelect(cover);onClose();}}
                style={{position:"relative",aspectRatio:"3/2",borderRadius:10,overflow:"hidden",border:`3px solid ${current?.id===cover.id?C.amber:C.border}`,cursor:"pointer",padding:0}}>
                <img src={cover.url} alt={cover.label} style={{width:"100%",height:"100%",objectFit:"cover" as any,display:"block"}}/>
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

function Reader({bookId,chapter,onWord,onBack}:{bookId:string,chapter:number,onWord:(e:any)=>void,onBack:(a:string)=>void}) {
  const book=gb(bookId); const ctx=gc(bookId,chapter);
  const [verses,setVerses]=useState<any[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState<string|null>(null);
  const [ctxOpen,setCtxOpen]=useState(false);

  useEffect(()=>{
    setLoading(true);setError(null);setVerses([]);
    const apiCode=book?.api||bookId.toUpperCase();
    fetch(`https://bible.helloao.org/api/RVR09/${apiCode}/${chapter}.json`)
      .then(r=>{if(!r.ok)throw new Error("Sin conexión");return r.json();})
      .then(d=>{
        const raw=d?.chapter?.verses||d?.verses||[];
        setVerses(raw.map((v:any)=>({
          v:v.number??v.verse??v.verseNumber,
          t:(v.content??v.text??"").replace(/<[^>]+>/g,"").trim()
        })).filter((v:any)=>v.t));
        setLoading(false);
      })
      .catch((e:any)=>{setError(e.message);setLoading(false);});
  },[bookId,chapter]);

  const hl=ctx?.highlights||[];
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18,flexWrap:"wrap" as any}}>
        <button onClick={()=>onBack("back")} style={{background:"none",border:"none",color:C.amber,fontSize:15,fontWeight:700,cursor:"pointer",padding:0}}>←</button>
        <Chip color={C.amber}>{book?.name} {chapter}</Chip>
        <span style={{fontSize:11,color:C.faint,background:C.card,border:`1px solid ${C.border}`,borderRadius:20,padding:"3px 9px",fontWeight:600}}>RVR1909</span>
      </div>
      {ctx&&<button onClick={()=>setCtxOpen(o=>!o)} style={{background:ctxOpen?C.amberBg:C.card,border:`1px solid ${ctxOpen?C.amber+"60":C.border}`,borderRadius:10,padding:"10px 14px",color:ctxOpen?C.amber:C.dim,fontSize:12,fontWeight:700,cursor:"pointer",width:"100%",textAlign:"left" as any,marginBottom:14,display:"flex",justifyContent:"space-between"}}><span>{ctxOpen?"Ocultar contexto histórico":"Ver contexto histórico"}</span><span>{ctxOpen?"▲":"▼"}</span></button>}
      {ctxOpen&&ctx&&<div style={{background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:12,padding:16,marginBottom:16}}><p style={{fontSize:14,color:"#7B4A1A",lineHeight:1.9,whiteSpace:"pre-line" as any}}>{ctx.context}</p></div>}
      {ctx?.genealogy&&<div style={{marginBottom:16}}><GenealogyBlock id={ctx.genealogy}/></div>}
      {hl.length>0&&<div style={{background:C.blueBg,border:`1px solid ${C.blue}20`,borderRadius:8,padding:"8px 12px",marginBottom:16,display:"flex",gap:8,alignItems:"center"}}><span style={{color:C.blue}}>◈</span><p style={{fontSize:12,color:C.blue}}>Las <span style={{color:C.amber,textDecoration:"underline dotted",textUnderlineOffset:3,fontWeight:600}}>palabras subrayadas</span> tienen explicación</p></div>}
      {loading&&<div style={{padding:"40px 0",textAlign:"center" as any}}><div style={{width:28,height:28,border:`3px solid ${C.border}`,borderTopColor:C.amber,borderRadius:"50%",animation:"spin .8s linear infinite",margin:"0 auto 12px"}}/><p style={{fontSize:13,color:C.dim}}>Cargando {book?.name} {chapter}…</p></div>}
      {!loading&&error&&<div style={{background:"#FEF2F2",border:`1px solid ${C.red}20`,borderRadius:12,padding:16,marginBottom:16}}><p style={{fontSize:13,color:C.red,marginBottom:4,fontWeight:600}}>No se pudo cargar el texto</p><p style={{fontSize:12,color:"#991B1B"}}>Verifica tu conexión a internet. El texto viene de bible.helloao.org — Reina-Valera 1909, dominio público.</p></div>}
      {verses.length>0&&<div style={{marginBottom:24}}>{verses.map((v:any)=>{const pts=tok(v.t,hl);return(<div key={v.v} style={{display:"flex",gap:12,marginBottom:18}}><span style={{fontSize:10,fontWeight:800,color:C.amberL,minWidth:18,marginTop:5,flexShrink:0,opacity:.7}}>{v.v}</span><p style={{fontSize:17,lineHeight:1.85,color:C.text,flex:1}}>{pts.map((p:any,i:number)=>p.h?<span key={i} onClick={()=>{const e=DICT[p.w];if(e)onWord(e);}} style={{color:C.amber,textDecoration:"underline",textDecorationStyle:"dotted" as any,textUnderlineOffset:4,cursor:"pointer",fontWeight:600}}>{p.text}</span>:<span key={i}>{p.text}</span>)}</p></div>);})}</div>}
      {ctx&&<>
        <div style={{borderLeft:`3px solid ${C.amber}`,paddingLeft:16,marginBottom:18}}>
          <p style={{fontSize:10,color:C.amber,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".1em",marginBottom:8}}>Versículo central</p>
          <p style={{fontSize:17,fontStyle:"italic" as any,color:C.text,lineHeight:1.65,marginBottom:6}}>"{ctx.keyText}"</p>
          <p style={{fontSize:11,color:C.amber,fontWeight:700}}>{ctx.keyVerse}</p>
        </div>
        <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 16px",marginBottom:18}}>
          <p style={{fontSize:10,color:C.dim,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".1em",marginBottom:6}}>Lo que está en juego</p>
          <p style={{fontSize:14,color:C.dim,lineHeight:1.8,whiteSpace:"pre-line" as any}}>{ctx.stake}</p>
        </div>
        {ctx.video&&<VideoCard v={ctx.video}/>}
      </>}
      <div style={{display:"flex",gap:10,marginTop:20}}>
        {chapter>1&&<button onClick={()=>onBack("prev")} style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:12,color:C.dim,fontSize:13,fontWeight:700,cursor:"pointer"}}>← Cap. {chapter-1}</button>}
        {chapter<(book?.chapters||50)&&<button onClick={()=>onBack("next")} style={{flex:1,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:12,color:C.dim,fontSize:13,fontWeight:700,cursor:"pointer"}}>Cap. {chapter+1} →</button>}
      </div>
    </div>
  );
}

function BookPicker({onSelect}:{onSelect:(b:string,c:number)=>void}) {
  const [testament,setTestament]=useState("NT");
  const [sel,setSel]=useState<any>(null);
  const books=BOOKS.filter(b=>b.testament===testament);
  const sections=[...new Set(books.map(b=>b.section))];
  if(sel){const nums=Array.from({length:sel.chapters},(_,i)=>i+1);return(<div><button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:C.amber,fontSize:14,fontWeight:700,cursor:"pointer",padding:"0 0 14px",display:"block"}}>← Libros</button><h3 style={{fontSize:20,fontWeight:900,color:C.text,marginBottom:4}}>{sel.name}</h3><p style={{fontSize:12,color:C.dim,marginBottom:18}}>{sel.chapters} capítulos · {sel.section}</p><div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8}}>{nums.map(n=><button key={n} onClick={()=>onSelect(sel.id,n)} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:8,padding:"13px 4px",fontSize:15,fontWeight:700,color:C.text,cursor:"pointer"}}>{n}</button>)}</div></div>);}
  return(<div><div style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",marginBottom:20}}>{[["NT","Nuevo Testamento"],["AT","Antiguo Testamento"]].map(([id,label])=><button key={id} onClick={()=>setTestament(id)} style={{flex:1,background:testament===id?C.amber:"none",color:testament===id?"#fff":C.dim,border:"none",padding:"12px 8px",fontSize:13,fontWeight:800,cursor:"pointer"}}>{label}</button>)}</div>{sections.map(sec=><div key={sec} style={{marginBottom:22}}><p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".12em",marginBottom:10}}>{sec}</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>{books.filter(b=>b.section===sec).map(book=><button key={book.id} onClick={()=>setSel(book)} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:10,padding:"12px 14px",cursor:"pointer",textAlign:"left" as any,display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><p style={{fontSize:14,fontWeight:700,color:C.text}}>{book.name}</p><p style={{fontSize:11,color:C.dim}}>{book.chapters} cap.</p></div><span style={{color:C.faint,fontSize:16}}>›</span></button>)}</div></div>)}</div>);
}

function TodayTab({progress,onMark,onRead,cover,onChangeCover}:{progress:any,onMark:()=>void,onRead:(b:string,c:number)=>void,cover:any,onChangeCover:()=>void}) {
  const step=GUIDED[Math.min(progress.day,GUIDED.length-1)];
  const pct=Math.round((progress.day/GUIDED.length)*100);
  const dv=DAILY_V[Math.floor(Date.now()/86400000)%DAILY_V.length];
  const ctx=step?gc(step.book,step.ch):null;
  return(<div>
    <div style={{position:"relative",height:220,borderRadius:16,overflow:"hidden",marginBottom:16,background:`url(${cover?.url||COVERS[0].url}) center/cover`}}>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6))"}}/>
      <div style={{position:"absolute",bottom:16,left:16,right:16}}>
        <p style={{fontSize:11,color:"rgba(255,255,255,.8)",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase" as any,marginBottom:4}}>Versículo del día</p>
        <p style={{fontSize:16,color:"#fff",fontStyle:"italic" as any,lineHeight:1.5,marginBottom:6}}>"{dv.text}"</p>
        <p style={{fontSize:11,color:"rgba(255,255,255,.75)",fontWeight:600}}>{dv.ref}</p>
      </div>
      <button onClick={onChangeCover} style={{position:"absolute",top:12,right:12,background:"rgba(255,255,255,.2)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,.3)",borderRadius:20,padding:"5px 12px",fontSize:11,color:"#fff",fontWeight:700,cursor:"pointer"}}>🖼 Portada</button>
    </div>
    <p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.7,marginBottom:16,background:C.amberBg,border:`1px solid ${C.amber}20`,borderRadius:10,padding:"10px 14px"}}>{dv.note}</p>
    {step&&<div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,.06)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <p style={{fontSize:11,color:C.dim,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".08em"}}>Ruta guiada · Día {progress.day+1}/{GUIDED.length}</p>
        <p style={{fontSize:11,color:C.amber,fontWeight:700}}>{pct}%</p>
      </div>
      <div style={{background:C.card,borderRadius:99,height:4,marginBottom:14}}><div style={{background:C.amber,borderRadius:99,height:4,width:`${Math.max(pct,2)}%`,transition:"width .4s"}}/></div>
      <p style={{fontSize:20,fontWeight:900,color:C.text,marginBottom:4}}>{gb(step.book)?.name} {step.ch}</p>
      {ctx&&<p style={{fontSize:13,color:C.dim,lineHeight:1.6,marginBottom:14}}>{ctx.stake?.slice(0,110)}…</p>}
      <div style={{display:"flex",gap:10}}>
        <button onClick={()=>onRead(step.book,step.ch)} style={{flex:2,background:C.amber,color:"#fff",border:"none",borderRadius:10,padding:13,fontSize:14,fontWeight:900,cursor:"pointer"}}>Leer ahora →</button>
        <button onClick={onMark} style={{flex:1,background:C.card,color:C.dim,border:`1px solid ${C.border}`,borderRadius:10,padding:13,fontSize:13,fontWeight:700,cursor:"pointer"}}>Ya leí ✓</button>
      </div>
    </div>}
    <p style={{fontSize:10,color:C.faint,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".1em",marginBottom:10}}>Próximos días</p>
    {GUIDED.slice(progress.day,progress.day+4).map((s,i)=><div key={s.day} style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}><div style={{width:28,height:28,borderRadius:"50%",background:i===0?C.amber:C.card,border:`2px solid ${i===0?C.amber:C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:i===0?"#fff":C.faint,flexShrink:0}}>{s.day}</div><p style={{fontSize:13,color:i===0?C.text:C.dim,fontWeight:i===0?700:400}}>{gb(s.book)?.name} {s.ch}</p></div>)}
  </div>);
}

function ExploreTab({onWord}:{onWord:(e:any)=>void}) {
  const [view,setView]=useState("dict");const [q,setQ]=useState("");const [gId,setGId]=useState<string|null>(null);
  const entries=Object.values(DICT).filter((e:any)=>!q||e.term.toLowerCase().includes(q.toLowerCase())||e.short.toLowerCase().includes(q.toLowerCase()));
  const GLIST=[{id:"adan-noe",ref:"Génesis 5",title:"De Adán a Noé",sub:"10 generaciones. El redoble de la muerte y dos excepciones."},{id:"abraham-jesus",ref:"Mateo 1:1-17",title:"De Abraham a Jesús",sub:"42 generaciones. La historia de Israel en una lista."}];
  if(gId){const g=GLIST.find(g=>g.id===gId);return(<div><button onClick={()=>setGId(null)} style={{background:"none",border:"none",color:C.amber,fontSize:14,fontWeight:700,cursor:"pointer",padding:"0 0 16px",display:"block"}}>← Genealogías</button><Chip>{g?.ref}</Chip><h3 style={{fontSize:20,fontWeight:900,color:C.text,marginTop:10,marginBottom:18}}>{g?.title}</h3><GenealogyBlock id={gId}/></div>);}
  return(<div>
    <div style={{display:"flex",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",marginBottom:16}}>{[["dict","Diccionario"],["gen","Genealogías"]].map(([id,label])=><button key={id} onClick={()=>setView(id)} style={{flex:1,background:view===id?C.amber:"none",color:view===id?"#fff":C.dim,border:"none",padding:"11px",fontSize:13,fontWeight:800,cursor:"pointer"}}>{label}</button>)}</div>
    {view==="dict"&&<><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar término..." style={{width:"100%",background:C.surface,border:`1px solid ${C.border}`,borderRadius:10,padding:"10px 14px",fontSize:15,color:C.text,outline:"none",boxSizing:"border-box" as any,marginBottom:12}}/>{entries.map((e:any)=><button key={e.term} onClick={()=>onWord(e)} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:"13px 15px",cursor:"pointer",width:"100%",textAlign:"left" as any,marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div style={{flex:1,paddingRight:10}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontSize:15,fontWeight:800,color:C.text}}>{e.term}</span><Chip>{e.type}</Chip></div><p style={{fontSize:13,color:C.dim,lineHeight:1.5}}>{e.short}</p></div><span style={{color:C.faint,fontSize:18}}>›</span></div></button>)}</>}
    {view==="gen"&&<><div style={{background:C.amberBg,border:`1px solid ${C.amber}20`,borderRadius:12,padding:"12px 14px",marginBottom:14}}><p style={{fontSize:13,color:"#7B4A1A",lineHeight:1.7}}>Las genealogías bíblicas no son listas de nombres. Son argumentos teológicos — cada una dice algo que no podría decirse de otra manera.</p></div>{GLIST.map(g=><button key={g.id} onClick={()=>setGId(g.id)} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:12,padding:15,cursor:"pointer",width:"100%",textAlign:"left" as any,marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><Chip>{g.ref}</Chip><p style={{fontSize:16,fontWeight:800,color:C.text,marginTop:8,marginBottom:4}}>{g.title}</p><p style={{fontSize:13,color:C.dim}}>{g.sub}</p></div><span style={{color:C.faint,fontSize:18,marginTop:4}}>›</span></div></button>)}</>}
  </div>);
}

export default function App() {
  const [tab,setTab]=useState("today");
  const [progress,setProgress]=useLS("bs_progress",{day:0});
  const [cover,setCover]=useLS("bs_cover",COVERS[0]);
  const [dictEntry,setDictEntry]=useState<any>(null);
  const [reading,setReading]=useState<any>(null);
  const [showCoverPicker,setShowCoverPicker]=useState(false);
  const topRef=useRef<HTMLDivElement>(null);

  const openReader=(bookId:string,chapter:number)=>{setReading({bookId,chapter});topRef.current?.scrollTo(0,0);};
  const handleBack=(action:string)=>{
    if(action==="next") setReading((r:any)=>({...r,chapter:r.chapter+1}));
    else if(action==="prev") setReading((r:any)=>({...r,chapter:r.chapter-1}));
    else setReading(null);
    topRef.current?.scrollTo(0,0);
  };

  const headerTitle=reading?`${gb(reading.bookId)?.name} ${reading.chapter}`:tab==="today"?"Hoy":tab==="read"?"Leer":"Explorar";
  const TABS=[{id:"today",icon:"◉",label:"Hoy"},{id:"read",icon:"☰",label:"Leer"},{id:"explore",icon:"◈",label:"Explorar"}];

  return (
    <div style={{background:C.bg,minHeight:"100vh",maxWidth:430,margin:"0 auto",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",display:"flex",flexDirection:"column" as any}}>
      <style>{`*{box-sizing:border-box;}button,a,input{font-family:inherit;}::-webkit-scrollbar{width:0;}input::placeholder{color:#B8B0A4;}@keyframes spin{to{transform:rotate(360deg);}}`}</style>
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"52px 20px 14px",flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,.06)"}}>
        <p style={{fontSize:10,color:C.amber,fontWeight:700,letterSpacing:".16em",textTransform:"uppercase" as any,marginBottom:3}}>Biblia Simple</p>
        <h1 style={{fontSize:20,fontWeight:900,color:C.text}}>{headerTitle}</h1>
      </div>
      <div ref={topRef} style={{flex:1,overflowY:"auto" as any,padding:"18px 18px 100px"}}>
        {reading?<Reader bookId={reading.bookId} chapter={reading.chapter} onWord={setDictEntry} onBack={handleBack}/>:
         tab==="today"?<TodayTab progress={progress} onMark={()=>setProgress({day:Math.min(progress.day+1,GUIDED.length)})} onRead={openReader} cover={cover} onChangeCover={()=>setShowCoverPicker(true)}/>:
         tab==="read"?<BookPicker onSelect={openReader}/>:
         <ExploreTab onWord={setDictEntry}/>}
      </div>
      {dictEntry&&<DictModal entry={dictEntry} onClose={()=>setDictEntry(null)}/>}
      {showCoverPicker&&<CoverPicker current={cover} onSelect={setCover} onClose={()=>setShowCoverPicker(false)}/>}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"rgba(250,250,248,.97)",borderTop:`1px solid ${C.border}`,display:"flex",zIndex:100,backdropFilter:"blur(20px)"}}>
        {TABS.map(t=>{const active=!reading&&tab===t.id;return(
          <button key={t.id} onClick={()=>{setReading(null);setTab(t.id);}} style={{flex:1,background:"none",border:"none",padding:"12px 4px 18px",cursor:"pointer",display:"flex",flexDirection:"column" as any,alignItems:"center",gap:4}}>
            <span style={{fontSize:19,color:active?C.amber:C.faint}}>{t.icon}</span>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase" as any,letterSpacing:".08em",color:active?C.amber:C.faint}}>{t.label}</span>
            {active&&<div style={{width:16,height:2,background:C.amber,borderRadius:1}}/>}
          </button>
        );})}
      </div>
    </div>
  );
}
