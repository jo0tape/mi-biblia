import type { DictEntry } from "../lib/types";
import { PB_VIDEOS } from "./videos";

export const DICT: Record<string, DictEntry> = {

// ─── VIDA COTIDIANA DEL SIGLO I ──────────────────────────────────────────────

"sinagoga": {
  term: "Sinagoga",
  type: "Lugar del siglo I",
  short: "El corazón de la comunidad judía: escuela, tribunal, templo local y plaza pública, todo en uno.",
  body: `Imagina que en tu pueblo existiera un solo edificio donde los niños van a aprender a leer, los adultos resuelven disputas legales, la comunidad celebra sus fiestas y todos se reúnen cada semana para escuchar y debatir los textos sagrados. Eso era la sinagoga.

No confundas la sinagoga con el Templo de Jerusalén. El Templo era único, en la capital, y ahí se hacían los sacrificios. La sinagoga podía existir en cualquier pueblo donde hubiera al menos diez familias judías. Era la institución local, la que mantenía viva la identidad del pueblo.

Cuando los evangelios dicen que Jesús "enseñaba en las sinagogas", están diciendo que Él entraba al corazón de la vida comunitaria y enseñaba desde adentro, no desde afuera. Que cualquier visitante pudiera pedir la palabra para enseñar era parte de la costumbre — de ahí que Jesús y Pablo lo hicieran con tanta frecuencia.`,
  verses: ["Marcos 1:21", "Lucas 4:16-17", "Hechos 17:1-2"],
},

"sábado": {
  term: "Sábado",
  type: "Práctica bíblica",
  short: "El día de descanso semanal: no solo un día libre, sino una declaración de que Dios es quien sostiene el mundo, no el trabajo humano.",
  body: `En Génesis 2, Dios descansa el séptimo día. No porque estuviera cansado — sino como declaración de que la creación estaba completa. El Sábado es una recreación semanal de ese momento: una vez por semana, el pueblo de Dios para y dice "no somos nosotros los que sostenemos este mundo."

Para Israel era una de las señales más visibles de su identidad. En una cultura donde todos trabajaban siete días (especialmente los esclavos), no trabajar un día era un acto radical. La Torah rodeó este día de protecciones: no encender fuego, no recorrer largas distancias, no comerciar.

Aquí es donde entran los conflictos con Jesús. Él sana en sábado repetidamente, lo que los líderes religiosos interpretan como una violación. La respuesta de Jesús es consistente: "El sábado fue hecho para el hombre, no el hombre para el sábado." El descanso es para servir a la vida, no para convertirse en una carga más.`,
  verses: ["Génesis 2:2-3", "Éxodo 20:8-11", "Marcos 2:27-28", "Lucas 13:10-17"],
},

"templo": {
  term: "Templo de Jerusalén",
  type: "Lugar del siglo I",
  short: "No solo un edificio religioso: era el centro político, económico y espiritual de Israel, y el punto donde se creía que el cielo y la tierra se tocaban.",
  body: `El Templo que existía en tiempos de Jesús era el de Herodes el Grande, comenzado en el año 20 a.C. y todavía en construcción durante el ministerio de Jesús. Era una de las maravillas arquitectónicas del mundo antiguo — mayor que el Acrópolis de Atenas. Sus piedras llegaban a pesar 400 toneladas.

Pero su importancia era mucho más que arquitectónica. El Templo era el único lugar donde se podían hacer los sacrificios prescritos. Era donde se pagaban los impuestos religiosos, donde se cambiaba moneda extranjera, donde se vendían los animales para las ofrendas. Era también el tesoro nacional. Control del Templo significaba control de Israel.

Cuando Jesús lo llama "cueva de ladrones" y voltea las mesas de los cambistas, no está protestando contra la venta en general — está cuestionando quién tiene autoridad sobre el lugar que se suponía era la casa de Dios. En el año 70 d.C., Roma destruyó el Templo hasta los cimientos. Nunca se reconstruyó.`,
  verses: ["Marcos 11:15-17", "Juan 2:13-22", "Mateo 24:2"],
},

"sumo sacerdote": {
  term: "Sumo Sacerdote",
  type: "Rol del siglo I",
  short: "El único ser humano que podía entrar al lugar más sagrado del Templo — y el jefe político-religioso más poderoso de Israel.",
  body: `Una vez al año, el Día de la Expiación (Yom Kipur), el Sumo Sacerdote entraba solo al lugar más sagrado del Templo — el Lugar Santísimo. Nadie más podía entrar. Se creía que la presencia de Dios habitaba allí de una manera especial. Antes de entrar, el Sumo Sacerdote pasaba semanas en preparación ritual, porque entrar sin estar preparado podía significar la muerte.

En tiempos de Jesús, el Sumo Sacerdote era también una figura política enorme. Los romanos lo nombraban y lo destituían según les convenía. Caifás, quien presidió el juicio de Jesús, ocupó el cargo por 18 años — un récord que muestra cuánto supo navegar la política con Roma.

Cuando Jesús es llevado ante Caifás, no es solo un juicio religioso. Es la máxima autoridad religiosa y política de Israel decidiendo el destino de alguien que amenazaba el statu quo. La carta a los Hebreos luego argumenta que Jesús es el Sumo Sacerdote definitivo — el que no necesita prepararse para entrar, porque él mismo es la preparación.`,
  verses: ["Mateo 26:57-68", "Juan 11:49-52", "Hebreos 4:14-16"],
},

"centurión": {
  term: "Centurión",
  type: "Rol del siglo I",
  short: "Un oficial romano que comandaba unos 80 soldados — el rostro humano del Imperio que ocupaba Israel.",
  body: `Roma mantenía su control sobre Israel a través de una presencia militar permanente. El centurión era el oficial de campo, el que interactuaba directamente con la población local, el que ejecutaba las órdenes del gobierno en las calles.

Para un judío del siglo I, un centurión representaba todo lo que oprimía a su pueblo: el ejército extranjero, los impuestos forzados, la violencia institucional. No era un funcionario abstracto — era el soldado que podías ver en el mercado.

Por eso resultan tan llamativos los centuriones en los evangelios. El que se acerca a Jesús pidiendo que sane a su sirviente sorprende a todos con una humildad inesperada: "No soy digno de que entres bajo mi techo." Jesús declara que no ha encontrado tanta fe en todo Israel. Y en la crucifixión, es otro centurión — el que ejecuta la orden — quien primero exclama: "Verdaderamente este hombre era el Hijo de Dios." Los representantes del Imperio reconocen a Jesús cuando sus propios líderes lo rechazan.`,
  verses: ["Mateo 8:5-13", "Marcos 15:39", "Hechos 10:1-2"],
},

"samaritano": {
  term: "Samaritano",
  type: "Grupo del siglo I",
  short: "El vecino que un judío del siglo I consideraba herético, traidor y étnicamente impuro — lo que hace la parábola del 'Buen Samaritano' completamente inesperada.",
  body: `En el siglo VIII a.C., el Imperio Asirio conquistó el reino del norte (Israel) y reemplazó parte de la población con colonos de otras regiones. La mezcla cultural y religiosa que resultó fue lo que llegó a llamarse los samaritanos. Para los judíos del sur, eran una mezcla impura — ni judíos de verdad ni paganos completos.

La tensión duró siglos. Los samaritanos habían construido su propio templo en el Monte Gerizim, que los judíos consideraban ilegítimo. Evitaban pasar por Samaria en sus viajes. El insulto "tú eres un samaritano y tienes un demonio" aparece en Juan 8 como el peor doble golpe posible.

Cuando Jesús cuenta la historia del hombre que cae en manos de ladrones, pasa primero un sacerdote sin ayudar, luego un levita sin ayudar, y finalmente un samaritano que detiene su viaje y paga todo. La audiencia judía de Jesús habría esperado que el samaritano fuera el villano. El que el samaritano sea el héroe de la historia era el punto exactamente escandaloso que Jesús buscaba.`,
  verses: ["Lucas 10:30-37", "Juan 4:9", "Juan 8:48"],
},

"denario": {
  term: "Denario",
  type: "Vida cotidiana",
  short: "La moneda básica del Imperio Romano — el salario de un día de trabajo para un obrero común.",
  body: `Un denario era lo que un jornalero ganaba por un día completo de trabajo. Jesús lo usa como medida en varias parábolas: los obreros de la viña todos reciben un denario sin importar cuántas horas trabajaron (Mateo 20), la moneda perdida es un denario (Lucas 15).

En la famosa pregunta sobre los impuestos, le muestran a Jesús un denario. La moneda llevaba el retrato del César y la inscripción "Tiberio César, hijo del divino Augusto". Para un judío, cargar esa moneda era ya un tema delicado — la imagen grabada de un gobernante que se declaraba divino. La respuesta de Jesús ("Dad al César lo que es del César") no es evasión: es una distinción entre lo que pertenece al poder humano y lo que pertenece a Dios.

Esta moneda también aparece en la traición: Judas recibe treinta monedas de plata — no denarios romanos sino monedas del Templo, lo que es relevante para el cumplimiento de Zacarías 11:12.`,
  verses: ["Mateo 20:1-16", "Marcos 12:15-17", "Lucas 15:8"],
},

// ─── PERSONAS Y GRUPOS ───────────────────────────────────────────────────────

"fariseos": {
  term: "Fariseos",
  type: "Grupo del siglo I",
  short: "El grupo religioso más influyente del judaísmo del siglo I — guardianes de la identidad judía que, según Jesús, perdieron de vista el corazón de lo que protegían.",
  body: `Los fariseos no eran hipócritas ordinarios. Surgieron en el siglo II a.C. cuando el gobierno griego intentó eliminar la cultura judía por la fuerza — prohibiendo el Sabbath, la circuncisión, los libros sagrados. Los fariseos se levantaron para preservar la identidad judía con su propia vida. Muchos murieron por ello. Eran los héroes de la resistencia cultural.

En el siglo I eran el grupo más respetado del pueblo. No eran la élite sacerdotal (esos eran los saduceos), sino maestros que venían de familias comunes. Creían en la resurrección, en los ángeles, en la vida después de la muerte, en que cada judío — no solo los sacerdotes — podía vivir una vida santa.

La crítica de Jesús no es que fueran malos, sino que habían construido un sistema tan elaborado de reglas que el corazón original de la Torah quedó enterrado bajo capas de tradición. El término "fariseo" en los evangelios no es sinónimo de malvado — es sinónimo de alguien tan comprometido con los medios que olvidó el fin.`,
  verses: ["Mateo 23:23-28", "Lucas 18:9-14", "Juan 3:1", "Filipenses 3:5"],
},

"saduceos": {
  term: "Saduceos",
  type: "Grupo del siglo I",
  short: "La élite sacerdotal y política de Israel en tiempos de Jesús: ricos, colaboradores con Roma, y escépticos de todo lo sobrenatural.",
  body: `Si los fariseos eran la clase media religiosa con influencia popular, los saduceos eran la aristocracia. Controlaban el Templo, los cargos sacerdotales más importantes y el Sanedrín (el consejo supremo de Israel). Su poder dependía directamente de mantener una relación funcional con Roma.

Teológicamente eran más conservadores que los fariseos en un sentido: solo aceptaban la Torah escrita (los cinco libros de Moisés) y rechazaban las tradiciones orales y las creencias más recientes como la resurrección de los muertos, la existencia de ángeles y el mundo venidero. Cuando los saduceos le preguntan a Jesús sobre la resurrección, lo hacen para burlarse del concepto, no para aprender.

Cuando Roma destruyó el Templo en el año 70 d.C., los saduceos desaparecieron como grupo. Sin el Templo no había razón de ser. El judaísmo sobrevivió gracias a los fariseos y sus métodos de estudio. El Nuevo Testamento sobrevivió gracias al testimonio de quienes habían visto al Resucitado.`,
  verses: ["Marcos 12:18-27", "Hechos 23:6-8", "Mateo 16:1"],
},

"escribas": {
  term: "Escribas",
  type: "Rol del siglo I",
  short: "Los expertos legales del mundo judío: copiaban, interpretaban y aplicaban la Torah a situaciones de la vida cotidiana.",
  body: `En un mundo donde la mayoría de la gente no sabía leer, los escribas eran los guardianes y transmisores del texto sagrado. Su trabajo comenzaba copiando los rollos de la Torah con una precisión milimétrica — existían reglas estrictas sobre cuántas letras podía tener cada columna, qué hacer si cometías un error, cómo pronunciar el nombre de Dios.

Pero los escribas no solo copiaban: interpretaban. La Torah no dice explícitamente cómo aplicar el Sabbath a cada situación de la vida, o qué hacer cuando dos leyes entran en conflicto. Los escribas desarrollaron siglos de interpretación que guiaban la vida práctica de Israel.

Su marca característica era siempre citar autoridades anteriores: "El rabí Fulano dice que..." Jesús hacía exactamente lo contrario: "Oísteis que fue dicho... pero yo os digo." Sin citar a nadie, como si su propia autoridad fuera suficiente. Eso era exactamente lo que asombraba a las multitudes y escandalizaba a los escribas.`,
  verses: ["Marcos 1:22", "Marcos 2:6-7", "Mateo 23:2-3"],
},

"publicanos": {
  term: "Publicanos",
  type: "Categoría social",
  short: "Judíos que cobraban impuestos para Roma — considerados traidores por sus compatriotas y excluidos de la vida religiosa.",
  body: `Imagina que en tu ciudad, bajo una ocupación extranjera, algunos vecinos aceptaran trabajar como recaudadores de impuestos para el gobierno invasor. Ese es el nivel de traición social que un publicano representaba para sus compatriotas judíos.

El sistema romano de cobro de impuestos funcionaba así: Roma vendía el derecho de cobrar impuestos en un territorio a un contratista privado. Este contratista subcontrataba a personas locales — los publicanos — para el trabajo real. El negocio era cobrar más de lo que Roma requería y quedarse con la diferencia. El sistema incentivaba la corrupción y la extorsión.

Para Israel, esto era doble traición: traición nacional (servir al ocupante) y traición religiosa (el dinero con imágenes del César era problemático; el contacto frecuente con gentiles creaba impureza ritual). Los publicanos estaban excluidos de la sinagoga. Que Jesús llamara a Leví (Mateo) a ser su discípulo y luego fuera a comer a su casa con todos sus amigos publicanos fue un escándalo calculado y deliberado.`,
  verses: ["Marcos 2:15-17", "Lucas 19:1-10", "Mateo 9:9-13"],
},

"discípulo": {
  term: "Discípulo",
  type: "Rol del siglo I",
  short: "Mucho más que un alumno: alguien que seguía a un maestro para aprender no solo sus enseñanzas sino su forma de vivir.",
  body: `En el mundo antiguo, seguir a un rabí no era como tomar un curso. El discípulo literalmente vivía con su maestro: caminaba con él, comía con él, observaba cómo se comportaba en situaciones complejas, escuchaba sus conversaciones informales tanto como sus discursos formales. La meta no era memorizar información sino transformarse en alguien que pensara y actuara como el maestro.

Había una frase que resumía la aspiración: el discípulo quería "cubrirse con el polvo de su maestro" — caminar tan cerca de él que el polvo de sus sandalias te cayera encima. Seguir a un rabí era una decisión de vida total, no una opción educativa.

Lo que Jesús hacía era diferente en un punto clave: los discípulos normalmente elegían a su maestro. Con Jesús ocurría al revés — él los elegía a ellos. "Vosotros no me elegisteis a mí, sino que yo os elegí a vosotros." Esta inversión tenía implicaciones enormes sobre el tipo de comunidad que estaba formando.`,
  verses: ["Marcos 1:16-20", "Juan 15:16", "Lucas 14:27"],
},

"apostol": {
  term: "Apóstol",
  type: "Rol del siglo I",
  short: "Un mensajero oficial enviado con plena autoridad del que lo envía — no solo un representante, sino alguien que habla y actúa en nombre de otro.",
  body: `La palabra griega "apostolos" viene del verbo "enviar". En el mundo romano era un término legal y diplomático: el apóstol de un rey tenía la autoridad del rey mientras estaba en misión. No era un mensajero de bajo rango — era el representante con plenos poderes.

Jesús usó esta palabra para sus doce seguidores más cercanos después de un período de entrenamiento. El número doce no era casual: Israel tenía doce tribus. Jesús estaba constituyendo un nuevo Israel.

La distinción entre discípulo y apóstol importa: todos los apóstoles eran discípulos, pero no todos los discípulos eran apóstoles. Los evangelios muestran a Jesús con grupos más amplios de discípulos (en Lucas 10, envía a 70). Pablo más tarde también usará el título de apóstol para sí mismo, aunque no formó parte del grupo original de los doce, argumentando que su nombramiento vino directamente del Resucitado.`,
  verses: ["Marcos 3:14-15", "Lucas 6:13", "Hechos 1:8", "Gálatas 1:1"],
},

"moises": {
  term: "Moisés",
  type: "Personaje clave",
  short: "El libertador de Israel, el receptor de la Torah en el Sinaí, y el profeta con quien el Nuevo Testamento constantemente compara y contrasta a Jesús.",
  body: `Moisés tiene una de las historias más extraordinarias de toda la Biblia. Nació esclavo, fue adoptado como príncipe egipcio, asesinó a un guardia, huyó al desierto y pasó 40 años como pastor. A los 80 años, cuando toda posibilidad de grandeza parecía cerrada, Dios lo llama desde una zarza ardiente y le encomienda liberar a dos millones de personas del Imperio más poderoso del mundo.

Su papel en la historia bíblica es triple: es el libertador (el Éxodo), el legislador (los Diez Mandamientos en el Sinaí) y el intercesor (repetidamente ruega por el pueblo cuando Dios quiere destruirlo). En el monte de la transfiguración, Jesús aparece hablando con Moisés y Elías — los dos pilares de la tradición judía.

El Nuevo Testamento constantemente usa a Moisés como referencia para entender a Jesús. Juan 1 dice que "la ley fue dada por Moisés; la gracia y la verdad vinieron por Jesucristo." Hebreos compara los dos. Mateo estructura su evangelio con cinco bloques de enseñanza (paralelos a los cinco libros de Moisés) y el Sermón del Monte como una nueva entrega de la ley desde un nuevo monte.`,
  verses: ["Éxodo 3:10", "Éxodo 20:1-17", "Juan 1:17", "Hebreos 3:1-6"],
},

// ─── PRÁCTICAS Y RITUALES ────────────────────────────────────────────────────

"bautismo": {
  term: "Bautismo",
  type: "Práctica bíblica",
  short: "Una inmersión en agua que representa un cambio de identidad — morir a lo que eras y emerger como alguien nuevo.",
  body: `Mucho antes de Juan el Bautista, el judaísmo ya usaba el agua con significado ritual. Cuando alguien que no era judío quería convertirse, se sumergía completamente en agua como señal de que estaba cambiando de identidad. Era un nacimiento simbólico — salías del agua como una persona nueva.

Juan tomó esta práctica y la radicalizó: pedía que los propios judíos se bautizaran. Era como decir: "Tu nacimiento en el pueblo elegido no es suficiente. Necesitas una decisión personal, una conversión interior que se exprese en este acto público." Eso era escandaloso y también poderoso.

Cuando Jesús se bautiza con Juan, el texto dice que el Espíritu desciende sobre él como paloma y una voz del cielo dice: "Este es mi Hijo amado, en quien tengo complacencia." En los relatos de Hechos, el bautismo siempre aparece ligado a algo que se escucha y se decide: en Hechos 2, los que "recibieron la palabra fueron bautizados"; en Hechos 8, el etíope pregunta "¿qué impide que yo sea bautizado?" y Felipe lo bautiza. Pablo describe en Romanos 6 el bautismo como una imagen de morir y resucitar junto con Cristo.`,
  verses: ["Marcos 1:4-11", "Mateo 28:19", "Romanos 6:3-4"],
},

"sacrificio": {
  term: "Sacrificio",
  type: "Práctica bíblica",
  short: "Una ofrenda a Dios — animal, vegetal o de otro tipo — que en el mundo antiguo era la forma primaria de restaurar y mantener la relación entre lo humano y lo divino.",
  body: `Para nosotros la palabra 'sacrificio' evoca privación o esfuerzo. En el mundo antiguo evocaba algo completamente diferente: un acto de comunicación entre mundos. Los seres humanos vivían en el mundo visible; los dioses en el invisible. El sacrificio era el puente — algo del mundo visible enviado al mundo divino como mensaje, ofrenda, o pago.

Israel heredó esta práctica del mundo antiguo y la transformó. El sistema de sacrificios que Dios describe en Levítico no es para alimentar a Dios ni para calmarlo con regalos. Es un lenguaje simbólico para expresar realidades espirituales: gratitud, arrepentimiento, consagración, restauración de la relación. El acto físico de poner tu mano sobre el animal decía: "Lo que merece morir por mis errores está muriendo en mi lugar."

El Nuevo Testamento lee la muerte de Jesús a través de este lenguaje. No como magia sino como el sacrificio definitivo que da sentido a todo el sistema anterior. Por eso la carta a los Hebreos dice que el sacerdocio y los sacrificios del AT eran "sombras" que apuntaban a una realidad más grande.`,
  verses: ["Levítico 1:4", "Hebreos 10:1-4", "Juan 1:29", "1 Corintios 5:7"],
},

"tabernáculo": {
  term: "Tabernáculo",
  type: "Práctica bíblica",
  short: "El santuario portátil que Israel cargó por el desierto: una declaración arquitectónica de que Dios habitaba en medio de su pueblo.",
  body: `Después del Éxodo, Israel estaba en el desierto sin tierra fija ni templo permanente. En ese contexto, Dios le da a Moisés instrucciones extraordinariamente detalladas para construir un santuario portátil: el Tabernáculo (en hebreo: Mishkan, "morada"). Cada material, cada medida, cada color tenía significado.

La estructura tenía tres zonas: el patio exterior (donde cualquier israelita podía llegar), el Lugar Santo (solo sacerdotes) y el Lugar Santísimo (solo el Sumo Sacerdote, una vez al año). Esta progresión espacial era teológica: cuanto más te acercas a Dios, más santidad se requiere.

Lo que hace al Tabernáculo teológicamente poderoso es lo que el evangelio de Juan dice en su primer capítulo: "El Verbo se hizo carne y habitó entre nosotros." La palabra griega que usa Juan para "habitó" es la misma raíz que Tabernáculo: Juan está diciendo que Jesús es el nuevo Tabernáculo, el lugar donde Dios habita con la humanidad de la manera más directa posible.`,
  verses: ["Éxodo 25:8-9", "Éxodo 40:34-35", "Juan 1:14", "Hebreos 9:1-12"],
},

"ayuno": {
  term: "Ayuno",
  type: "Práctica bíblica",
  short: "Privarse de comer como expresión de urgencia espiritual — una manera de decir con el cuerpo lo que las palabras no alcanzan a expresar.",
  body: `El ayuno en la Biblia no es una dieta ni una práctica de salud. Es un lenguaje corporal. Cuando algo es tan serio que no puedes pensar en comer, el ayuno traduce esa urgencia en un acto físico deliberado. En el mundo antiguo, el ayuno acompañaba el luto, la oración en tiempos de crisis, la búsqueda de dirección divina.

Moisés ayuna 40 días en el Sinaí. Elías ayuna en su huida. Ester pide un ayuno antes de acercarse al rey. Los ninivitas ayunan cuando Jonás anuncia el juicio. Jesús ayuna 40 días en el desierto antes de comenzar su ministerio público.

En el Sermón del Monte, Jesús no dice "si ayunas" sino "cuando ayunes" — dando por sentado que será parte de la vida de sus seguidores. Pero critica el ayuno ostentoso, hecho para ser visto. El ayuno genuino es entre la persona y Dios, y la comunidad que lo práctica. La iglesia primitiva ayunaba antes de decisiones importantes (Hechos 13:2-3).`,
  verses: ["Mateo 6:16-18", "Marcos 2:18-20", "Hechos 13:2-3", "Isaías 58:6-7"],
},

"circuncisión": {
  term: "Circuncisión",
  type: "Práctica bíblica",
  short: "La marca física del pacto de Abraham — y el debate más acalorado de la iglesia primitiva sobre quién pertenece al pueblo de Dios.",
  body: `Dios le pide a Abraham que se circuncide como señal del pacto (Génesis 17). Durante siglos, esta marca física distinguió a Israel de los pueblos vecinos. No era solo una práctica cultural: era la señal corporal de pertenecer al pueblo elegido. Por eso, en tiempos de persecución, obligar a los judíos a no circuncidar a sus hijos era una forma de borrar su identidad.

El conflicto explota en el Nuevo Testamento cuando la fe en Jesús comienza a extenderse a personas no judías (gentiles). ¿Deben los gentiles circuncidarse para pertenecer al pueblo de Dios? El concilio de Jerusalén en Hechos 15 dice que no. Pablo en Gálatas lo argumenta con fuerza: la circuncisión era la señal externa de una realidad interna, y la realidad interna — la fe, la confianza en Dios — no requiere la señal externa.

Pablo llega a usar la frase "circuncisión del corazón" (Romanos 2:29) — un corte profundo en la identidad interior, no superficial. Esta tensión entre señal externa y transformación interna atraviesa toda la carta a los Gálatas.`,
  verses: ["Génesis 17:9-14", "Hechos 15:1-11", "Gálatas 5:2-6", "Romanos 2:28-29"],
},

"pentecostés": {
  term: "Pentecostés",
  type: "Práctica bíblica",
  short: "Una fiesta judía de la cosecha que en Hechos 2 se convierte en el momento fundacional de la iglesia: el día que el Espíritu Santo llega sobre los seguidores de Jesús.",
  body: `"Pentecostés" viene del griego para "cincuenta". Era la fiesta judía de la cosecha que se celebraba cincuenta días después de la Pascua (llamada Shavuot en hebreo). Los judíos de la diáspora — de todo el Imperio — viajaban a Jerusalén para celebrarla. Era una de las tres grandes peregrinaciones anuales.

Jesús muere en Pascua. Cincuenta días después, en Pentecostés, los discípulos están reunidos en Jerusalén cuando ocurre algo extraordinario: sonido de viento fuerte, lenguas de fuego, y todos comienzan a hablar en idiomas que no conocen. Los judíos peregrinos de diferentes países escuchan el evangelio cada uno en su propio idioma.

Es la inversión deliberada de Babel. En Babel, la humanidad fue dispersada con idiomas diferentes. En Pentecostés, la humanidad es reunida. Pedro predica y en un día se suman al movimiento tres mil personas. La cosecha que comenzó ese día todavía continúa.`,
  verses: ["Hechos 2:1-41", "Levítico 23:15-16", "Joel 2:28-29"],
},

"año jubilar": {
  term: "Año Jubilar",
  type: "Práctica bíblica",
  short: "Cada cincuenta años en Israel: todas las deudas canceladas, todos los esclavos liberados, todas las tierras devueltas — un reinicio total del sistema económico.",
  body: `La Torah prescribía algo extraordinario: cada siete años (el año sabático), la tierra debía descansar y las deudas entre israelitas cancelarse. Y cada siete veces siete años — el año cincuenta, el año del Jubileo — ocurría un reinicio mayor: los esclavos israelitas recuperaban la libertad y las tierras vendidas por pobreza volvían a sus familias originales.

La idea detrás del Jubileo era que Dios era el dueño último de la tierra (Levítico 25:23: "la tierra es mía") y que ningún sistema humano debería perpetuar la pobreza indefinidamente. El Jubileo era un correctivo estructural incorporado en la ley — una forma de evitar que la desigualdad se consolidara permanentemente.

Cuando Jesús comienza su ministerio público en Lucas 4, lee en la sinagoga de Nazaret el texto de Isaías 61: "Me ha enviado a proclamar libertad a los cautivos, a pregonar el año agradable del Señor." Ese "año agradable" es el Jubileo. Jesús está declarando que su ministerio es el Jubileo definitivo: la liberación más profunda posible ha comenzado.`,
  verses: ["Levítico 25:8-55", "Lucas 4:18-19", "Isaías 61:1-2"],
},

// ─── CONCEPTOS TEOLÓGICOS ────────────────────────────────────────────────────

"espíritu santo": {
  term: "Espíritu Santo",
  type: "Concepto central",
  short: "La presencia activa de Dios en el mundo y en las personas — no una fuerza impersonal sino el mismo Dios actuando de manera íntima y directa.",
  body: `La palabra hebrea para Espíritu es "ruah" y la griega es "pneuma" — ambas significan también viento y aliento. Son palabras que hablan de algo invisible pero real, poderoso pero no controlable, vital (sin aliento no hay vida). Esa es la imagen de fondo cuando se habla del Espíritu en la Biblia.

En el Antiguo Testamento, el Espíritu de Dios viene sobre personas en momentos específicos para tareas concretas: sobre los artesanos que construyen el Tabernáculo, sobre los jueces para la guerra, sobre los profetas para que hablen. El profeta Joel escribe que llegará el día en que el Espíritu se derramará "sobre toda carne" — hijos e hijas, jóvenes y viejos.

En Hechos 2, en la fiesta de Pentecostés, el texto describe lo que ocurre cuando esa promesa se cumple: un sonido como de viento fuerte, lenguas como de fuego, y los seguidores de Jesús comienzan a hablar en idiomas que no conocen. Jesús había dicho en Juan 14 que enviaría "otro Consolador" para estar con sus seguidores. El Espíritu en el Nuevo Testamento no es descrito como una emoción sino como una presencia con efectos verificables.`,
  verses: ["Juan 14:16-17", "Hechos 2:1-4", "Joel 2:28-29", "Gálatas 5:22-23"],
},

"profeta": {
  term: "Profeta",
  type: "Rol bíblico",
  short: "No un adivino ni un predictor del futuro, sino alguien que habla desde la perspectiva de Dios al poder — especialmente cuando el poder preferiría no escuchar.",
  body: `En el mundo antiguo existían "profetas" de todo tipo — personas que pretendían ver el futuro y cobraban por ello. El profetismo bíblico es algo completamente distinto. Los profetas de Israel no eran principalmente predictores del futuro; eran "portavoces" de Dios al presente.

Su función central era confrontar al rey, al sacerdote o al pueblo con lo que Dios veía: injusticia, idolatría, opresión de los pobres, falsedad en los rituales. Natán le dice al rey David: "Tú eres aquel hombre." Amós grita contra los mercaderes que adulteran sus balanzas. Isaías describe a los líderes religiosos de Jerusalén como "gobernantes de Sodoma."

Cuando los profetas hablan del futuro, generalmente están describiendo las consecuencias lógicas del presente — "si sigues en este camino, esto es lo que va a ocurrir." Pero también hay profecías genuinamente predictivas, especialmente sobre el Mesías. El Nuevo Testamento llama a Jesús el profeta definitivo — el que no solo trae la palabra de Dios sino que es la Palabra de Dios hecha carne.`,
  verses: ["Amós 3:7-8", "Jeremías 1:4-10", "Lucas 24:27", "Hebreos 1:1-2"],
},

"ángel": {
  term: "Ángel",
  type: "Concepto bíblico",
  short: "Agentes de Dios en el mundo — no criaturas etéreas con alas sino mensajeros con presencia tan poderosa que la primera reacción humana es siempre terror.",
  body: `Los ángeles bíblicos no se parecen a los querubines gorditos de la pintura renacentista. La primera cosa que dice casi todo ángel bíblico cuando se aparece a alguien es: "No temas." No lo dice como saludo amable — lo dice porque la persona frente a él está aterrada.

La palabra hebrea "malak" y la griega "angelos" significan simplemente "mensajero". Los ángeles son los agentes de la acción de Dios: ejecutan juicio, protegen personas, entregan mensajes, adornan el trono divino. Tienen voluntad propia — los relatos de ángeles caídos indican que pueden rebelarse.

Lo que los ángeles bíblicos no son: guardianes personales que nos protegen de las consecuencias de nuestras decisiones, seres humanos difuntos que se convirtieron en ángeles, o símbolos abstractos de bondad. Son criaturas reales en el relato bíblico, más poderosas que los humanos, creadas para servir a Dios y actuar en el mundo visible cuando Dios lo requiere.`,
  verses: ["Lucas 1:26-30", "Hebreos 1:14", "Génesis 18:1-2", "Apocalipsis 22:8-9"],
},

"parábola": {
  term: "Parábola",
  type: "Técnica narrativa",
  short: "Una historia corta que describe el Reino de Dios a través de imágenes de la vida cotidiana — diseñada para revelar a quien busca y para desafiar a quien se resiste.",
  body: `Jesús no inventó las parábolas — los maestros judíos las usaban frecuentemente. Lo que es notable es la cantidad y calidad de las parábolas de Jesús. En Marcos los discípulos le preguntan por qué habla en parábolas, y Él da una respuesta desconcertante: "Para que viendo no vean y oyendo no entiendan." No parece el objetivo de alguien que quiere comunicar claramente.

La clave está en entender para qué sirve una parábola. Una definición técnica sin fuerza emotiva puede ser rechazada sin costo. Pero una historia exige que tomes una posición antes de entender que tú eres el personaje. David es atrapado por Natán no con un argumento teológico sino con una historia sobre una oveja. El rey reacciona con indignación antes de entender que es él mismo el villano.

Las parábolas de Jesús funcionan igual: te enganchan con una historia familiar (un agricultor, una boda, una oveja perdida) y cuando ya estás dentro, el giro llega. Quien tiene oídos para oír, oye — y a veces ese "oír" cambia una vida.`,
  verses: ["Marcos 4:1-12", "Mateo 13:34-35", "Lucas 15:1-3"],
},

"milagro": {
  term: "Milagro / Señal",
  type: "Concepto bíblico",
  short: "En los evangelios, Jesús prefiere llamar a sus obras 'señales' — actos que apuntan a algo más grande que el evento mismo.",
  body: `Nota algo interesante: en el evangelio de Juan, los milagros de Jesús casi nunca se llaman "milagros" (del latín miraculum, algo que te hace abrir la boca de asombro). Juan los llama "señales" — en griego: semeion. Una señal no existe para impresionar; existe para señalar hacia algo.

La curación de un ciego no es simplemente un acto médico extraordinario. En el relato de Juan 9, se convierte en una historia sobre la ceguera espiritual de los que sí ven. La resurrección de Lázaro no es solo un acto de compasión: Jesús dice explícitamente que ocurre "para que crean." Cada señal apunta hacia quién es Jesús y hacia el Reino que él está inaugurando.

Esto no significa que los milagros sean solo símbolos. El hombre que ve genuinamente ve. La gente que come los panes genuinamente come. Pero en los evangelios, los milagros tienen siempre dos niveles: el nivel físico (algo extraordinario ocurrió) y el nivel de señal (algo más grande está siendo revelado).`,
  verses: ["Juan 2:11", "Juan 20:30-31", "Marcos 8:11-12"],
},

"oración": {
  term: "Oración",
  type: "Práctica bíblica",
  short: "Una conversación real con Dios — no un ritual de palabras correctas sino una relación donde se puede hablar con honestidad, incluida la queja, la duda y la demanda.",
  body: `Los Salmos son el libro de oración de Israel, y lo que sorprende a quien los lee por primera vez es la honestidad radical. El Salmo 22 abre con "Dios mío, Dios mío, ¿por qué me has abandonado?" El Salmo 13 dice "¿Hasta cuándo, Señor, me olvidarás?" Hay salmos de rabia, de lamentación, de confusión, de duda. El modelo bíblico de oración incluye decirle a Dios exactamente lo que sientes, sin filtro.

Los discípulos le piden a Jesús que les enseñe a orar — lo cual implica que la oración puede hacerse bien o mal. No es simplemente hablar. Jesús da el Padre Nuestro como modelo: primero la orientación (hacia quién hablas y qué valoras), luego las peticiones concretas, luego la humildad (perdón y dependencia).

Lo que la oración bíblica no es: un mecanismo para obtener lo que quieres si dices las palabras correctas, o una demostración de religiosidad. Jesús critica explícitamente las "repeticiones vanas" y el orar para ser visto. La oración funcional en la Biblia es siempre una relación, no una técnica.`,
  verses: ["Mateo 6:5-13", "Salmos 22:1-2", "Lucas 18:1-8", "Filipenses 4:6-7"],
},

"salvación": {
  term: "Salvación",
  type: "Concepto central",
  short: "Rescate, liberación y restauración total — la palabra bíblica es mucho más grande que 'ir al cielo cuando mueras'.",
  body: `La palabra hebrea "yeshua" — de donde viene el nombre Jesús — significa literalmente rescate, liberación, poner en lugar seguro. En el Antiguo Testamento se usa para situaciones concretas: Dios salva a Israel del ejército egipcio en el Éxodo, salva al individuo de sus enemigos en los Salmos, salva al enfermo de la muerte. Cada vez que aparece, hay alguien en peligro real y alguien que lo saca de ahí.

El texto de Lucas 19 muestra cómo Jesús usa la palabra: después de que Zaqueo devuelve lo que robó, Jesús dice "hoy ha llegado la salvación a esta casa." No es una declaración religiosa abstracta — es la descripción de algo que cambió en esa familia esa tarde.

Juan 10:10 tiene la descripción de Jesús mismo: "Yo he venido para que tengan vida, y para que la tengan en abundancia." Vida completa, que es también lo que la raíz hebrea "yeshua" apunta desde el Antiguo Testamento.`,
  verses: ["Lucas 19:9-10", "Efesios 2:8-9", "Romanos 5:9-10", "Juan 10:10"],
},

"resurrección": {
  term: "Resurrección",
  type: "Concepto central",
  short: "No reencarnación, no inmortalidad del alma, no fantasma: transformación a un nuevo modo de existencia corporal y permanente.",
  body: `El mundo antiguo tenía muchas ideas sobre qué pasa después de la muerte, pero la resurrección no era una de las creencias más comunes. Los griegos creían en la inmortalidad del alma: el cuerpo muere y el alma escapa a un mundo espiritual puro. La resurrección judía era diferente: el cuerpo también importa, y hay una restauración futura del ser completo.

La diferencia es enorme. La inmortalidad del alma dice: el cuerpo es una prisión de la que el alma escapa. La resurrección dice: el cuerpo no es un error sino parte del diseño — lo que muere será restaurado y transformado. Pablo en 1 Corintios 15 lo explica con la imagen de una semilla: lo que siembras no es lo que emerge, pero hay continuidad entre uno y otro.

La resurrección de Jesús es el centro del Nuevo Testamento. Pablo lo plantea en 1 Corintios 15 como la base de todo lo demás: "Si Cristo no resucitó, vuestra fe es vana." Los relatos de los evangelios describen un cuerpo identificable — con las marcas de los clavos, capaz de ser tocado, que come pescado — pero que también aparece en habitaciones cerradas y desaparece. Los testigos que Pablo menciona en 1 Corintios 15 son más de quinientos, varios de los cuales dice que todavía están vivos al momento de escribir.`,
  verses: ["1 Corintios 15:12-20", "Juan 11:25", "Hechos 2:24", "Filipenses 3:20-21"],
},

"vida eterna": {
  term: "Vida Eterna",
  type: "Concepto central",
  short: "En el lenguaje de Jesús, no es principalmente una cantidad de tiempo sino una calidad de relación: vivir conectado a la fuente de la vida misma.",
  body: `En griego, "vida eterna" es "zoe aionios" — literalmente "vida del siglo venidero." No es una extensión indefinida del tiempo presente sino una participación en el tipo de vida que pertenece a la era futura, al nuevo orden que Dios prometió.

Lo que Jesús dice en Juan 17:3 es desconcertante: "Esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado." La vida eterna es definida como una relación de conocimiento — no como un destino o un período de tiempo.

El Nuevo Testamento habla de la vida eterna tanto como algo que comienza ahora ("el que cree tiene vida eterna" — presente) como algo que se consuma en el futuro. No es que ahora tienes un boleto y eventualmente irás al lugar. Es que ahora comienzas a vivir de una manera que tiene la cualidad del mundo venidero — orientada hacia Dios, conectada a Él, comenzando a ser transformada. La muerte no interrumpe esto; lo lleva a su plenitud.`,
  verses: ["Juan 3:16", "Juan 17:3", "Juan 11:25-26", "1 Juan 5:11-13"],
},

"nacer de nuevo": {
  term: "Nacer de nuevo",
  type: "Concepto bíblico",
  short: "Una transformación tan profunda de la identidad interior que Jesús la compara con volver a empezar desde el principio.",
  body: `La frase viene de una conversación nocturna en Juan 3. Nicodemo, un fariseo respetado, va a Jesús de noche (probablemente para no ser visto) y reconoce que las señales que Jesús hace indican que viene de Dios. La respuesta de Jesús lo toma por sorpresa: "A menos que alguien nazca de nuevo, no puede ver el Reino de Dios."

La palabra griega "anothen" puede significar "de nuevo" o "desde arriba" — ambos sentidos importan. Nicodemo entiende literalmente: ¿cómo puede un hombre adulto volver al vientre de su madre? Jesús habla de un nacimiento de diferente tipo: del Espíritu.

La imagen del nacimiento no es arbitraria. Cuando naces, no decides nada — te hacen. No te ganas el nacimiento ni lo mereces. Así describe Jesús el origen de la vida espiritual: algo que se recibe, no que se construye. Pero como un nacimiento, tiene consecuencias permanentes: cambia quién eres, no solo lo que haces. En las cartas de Pablo esto aparece como la distinción entre el "viejo hombre" y el "nuevo hombre."`,
  verses: ["Juan 3:1-8", "1 Pedro 1:23", "2 Corintios 5:17", "Tito 3:5"],
},

"iglesia": {
  term: "Iglesia",
  type: "Concepto central",
  short: "No un edificio ni una institución religiosa: una comunidad de personas llamadas a vivir y actuar como el cuerpo de Cristo en el mundo.",
  body: `La palabra griega es "ekklesia" — literalmente "los llamados afuera." En el mundo griego se usaba para las asambleas ciudadanas: los habitantes libres de una ciudad convocados para tomar decisiones políticas. El Nuevo Testamento toma ese término cívico y lo resignifica: la comunidad de los que han sido convocados por Dios.

Los primeros seguidores de Jesús no tenían edificios. Durante los primeros 300 años, la iglesia se reunía en casas — las "iglesias domésticas" que Pablo menciona en sus cartas. La institución con arquitectura, jerarquía y poder político llegó después, y trajo consecuencias complejas.

Pablo usa la imagen del cuerpo para describir la iglesia (1 Corintios 12): cada persona es un órgano diferente con función específica. Sin diversidad de funciones no hay cuerpo funcional. Esta imagen corrige dos malentendidos: que todos deben ser iguales (no, tienen funciones diferentes) y que algunos son más importantes que otros (no, todos son necesarios). La cabeza del cuerpo, dice Pablo, es Cristo.`,
  verses: ["Mateo 16:18", "1 Corintios 12:12-27", "Efesios 2:19-22", "Hechos 2:42-47"],
},

// ─── CONCEPTOS TEOLÓGICOS FUNDAMENTALES ──────────────────────────────────────

"reino de dios": {
  term: "Reino de Dios",
  type: "Concepto central",
  short: "El gobierno activo de Dios que irrumpe en la historia para corregir lo que está roto — el tema central de la enseñanza de Jesús.",
  body: `No pienses en un territorio con fronteras. El "Reino de Dios" en la Biblia es dinámico, no geográfico: es el reinado activo de Dios, su gobierno efectivo sobre la realidad. Donde Dios gobierna, las cosas son como deberían ser.

Israel esperaba un Mesías que trajera ese reinado en forma política — un rey que expulsara a Roma y restaurara la grandeza nacional. Jesús toma el mismo lenguaje y lo llena de contenido inesperado: el reino llega cuando los enfermos sanan, cuando los excluidos son incluidos, cuando los pecados son perdonados, cuando los pobres reciben buenas noticias. No con ejércitos sino con compasión.

El texto muestra el reino como algo con dos tiempos a la vez. Jesús dice "el reino se ha acercado" y también "el reino de Dios está entre vosotros" — ya presente. Pero también enseña a orar "venga tu reino" — todavía por llegar en su plenitud. Es la misma tensión que aparece en toda la segunda mitad del Nuevo Testamento: algo comenzó pero todavía no terminó.`,
  verses: ["Marcos 1:15", "Mateo 6:10", "Lucas 17:20-21", "Apocalipsis 11:15"],
  video: PB_VIDEOS["reino"] as DictEntry["video"],
},

"evangelio": {
  term: "Evangelio",
  type: "Concepto central",
  short: "Buenas noticias — no de una nueva religión ni de un sistema moral, sino del anuncio de que algo decisivo acaba de ocurrir en la historia.",
  body: `Cuando Marcos abre su libro con "Principio del evangelio de Jesucristo", está usando una palabra que su audiencia conocía bien por un contexto completamente diferente. En el Imperio Romano, "euangelion" era el término oficial para los anuncios de victorias militares o de la ascensión de un nuevo César. Era la proclama pública de un nuevo estado de cosas: algo ha cambiado, el mundo no es como era antes.

Pablo lo resume en 1 Corintios 15: el evangelio es que Cristo murió por nuestros pecados, fue sepultado, y resucitó al tercer día, y que hay testigos de todo esto. Es antes que nada un anuncio de hechos históricos, no una propuesta filosófica ni un código ético.

Lo que hace que sea "buenas noticias" en particular depende de quién eres. Para el culpable, es el perdón. Para el oprimido, es la liberación. Para el desorientado, es el camino. Para el muerto, es la vida. El evangelio no tiene un solo sabor — tiene la forma de la necesidad del que lo recibe.`,
  verses: ["Marcos 1:1", "Romanos 1:16", "1 Corintios 15:1-4"],
},

"arrepentíos": {
  term: "Arrepentimiento",
  type: "Concepto central",
  short: "Cambiar de dirección — no solo sentir culpa, sino dar media vuelta y comenzar a caminar hacia donde deberías haber ido desde el principio.",
  body: `Imagina que estás manejando en la dirección equivocada. Darte cuenta del error produce vergüenza, frustración, tal vez culpa. Pero el arrepentimiento no es el sentimiento — es el acto de frenar, dar la vuelta y empezar a ir en la dirección correcta. Alguien que siente mucha culpa pero sigue en la misma dirección no se ha arrepentido.

La palabra griega "metanoia" significa literalmente "cambio de mente" o "cambio de dirección." Juan el Bautista lo predica antes que Jesús: la primera palabra del ministerio de Jesús en Marcos también es "arrepentíos." No como condena sino como invitación: el reino está llegando, hay tiempo de cambiar.

El arrepentimiento bíblico tiene tres partes que juntas lo hacen real: reconocer lo que salió mal (no minimizarlo), dirigirse hacia otra cosa (no solo alejarse del error sino ir hacia algo mejor) y manifestarlo de alguna manera concreta. La parábola del hijo pródigo muestra las tres: "Me levantaré e iré a mi padre, y le diré: Padre, he pecado..."`,
  verses: ["Marcos 1:15", "Lucas 15:11-32", "Hechos 2:38", "2 Corintios 7:10"],
},

"gracia": {
  term: "Gracia",
  type: "Concepto teológico",
  short: "Favor recibido sin haberlo ganado ni merecido — Dios actuando a favor tuyo no porque lo hayas hecho bien sino porque así es Él.",
  body: `La palabra griega "charis" describía el favor que una persona poderosa podía conceder a alguien sin que ese alguien lo hubiera ganado. No era justo en el sentido de merecido — era generoso en el sentido de libre. Un rey que perdona a un traidor no está siendo justo; está siendo gracioso.

La gracia aparece por primera vez en la Biblia con Noé: "Noé halló gracia ante los ojos de Dios." No dice que Noé fuera perfecto — dice que encontró gracia. La palabra reaparece cuando Juan describe a Jesús: "lleno de gracia y de verdad." Y Pablo la usa en Efesios 2: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe."

La gracia en el texto bíblico funciona siempre en la misma dirección: alguien recibe algo que no ganó, de parte de alguien que no estaba obligado a darlo. Lo que el texto muestra después en cada caso es que ese regalo no queda sin efecto — cambia a la persona que lo recibe.`,
  verses: ["Génesis 6:8", "Juan 1:14", "Efesios 2:8-9", "Romanos 5:8"],
},

"fe": {
  term: "Fe",
  type: "Concepto teológico",
  short: "No es creer algo sin evidencia — es confiar en alguien con suficiente convicción como para actuar de acuerdo con esa confianza.",
  body: `La carta a los Hebreos define la fe como "la certeza de lo que se espera, la convicción de lo que no se ve." El capítulo siguiente — el 11 — lista a personas que actuaron de acuerdo con esa definición: Noé construyó el arca sin haber visto lluvia. Abraham salió sin saber a dónde iba. Moisés dejó Egipto. En todos los casos, la fe es algo que se ve en lo que la persona hace, no solo en lo que declara creer.

La distinción que el texto hace es entre creer que algo es verdad y confiar en alguien. Yo puedo creer que un puente es sólido sin cruzarlo. Cruzarlo es la diferencia.

Santiago lo dice directamente: "la fe sin obras está muerta." No como contradicción de otros textos sino como complemento: una fe que no cambia nada en la vida de alguien no es la fe que describe el texto bíblico.`,
  verses: ["Hebreos 11:1", "Romanos 1:17", "Santiago 2:17-18", "Gálatas 2:20"],
},

"pacto": {
  term: "Pacto",
  type: "Concepto teológico",
  short: "No un contrato sino una promesa de relación permanente — más parecido al matrimonio que a un acuerdo comercial.",
  body: `Un contrato dice: "Haré X si tú haces Y." Si una parte falla, el contrato se rompe. Un pacto dice: "Me comprometo contigo, punto." El compromiso no depende del desempeño del otro sino de la propia integridad. El matrimonio como vínculo incondicional es la metáfora que más se usa en la Biblia para describir el pacto de Dios con su pueblo.

La Biblia puede leerse como una historia de pactos sucesivos: con Noé (nunca más un diluvio), con Abraham (tierra, descendencia, bendición para todas las naciones), con Moisés (Israel como pueblo del pacto en el Sinaí), con David (un rey eterno de su línea). Cada pacto amplía el anterior.

El "Nuevo Pacto" que Jeremías 31 promete y que Jesús inaugura en la Última Cena es el clímax: en lugar de leyes escritas en piedra que Israel debía guardar externamente, Dios promete escribir su ley en el corazón. El cumplimiento del pacto pasa de ser responsabilidad humana a ser realidad interna producida por el Espíritu.`,
  verses: ["Génesis 15:18", "Jeremías 31:31-34", "Lucas 22:20", "Hebreos 9:15"],
  video: PB_VIDEOS["pacto"] as DictEntry["video"],
},

"pecado": {
  term: "Pecado",
  type: "Concepto teológico",
  short: "Errar el blanco — fallar en vivir como el ser humano que fuiste diseñado para ser, tanto en actos específicos como en una condición general.",
  body: `La palabra hebrea más usada para pecado es "hata" — la misma raíz que los arqueros usaban cuando fallaban el blanco. El pecado no es solo hacer cosas malas; es no dar en el blanco de lo que deberías ser. Esto cambia el marco de referencia: no es solo "rompí una regla" sino "fallé en ser quien debería ser."

El texto bíblico usa varias imágenes distintas para describir el pecado: deuda (que puede ser perdonada), esclavitud (de la que se puede ser liberado), herida (que puede sanar), ruptura relacional (que puede restaurarse). Cada imagen apunta a algo diferente que sale mal cuando una persona se desvía de lo que fue diseñada para ser.

Pablo en Romanos 7 describe algo que cualquier persona reconoce: "Lo que quiero hacer, no lo hago; y lo que no quiero hacer, eso es lo que hago." No es un argumento teológico — es una observación sobre la experiencia humana que los lectores del siglo I y del siglo XXI comparten exactamente igual.`,
  verses: ["Romanos 3:23", "Génesis 3", "1 Juan 1:8-9", "Juan 8:34"],
},

"redencion": {
  term: "Redención",
  type: "Concepto teológico",
  short: "Liberación pagando un precio — alguien que te rescata de una situación sin salida cargando el costo personalmente.",
  body: `Imagina una deuda imposible de pagar. Tus opciones se han agotado. Y entonces aparece alguien que paga por ti, no porque te lo merezcas sino porque quiere hacerlo. Eso es la redención en su imagen más básica: no que la deuda desaparezca, sino que alguien más la paga.

En el mundo antiguo existía el rol del "go'el" — el pariente redentor. Si un familiar tuyo caía en esclavitud por deudas, el go'el tenía la responsabilidad de pagar el precio de rescate. No era opcional; era parte de la estructura familiar. Booz hace esto por Rut. Dios lo hace por Israel en el Éxodo — de ahí que el Éxodo sea el acto redentor definitivo del AT.

El Nuevo Testamento aplica este lenguaje a la muerte de Jesús. Jesús mismo lo dice: "El Hijo del Hombre vino... a dar su vida en rescate por muchos." La imagen no es que Dios necesitaba ser pagado para perdonar; es que el costo real del mal no puede simplemente ignorarse, y alguien cargó con él.`,
  verses: ["Éxodo 6:6", "Rut 4:14", "Marcos 10:45", "Efesios 1:7"],
},

"justificacion": {
  term: "Justificación",
  type: "Concepto teológico",
  short: "El veredicto de Dios que declara justo al que no lo era — no porque haya mejorado sino porque alguien más cargó con su culpa.",
  body: `En las cartas a los Romanos y Gálatas, Pablo toma un término del sistema legal romano — el veredicto del juez que declara al acusado inocente — y lo usa para explicar algo específico sobre la relación entre las personas y Dios.

El argumento de Pablo en Romanos 3-4 es este: el problema no es que Dios sea injusto, sino todo lo contrario — es tan justo que el estándar es imposible de alcanzar humanamente. Lo que Pablo dice es que Abraham no fue aceptado por Dios porque llevara un récord perfecto: "creyó a Dios, y le fue contado por justicia." La confianza fue lo que contó, no el desempeño.

En Gálatas 2:16, Pablo lo dice directamente: "El hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo." Para sus lectores judíos del siglo I, esto era una afirmación radical: la identidad del pueblo de Dios no se define por cumplir las reglas del pacto sino por algo anterior a las reglas.`,
  verses: ["Romanos 3:21-26", "Gálatas 2:16", "Génesis 15:6", "Romanos 5:1"],
},

"expiacion": {
  term: "Expiación",
  type: "Concepto teológico",
  short: "El acto que restaura una relación rota cubriendo o removiendo lo que la rompió — la manera en que el costo del mal es absorbido para que la relación pueda continuar.",
  body: `Una vez al año, en el Día de la Expiación (Yom Kipur), ocurría el ritual más solemne del calendario israelita. El Sumo Sacerdote entraba solo al Lugar Santísimo — el espacio más restringido del Templo, donde se creía que habitaba la presencia de Dios — con la sangre de un animal sacrificado. Ese acto cubría los errores del pueblo durante el año anterior.

Había un segundo elemento visual: el "chivo expiatorio." El sacerdote ponía sus manos sobre la cabeza de un macho cabrío y pronunciaba sobre él todos los pecados del pueblo. Luego el animal era enviado al desierto. La imagen era concreta e intencional — algo real que alguien cargó, saliendo del espacio del pueblo.

La carta a los Hebreos conecta estos rituales con Jesús: "Cristo, habiendo ofrecido una vez para siempre un solo sacrificio por los pecados, se ha sentado a la diestra de Dios." El autor de Hebreos no inventa la imagen — la toma del ritual que sus lectores conocían y dice que apuntaba a algo mayor.`,
  verses: ["Levítico 16", "Hebreos 9:11-14", "1 Juan 2:2", "Romanos 3:25"],
},

"verbo": {
  term: "El Verbo (Logos)",
  type: "Concepto teológico",
  short: "La Palabra de Dios que se hizo carne — el principio organizador del universo que resultó ser una persona.",
  body: `Juan 1 abre igual que Génesis: "En el principio..." Pero identifica al protagonista del principio como "el Logos" — la Palabra. Para los lectores griegos del siglo I, logos no era solo "palabra". Era el principio racional que ordenaba el universo — la razón que hacía que el mundo tuviera sentido y coherencia. Los filósofos llevaban siglos hablando del Logos como principio impersonal del cosmos.

Juan toma ese concepto filosófico conocido y lo dinamita: "El Logos era con Dios, y el Logos era Dios." Y luego la afirmación más radical del Nuevo Testamento: "El Logos se hizo carne y habitó entre nosotros." El principio ordenador del universo no era una fuerza abstracta sino una persona, y esa persona vivió entre humanos, comió pan, se cansó, lloró en un funeral.

Para los lectores judíos de Juan, "Palabra de Dios" tenía un significado diferente pero igualmente poderoso: en el AT, Dios crea por medio de su palabra ("Y dijo Dios: Sea la luz"). Juan está diciendo que el mismo agente de la creación está ahora en el mundo que creó.`,
  verses: ["Juan 1:1-14", "Colosenses 1:15-17", "Génesis 1:3"],
},

"mesias": {
  term: "Mesías / Cristo",
  type: "Concepto central",
  short: "El ungido de Dios — el rey prometido que Israel esperaba para restaurar lo que estaba roto, y que llegó de una manera completamente diferente a lo esperado.",
  body: `"Mesías" en hebreo y "Cristo" en griego significan exactamente lo mismo: el ungido. En Israel, ungir con aceite era el ritual que marcaba a alguien como rey, sacerdote o profeta — apartado por Dios para una tarea específica. El "Mesías" era el ungido definitivo que los profetas prometían.

La expectativa del siglo I era concreta: el Mesías sería un rey de la línea de David que restauraría la independencia política de Israel, expulsaría a Roma, y establecería el reino de Dios sobre todas las naciones. Muchos mesías candidatos habían surgido y fracasado antes de Jesús.

Jesús acepta el título pero constantemente lo redefine. Cuando Pedro lo confiesa como "el Cristo", Jesús inmediatamente habla de su muerte próxima — lo opuesto de lo que un Mesías guerrero haría. Al Mesías que los discípulos imaginaban lo llaman "Cristo" como título de gloria. El Mesías que Jesús encarna llega en un burro, lava pies y muere en una cruz.`,
  verses: ["Daniel 9:25", "Marcos 8:29", "Juan 4:25-26", "Hechos 2:36"],
},

"imagen de dios": {
  term: "Imagen de Dios",
  type: "Concepto teológico",
  short: "La dignidad que todo ser humano lleva desde su origen — no algo que se gana ni que se puede perder, sino la razón por la que cada persona importa.",
  body: `En el mundo antiguo, la "imagen" de un dios era la estatua que lo representaba en su templo. En Egipto, el único ser humano que era "imagen del dios" era el faraón — el intermediario entre lo divino y lo humano. Todos los demás eran sus súbditos.

Génesis 1:27 hace algo explosivo: "Dios creó al ser humano a su imagen." No al faraón, no a los nobles, no a los hombres — "al ser humano." Varón y hembra. La dignidad que en Egipto solo tenía el rey, la Biblia la distribuye sobre cada ser humano sin excepción. No depende del rango, del mérito, de la inteligencia ni de la virtud.

Las implicaciones son enormes y nunca han sido completamente asimiladas por la civilización. Santiago 3:9 dice que "maldecir a los hombres hechos a la semejanza de Dios" es una contradicción. Cada persona que encuentras lleva una dignidad ontológica — un valor que no proviene de sus logros sino de su origen.`,
  verses: ["Génesis 1:26-27", "Génesis 9:6", "Santiago 3:9"],
  video: PB_VIDEOS["imagen"] as DictEntry["video"],
},

"pastor": {
  term: "Pastor (metáfora)",
  type: "Símbolo bíblico",
  short: "La imagen más usada en la Biblia para describir el liderazgo que sirve en lugar de explotar — y el título que Jesús se da a sí mismo.",
  body: `David era pastor antes de ser rey. No es un detalle biográfico secundario — moldea cómo entiende su propia función como gobernante. Cuando escribe el Salmo 23, no está usando una metáfora poética abstracta; está describiendo desde adentro lo que hace un buen pastor: busca buenos pastos, guía a través de terrenos peligrosos, va delante para explorar el camino.

En el mundo antiguo, "pastor" era también un título político para los reyes. Los buenos reyes cuidaban a su pueblo como el pastor a sus ovejas. Por eso Ezequiel 34 es tan demoledor: Dios condena a los "pastores de Israel" que se aprovecharon del rebaño en lugar de cuidarlo — "los débiles no los fortalecisteis, ni curasteis la enferma..."

Jesús toma exactamente este texto de Ezequiel y dice: "Yo soy el buen pastor." No solo un buen ejemplo de liderazgo — el cumplimiento de lo que Ezequiel prometió que Dios mismo haría. Y agrega la imagen que lo define: "El buen pastor su vida da por las ovejas."`,
  verses: ["Salmos 23:1", "Ezequiel 34:11-16", "Juan 10:11-14"],
},

"espíritu inmundo": {
  term: "Espíritu inmundo",
  type: "Concepto bíblico",
  short: "Una fuerza espiritual hostil al ser humano que actúa en oposición al gobierno de Dios — lo que los evangelios llaman la resistencia sobrenatural al Reino.",
  body: `Los espíritus inmundos en los evangelios no son figuras metafóricas. Producen efectos concretos: en Marcos 1 hacen hablar a alguien contra su voluntad; en Marcos 5, un hombre vive entre las tumbas, rompe cadenas y se golpea a sí mismo. El relato bíblico presenta realidades espirituales con efectos físicos y sociales.

Lo que es teológicamente significativo: los espíritus inmundos en Marcos reconocen a Jesús antes que los humanos. Cuando Jesús entra a la sinagoga, el espíritu grita: "Sé quién eres: el Santo de Dios." Los poderes que se oponen al Reino lo reconocen y temen — mientras las personas siguen preguntándose quién es este hombre.

Los exorcismos de Jesús son en los evangelios señales de que el Reino de Dios está irrumpiendo. Jesús mismo lo dice: "Si yo por el Espíritu de Dios echo fuera los demonios, entonces ha llegado a vosotros el reino de Dios." No son demostraciones de poder; son evidencias de que el poder del mal está siendo desplazado.`,
  verses: ["Marcos 1:23-27", "Marcos 5:1-13", "Lucas 10:18-20"],
},

"blasfemia": {
  term: "Blasfemia",
  type: "Concepto religioso",
  short: "Usurpar lo que solo pertenece a Dios — hacer o decir algo que solo Dios tiene el derecho de hacer o decir.",
  body: `En el contexto judío del siglo I, blasfemia no era simplemente insultar a Dios. Era asumir funciones o prerrogativas que solo correspondían a Dios. Había cosas que solo Dios podía hacer — y un ser humano que las hacía estaba blasfemando.

Cuando Jesús le dice al paralítico "Tus pecados te son perdonados," los escribas reaccionan de inmediato: "¿Por qué habla éste así? Blasfema. ¿Quién puede perdonar pecados, sino solo Dios?" Su razonamiento es perfectamente lógico dentro de su marco teológico. Solo Dios puede perdonar pecados. Si Jesús perdona pecados, está afirmando ser Dios. Eso es blasfemia — a menos que sea verdad.

La ironía que los evangelios no pierden: los mismos líderes que acusan a Jesús de blasfemia por perdonar pecados lo llevan ante el Sumo Sacerdote con la acusación de blasfemia. La pregunta de Marcos 2 nunca es respondida explícitamente — se deja al lector sacar sus propias conclusiones de los hechos acumulados.`,
  verses: ["Marcos 2:7", "Mateo 26:65", "Juan 10:33"],
},

"pecadores": {
  term: "Pecadores",
  type: "Categoría social",
  short: "En el siglo I, no solo una categoría moral sino social: personas excluidas de la vida religiosa y comunitaria por su ocupación, estilo de vida o impureza ritual.",
  body: `Cuando los fariseos se escandalizan porque Jesús come con "pecadores," no están diciendo simplemente que esas personas hacen cosas malas. Están señalando a una categoría social específica: los que estaban formalmente excluidos del sistema religioso.

Esta categoría incluía personas con ocupaciones consideradas impuras (curtidores de cuero, porque trabajaban con animales muertos; prostitutas; recaudadores de impuestos), personas con enfermedades que los hacían ritualmente impuros (leprosos, ciertos enfermos), y personas que simplemente vivían sin seguir las normas de pureza ritual.

Comer con alguien en el mundo antiguo era un acto de comunión y aceptación. Los fariseos cuidaban con quién comían porque la mesa era sagrada. Cuando Jesús come con recaudadores de impuestos y "pecadores," está haciendo una declaración pública: estas personas pertenecen al reino de Dios. No como gesto compasivo condescendiente, sino como reconocimiento de su dignidad y posibilidad de transformación.`,
  verses: ["Marcos 2:16-17", "Lucas 15:1-2", "Lucas 7:39"],
},

// ─── CONCEPTOS DEL AT QUE CONECTAN CON EL NT ─────────────────────────────────

"éxodo": {
  term: "Éxodo",
  type: "Evento fundacional",
  short: "La liberación de Israel de la esclavitud en Egipto — el evento central del AT que se convierte en el molde para entender toda redención posterior.",
  body: `El Éxodo no es solo una historia de liberación nacional. Es el evento que da forma a toda la manera en que la Biblia piensa sobre Dios, sobre la humanidad y sobre la salvación. Cada vez que la Biblia quiere decir "Dios rescata," vuelve a este evento como referencia.

Ocurrió aproximadamente en el siglo XIII a.C.: Israel llevaba generaciones como mano de obra forzada en Egipto. Un hombre llamado Moisés confronta al faraón con la demanda de Dios, diez plagas golpean a Egipto, y finalmente el pueblo escapa. En el camino, cruzan el mar en seco mientras el ejército egipcio es destruido. En el desierto, reciben la Torah. Cuarenta años después, entran a la tierra prometida.

El patrón — esclavitud, liberación, travesía, nueva vida — se repite constantemente en la Biblia. Los profetas anuncian un "nuevo Éxodo." Juan el Bautista bautiza en el río Jordán (la frontera de la tierra prometida). Jesús ayuna 40 días (40 años de Israel en el desierto). Pablo llama a Cristo "nuestra Pascua." El libro del Apocalipsis está lleno de ecos del Éxodo. Sin entender el Éxodo, la mitad del Nuevo Testamento se vuelve opaca.`,
  verses: ["Éxodo 14:21-31", "Isaías 43:1-3", "1 Corintios 5:7", "Apocalipsis 15:3"],
},

"tierra prometida": {
  term: "Tierra Prometida",
  type: "Concepto bíblico",
  short: "La tierra que Dios prometió a Abraham y sus descendientes — que en la Biblia es siempre más que geografía: es el lugar donde Dios y su pueblo viven juntos.",
  body: `La promesa a Abraham en Génesis 12 tiene tres partes: descendencia (un gran pueblo), tierra (un lugar específico) y bendición (que alcanzará a todas las naciones). La tierra prometida era Canaán, el territorio que hoy corresponde aproximadamente a Israel, Palestina y partes de Jordania y Líbano.

Pero la tierra en la Biblia nunca es solo geografía. Es el lugar donde el cielo y la tierra se tocan, donde Dios y su pueblo habitan juntos sin las barreras del pecado. El jardín del Edén era eso. El Tabernáculo era un miniatura de eso. El Templo de Salomón era eso. Cuando la Biblia habla de la tierra prometida, siempre hay capas.

Por eso el Nuevo Testamento puede hablar de la tierra en términos completamente diferentes: Hebreos dice que Abraham "esperaba la ciudad de fundamentos sólidos, de la cual Dios mismo es el arquitecto." Pablo puede hablar de "heredar el mundo" (Romanos 4:13). El libro del Apocalipsis termina con una "nueva Jerusalén" que desciende del cielo — la tierra prometida definitiva.`,
  verses: ["Génesis 12:1-3", "Deuteronomio 8:7-10", "Hebreos 11:9-10", "Apocalipsis 21:1-4"],
},

"ley": {
  term: "La Ley (Torah)",
  type: "Concepto bíblico",
  short: "Las instrucciones de Dios para vivir como su pueblo — que llegan después de la liberación, no como condición para ella.",
  body: `La Torah no es "reglas que hay que cumplir para ser aceptado por Dios." El orden del relato bíblico lo dice todo: Dios libera a Israel del Éxodo primero, y solo después en el Sinaí entrega la Torah. Primero el rescate, luego las instrucciones. Así comienzan los Diez Mandamientos: "Yo soy el Señor tu Dios, que te saqué de Egipto." La identidad de quién habla viene antes del mandamiento.

La palabra "Torah" en hebreo no significa exactamente "ley" — significa "instrucción" o "enseñanza." Es el mismo término que se usa para la instrucción de un padre a su hijo. No es el código penal de un juez. Es la guía de vida de un padre amoroso a alguien que ya pertenece a su familia.

El error que Pablo combate en Gálatas y Romanos no es la Torah en sí — Pablo la llama "santa, justa y buena." El error es usar la Torah como sistema para ganar la aprobación de Dios. Como si el hijo pudiera pensar: "Si sigo suficientemente bien las instrucciones de mi padre, entonces él me amará." El amor del padre viene primero. Las instrucciones responden a ese amor, no lo producen.`,
  verses: ["Éxodo 20:2", "Salmos 119:105", "Mateo 5:17-18", "Romanos 7:12", "Gálatas 3:24"],
},

"abraham": {
  term: "Abraham",
  type: "Personaje clave",
  short: "El padre de la fe — el hombre al que Dios eligió para comenzar algo nuevo después de que todo salió mal, y cuya historia es el hilo que conecta toda la Biblia.",
  body: `Génesis 1-11 narra una caída progresiva: Adán y Eva, Caín y Abel, el diluvio, Babel. Después de cada capítulo la situación se agrava. Entonces, en Génesis 12, Dios elige a un hombre — no por sus méritos sino por gracia — y le hace una promesa en tres partes: tierra, descendencia, y que en él serían benditas todas las familias de la tierra.

Abram (que luego se llamará Abraham) tenía 75 años cuando recibió este llamado. Dejó una ciudad avanzada — Ur de los Caldeos — sin saber exactamente a dónde iba, siguiendo solo la voz de un Dios al que recién comenzaba a conocer. El texto dice que "creyó a Dios, y le fue contado por justicia." No fue por sus obras sino por su confianza.

Todo el Nuevo Testamento gira alrededor de esta promesa a Abraham. Pablo en Gálatas argumenta que las naciones que creen en Cristo son los "hijos de Abraham" en el sentido más profundo — herederos de la promesa. En Jesús, el "en ti serán benditas todas las familias de la tierra" finalmente comienza su cumplimiento global.`,
  verses: ["Génesis 12:1-3", "Génesis 15:6", "Romanos 4:1-3", "Gálatas 3:29"],
},

"shema": {
  term: "Shema",
  type: "Práctica bíblica",
  short: "La oración central del judaísmo, recitada dos veces al día: la declaración de que Dios es uno y de que todo el ser debe orientarse hacia Él.",
  body: `"Shema Israel: Adonai Elohenu, Adonai Ejad." Escucha, Israel: el Señor nuestro Dios, el Señor es uno. Deuteronomio 6:4. Estas palabras las recitaba todo judío piadoso al despertar y al acostarse, todos los días de su vida. Era la primera cosa que un niño aprendía a decir y la última que un moribundo pronunciaba.

El Shema era mucho más que una afirmación doctrinal. Era una reorientación completa del ser hacia Dios. Le seguía el mandamiento: "Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas." No una devoción religiosa parcial — la totalidad del ser orientada hacia Dios.

Cuando un escriba le pregunta a Jesús cuál es el mandamiento más importante, Jesús cita el Shema y agrega Levítico 19:18 ("amarás a tu prójimo como a ti mismo"). En esa combinación está, dice Jesús, "toda la ley y los profetas." El monoteísmo judío — un solo Dios — no era una abstracción filosófica sino el fundamento de una vida totalmente orientada.`,
  verses: ["Deuteronomio 6:4-9", "Marcos 12:28-34", "Mateo 22:37-40"],
},

// ─── LUGARES COMO PERSONAJES ─────────────────────────────────────────────────

"jerusalén": {
  term: "Jerusalén",
  type: "Lugar",
  short: "La ciudad de David, sede del Templo y centro del mundo en la imaginación bíblica — hacia donde convergen todas las historias y desde donde se esperaba que partiera la salvación.",
  body: `Jerusalén fue una ciudad cananea que David conquistó alrededor del año 1000 a.C. y convirtió en su capital. Su hijo Salomón construyó allí el Templo, y desde entonces Jerusalén fue el centro geográfico, político, religioso y simbólico de Israel.

La ciudad fue destruida dos veces: por Babilonia en el 586 a.C. y por Roma en el 70 d.C. Ambas destrucciones dejaron una marca indeleble en la psicología colectiva de Israel. El libro de Lamentaciones es el llanto por la primera destrucción. Los evangelios registran la profecía de Jesús sobre la segunda: "No quedará piedra sobre piedra."

En la imaginación profética, Jerusalén es también una ciudad futura. Isaías habla de un tiempo cuando todas las naciones subirán a Jerusalén para aprender los caminos de Dios. El libro del Apocalipsis termina con la "nueva Jerusalén" descendiendo del cielo — la ciudad que no es un lugar donde ir sino una realidad que viene a la tierra. El arco narrativo completo de la Biblia tiene su clímax aquí.`,
  verses: ["Salmos 122:1-2", "Isaías 2:2-4", "Lucas 19:41-44", "Apocalipsis 21:2"],
},

"galilea": {
  term: "Galilea",
  type: "Lugar",
  short: "La región del norte de Israel, considerada periférica y culturalmente mezclada — exactamente donde Jesús creció y comenzó su ministerio.",
  body: `Galilea era el "norte pobre" de Israel. Estaba rodeada de población gentil, lo que llevaba a que sus habitantes fueran vistos con cierto desprecio por los judíos del sur (especialmente de Judea y Jerusalén). Cuando Natanael escucha que Jesús es de Nazaret, pregunta: "¿De Nazaret puede salir algo bueno?"

La economía de Galilea dependía principalmente de la pesca en el mar de Galilea y de la agricultura. Era una región bajo fuerte influencia cultural griega y romana, lo que la hacía sospechosa para los guardianes de la pureza judía. El término "galileo" tenía connotaciones de segundo nivel, de periferia.

Que Jesús eligiera Galilea como punto de partida para su ministerio no fue accidental. Marcos 1:14 dice que comenzó a predicar en Galilea después del arresto de Juan el Bautista. Isaías 9:1 profetizó: "Galilea de los gentiles, el pueblo que andaba en tinieblas vio gran luz." Mateo cita este texto explícitamente (4:15-16) al describir el comienzo del ministerio de Jesús. El Mesías llega desde el margen, no desde el centro.`,
  verses: ["Mateo 4:12-17", "Juan 1:46", "Isaías 9:1-2", "Hechos 1:11"],
},

// ─── PALABRAS QUE APARECEN EN EL TEXTO Y NADIE EXPLICA ─────────────────────

"amén": {
  term: "Amén",
  type: "Palabra bíblica",
  short: "Del hebreo 'amen' — 'así es', 'firme', 'verdadero'. No es solo el cierre de una oración — es una declaración de acuerdo con lo que se acaba de decir.",
  body: `"Amén" viene de la raíz hebrea 'aman', que significa algo firme, sólido, confiable. Cuando Israel respondía "amén" al final de una oración o bendición, estaba diciendo: 'Esto es verdad. Estoy de acuerdo. Que sea así.'

En griego y latín se tomó la palabra directamente del hebreo sin traducirla — lo que indica que los primeros creyentes la consideraban tan precisa que no había equivalente.

Jesús hace algo único: usa "amén" al INICIO de sus afirmaciones, no al final. Las versiones en español traducen 'En verdad os digo...' o 'De cierto os digo...', pero el original dice 'Amén, amén, os digo.' Usarlo antes de hablar — en lugar de después — era afirmar la verdad de algo que todavía no se había dicho. Nadie hacía eso antes.`,
  verses: ["Mateo 5:18", "Juan 3:3", "Apocalipsis 22:20"],
},

"aleluya": {
  term: "Aleluya",
  type: "Palabra bíblica",
  short: "Hebreo: '¡Alabad a Yahweh!' — una exclamación de adoración que aparece en los Salmos y llega hasta el cielo en el Apocalipsis.",
  body: `"Aleluya" = "Hallelu-Yah" en hebreo: "Hallelu" es imperativo plural de "alabar", y "Yah" es el nombre de Dios (Yahweh). Literalmente: "¡Alaben a Yahweh!"

Los salmos 113-118 son los "salmos del Hallel" — los que Israel cantaba en la Pascua. Jesús y sus discípulos probablemente cantaron algunos de estos salmos al final de la última cena (Marcos 14:26 dice "después de haber cantado el himno").

El Apocalipsis usa "aleluya" cuatro veces — todas en el capítulo 19, en el contexto de una gran celebración celestial. Es la única vez que aparece la palabra en el Nuevo Testamento, y proviene directamente del hebreo sin traducción.`,
  verses: ["Salmos 113:1", "Salmos 118:1", "Apocalipsis 19:1-6"],
},

"hosanna": {
  term: "Hosanna",
  type: "Palabra bíblica",
  short: "Hebreo: '¡Sálvanos, te rogamos!' — un grito de petición que se había convertido en grito de bienvenida al rey esperado.",
  body: `"Hosanna" viene del hebreo "hoshi'a na" — "sálvanos, te rogamos." Originalmente era una petición urgente de socorro. El Salmo 118:25 lo usa en ese sentido: "Hosanna; oh Jehová, te ruego que nos salves ahora."

Con el tiempo, en la tradición judía, la palabra dejó de ser solo un ruego y se convirtió en una aclamación — la forma de recibir a un rey o a alguien que trae salvación. Era el equivalente de "¡Viva el rey!" mezclado con "¡Por fin llegó el que nos salva!"

Cuando la multitud grita "hosanna" al entrar Jesús en Jerusalén y lo llama "Hijo de David", están usando ese doble sentido deliberadamente: están aclamándolo como el rey prometido. Los líderes religiosos lo entienden perfectamente — por eso se incomodan.`,
  verses: ["Marcos 11:9-10", "Mateo 21:9", "Salmos 118:25-26"],
},

"abba": {
  term: "Abba",
  type: "Palabra bíblica",
  short: "Palabra aramea para 'padre' — pero en el registro íntimo, como 'papá', no el formal 'padre'. La palabra que Jesús usa cuando ora solo en Getsemaní.",
  body: `El arameo era la lengua cotidiana de Israel en el siglo I. "Abba" era la forma informal y afectuosa de llamar al padre — más cercano a "papá" que a "padre." Los niños pequeños usaban esta palabra. No era irrespetuosa — era íntima.

Marcos 14:36 registra la oración de Jesús en Getsemaní en el original arameo: "Abba, Padre, todas las cosas son posibles para ti; aparta de mí esta copa." Es uno de los momentos más crudamente humanos de los evangelios — y el evangelista preserva la palabra aramea original.

Pablo usa la misma palabra dos veces (Romanos 8:15, Gálatas 4:6) para describir la relación que los seguidores de Jesús tienen con Dios. Que Dios pueda ser llamado "Abba" — con esa cercanía — era algo escandaloso en el judaísmo del siglo I, donde el nombre de Dios ni siquiera se pronunciaba.`,
  verses: ["Marcos 14:36", "Romanos 8:15", "Gálatas 4:6"],
},

"unigénito": {
  term: "Unigénito",
  type: "Concepto bíblico",
  short: "Del griego 'monogenes' — único en su clase, sin par. No simplemente 'hijo único' sino el único ser de esa naturaleza.",
  body: `"Unigénito" traduce la palabra griega "monogenes": "mono" (uno, solo) + "genos" (clase, naturaleza, origen). No significa simplemente que no hay más hijos — significa que hay un solo ser de esa clase particular.

Juan usa esta palabra cinco veces, siempre refiriéndose a Jesús. En Juan 1:14 y 1:18, la ubica en el contexto del prólogo: el Logos, el Verbo que estaba con Dios y era Dios, se hizo carne — y es el "unigénito del Padre."

En Juan 3:16 la palabra aparece en el versículo más conocido de la Biblia: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito." La entrega del "unigénito" — del único en su clase — es la medida del amor descrito.`,
  verses: ["Juan 1:14", "Juan 3:16", "Juan 3:18", "1 Juan 4:9"],
},

"sanedrin": {
  term: "Sanedrín",
  type: "Institución del siglo I",
  short: "El consejo supremo de Israel — 71 miembros presididos por el Sumo Sacerdote. Tenía autoridad religiosa, legal y limitada autoridad política bajo Roma.",
  body: `El Sanedrín era la máxima institución de gobierno judío bajo la ocupación romana. Lo integraban 71 miembros: el Sumo Sacerdote como presidente, los principales sacerdotes, los ancianos y los escribas. Los saduceos dominaban los cargos de poder; los fariseos tenían influencia pero no control.

Roma les permitía gobernar los asuntos internos judíos — religiosos, civiles, penales — con una excepción crucial: no podían ejecutar a nadie. Para eso necesitaban aprobación romana. Por eso Jesús, condenado por el Sanedrín, es llevado ante Pilato: ellos pueden juzgar pero no matar.

Nicodemo era miembro del Sanedrín, lo que hace su visita nocturna a Jesús especialmente significativa. En Juan 7, cuando el Sanedrín quiere arrestar a Jesús, es Nicodemo quien toma la palabra en su defensa: "¿Acaso nuestra ley juzga a un hombre si primero no lo oye?"`,
  verses: ["Juan 3:1", "Juan 7:50-51", "Marcos 14:53-55", "Hechos 5:27"],
},

"tentación": {
  term: "Tentación",
  type: "Concepto bíblico",
  short: "En griego 'peirasmos' — puede significar tanto 'tentación' (atracción al mal) como 'prueba' (situación que pone a prueba la firmeza). El contexto determina cuál es.",
  body: `La misma palabra griega "peirasmos" y el verbo "peirazo" se usan para dos situaciones distintas: Abraham siendo probado en Génesis 22 (prueba de fidelidad) y Jesús siendo tentado en el desierto (atracción a tomar el camino fácil). La distinción es importante.

En el Padrenuestro, "no nos metas en tentación" traduce "no nos hagas entrar en peirasmos." La oración no pide que Dios nos proteja de toda prueba sino de situaciones que nos superen — tentaciones que no podamos manejar.

Santiago 1 hace una distinción clave: "Nadie diga cuando es tentado: Soy tentado de parte de Dios; porque Dios no puede ser tentado por el mal, ni él tienta a nadie." Dios no atrae hacia el mal. Sí permite pruebas. La diferencia importa.`,
  verses: ["Mateo 4:1-11", "Mateo 6:13", "Santiago 1:13-14", "Hebreos 4:15"],
},

"gehena": {
  term: "Gehena",
  type: "Concepto bíblico",
  short: "La palabra que Jesús usa cuando habla del 'infierno' — literalmente el Valle de Hinom, el basurero en llamas afuera de Jerusalén.",
  body: `Cuando Jesús advierte sobre el "infierno", la palabra griega original en la mayoría de los casos es "gehena" — no "hades" ni "tártaro." Gehena viene del hebreo "Ge Hinnom" — el Valle de Hinom, un barranco al sur de Jerusalén.

En la historia de Israel, este valle fue el lugar donde algunos reyes israelitas hicieron sacrificios de niños a dioses paganos. Después, fue usado como basurero de la ciudad: fuegos constantes para quemar basura y animales muertos. En tiempos de Jesús, era un símbolo muy concreto y local de destrucción y abandono.

Jesús usa "gehena" doce veces en los evangelios. Para su audiencia judía, no era un concepto abstracto — era un lugar que conocían, que podían ver desde la muralla de Jerusalén. El punto de sus advertencias no era la geografía sino la seriedad: hay decisiones y direcciones de vida que llevan hacia un final como la gehena — el basurero de la historia.`,
  verses: ["Mateo 5:22", "Mateo 10:28", "Marcos 9:43-47", "Santiago 3:6"],
},

"propiciación": {
  term: "Propiciación",
  type: "Concepto teológico",
  short: "La cubierta del Arca del Pacto — el 'trono de gracia' donde la sangre era rociada en el Día de la Expiación. Pablo dice que Jesús es la nueva propiciación.",
  body: `La palabra griega "hilasterion" se usa en el Antiguo Testamento griego (Septuaginta) para el "kapporet" hebreo — la cubierta de oro del Arca del Pacto. Era el objeto más sagrado de Israel: allí el Sumo Sacerdote rociaba sangre una vez al año en el Día de la Expiación.

Romanos 3:25 dice que Dios puso a Jesús como "propiciación por medio de la fe en su sangre." No es solo una metáfora — Pablo está diciendo que Jesús es el nuevo lugar donde la presencia de Dios y el perdón del pecado se encuentran. Lo que el kapporet era en el Templo, Jesús lo es ahora.

La diferencia es radical: el kapporet requería que el Sumo Sacerdote entrara al Lugar Santísimo una vez al año con sangre de animales. Jesús — según la carta a los Hebreos — entró "una vez para siempre" con su propia sangre a la presencia de Dios.`,
  verses: ["Romanos 3:25", "1 Juan 2:2", "Hebreos 9:5", "Levítico 16:14"],
},

"reconciliación": {
  term: "Reconciliación",
  type: "Concepto teológico",
  short: "Restaurar una relación rota a su estado original — de enemigos a amigos, de alejados a unidos. Una de las imágenes centrales de Pablo para describir lo que ocurrió en la muerte de Jesús.",
  body: `Reconciliación ocurre cuando dos partes que estaban en conflicto o separadas vuelven a estar en paz. No es que el conflicto nunca existió — es que fue resuelto. La palabra implica que había una ruptura real y que se hizo algo concreto para sanarla.

Romanos 5:10-11 es el texto clave: "Porque si siendo enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, mucho más, estando reconciliados, seremos salvos por su vida." Pablo describe el estado anterior como "enemigos" — no simplemente "distantes" sino en conflicto activo.

2 Corintios 5:18-20 añade una dimensión inesperada: los que han sido reconciliados reciben "el ministerio de la reconciliación." La reconciliación no termina en quien la recibe — se convierte en misión. El "embajador" que Pablo describe en ese texto es alguien cuya tarea principal es transmitir la oferta de reconciliación a otros.`,
  verses: ["Romanos 5:10-11", "2 Corintios 5:18-20", "Efesios 2:16", "Colosenses 1:20"],
},

"querubines": {
  term: "Querubines",
  type: "Concepto bíblico",
  short: "Seres celestiales que guardan la presencia de Dios — no los bebés con alas de la pintura renacentista sino criaturas poderosas de múltiples aspectos.",
  body: `Los querubines aparecen por primera vez en Génesis 3:24: Dios coloca querubines y una espada giratoria de fuego para guardar el camino al árbol de la vida después de la caída. Son guardianes de lo sagrado, no decoración angelical.

En Éxodo 25, Dios le da a Moisés instrucciones para hacer dos querubines de oro sobre la cubierta del Arca del Pacto. Sus alas extendidas cubrían el "trono de gracia" — el lugar de la presencia de Dios. El lugar era tan sagrado que nadie podía tocarlo sin morir.

La visión de Ezequiel (capítulo 1 y 10) describe a los querubines con cuatro rostros (hombre, león, toro, águila), cuatro alas y ruedas llenas de ojos. Son criaturas de otro orden de existencia. La iconografía de bebés alados viene de la mitología grecorromana y no tiene base bíblica.`,
  verses: ["Génesis 3:24", "Éxodo 25:18-22", "Ezequiel 10:1-4", "Salmos 80:1"],
},

"levitas": {
  term: "Levitas",
  type: "Grupo bíblico",
  short: "La tribu de Leví, dedicada al servicio del Tabernáculo y el Templo — sin heredad de tierra porque Dios era su herencia.",
  body: `Israel tenía doce tribus, cada una con su porción de tierra en Canaán — excepto la tribu de Leví. Los levitas no recibieron territorio: estaban distribuidos por todas las demás tribus y su función era el servicio religioso. Números 18:20 registra la razón: "Yo soy tu parte y tu heredad en medio de los hijos de Israel."

Dentro de los levitas había una distinción: solo los descendientes específicos de Aarón podían ser sacerdotes (kohanim). Los demás levitas asistían en el Templo — cargaban el Tabernáculo en el desierto, cuidaban los utensilios, cantaban, hacían guardia. Eran la infraestructura humana del culto israelita.

En la parábola del buen samaritano, Jesús menciona a un sacerdote y a un levita que pasan de largo. Para su audiencia judía, estos eran los representantes más visibles de la institución religiosa — los que más "deberían" haberles ayudado.`,
  verses: ["Números 1:47-54", "Deuteronomio 18:1-2", "Lucas 10:32", "Juan 1:19"],
},

"firmamento": {
  term: "Firmamento",
  type: "Concepto del AT",
  short: "En Génesis 1, el 'raqia' hebreo — la expansión que Dios crea para separar las aguas de arriba de las aguas de abajo. La bóveda visible del cielo.",
  body: `En Génesis 1:6-8, Dios dice "haya expansión en medio de las aguas" y la llama "cielos." La palabra hebrea "raqia" viene de una raíz que significa extender, golpear o aplanar — como cuando se extiende metal a golpes. En el contexto de la cosmología del mundo antiguo, era la bóveda visible que separaba las aguas.

La cosmología del mundo antiguo entendía el universo en capas: aguas debajo de la tierra, la tierra sólida en el centro, el firmamento arriba de la tierra (donde están el sol, la luna y las estrellas), y aguas arriba del firmamento. El texto de Génesis usa este marco del mundo antiguo sin contradecirlo ni confirmarlo como ciencia — lo usa para decir algo sobre quién organizó el cosmos.

El punto teológico no es la estructura física del universo sino quién la hizo y por qué: no el conflicto de dioses sino la palabra de un solo Dios que crea con intención.`,
  verses: ["Génesis 1:6-8", "Salmos 19:1", "Ezequiel 1:22"],
},

"abismo": {
  term: "Abismo / Las profundidades",
  type: "Concepto del AT",
  short: "El 'tehom' hebreo — las aguas caóticas oscuras que existían antes de la creación. Símbolo del caos que precede al orden divino.",
  body: `Génesis 1:2 describe el estado antes de que Dios hablara: "la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo." La palabra hebrea "tehom" — traducida como "abismo" o "las profundidades" — es cognada del Tiamat del mito babilónico: el monstruo del caos primordial.

El punto no es que Génesis sea el mismo mito que el Enuma Elish. El punto es que usa el mismo vocabulario del caos que sus lectores conocían — para decir algo diferente: Dios no luchó contra el caos para crear. Simplemente habló.

El abismo aparece en otros textos bíblicos como imagen del límite de lo conocido, la profundidad inaccesible, el lugar sin orden. En los Salmos, hundirse en el abismo es la imagen del sufrimiento extremo. Cuando Jonás cae al mar, usa el vocabulario del tehom (Jonás 2:5): "Las aguas me rodearon hasta el alma, el abismo me rodeó."`,
  verses: ["Génesis 1:2", "Jonás 2:5", "Salmos 42:7", "Apocalipsis 9:1-2"],
},

// ─── ENTRADA FALTANTE ────────────────────────────────────────────────────────

"sabiduría": {
  term: "Sabiduría",
  type: "Concepto bíblico",
  short: "En la Biblia, no es inteligencia ni conocimiento acumulado — es el arte de vivir en armonía con la realidad tal como Dios la diseñó.",
  body: `El libro de Proverbios abre con una declaración: 'El principio de la sabiduría es el temor de Jehová.' 'Temor' aquí no es miedo sino reconocimiento — tomar en serio que hay un orden en la realidad y que no somos nosotros quienes lo inventamos.

La sabiduría bíblica es práctica, no abstracta. Observa cómo funcionan las cosas: cómo las relaciones se construyen o se destruyen, cómo las palabras tienen consecuencias, cómo la pereza o la disciplina se acumulan con el tiempo. Es la acumulación de observaciones sobre la vida real.

En el Nuevo Testamento, Pablo llama a Jesús 'sabiduría de Dios' (1 Corintios 1:24). Juan lo llama 'el Verbo' — el Logos, la razón que organiza el universo. La idea es que la sabiduría que los sabios buscaban durante siglos tiene un rostro.`,
  verses: ["Proverbios 1:7", "Proverbios 3:5-6", "Job 28:28", "1 Corintios 1:24"],
},

// ─── PALABRAS DEL TEXTO QUE NADIE EXPLICA (RONDA 2) ─────────────────────────

"misericordia": {
  term: "Misericordia",
  type: "Concepto central",
  short: "El 'hesed' hebreo — lealtad de pacto, amor fiel que no abandona. La palabra más usada en los Salmos para describir cómo actúa Dios.",
  body: `La palabra que las Biblias en español traducen como "misericordia" es en hebreo "hesed" — un concepto que los traductores han luchado por siglos para capturar. No es simplemente compasión emocional. Es la lealtad activa de alguien que ha hecho una promesa y la cumple aunque no esté obligado.

El Salmo 136 repite 26 veces la misma frase: "porque para siempre es su misericordia." El ritmo deliberado dice algo: no es un sentimiento que varía según el día — es una característica estructural de quién es Dios.

En el Nuevo Testamento, la palabra griega "eleos" traduce el hesed hebreo. Aparece cuando Jesús sana a ciegos que gritan "¡Señor, ten misericordia de nosotros!" (Mateo 9:27). Y cuando María canta en el Magnificat que "su misericordia es de generación en generación" — ella está diciendo que el hesed del AT y el nuevo nacimiento son el mismo Dios siendo consistente consigo mismo.`,
  verses: ["Salmos 136:1", "Lucas 1:50", "Mateo 5:7", "Hebreos 4:16"],
},

"gloria": {
  term: "Gloria",
  type: "Concepto central",
  short: "En hebreo 'kavod' — literalmente 'peso', 'gravedad'. La presencia visible y abrumadora de Dios que nadie puede ver sin caer.",
  body: `La raíz de la palabra hebrea "kavod" (gloria) significa peso, densidad, algo que tiene sustancia. Cuando Dios llena el Tabernáculo con su gloria (Éxodo 40:34-35), Moisés no puede entrar — la gloria de Dios lo llena completamente. No es luz decorativa: es presencia tan real que excluye todo lo demás.

Juan usa la palabra griega "doxa" en el prólogo de su evangelio: "vimos su gloria, gloria como del unigénito del Padre." Está diciendo que la presencia visible de Dios que llenó el Tabernáculo ahora habita en una persona.

Pablo en 2 Corintios habla de "la gloria de Dios en el rostro de Jesucristo" — y luego de que esa misma gloria se refleja en quienes lo siguen, "de gloria en gloria." La gloria no es algo reservado para visiones extraordinarias: en Pablo, es la transformación progresiva del carácter.`,
  verses: ["Éxodo 40:34-35", "Juan 1:14", "2 Corintios 3:18", "Salmos 19:1"],
},

"selah": {
  term: "Selah",
  type: "Término litúrgico",
  short: "Aparece 71 veces en los Salmos. Nadie sabe con certeza qué significa — posiblemente una pausa musical, una instrucción para levantar la voz, o un momento de silencio.",
  body: `"Selah" aparece 71 veces en los Salmos y 3 en Habacuc. La palabra no se tradujo a ningún idioma — se preservó en hebreo en todas las traducciones antiguas, lo que indica que los traductores tampoco sabían exactamente qué significaba.

Las teorías más aceptadas: (1) es una instrucción musical, como "pausa aquí" o "aumenta el volumen", similar a las notas dinámicas en una partitura moderna; (2) es un llamado a la congregación a que reflexione o responda lo que acaba de escuchar; (3) es un término que los cantores del Templo entendían y que se perdió con la destrucción del Templo.

Lo que sí es significativo es dónde aparece: generalmente después de afirmaciones importantes o de cambios emocionales fuertes. En el Salmo 46:7 "Jehová de los ejércitos está con nosotros" — Selah. Como si el texto dijera: detente aquí un momento. Deja que eso llegue.`,
  verses: ["Salmos 46:7", "Salmos 3:2", "Habacuc 3:3"],
},

"primogénito": {
  term: "Primogénito",
  type: "Concepto bíblico",
  short: "El primer hijo varón — en el mundo antiguo tenía derechos legales especiales: doble herencia y liderazgo de la familia. Un título con peso legal y simbólico enorme.",
  body: `En el mundo antiguo, el primogénito no era solo el hijo mayor — tenía el derecho de la primogenitura: doble porción de la herencia, autoridad sobre los hermanos, y la responsabilidad de cuidar a la madre viuda. Era una posición legal específica, no solo cronológica.

Las historias del Génesis giran en torno a este concepto: Esaú vende su primogenitura por un plato de lentejas, Jacob le roba la bendición a su padre ciego. Lo que está en juego en esas historias es mucho más que un asunto familiar — es quién llevará la línea del pacto.

El Nuevo Testamento aplica el título a Jesús de maneras específicas. En Lucas 2:7, es el "primogénito" de María — lo que activa las normas de purificación y presentación en el Templo. En Colosenses 1:15 es "el primogénito de toda la creación" — no que fue creado sino que tiene la preeminencia sobre todo lo creado. En Romanos 8:29 es "el primogénito entre muchos hermanos."`,
  verses: ["Lucas 2:7", "Colosenses 1:15", "Romanos 8:29", "Éxodo 13:2"],
},

"maná": {
  term: "Maná",
  type: "Concepto del AT",
  short: "El alimento que apareció en el desierto durante 40 años para Israel — que en el siglo I Jesús usa como imagen para hablar de sí mismo.",
  body: `Éxodo 16 describe lo que encontraron los israelitas una mañana en el desierto: algo blanco, fino como escarcha, sobre el suelo. Lo llamaron "maná" — posiblemente del hebreo "man hu?" que significa "¿qué es esto?" El texto lo describe como semilla de cilantro, blanco, con sabor a tortas con miel.

El maná tenía reglas específicas: solo podías recoger lo de ese día (excepto el sábado, donde recogías el doble el día anterior). Si intentabas guardar más de lo necesario, se pudrí. Era el anti-acumulación: vivir confiando en el suministro diario, sin stockpile de seguridad.

Jesús toma esta imagen en Juan 6 después de alimentar a cinco mil personas. Le dicen: "Moisés nos dio maná en el desierto." Jesús responde: "No fue Moisés quien os dio el pan del cielo, sino mi Padre." Y luego: "Yo soy el pan de vida." El maná de Éxodo era la anticipación; ahora llegó lo que anticipaba.`,
  verses: ["Éxodo 16:14-35", "Juan 6:31-35", "Números 11:7-9", "Apocalipsis 2:17"],
},

"altar": {
  term: "Altar",
  type: "Práctica bíblica",
  short: "Una estructura — de piedra, tierra o metal — sobre la que se hacían ofrendas a Dios. El punto físico donde lo humano y lo divino se encontraban en el mundo antiguo.",
  body: `Los altares aparecen desde las primeras páginas de la Biblia. Noé construye uno al salir del arca. Abraham construye altares en cada parada de su viaje: en Siquem, entre Bet-el y Hai, en Hebrón. No son monumentos ni templos — son señales de presencia, de "aquí Dios habló."

En el sistema que Dios le da a Moisés, el Tabernáculo tiene dos altares con funciones distintas: el altar de bronce afuera (para los holocaustos — las ofrendas que se quemaban completamente) y el altar de oro adentro (para el incienso — quemado dos veces al día). Cada uno con rituales específicos, materiales específicos, y funciones específicas.

Cuando el Nuevo Testamento habla de altares, generalmente es en referencia al Templo o como imagen. La carta a los Hebreos dice que los seguidores de Jesús "tenemos un altar" — refiriéndose a Cristo mismo como el lugar donde la relación con Dios se restaura.`,
  verses: ["Génesis 8:20", "Génesis 12:7", "Éxodo 27:1-2", "Hebreos 13:10"],
},

"holocausto": {
  term: "Holocausto",
  type: "Práctica bíblica",
  short: "Del hebreo 'olah' — 'lo que sube'. Un sacrificio que se quemaba completamente, sin reservar nada para el sacerdote ni para quien lo ofrecía. Representaba dedicación total.",
  body: `A diferencia de otros tipos de ofrenda donde el sacerdote o el oferente comían parte del animal, en el holocausto todo se consumía por el fuego. Nada quedaba. Por eso la raíz del nombre: "olah" — lo que sube, lo que asciende completamente en humo.

Este tipo de ofrenda era para dedicación total, no para pecados específicos. Un israelita ofrecía un holocausto como expresión de consagración completa a Dios. Levítico 1 da las instrucciones detalladas: el animal debía ser sin defecto, el oferente ponía su mano sobre la cabeza del animal (identificándose con él), y luego el sacerdote quemaba todo sobre el altar.

Cuando en Génesis 22 Dios le pide a Abraham que ofrezca a Isaac, usa la palabra "holocausto." Isaac mismo pregunta: "¿Dónde está el cordero para el holocausto?" La tensión del relato depende de entender qué tipo de sacrificio Dios estaba pidiendo — uno de total entrega, sin retener nada.`,
  verses: ["Génesis 22:2", "Levítico 1:3-9", "Marcos 12:33", "Hebreos 10:6"],
},

"gentiles": {
  term: "Gentiles / Las naciones",
  type: "Concepto bíblico",
  short: "Los pueblos que no son judíos — una categoría que en el Nuevo Testamento se convierte en el centro del debate más importante de la iglesia primitiva.",
  body: `"Gentiles" traduce el hebreo "goyim" (naciones) y el griego "ethne" (pueblos, etnias). En el AT, a veces es neutral — "todas las naciones de la tierra serán benditas en Abraham" — y a veces marca una distinción entre Israel y los demás.

En el Nuevo Testamento, la palabra se vuelve el eje de la historia de Hechos. La pregunta que ocupa los capítulos 10 al 15 es: ¿puede un gentil ser seguidor de Jesús sin convertirse primero al judaísmo? La visión de Pedro en Hechos 10, la conversión del centurión Cornelio, el concilio de Jerusalén en Hechos 15 — todo gira alrededor de esta pregunta.

Pablo se llama a sí mismo "apóstol de los gentiles." En Efesios 2 describe lo que ocurrió: los gentiles, que estaban "sin Cristo, alejados de la ciudadanía de Israel y ajenos a los pactos de la promesa," ahora están incluidos. La "pared intermedia de separación" fue derribada. Para Pablo, la inclusión de los gentiles en el pueblo de Dios era el cumplimiento de la promesa original a Abraham.`,
  verses: ["Génesis 12:3", "Hechos 10:34-35", "Romanos 1:16", "Efesios 2:11-13"],
},

"carne": {
  term: "Carne (en Pablo)",
  type: "Concepto teológico",
  short: "En el lenguaje de Pablo, 'carne' no es el cuerpo físico sino la naturaleza humana funcionando de espaldas a Dios — los recursos puramente humanos como punto de referencia.",
  body: `Cuando Pablo escribe "los que viven según la carne" o "las obras de la carne", no está hablando del cuerpo físico. En griego usa "sarx" — que puede significar carne física pero en Pablo tiene un uso técnico: la orientación del ser humano que toma como punto de referencia las cosas meramente humanas.

Gálatas 5:19-21 lista las "obras de la carne": incluyen idolatría, hechicería, enemistades, divisiones, contiendas. No son todas sensuales — muchas son actitudes intelectuales o sociales. Lo que tienen en común es que nacen de lo puramente humano sin referencia a Dios.

El contraste de Pablo no es carne/espíritu en el sentido de cuerpo/alma — como en la filosofía griega donde el cuerpo es malo y el alma es buena. En Pablo, el cuerpo puede ser templo del Espíritu (1 Corintios 6:19). El problema no es el cuerpo sino la orientación: vivir "según la carne" es poner el yo humano en el centro en lugar de Dios.`,
  verses: ["Romanos 8:5-8", "Gálatas 5:16-17", "Juan 1:14", "1 Corintios 6:19"],
},

"adopción": {
  term: "Adopción",
  type: "Concepto teológico",
  short: "Pablo usa el término legal romano de adopción para describir lo que ocurre cuando alguien entra en relación con Dios — con todos los derechos de un hijo legítimo, incluyendo la herencia.",
  body: `En la ley romana, la adopción tenía plena fuerza legal. El hijo adoptado recibía exactamente los mismos derechos que un hijo biológico: el nombre del padre, protección legal, y — crucialmente — la herencia completa. No era ciudadanía de segunda clase.

Pablo usa esta imagen en Romanos 8:15: "No habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!" El contraste es entre dos estatus: esclavo (que obedece por miedo y no hereda) e hijo adoptado (que pertenece a la familia y heredará).

Gálatas 4:4-7 desarrolla la imagen: Dios envió a su Hijo "para que recibiésemos la adopción de hijos." El cambio de estatus es completo — de "bajo tutela" a "heredero." Pablo dice explícitamente: "ya no eres esclavo sino hijo; y si hijo, también heredero de Dios por medio de Cristo."`,
  verses: ["Romanos 8:15-17", "Gálatas 4:4-7", "Efesios 1:5", "Juan 1:12"],
},

"herencia": {
  term: "Herencia",
  type: "Concepto bíblico",
  short: "Lo que se recibe por ser hijo — no por mérito ni trabajo. Un hilo que va desde la tierra prometida a Abraham hasta 'heredar el reino de Dios' en el Nuevo Testamento.",
  body: `La herencia en la Biblia comienza con la tierra. Dios promete a Abraham una tierra específica para sus descendientes — esa tierra es la "herencia" de Israel. Cuando Josué la conquista, distribuye la tierra como "herencias" por tribu y familia. La tierra no se gana: se hereda.

El concepto se amplía progresivamente. Los Salmos hablan de "heredar la tierra" (Salmo 37:11 — la misma frase que usa Jesús en las Bienaventuranzas). En el Nuevo Testamento, "heredar el reino de Dios" aparece varias veces. El punto: la relación con Dios no se gana como un salario — se recibe como una herencia.

Romanos 8:17 conecta herencia con adopción: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo." Los seguidores de Jesús no son empleados de Dios que reciben pago por servicio — son hijos adoptados que comparten la herencia del hijo.`,
  verses: ["Romanos 8:17", "Gálatas 3:29", "Mateo 5:5", "1 Pedro 1:4"],
},

"intercesión": {
  term: "Intercesión",
  type: "Concepto bíblico",
  short: "Hablar en nombre de alguien ante otro — ponerse entre dos partes para abogar por una de ellas. Moisés lo hace por Israel, Jesús por sus seguidores, el Espíritu por nosotros.",
  body: `Interceder es ponerse entre dos partes y hablar en nombre de una ante la otra. Abraham intercede por Sodoma (Génesis 18): camina hacia abajo gradualmente — "¿y si hay 50 justos? ¿y si hay 45?..." hasta llegar a diez. Es la imagen de alguien que usa su relación con el poderoso para abogar por el vulnerable.

Moisés es el gran intercesor del AT. Después del pecado del becerro de oro, Dios dice que destruirá a Israel y hará una nueva nación con Moisés. La respuesta de Moisés es interceder: "Te ruego que perdones ahora el pecado de este pueblo... y si no, bórrame de tu libro" (Éxodo 32:32).

Romanos 8:26-27 dice que el Espíritu Santo intercede por los creyentes "con gemidos indecibles." Hebreos 7:25 dice que Jesús "vive siempre para interceder" por quienes se acercan a Dios a través de él. La intercesión no es un extra devocional — es una función estructural en la relación entre Dios y los humanos tal como el Nuevo Testamento la describe.`,
  verses: ["Génesis 18:23-32", "Romanos 8:26-27", "Hebreos 7:25", "1 Timoteo 2:1"],
},

"siervo": {
  term: "Siervo",
  type: "Concepto bíblico",
  short: "En hebreo 'eved' — puede significar esclavo o servidor. Pero 'siervo de Dios' era un título de honor: Moisés, David, los profetas y el Mesías son llamados así.",
  body: `La palabra hebrea "eved" cubre un rango amplio: desde el esclavo que trabaja forzado hasta el servidor de confianza de un rey. En el mundo antiguo no había ambigüedad moral — la esclavitud existía. Pero "eved Elohim" (siervo de Dios) era un título de honor específico.

Los grandes personajes del AT son llamados siervos de Dios: Moisés es "mi siervo Moisés" (Números 12:7). David es "mi siervo David." Los profetas son "mis siervos los profetas." Ser llamado siervo de Dios no era denigración — era identificación con la misión de Dios.

Isaías 53 describe al "Siervo Sufriente" — una figura que sufre por otros, que "cargó con los pecados de muchos." En el NT, Jesús aplica este texto a sí mismo. Marcos 10:44-45 muestra a Jesús diciéndolo directamente: "El que quiera ser el primero entre vosotros será esclavo de todos. Porque el Hijo del Hombre no vino para ser servido, sino para servir."`,
  verses: ["Isaías 53:11", "Marcos 10:44-45", "Filipenses 2:7", "Mateo 12:18"],
},

"sanidad": {
  term: "Sanidad / Sanar",
  type: "Concepto bíblico",
  short: "En los evangelios, la curación de enfermos es la actividad más frecuente de Jesús — y el texto la presenta como señal de que el Reino de Dios está llegando, no solo como compasión médica.",
  body: `Alrededor del 40% del Evangelio de Marcos son historias de sanidades. Ciegos que ven, sordos que oyen, leprosos que quedan limpios, paralíticos que caminan, muertos que resucitan. No son intercaladas entre enseñanzas como ilustraciones — son el contenido principal del ministerio de Jesús.

Isaías 35:5-6 describió lo que ocurriría cuando llegara la salvación de Dios: "Entonces los ojos de los ciegos serán abiertos, y los oídos de los sordos se abrirán. Entonces el cojo saltará como un ciervo, y la lengua del mudo cantará." Cuando Juan el Bautista pregunta desde la cárcel si Jesús es el que debe venir, Jesús responde citando exactamente esa lista (Lucas 7:22). Las sanidades son el recibo que confirma que el Reino prometido ha llegado.

La palabra griega "sozo" — que se traduce como "sanar" o "salvar" según el contexto — es la misma en ambos casos. Cuando Jesús sana a alguien, frecuentemente dice "tu fe te ha salvado/sanado." El texto no distingue tajantemente entre ambas dimensiones.`,
  verses: ["Marcos 1:34", "Lucas 7:22", "Isaías 35:5-6", "Marcos 5:34"],
},

"ira": {
  term: "Ira de Dios",
  type: "Concepto bíblico",
  short: "En el Nuevo Testamento, la 'ira de Dios' no es explosión emocional divina sino la consecuencia estructural de rechazar el orden para el que los seres humanos fueron diseñados.",
  body: `Romanos 1:18 dice: "La ira de Dios se revela desde el cielo contra toda impiedad e injusticia de los hombres." Lo que sigue es una descripción de cómo Dios "los entregó" — los dejó en las consecuencias de sus elecciones. No hay fuego del cielo ni intervención catastrófica: Dios simplemente deja de sostener lo que él había sostenido.

La ira bíblica de Dios es en su mayor parte impersonal y estructural — es lo que ocurre cuando la creación funciona sin el Creador. Es similar a lo que le pasa a un pez fuera del agua: no es que el agua esté enojada con el pez, pero el pez no puede funcionar sin ella. El rechazo de Dios tiene consecuencias reales y progresivas.

En el AT, "ira" aparece frecuentemente en contextos de violación de pacto — cuando Israel abandona lo que acordó con Dios. Nunca es caprichosa. Los profetas frecuentemente advierten la ira como consecuencia lógica de un camino específico. Y siempre viene acompañada de la posibilidad de cambio de dirección.`,
  verses: ["Romanos 1:18-24", "Juan 3:36", "Romanos 5:9", "Efesios 2:3"],
},

"santidad": {
  term: "Santidad / Santo",
  type: "Concepto central",
  short: "Del hebreo 'kadosh' — separado, diferente, otro. La santidad no es principalmente un atributo moral sino una cualidad de ser radicalmente distinto a todo lo ordinario.",
  body: `La raíz hebrea "kadosh" significa "cortado" o "separado" — algo que ha sido apartado de lo ordinario para un propósito específico. Cuando la Biblia llama a Dios "santo" tres veces seguidas ("Santo, santo, santo" en Isaías 6 y Apocalipsis 4), no está repitiendo un adjetivo moral: está afirmando que Dios está en una categoría completamente distinta a todo lo que existe.

Los objetos del Tabernáculo eran "santos" — no porque tuvieran virtud moral sino porque estaban dedicados a Dios y eran tratados como diferentes. El suelo donde Moisés estaba era "santo" porque Dios estaba allí. El séptimo día es "santo" porque Dios lo separó de los otros días.

El Nuevo Testamento usa la misma raíz para "santos" (hagioi en griego) — que es como Pablo llama a los creyentes en casi todas sus cartas. No "personas perfectas" sino "personas apartadas para Dios." 1 Pedro 1:16 cita directamente el Levítico: "Sed santos, porque yo soy santo." La invitación no es a la perfección moral sino a la orientación: ser separados para Dios, como Dios es separado de todo lo demás.`,
  verses: ["Isaías 6:3", "Levítico 11:44", "1 Pedro 1:15-16", "Apocalipsis 4:8"],
},

"lenguas": {
  term: "Hablar en lenguas",
  type: "Concepto bíblico",
  short: "En Hechos 2, los discípulos hablan en idiomas que no conocen y los oyentes los entienden en sus propias lenguas. En 1 Corintios, Pablo describe algo diferente que requiere interpretación.",
  body: `Hechos 2 describe el Pentecostés: los discípulos "comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen." Lo que ocurre a continuación es específico: judíos de todas las naciones de la diáspora escuchan cada uno en su propio idioma natal. Es comunicación cruzando barreras de idioma — la inversión de Babel.

En 1 Corintios 12-14, Pablo describe algo en la iglesia de Corinto que llama "el don de lenguas" — pero que nadie entiende sin un intérprete. Pablo valora el don pero dice que prefiere "cinco palabras con entendimiento que diez mil en lengua." El debate sobre si es el mismo fenómeno de Hechos 2 o algo diferente ha continuado por siglos entre distintas tradiciones.

El texto bíblico describe ambos fenómenos sin resolver completamente la relación entre ellos. Lo que sí es claro: en Hechos, el propósito inmediato es la comunicación del evangelio a personas de múltiples idiomas; en 1 Corintios, el propósito es la edificación de la comunidad, con el caveat de que si no hay quien interprete, es mejor el silencio.`,
  verses: ["Hechos 2:4-11", "1 Corintios 14:2-5", "1 Corintios 14:27-28"],
},

"diácono": {
  term: "Diácono",
  type: "Rol bíblico",
  short: "Del griego 'diakonos' — servidor, ministro. En Hechos 6, siete personas son elegidas para servir las mesas. Con el tiempo el término se convirtió en un rol formal en las comunidades.",
  body: `La palabra "diakonos" en griego simplemente significa el que sirve — el que lleva la comida, el mensajero, el asistente. Jesús la usa para describir el tipo de liderazgo que él modela: "el mayor entre vosotros sea vuestro servidor (diakonos)" (Mateo 23:11).

En Hechos 6, cuando los griegos de la comunidad se quejan de que sus viudas están siendo desatendidas en la distribución diaria de alimentos, los apóstoles proponen elegir a siete personas para ese trabajo, para poder concentrarse ellos en "la oración y el ministerio de la palabra." No se les llama "diáconos" explícitamente en este pasaje, pero la iglesia los ha identificado como el origen del rol.

Esteban era uno de estos siete — y el primer mártir cristiano. Felipe era otro — y se convirtió en un evangelista notable. El texto de Hechos muestra que el "servicio de las mesas" no era un rol menor: Esteban "hacía grandes prodigios y señales entre el pueblo."`,
  verses: ["Hechos 6:1-6", "Filipenses 1:1", "1 Timoteo 3:8-13", "Mateo 23:11"],
},

"nazareno": {
  term: "Nazareno",
  type: "Término del siglo I",
  short: "Jesús de Nazaret — título geográfico que se convirtió en identificador permanente. Nazaret era tan insignificante que nadie la mencionaba.",
  body: `Nazaret no aparece en el Antiguo Testamento. No aparece en Josefo, el historiador judío del siglo I que documenta decenas de ciudades. No aparece en el Talmud. Era tan pequeña y sin importancia que su ausencia de los registros históricos es consistente. La pregunta de Natanael — "¿De Nazaret puede salir algo bueno?" — refleja el lugar que ocupaba en la imaginación de los contemporáneos.

Jesús fue identificado consistentemente como "Jesús de Nazaret" o "el Nazareno" durante toda su vida y después. El título aparece en momentos significativos: cuando los demonios lo reconocen en Marcos 1:24, cuando el ángel le dice a las mujeres que buscan al "Nazareno que fue crucificado" (Marcos 16:6), y en el cartel de la cruz que Pilato manda poner: "Jesús de Nazaret, Rey de los Judíos" (Juan 19:19).

Mateo 2:23 cita una profecía que dice que el Mesías sería llamado "Nazareno" — aunque el versículo exacto no aparece en el AT. Posiblemente es una referencia al "Netzer" de Isaías 11:1 (el "vástago" de Jesé) o una síntesis de varios profetas. El punto de Mateo: incluso el origen marginal de Jesús era parte del plan.`,
  verses: ["Marcos 1:24", "Marcos 16:6", "Juan 19:19", "Mateo 2:23"],
},

// ─── TÍTULOS DE JESÚS ────────────────────────────────────────────────────────

"hijo del hombre": {
  term: "Hijo del Hombre",
  type: "Título de Jesús",
  short: "El título que Jesús se da a sí mismo más veces en los evangelios — viene de Daniel 7 y combina humanidad plena con autoridad divina.",
  body: `En los evangelios, Jesús nunca se llama a sí mismo "el Mesías" en público. El título que usa constantemente es "el Hijo del Hombre." Aparece más de 80 veces. Los discípulos nunca lo usan para referirse a él — solo él lo usa para referirse a sí mismo.

El título viene de Daniel 7:13-14, donde "uno como un hijo de hombre" llega ante el Anciano de Días y recibe "dominio, gloria y reino" sobre todos los pueblos. En el contexto de Daniel, la figura representa a Israel triunfante sobre las naciones que lo habían oprimido.

Jesús toma este título y lo carga de contenido inesperado. En Marcos 10:45 dice "el Hijo del Hombre no vino para ser servido sino para servir y dar su vida en rescate por muchos." En Mateo 16:27 anuncia que "el Hijo del Hombre vendrá en la gloria de su Padre." El mismo título unifica su humillación y su glorificación futura.`,
  verses: ["Daniel 7:13-14", "Marcos 10:45", "Mateo 16:27", "Juan 12:34"],
},

"señor": {
  term: "Señor (Kyrios)",
  type: "Título bíblico",
  short: "En el mundo romano era el título del emperador. En el AT griego reemplazaba el nombre sagrado de Dios. Cuando los primeros creyentes dijeron 'Jesús es Señor', lo estaban colocando en el lugar de ambos.",
  body: `La palabra griega "kyrios" se usaba en el Imperio Romano para el emperador: "Caesar kyrios" — el César es el Señor. Era una declaración de lealtad política total. No era solo un título de respeto — era una afirmación de soberanía absoluta.

En la Septuaginta (la traducción griega del AT), "kyrios" se usó para reemplazar el nombre de Dios, YHWH. Cada vez que en el texto hebreo aparecía el nombre sagrado, la traducción griega ponía "kyrios." Los lectores judíos habituados a esta traducción entendían "kyrios" como el nombre propio de Dios.

Cuando Pablo escribe en Filipenses 2:11 que "toda lengua confiese que Jesucristo es el Señor (kyrios)," está usando ambas referencias al mismo tiempo. Y cuando en Hechos 2:36 Pedro dice "Dios lo ha hecho Señor y Cristo," está aplicando a Jesús el título que en el AT era de Dios y que en el Imperio era del César. La declaración era teológicamente y políticamente explosiva.`,
  verses: ["Filipenses 2:11", "Hechos 2:36", "Romanos 10:9", "1 Corintios 12:3"],
},

"hijo de dios": {
  term: "Hijo de Dios",
  type: "Título bíblico",
  short: "En el AT se usaba para Israel, para el rey davídico y para los ángeles. Aplicado a Jesús en el NT, el título adquiere un contenido sin precedentes.",
  body: `"Hijo de Dios" no era un título exclusivo de Jesús en el mundo antiguo. En el AT, Israel era llamado colectivamente "mi hijo" (Éxodo 4:22). El rey davídico era adoptado como "hijo" en su coronación (Salmo 2:7). Los ángeles son llamados "hijos de Dios" en Job 1. Los emperadores romanos también lo reclamaban.

Lo que hace diferente el uso en el NT es el contenido que Juan y Pablo le dan. Juan 1 dice que Jesús es el Logos — el Verbo eterno que "estaba con Dios y era Dios." En Juan 10:30 Jesús dice "Yo y el Padre somos uno." Los líderes religiosos entienden inmediatamente la afirmación: "Por blasfemia, porque tú, siendo hombre, te haces Dios."

El Concilio de Nicea (325 d.C.) elaboraría la distinción teológica — "engendrado, no creado." Pero en el texto del NT mismo, lo que importa es el conjunto de afirmaciones: preexistencia, identificación con el Padre, autoridad para perdonar pecados, resurrección de los muertos. Todo junto apunta en una dirección que el propio texto deja al lector concluir.`,
  verses: ["Salmos 2:7", "Juan 1:1-14", "Juan 10:30-36", "Romanos 1:4"],
},

// ─── PALABRAS EN PASAJES CLAVE ───────────────────────────────────────────────

"justicia": {
  term: "Justicia / Justo",
  type: "Concepto central",
  short: "No solo 'actuar bien' — en la Biblia, justicia es el estado correcto de las relaciones: con Dios, entre personas, y en la sociedad.",
  body: `La palabra hebrea "tsedaqah" y la griega "dikaiosyne" se traducen como justicia o rectitud. Pero en el mundo bíblico no son solo virtudes morales — describen el estado en que las cosas están como deberían estar. Un juez "justo" no es solo honesto: es uno que restaura el orden correcto de las relaciones.

En los Salmos, Dios es "justo" porque actúa a favor de los vulnerables (Salmo 103:6: "Jehová hace justicia a todos los oprimidos"). La justicia de Dios no es imparcialidad fría — es vindicación activa de los que han sido maltratados. Cuando los profetas claman por "justicia", están pidiendo que se restaure el orden correcto en la sociedad.

Pablo usa la misma raíz para "justificación" (el veredicto) y para "justicia" (el estado). En Romanos 1:17 escribe que "la justicia de Dios se revela por fe y para fe." Esta "justicia de Dios" no es su atributo de severidad — es su acción de poner las cosas en su lugar correcto, a favor del ser humano.`,
  verses: ["Salmos 103:6", "Mateo 5:6", "Romanos 1:17", "Amós 5:24"],
},

"bienaventurado": {
  term: "Bienaventurado",
  type: "Concepto bíblico",
  short: "La palabra que abre el Sermón del Monte — no es simplemente 'feliz' sino una declaración de que alguien está en el estado correcto de vida ante Dios.",
  body: `Las Bienaventuranzas abren con una palabra que las Biblias traducen de maneras distintas: "bienaventurados", "felices", "dichosos." En griego es "makarios" — que en la literatura clásica describía a los dioses y a los muertos que vivían sin sufrimiento. En el AT griego traduce el hebreo "ashre" — una exclamación que describe a alguien que está en el camino correcto.

No es una promesa de emociones positivas. "Bienaventurados los que lloran" no está prometiendo que los tristes se sentirán bien pronto — está diciendo que hay un estado de vida bien encaminado que incluye el luto, la mansedumbre, el hambre de justicia. El punto es la orientación de la vida, no el estado emocional del momento.

La forma de las Bienaventuranzas también importa: no son mandamientos ("sé pobre en espíritu") sino declaraciones ("bienaventurados los pobres en espíritu"). Jesús no está dando instrucciones — está describiendo cómo es el Reino de Dios y quiénes ya pertenecen a él, aunque el mundo no lo reconozca.`,
  verses: ["Mateo 5:3-12", "Salmos 1:1", "Lucas 6:20-22", "Apocalipsis 1:3"],
},

"bendición": {
  term: "Bendición / Bendecir",
  type: "Concepto bíblico",
  short: "No un deseo amable sino un acto concreto — pronunciar sobre alguien o algo una palabra que libera el favor de Dios o de otro.",
  body: `La bendición en el mundo antiguo no era decorativa. Cuando Isaac bendice a Jacob creyendo que es Esaú, y luego no puede retirar la bendición aunque lo descubra, el texto trata la bendición como algo real que salió de su boca y no puede recuperarse. Las palabras de bendición tienen peso real.

La bendición de Dios sobre los seres humanos comienza en Génesis 1:28: "Y los bendijo Dios." Continúa con Abraham en Génesis 12: "te bendeciré... y serán benditas en ti todas las familias de la tierra." Esta promesa se convierte en el motor de toda la historia bíblica — Pablo en Gálatas 3:8 la llama "el evangelio anticipado."

Números 6:24-26 contiene la bendición sacerdotal que los sacerdotes de Israel pronunciaban sobre el pueblo: "Jehová te bendiga y te guarde; Jehová haga resplandecer su rostro sobre ti..." Esta bendición, de 3000 años de antigüedad, fue encontrada en tablillas de plata en Jerusalén — es la cita bíblica más antigua conocida fuera del texto.`,
  verses: ["Génesis 1:28", "Génesis 12:2-3", "Números 6:24-26", "Gálatas 3:8-9"],
},

"prójimo": {
  term: "Prójimo",
  type: "Concepto bíblico",
  short: "La persona cercana — el que está junto a ti. Jesús convierte la pregunta '¿quién es mi prójimo?' en la parábola más conocida del evangelio.",
  body: `La palabra hebrea "rea" y la griega "plesion" describen al que está cerca, al contiguo. En el contexto legal del AT, el "prójimo" era el compatriota israelita — la persona con quien uno tenía una relación definida por el pacto y por la convivencia.

Cuando un maestro de la ley pregunta a Jesús "¿y quién es mi prójimo?", la pregunta tiene una intención específica: limitar la obligación. Si "prójimo" significa compatriota judío, la obligación de amar tiene fronteras claras. Jesús responde con la parábola del buen samaritano — en la que el héroe es exactamente la persona que el interlocutor menos esperaba.

El final de la parábola invierte la pregunta: Jesús no responde "¿quién ES tu prójimo?" sino "¿quién SE COMPORTÓ como prójimo?" El desplazamiento es intencional. No se trata de identificar a quién debes amar — sino de convertirte en el que ama, sin importar quién esté delante.`,
  verses: ["Levítico 19:18", "Lucas 10:29-37", "Marcos 12:31", "Romanos 13:9-10"],
},

"alabanza": {
  term: "Alabanza",
  type: "Práctica bíblica",
  short: "Proclamar en voz alta las cualidades de alguien — en la Biblia, declarar públicamente quién es Dios y lo que ha hecho.",
  body: `La raíz del verbo hebreo más común para alabar es "hallal" — que da origen a "aleluya" ("¡hallelujah!"). Significa brillar, proclamar, hacer sonar. No es una emoción silenciosa sino una declaración pública y sonora. El libro de los Salmos en hebreo se llama "tehilim" — alabanzas.

En el contexto bíblico, alabar no es lo mismo que adorar. "Adoración" (shajah en hebreo) describe la postura física de postrarse ante alguien — una actitud corporal de reconocimiento total. "Alabanza" es la proclamación verbal de las cualidades de ese alguien. Las dos van juntas frecuentemente pero son distintas.

El Salmo 150 — el último — termina el libro con un crescendo de alabanza: "todo lo que respira alabe a JAH." No solo los israelitas, no solo los que entienden — todo lo que tiene aliento. La alabanza en la Biblia no es una práctica religiosa opcional: es la respuesta apropiada de la creación al Creador.`,
  verses: ["Salmos 150:6", "Hechos 2:47", "Apocalipsis 19:5", "Hebreos 13:15"],
},

"sangre": {
  term: "Sangre",
  type: "Concepto bíblico",
  short: "En la Biblia, la sangre contiene la vida — por eso es central en los pactos, en los sacrificios y en la descripción de lo que ocurrió en la crucifixión.",
  body: `Levítico 17:11 lo dice directamente: "La vida de la carne en la sangre está." La sangre no era un símbolo poético de la vida — era la vida misma en forma visible y concreta. Derramar sangre era quitar la vida. Eso explica por qué tanto el homicidio como el sacrificio tienen un peso tan específico en el texto.

En los pactos del mundo antiguo, la sangre sellaba el acuerdo — pasaba entre las partes o era rociada sobre ellas. El pacto en el Sinaí se selló con sangre (Éxodo 24:8: "Esta es la sangre del pacto"). En la Última Cena, Jesús toma la copa y dice: "Esta es mi sangre del nuevo pacto."

La carta a los Hebreos lo dice sin rodeos: "Sin derramamiento de sangre no hay perdón" (Hebreos 9:22). No es una afirmación de violencia arbitraria — es la consecuencia del principio de Levítico: donde hay vida, hay sangre; si algo vive en lugar del que merece morir, hay sangre. La centralidad de la sangre en la Biblia no es gore — es la lógica interna del sistema de sustitución.`,
  verses: ["Levítico 17:11", "Éxodo 24:8", "Lucas 22:20", "Hebreos 9:22"],
},

"cordero": {
  term: "Cordero de Dios",
  type: "Imagen bíblica",
  short: "El título que Juan el Bautista da a Jesús — conecta al animal del sacrificio pascual con el Siervo Sufriente de Isaías y el Cordero del Apocalipsis.",
  body: `En Juan 1:29, Juan el Bautista ve venir a Jesús y dice: "He aquí el Cordero de Dios, que quita el pecado del mundo." Para sus oyentes judíos del siglo I, la imagen era densa: el cordero de la Pascua (cuya sangre protegió a los israelitas en Egipto), los corderos del sacrificio diario en el Templo, y el "cordero llevado al matadero" de Isaías 53.

El libro del Apocalipsis usa la imagen del Cordero 28 veces — más que cualquier otro título. Curiosamente, la palabra griega es "arnion" — un cordero pequeño, un corderito. En el libro más lleno de imágenes de poder y guerra del NT, el que vence al caos y al mal no es un guerrero sino un corderito que parece degollado (Apocalipsis 5:6).

La tensión entre la vulnerabilidad del cordero y su poder en el Apocalipsis es deliberada. El mismo que fue sacrificado ahora es adorado. La victoria no anuló la marca de la derrota — la coronó.`,
  verses: ["Juan 1:29", "Isaías 53:7", "Apocalipsis 5:6-12", "1 Pedro 1:19"],
},

"hipócrita": {
  term: "Hipócrita",
  type: "Término del siglo I",
  short: "Del griego 'hypokrites' — el actor de teatro que habla detrás de una máscara. Jesús lo usa para describir a quien actúa en público diferente a lo que es en privado.",
  body: `En el teatro griego, el "hypokrites" era el actor profesional que interpretaba personajes en el escenario usando máscaras. No era una palabra peyorativa en ese contexto — describía un oficio. Pero cuando Jesús la tomó y la usó para los líderes religiosos, la carga se volvió completamente negativa.

En Mateo 6:2, 5 y 16, Jesús advierte: "Cuando des limosna, no toques trompeta delante de ti como hacen los hipócritas... cuando ores, no seas como los hipócritas que aman orar de pie en las sinagogas... cuando ayunes, no pongas cara triste como los hipócritas." El patrón es el mismo: realizar una práctica religiosa para ser visto por otros, no por su propósito original.

El capítulo 23 de Mateo tiene ocho "ayes" dirigidos a "escribas y fariseos, hipócritas." Jesús los describe como personas que "dicen pero no hacen," que "limpian lo de afuera" pero por dentro están llenos de codicia e intemperancia. La hipocresía no es mentira ordinaria — es vivir con una máscara tan fija que uno ya no sabe cuál es el rostro real.`,
  verses: ["Mateo 6:2-5", "Mateo 23:13-29", "Lucas 12:1", "Marcos 7:6"],
},

"paraíso": {
  term: "Paraíso",
  type: "Concepto bíblico",
  short: "Del persa 'pairidaeza' — jardín cercado. Aparece tres veces en el NT con significados relacionados pero distintos contextos.",
  body: `La palabra "paraíso" viene del persa antiguo "pairidaeza" — un jardín cercado y cuidado, como los jardines reales de los reyes persas. En el AT griego se usa para traducir "jardín" en el relato del Edén (Génesis 2). El paraíso original era el jardín donde Dios y los seres humanos vivían juntos.

En Lucas 23:43, Jesús le dice al ladrón crucificado a su lado: "De cierto te digo que hoy estarás conmigo en el paraíso." No dice "en el cielo" ni "en la resurrección" — dice "paraíso", y dice "hoy." Este versículo ha generado debate teológico por siglos sobre qué ocurre entre la muerte y la resurrección.

Pablo en 2 Corintios 12:4 cuenta que fue "arrebatado al paraíso" en una experiencia visionaria y "oyó palabras inefables." Y en Apocalipsis 2:7, Jesús promete a los fieles que comerán "del árbol de la vida que está en medio del paraíso de Dios." El paraíso del final conecta con el jardín del principio — una restauración de lo que se perdió.`,
  verses: ["Lucas 23:43", "2 Corintios 12:4", "Apocalipsis 2:7", "Génesis 2:8"],
},

"condenación": {
  term: "Condenación",
  type: "Concepto teológico",
  short: "El veredicto legal contrario a la justificación — ser declarado culpable. Romanos 8:1 abre con la declaración de que ese veredicto ya no aplica.",
  body: `"Condenación" traduce el griego "katakrima" — el veredicto de culpabilidad en un proceso judicial. Si "justificación" es el veredicto de inocencia, "condenación" es su opuesto exacto. Donde la justificación libera, la condenación sentencia.

Romanos 8:1 es uno de los versículos más conocidos de Pablo: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús." La frase abre el capítulo que muchos consideran el punto más alto de toda la carta. Después de siete capítulos describiendo el problema de la humanidad y la solución de Dios, Pablo llega aquí: el veredicto ha cambiado.

Romanos 8:34 completa la imagen: "¿Quién es el que condenará?" Esa pregunta retórica apunta a un proceso judicial imaginado: alguien acusando, alguien juzgando, alguien condenando. La respuesta es que Cristo Jesús no solo no condena sino que "intercede por nosotros." El que podría condenar es el que defiende.`,
  verses: ["Romanos 8:1", "Romanos 8:34", "Juan 3:17-18", "Juan 5:24"],
},

"reino de los cielos": {
  term: "Reino de los cielos",
  type: "Concepto bíblico",
  short: "La frase que usa Mateo donde los otros evangelios dicen 'Reino de Dios' — son el mismo concepto, pero Mateo respeta la costumbre judía de no nombrar a Dios directamente.",
  body: `En el evangelio de Mateo aparece "reino de los cielos" 32 veces. En Marcos y Lucas, la frase equivalente es siempre "reino de Dios." Los estudiosos coinciden en que se refieren al mismo concepto: el gobierno activo de Dios.

La diferencia está en el auditorio. Mateo escribe para lectores judíos, y en el judaísmo del siglo I había una práctica establecida de evitar pronunciar el nombre de Dios directamente — por reverencia. En lugar de "Dios", los judíos piadosos decían "los cielos" (el lugar donde Dios habita). Así, "reino de los cielos" = "reino de Dios" con lenguaje respetuoso para lectores judíos.

Esto tiene una implicación importante: el "reino de los cielos" en Mateo no es un lugar en el cielo al que vas cuando mueres. Es el mismo reino de Dios que Marcos y Lucas describen como algo que ya llegó, está llegando, y llegará completamente — aquí en la tierra, entre las personas.`,
  verses: ["Mateo 4:17", "Marcos 1:15", "Mateo 13:31", "Lucas 17:21"],
},

// ─── EL NOMBRE DE DIOS ───────────────────────────────────────────────────────

"yahweh": {
  term: "Yahweh / Jehová",
  type: "El nombre de Dios",
  short: "El nombre personal de Dios en el AT — tan sagrado que los judíos dejaron de pronunciarlo. Las Biblias en español lo escriben como 'Jehová' o lo reemplazan por 'Señor'.",
  body: `El nombre hebreo de Dios está formado por cuatro letras: YHWH (yod, he, waw, he) — el "Tetragrámaton." La pronunciación original probablemente era "Yahweh." Cuando Dios le revela su nombre a Moisés en Éxodo 3:14 dice: "YO SOY EL QUE SOY" — y el nombre YHWH viene de esa raíz: el verbo "ser."

Los judíos comenzaron a evitar pronunciar el nombre por reverencia — su sustituto oral era "Adonai" (mi Señor). Cuando los traductores al griego encontraban YHWH, escribían "Kyrios" (Señor). Esta práctica llegó hasta las traducciones modernas: donde el texto hebreo dice YHWH, la Biblia en español dice "Jehová" o "el Señor" en mayúsculas.

"Jehová" es una combinación medieval de las consonantes de YHWH con las vocales de "Adonai" — una forma que surgió para recordar a los lectores que debían pronunciar "Adonai" al leer YHWH. No es la pronunciación original del nombre. Lo que sí importa es el significado: el Dios de la Biblia tiene un nombre personal — no es una fuerza abstracta sino alguien que se identificó.`,
  verses: ["Éxodo 3:14-15", "Éxodo 6:3", "Salmos 83:18", "Juan 8:58"],
},

// ─── CONTEXTO CULTURAL ───────────────────────────────────────────────────────

"zelote": {
  term: "Zelote",
  type: "Grupo del siglo I",
  short: "Un movimiento político-religioso judío comprometido con la liberación armada de Israel del dominio romano. Uno de los doce discípulos era zelote.",
  body: `Los zelotes eran judíos del siglo I que creían que la dominación romana era una afrenta al señorío de Dios sobre Israel — y que había que resistirla activamente, incluyendo por la fuerza. No eran terroristas sin más: tenían una teología clara. Si Dios es el único rey de Israel, pagar impuestos al César es idolatría.

El movimiento zelote tuvo sus raíces en la revuelta de Judas el Galileo del año 6 d.C., cuando Roma ordenó el primer censo para cobrar impuestos directos. Ganó fuerza gradualmente hasta estallar en la Gran Revuelta del 66 d.C. — que terminó con la destrucción del Templo en el 70 d.C.

Entre los doce discípulos de Jesús estaba "Simón el Zelote" (Lucas 6:15). También estaba Leví (Mateo) — un recaudador de impuestos romano. Que Jesús eligiera deliberadamente a ambos en el mismo grupo era en sí mismo un acto de provocación cultural: el colaboracionista fiscal y el resistente armado, compartiendo la misma mesa.`,
  verses: ["Lucas 6:15", "Hechos 1:13", "Hechos 5:37", "Mateo 10:4"],
},

"impureza ritual": {
  term: "Pureza / Impureza ritual",
  type: "Práctica del siglo I",
  short: "Un sistema de reglas sobre el contacto con ciertas personas, animales y situaciones — no era culpa moral sino un estado que impedía participar en el culto.",
  body: `En el sistema del AT, la impureza ritual no era pecado. Era un estado en el que uno podía entrar por contacto con ciertas realidades: sangre (incluida la menstrual), cadáveres, ciertas enfermedades de la piel (la "lepra" bíblica era más amplia que la lepra moderna), flujos corporales. No era una cuestión de maldad sino de un estado que impedía acercarse al Templo o participar en el culto.

El sistema tenía solución: rituales de purificación que restauraban el estado de pureza. Pero mientras uno estaba "impuro", estaba excluido de la vida comunitaria religiosa — y su exclusión se extendía: tocar a una persona impura te hacía impuro también.

Cuando Jesús toca a leprosos (Marcos 1:41) o cuando la mujer con flujo de sangre lo toca (Marcos 5:27), el sistema predice que Jesús quedará impuro por contacto. Lo que ocurre es lo opuesto: la impureza no contagia a Jesús — la sanidad fluye de Jesús al impuro. El texto marca esto cuidadosamente. Jesús no evita a los impuros — los busca. Y en el contacto, el sistema se invierte.`,
  verses: ["Levítico 15:19", "Marcos 1:40-41", "Marcos 5:25-34", "Números 19:11"],
},

"herodes": {
  term: "Herodes (la dinastía)",
  type: "Personaje histórico",
  short: "El nombre de una dinastía de gobernantes — no de una sola persona. Hay al menos tres Herodes distintos en el NT, y confundirlos lleva a malentender la historia.",
  body: `"Herodes" era el apellido de una familia que gobernó Judea bajo tutela romana. El NT menciona varios: Herodes el Grande (que reinó cuando nació Jesús y ordenó la matanza de los niños en Belén), Herodes Antipas (que mandó ejecutar a Juan el Bautista y participó en el juicio de Jesús) y Herodes Agripa I (que ejecutó a Santiago el apóstol en Hechos 12).

Herodes el Grande era técnicamente idumeo — descendiente de los edomitas, convertidos al judaísmo por conquista. Los judíos lo consideraban extranjero a pesar de que gobernaba "en nombre" de Israel. Construyó el Templo de Jerusalén en un proyecto monumental de 46 años — el mismo del que Jesús dijo "no quedará piedra sobre piedra."

Herodes Antipas, el hijo, es el que aparece en los evangelios durante el ministerio de Jesús. Juan el Bautista lo confrontó por casarse con la esposa de su hermano — y Herodías, la mujer, guardó rencor hasta encontrar el momento para pedir la cabeza de Juan. Jesús lo llama "esa zorra" en Lucas 13:32.`,
  verses: ["Mateo 2:1-16", "Marcos 6:14-28", "Lucas 13:32", "Hechos 12:1-2"],
},

// ─── VOCABULARIO DE PABLO ────────────────────────────────────────────────────

"elección": {
  term: "Elección / Elegido",
  type: "Concepto teológico",
  short: "El concepto de que Dios elige — personas, pueblos, momentos — no por méritos sino por su propio propósito. Uno de los conceptos más debatidos del NT.",
  body: `La elección en la Biblia comienza con Abraham: Dios lo elige de entre todos los pueblos sin que el texto explique por qué. Israel es elegido como pueblo — no porque sea más numeroso ni más virtuoso (Deuteronomio 7:7-8 lo dice explícitamente: "No por ser vosotros más que todos los pueblos..."). La elección precede a los méritos.

Romanos 8-11 desarrolla el concepto en el contexto de Israel y de los gentiles. Romanos 8:29 dice que a los que Dios "conoció de antemano" también los predestinó. Efesios 1:4 dice que los creyentes fueron "elegidos en Cristo antes de la fundación del mundo." Estas afirmaciones han generado debates teológicos que siguen activos.

Lo que el texto deja claro es el propósito de la elección: no es privilegio de status sino responsabilidad de misión. Israel fue elegido para ser luz a las naciones (Isaías 49:6). En 1 Pedro 2:9, los creyentes son "linaje elegido" con el propósito de "anunciar las virtudes de aquel que os llamó." La elección bíblica no termina en quien es elegido — apunta hacia los demás.`,
  verses: ["Deuteronomio 7:6-8", "Romanos 8:29-30", "Efesios 1:4-5", "1 Pedro 2:9"],
},

"libertad": {
  term: "Libertad",
  type: "Concepto teológico",
  short: "Para Pablo, libertad no es ausencia de reglas sino liberación de la esclavitud — de la ley como sistema para ganar aprobación, del pecado como fuerza que domina.",
  body: `Gálatas 5:1 abre con una de las declaraciones más directas de Pablo: "Para libertad fue que Cristo nos libertó; manteneos, pues, firmes, y no os sometáis de nuevo al yugo de esclavitud." La paradoja es que Pablo habla de la Ley de Moisés como "yugo de esclavitud" — algo que antes había llamado "santa, justa y buena" (Romanos 7:12).

La distinción es sutil pero importante: la Ley no es mala. El problema es usar la Ley como sistema para ganar la aprobación de Dios — eso es esclavitud porque convierte la relación con Dios en un contrato de rendimiento donde nunca se puede estar seguro de haber cumplido suficiente.

La libertad de Pablo no es "haz lo que quieras." Inmediatamente después de declarar la libertad, dice: "No uséis la libertad como ocasión para la carne, sino servíos por amor los unos a los otros" (Gálatas 5:13). La libertad del evangelio no elimina la ética — la cambia de base: ya no actúo bien para ganar aprobación sino porque ya la tengo.`,
  verses: ["Gálatas 5:1-13", "Romanos 8:2", "Juan 8:36", "2 Corintios 3:17"],
},

"maldición": {
  term: "Maldición",
  type: "Concepto bíblico",
  short: "Lo opuesto de la bendición — una palabra pronunciada que libera consecuencias negativas. En Gálatas 3, Pablo argumenta que Cristo absorbió la maldición del sistema legal.",
  body: `La maldición en el mundo antiguo no era un insulto sino una declaración de consecuencias — el opuesto exacto de la bendición. Si la bendición activaba el favor y la vida, la maldición activaba el deterioro y la muerte. Deuteronomio 27-28 lista las maldiciones que caerían sobre Israel si rompía el pacto: enfermedades, sequías, derrota militar, exilio.

En el sistema legal del AT, quien no cumplía la Ley quedaba bajo esa "maldición del pacto" — las consecuencias de la ruptura. El problema, argumenta Pablo en Gálatas 3:10, es que todos han roto la Ley: "Maldito todo el que no permanece en todas las cosas escritas en el libro de la ley para hacerlas."

Gálatas 3:13 es el giro: "Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición." Pablo cita Deuteronomio 21:23 — "Maldito todo el que es colgado en un madero" — y dice que eso es exactamente lo que ocurrió en la crucifixión. Jesús absorbió la consecuencia del sistema roto. La maldición llegó hasta él y no siguió.`,
  verses: ["Deuteronomio 27:26", "Gálatas 3:10-13", "Génesis 3:14-17", "Apocalipsis 22:3"],
},

"idolatría": {
  term: "Idolatría",
  type: "Concepto bíblico",
  short: "Dar a algo creado el lugar que corresponde al Creador — no solo estatuas, sino cualquier cosa que se convierte en fuente última de significado, seguridad o identidad.",
  body: `El segundo mandamiento prohíbe "hacerte imagen" para adorar. La prohibición no es contra el arte ni la representación visual en general — Israel tenía querubines, columnas y el bronce de la serpiente. Es contra crear una imagen que represente a Dios (como si pudiera ser representado) o adorar a dioses ajenos.

Los profetas israelitas se burlaban de la idolatría con ironía aguda. Isaías 44:14-17 describe a alguien que corta un árbol, usa la mitad para calentarse y cocinar, y con la otra mitad hace una imagen a la que pide salvación. El texto lo ve como absurdo — adorar lo que tú mismo hiciste.

En el Nuevo Testamento, Pablo amplía el concepto. Colosenses 3:5 llama a la "avaricia" idolatría. 1 Juan 5:21 cierra la carta con "hijitos, guardaos de los ídolos." El ídolo no tiene que ser una estatua — es cualquier cosa que ocupa el lugar de Dios: dinero, poder, seguridad, aprobación. La pregunta que los profetas hacen al lector no es "¿tienes estatuas?" sino "¿a qué o quién recures cuando todo falla?"`,
  verses: ["Éxodo 20:4-6", "Isaías 44:14-17", "1 Corintios 10:14", "Colosenses 3:5"],
},

"testigo": {
  term: "Testigo",
  type: "Concepto bíblico",
  short: "Alguien que vio y da cuenta de lo que vio. En el NT, la misión de los seguidores de Jesús se describe como ser testigos — y la palabra 'mártir' viene directamente del griego 'testigo'.",
  body: `En el sistema legal del mundo antiguo, el testigo era crucial: el que había visto los hechos y daba testimonio de ellos ante los demás. Un testigo falso era una de las ofensas más graves — aparece en el noveno mandamiento y en las leyes procesales del AT.

Hechos 1:8 contiene el mandato final de Jesús antes de la ascensión: "recibiréis poder cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos (martyres) en Jerusalén, en toda Judea, en Samaria y hasta lo último de la tierra." La tarea no es convencer sino testificar — dar cuenta de lo que se vio y escuchó.

La palabra griega "martys" (testigo) dio origen a "mártir" en español — porque los primeros testigos de Jesús frecuentemente pagaron con su vida el acto de testificar. Esteban es el primero. El vínculo entre "testigo" y "mártir" no es accidental: en el mundo antiguo, ser testigo de algo políticamente peligroso podía costar la vida.`,
  verses: ["Hechos 1:8", "Juan 15:27", "Apocalipsis 2:13", "Hebreos 12:1"],
},

// ─── PALABRAS HEBREAS QUE QUEDARON SIN TRADUCIR ──────────────────────────────

"maranata": {
  term: "Maranata",
  type: "Palabra bíblica",
  short: "Arameo: '¡Ven, Señor!' — la oración más antigua del NT. Pablo la deja sin traducir en 1 Corintios, y el Apocalipsis termina con su equivalente griego.",
  body: `"Maranata" es arameo — la lengua que hablaba Jesús y sus discípulos en la vida cotidiana. La palabra combina "Maran" (Señor nuestro) + "atha" (ven). Pablo la incluye al final de 1 Corintios (16:22) sin traducirla — lo que indica que era una frase tan conocida en las primeras comunidades que no necesitaba traducción.

El libro del Didaché (un manual de vida comunitaria de principios del siglo II) la incluye en la liturgia de la fracción del pan: "Que venga la gracia y que este mundo pase. Hosanna al Dios de David. Si alguno es santo, que venga. Si no lo es, que se convierta. ¡Maranata! Amén." La oración era un elemento central del culto, no una expresión ocasional.

El libro del Apocalipsis termina con la misma oración en griego: "¡Ven, Señor Jesús!" (22:20). Que el libro que más habla del juicio y de la historia que termina cierre con esta petición dice algo: el fin que espera el texto no es catástrofe ni venganza — es la llegada de alguien.`,
  verses: ["1 Corintios 16:22", "Apocalipsis 22:20", "Didaché 10:6"],
},

"shalom": {
  term: "Shalom",
  type: "Palabra bíblica",
  short: "El saludo judío — no simplemente 'paz' sino integridad, completitud, el estado en que nada falta y todo está en su lugar correcto.",
  body: `"Shalom" se traduce habitualmente como "paz" — pero en hebreo es un concepto mucho más amplio. La raíz "shalem" significa completo, íntegro, sin que falte nada. "Shalom" describe el estado en que todas las relaciones — con Dios, con otros, con uno mismo, con la creación — están en su lugar correcto.

No es ausencia de conflicto. Es presencia de bienestar integral. El opuesto de "shalom" no es "guerra" sino "fragmentación" — cuando las cosas están rotas, dispersas, incompletas. Por eso Isaías 9:6 llama al Mesías "Príncipe de Paz (Shalom)" — no un pacificador en el sentido político sino alguien que restaurará la integridad total.

Cuando Jesús dice en Juan 14:27 "La paz os dejo, mi paz os doy; no os la doy como el mundo la da," el contraste es específico. La "paz que el mundo da" es acuerdo de no agresión, tregua, equilibrio de fuerzas. La paz de Jesús es shalom — algo más profundo que ocurre independientemente de las circunstancias externas.`,
  verses: ["Juan 14:27", "Isaías 9:6", "Números 6:26", "Filipenses 4:7"],
},

// ─── RONDA 4: LO QUE TODAVÍA FALTA ──────────────────────────────────────────

"sión": {
  term: "Sión",
  type: "Lugar teológico",
  short: "El nombre poético y teológico de Jerusalén — y en los profetas, símbolo de la ciudad futura donde Dios habitará con su pueblo.",
  body: `Sión era originalmente el nombre de la colina que David conquistó y convirtió en su capital (2 Samuel 5:7). Con el tiempo se extendió para referirse a Jerusalén completa, y luego al Templo en la cima. En los Salmos, "Sión" aparece como el lugar donde Dios habita y desde donde gobierna.

Los profetas usaron "Sión" como imagen de la restauración futura. Isaías 2:2-4 describe un tiempo cuando "todos los pueblos subirán a Sión" para aprender los caminos de Dios. El exilio en Babilonia dio una nueva carga emocional al nombre — el Salmo 137 llora: "Junto a los ríos de Babilonia, allí nos sentábamos y llorábamos acordándonos de Sión."

El Nuevo Testamento usa Sión como imagen del cumplimiento final. Hebreos 12:22 dice que los creyentes se han acercado "al monte Sión, a la ciudad del Dios vivo, a la Jerusalén celestial." El Apocalipsis describe la "nueva Jerusalén" descendiendo del cielo — Sión redefinida como la realidad final donde Dios y su pueblo habitan juntos permanentemente.`,
  verses: ["Salmos 87:2-3", "Isaías 2:2-4", "Hebreos 12:22", "Apocalipsis 14:1"],
},

"amor": {
  term: "Amor (ágape)",
  type: "Concepto central",
  short: "En el NT, 'ágape' — el amor que elige actuar a favor del otro independientemente del sentimiento. No un afecto sino una decisión.",
  body: `El griego del NT tenía varias palabras para diferentes tipos de amor. "Eros" era el amor romántico. "Philia" era la amistad, el afecto entre iguales. "Storgé" era el amor familiar. "Ágape" era el amor que se ejercía hacia quien no tenía por qué recibirlo — el amor de un superior hacia uno que no lo merece, o de alguien que decide amar donde no había razón emocional.

1 Juan 4:8 dice simplemente: "Dios es amor (ágape)." No dice que Dios tiene amor — dice que es amor. El amor no es un atributo entre otros de Dios: es su naturaleza misma. Lo que sigue en el texto es concreto: "en esto se mostró el amor de Dios para con nosotros, en que Dios envió a su Hijo unigénito al mundo" (4:9). El ágape de Dios se define por lo que hizo, no por lo que siente.

Juan 3:16 usa el mismo verbo: "de tal manera amó (ágapao) Dios al mundo." Pablo en 1 Corintios 13 describe el ágape con conductas, no con emociones: "es sufrido, es benigno, no tiene envidia, no se jacta." La pregunta que el texto plantea no es "¿sientes amor?" sino "¿actúas amor?"`,
  verses: ["1 Juan 4:8-9", "Juan 3:16", "1 Corintios 13:4-7", "Romanos 5:8"],
},

"esperanza": {
  term: "Esperanza",
  type: "Concepto teológico",
  short: "En la Biblia, esperanza no es optimismo ni deseo — es certeza de algo que todavía no se ve pero que ya está asegurado.",
  body: `La esperanza bíblica no es "espero que las cosas salgan bien." La palabra griega "elpis" describe una expectativa firme basada en algo confiable. Hebreos 11:1 conecta fe y esperanza: la fe es "la certeza de lo que se espera." La esperanza está fundada en promesas — no en probabilidades.

Romanos 5:3-5 hace una cadena: "tribulación produce paciencia; y la paciencia, prueba; y la prueba, esperanza; y la esperanza no avergüenza." La esperanza que nació del sufrimiento y de la prueba es más sólida que la esperanza que no ha sido probada. El argumento de Pablo no es que el sufrimiento desaparece — sino que transforma.

1 Pedro 1:3 habla de una "esperanza viva" — no esperanza estática sino dinámica, que vive y crece. El ancla de esa esperanza (Hebreos 6:19) está "dentro del velo" — en la presencia de Dios. Lo que ancla al creyente no está en el mundo visible sino en lo que ya ocurrió: la resurrección.`,
  verses: ["Romanos 5:3-5", "1 Pedro 1:3", "Hebreos 6:18-19", "Romanos 8:24-25"],
},

"mundo": {
  term: "Mundo (kosmos)",
  type: "Concepto bíblico",
  short: "En Juan y en Pablo, 'el mundo' no es el planeta ni la humanidad en general — es el sistema de valores y poderes organizado de espaldas a Dios.",
  body: `La palabra griega "kosmos" originalmente significaba orden, sistema. En el griego clásico se usaba para el universo ordenado. En el NT tiene usos diferentes según el contexto y el autor.

Juan usa "kosmos" de tres maneras distintas en el mismo evangelio. A veces significa humanidad en general: "tanto amó Dios al mundo (kosmos)" — todos los seres humanos. A veces significa el sistema de valores y poder que se opone a Dios: "Si fuerais del mundo (kosmos), el mundo os amaría como suyo" (15:19) — el sistema cultural organizado sin Dios. Y a veces la creación física: "el que hace estas cosas se manifiesta al mundo" — en público.

1 Juan 2:15-16 hace la distinción explícita: "No améis al mundo (kosmos), ni las cosas que están en el mundo." Inmediatamente explica qué es ese "mundo": "los deseos de la carne, los deseos de los ojos, y la vanagloria de la vida." No está diciendo que odien el planeta o a las personas — está diciendo que no centren su vida en el sistema de valores que opera sin referencia a Dios.`,
  verses: ["Juan 3:16", "Juan 15:19", "1 Juan 2:15-17", "Juan 1:10"],
},

"lamento": {
  term: "Lamento",
  type: "Práctica bíblica",
  short: "El acto de gritar el dolor a Dios sin filtro — un género bíblico completo que ocupa más de un tercio de los Salmos y tiene sus propias reglas.",
  body: `El lamento es el género literario más frecuente en los Salmos — los estudiosos cuentan alrededor de 67 salmos de lamento de un total de 150. No es un género menor ni señal de poca fe: es la forma en que Israel procesaba el sufrimiento, la injusticia, el abandono.

Un salmo de lamento tiene una estructura reconocible: invocación a Dios, descripción del sufrimiento, petición específica, declaración de confianza, y a veces un voto de alabanza futura. El Salmo 22 es el ejemplo más conocido — el mismo que Jesús citó desde la cruz. Abre en la oscuridad absoluta ("Dios mío, Dios mío, ¿por qué me has desamparado?") y termina en adoración universal.

Lo que hace radical el lamento bíblico es su honestidad. El Salmo 44 acusa directamente a Dios: "Nos has desechado y envuelto en vergüenza... nos has abandonado al oprobio." No hay aquí suavización ni resignación piadosa. El texto bíblico no solo permite gritar a Dios — tiene un género entero para ello.`,
  verses: ["Salmos 22:1-2", "Salmos 44:9-24", "Lamentaciones 3:1-3", "Mateo 27:46"],
},

"comunión": {
  term: "Comunión / Koinonía",
  type: "Concepto bíblico",
  short: "Del griego 'koinonía' — participación, tener algo en común. En Hechos 2, es uno de los cuatro pilares de la primera comunidad.",
  body: `"Koinonía" viene de "koinos" — común, compartido. La palabra describe la participación en algo junto con otros: una sociedad de negocios era koinonía, una empresa compartida era koinonía. No es simplemente estar cerca de alguien — es compartir algo real: recursos, vida, responsabilidad.

Hechos 2:42 describe los cuatro pilares de la primera comunidad en Jerusalén: "perseveraban en la doctrina de los apóstoles, en la comunión (koinonía) unos con otros, en el partimiento del pan y en las oraciones." La koinonía no era uno de los elementos — era el ambiente que conectaba todos los demás.

Pablo usa la palabra para describir cosas muy concretas: Filipenses 4:15 habla de "participar" económicamente con él. 2 Corintios 8-9 la usa para la ofrenda para Jerusalén. 1 Juan 1:3 habla de "comunión con el Padre y con su Hijo." No es un sentimiento de cercanía — es participación real en una vida compartida, con consecuencias concretas.`,
  verses: ["Hechos 2:42", "1 Juan 1:3-7", "Filipenses 4:15", "2 Corintios 13:14"],
},

"perseverancia": {
  term: "Perseverancia",
  type: "Concepto bíblico",
  short: "En griego 'hypomone' — literalmente 'quedarse bajo el peso.' No es resignación pasiva sino resistencia activa bajo presión.",
  body: `La palabra griega "hypomone" se compone de "hypo" (bajo) y "meno" (quedarse, permanecer). No describe a alguien que espera pacientemente que las cosas cambien — describe a alguien que mantiene su curso bajo un peso considerable. Es la resistencia del atleta que completa la carrera aunque los músculos quemen.

Hebreos 12:1 usa la imagen explícitamente: "corramos con paciencia (hypomone) la carrera que tenemos por delante, puestos los ojos en Jesús." Santiago 1:3-4 explica que las pruebas "producen la prueba de vuestra fe" que a su vez "produce la paciencia (hypomone). Mas tenga la paciencia su obra completa." La perseverancia no es solo aguantar — es madurar a través del aguante.

Apocalipsis usa la palabra para describir a las comunidades que resisten la presión del Imperio Romano: "la paciencia y la fe de los santos" (13:10). En ese contexto de persecución real, perseverancia no es una virtud abstracta — es la diferencia entre mantener la identidad o disolverse en el sistema dominante.`,
  verses: ["Hebreos 12:1-2", "Santiago 1:3-4", "Romanos 5:3-4", "Apocalipsis 13:10"],
},

"tribulación": {
  term: "Tribulación",
  type: "Concepto bíblico",
  short: "Del griego 'thlipsis' — presión, aplastamiento. No es sufrimiento vago sino la presión específica que viene de vivir contra la corriente del sistema dominante.",
  body: `La palabra griega "thlipsis" viene de "thlibo" — apretar, presionar, comprimir. La imagen original era el proceso de prensar aceitunas o uvas — algo que se aprieta hasta que sale el contenido. En el NT describe el tipo de presión que experimentan los que siguen un camino diferente al que el contexto cultural presiona.

Jesús lo anticipa directamente en Juan 16:33: "En el mundo tendréis tribulación (thlipsis); pero confiad, yo he vencido al mundo." No es una promesa de dificultades vaga — es la descripción de lo que inevitablemente ocurre cuando alguien vive con valores distintos a los del sistema dominante.

Pablo en Romanos 5:3 hace algo inesperado: "nos gloriamos en las tribulaciones (thlipsis)." No porque el sufrimiento sea bueno en sí mismo sino por lo que produce: paciencia → carácter probado → esperanza. El Apocalipsis habla de una "gran tribulación" (7:14) — el período de presión máxima sobre la comunidad fiel antes del desenlace final.`,
  verses: ["Juan 16:33", "Romanos 5:3-4", "Hechos 14:22", "Apocalipsis 7:14"],
},

"anticristo": {
  term: "Anticristo",
  type: "Concepto bíblico",
  short: "La palabra aparece solo en las cartas de Juan — y él la usa para algo más específico y menos espectacular de lo que la cultura popular imagina.",
  body: `La palabra "anticristo" aparece únicamente en las cartas de Juan (1 Juan 2:18, 22; 4:3; 2 Juan 7). Pablo no la usa. El Apocalipsis no la usa. La imagen popular del anticristo como una figura política futura y espectacular no viene directamente de estos textos.

Lo que Juan describe es concreto: "el anticristo, del que habéis oído que viene, en este momento hay ya muchos anticristos" (1 Juan 2:18). No es una figura única futura — hay muchos y ya están. El criterio de Juan es doctrinal: "¿quién es el mentiroso, sino el que niega que Jesús es el Cristo? Este es el anticristo" (2:22).

El prefijo "anti" en griego puede significar "contra" (opuesto a) o "en lugar de" (sustituto de). Un anticristo es alguien que o se opone a Cristo o pretende ser un sustituto de Cristo — alguien que toma el lugar que le corresponde a Cristo. Juan lo aplica a personas de su propia comunidad que han salido de ella enseñando que Jesús no vino en carne: "Salieron de nosotros, pero no eran de nosotros" (2:19).`,
  verses: ["1 Juan 2:18-22", "1 Juan 4:3", "2 Juan 7", "2 Tesalonicenses 2:3-4"],
},

"melquisedec": {
  term: "Melquisedec",
  type: "Personaje bíblico",
  short: "Un rey-sacerdote de Salem que aparece brevemente en Génesis 14 — y que la carta a los Hebreos usa para explicar por qué el sacerdocio de Jesús es de un orden diferente.",
  body: `Melquisedec aparece en Génesis 14:18-20 en tres versículos: es rey de Salem (que más tarde se llamará Jerusalén) y sacerdote del "Dios Altísimo." Cuando Abraham regresa victorioso de una batalla, Melquisedec le sale al encuentro con pan y vino, lo bendice, y Abraham le da el diezmo de todo. Y desaparece del texto.

Lo que hace a Melquisedec teológicamente significativo es lo que el texto NO dice de él: no tiene genealogía registrada, no tiene nacimiento ni muerte documentados. Hebreos 7 toma este silencio textual como significativo: Melquisedec es "sin padre, sin madre, sin genealogía, que no tiene principio de días ni fin de vida." En el sistema levítico, el sacerdocio dependía totalmente de la genealogía. Melquisedec existe fuera de ese sistema.

Hebreos argumenta que Jesús es sacerdote "según el orden de Melquisedec" (Hebreos 7:17, citando Salmo 110:4) — no según el linaje de Aarón. Su sacerdocio no depende de herencia genealógica sino de "la fuerza de una vida indestructible." Melquisedec es el único antecedente bíblico de un sacerdocio así.`,
  verses: ["Génesis 14:18-20", "Salmos 110:4", "Hebreos 7:1-17", "Hebreos 6:20"],
},

"cielo": {
  term: "Cielo / Los cielos",
  type: "Concepto bíblico",
  short: "La Biblia usa 'cielo' para tres cosas distintas: el firmamento visible, el lugar donde habita Dios, y la realidad futura que descenderá a la tierra.",
  body: `En hebreo "shamayim" y en griego "ouranos" se usan para el espacio arriba — pero con distintos sentidos según el contexto. El texto no hace siempre la distinción explícita, lo que puede generar confusión.

El "cielo" como lugar de Dios aparece desde Génesis: "Padre nuestro que estás en los cielos." No describe a Dios en el espacio exterior — es la forma de decir que Dios está en una dimensión diferente a la humana, superior y trascendente. Los hebreos hablaban de "siete cielos" como capas de esa dimensión.

Lo que sorprende a muchos lectores del Apocalipsis es que la promesa final no es "los creyentes van al cielo" sino "el cielo baja a la tierra." Apocalipsis 21:2-3: "vi la santa ciudad, la nueva Jerusalén, descender del cielo de Dios... He aquí el tabernáculo de Dios con los hombres, y él morará con ellos." La meta no es escape a otro lugar — es restauración de este lugar. Cielo y tierra se fusionan.`,
  verses: ["Mateo 6:9", "Génesis 1:8", "Apocalipsis 21:1-4", "Efesios 1:3"],
},

"nueva jerusalén": {
  term: "Nueva Jerusalén",
  type: "Concepto del Apocalipsis",
  short: "La ciudad que desciende del cielo en Apocalipsis 21 — no un destino al que vas sino la realidad final que viene a ti. El fin de la historia bíblica.",
  body: `El Apocalipsis termina con una imagen que invierte la expectativa popular sobre "el fin del mundo." No es destrucción sino renovación. No es escape sino llegada. Apocalipsis 21:1-2 dice: "vi un cielo nuevo y una tierra nueva... y vi la santa ciudad, la nueva Jerusalén, descender del cielo de Dios, dispuesta como una novia ataviada para su marido."

La imagen de la ciudad como novia conecta con la metáfora del pacto como matrimonio que corre por todo el AT. Y el detalle de que "desciende del cielo" es crucial: no es que los creyentes suben al cielo — es que el cielo baja a la tierra. La barrera entre las dos dimensiones desaparece.

La descripción que sigue (Apocalipsis 21-22) inicia con la declaración más poderosa: "He aquí el tabernáculo de Dios con los hombres, y él morará con ellos." La nueva Jerusalén es el Tabernáculo definitivo — lo que Dios intentaba desde el jardín del Edén, lo que el Tabernáculo en el desierto anticipaba, lo que el Templo de Salomón simbolizaba: Dios y los seres humanos en el mismo espacio.`,
  verses: ["Apocalipsis 21:1-4", "Apocalipsis 22:1-5", "Isaías 65:17-19", "Hebreos 11:10"],
},

"levadura": {
  term: "Levadura",
  type: "Símbolo bíblico",
  short: "En el AT, símbolo de corrupción (prohibida en los sacrificios). Jesús la usa como imagen del reino que crece silenciosamente — la misma imagen, dos significados opuestos.",
  body: `En el sistema levítico, la levadura estaba prohibida en las ofrendas y en la Pascua. La razón es práctica y simbólica: la levadura es un agente de fermentación que transforma lo que toca gradualmente. En el contexto ritual, representaba el proceso de corrupción — algo que altera desde adentro. Los israelitas comían pan sin levadura en la Pascua para recordar la prisa de la salida de Egipto, pero también como símbolo de un nuevo comienzo sin la "corrupción" del pasado.

Jesús usa la misma imagen en dos sentidos opuestos. En Mateo 16:6 advierte: "Guardaos de la levadura de los fariseos y de los saduceos" — ahí la levadura es corruptora, una influencia que se extiende gradualmente. Pero en Mateo 13:33 la usa positivamente: "El reino de los cielos es semejante a la levadura que tomó una mujer y escondió en tres medidas de harina, hasta que todo fue leudado."

La misma imagen, dos significados. El reino de Dios opera como levadura — invisiblemente, gradualmente, desde adentro, transformando el todo. El contexto es todo.`,
  verses: ["Éxodo 12:15-20", "Mateo 13:33", "Mateo 16:6", "1 Corintios 5:6-8"],
},

"talento": {
  term: "Talento",
  type: "Término del siglo I",
  short: "En la parábola de los talentos, no es una habilidad o capacidad — es una unidad de peso y dinero enorme. Un talento equivalía a 20 años de salario de un trabajador.",
  body: `La palabra "talento" en español para describir una habilidad o don natural viene precisamente de la parábola de Mateo 25:14-30 — pero la interpretación que generó ese uso no es lo que el texto original dice. En griego, "talanton" era una unidad de peso (equivalente a aproximadamente 34 kilos) usada como medida de dinero.

Un talento equivalía a 6.000 denarios. Un denario era el salario de un día de trabajo. Entonces un talento = 6.000 días de trabajo = alrededor de 16-17 años de salario. El "hombre que viajaba" de la parábola le da a sus siervos cantidades astronómicas: cinco talentos = 80+ años de salario, dos talentos = 30+ años.

La parábola no habla de habilidades personales — habla de grandes responsabilidades confiadas. Lo que hace el siervo que enterró el talento no fue ser modesto — fue desperdiciar algo de valor enorme por miedo. La pregunta del texto no es "¿cuáles son tus talentos?" sino "¿qué harás con lo que te fue confiado?"`,
  verses: ["Mateo 25:14-30", "Lucas 19:12-27"],
},

"pascua": {
  term: "Pascua",
  type: "Práctica bíblica",
  short: "La fiesta que recuerda el Éxodo — la noche en que la muerte 'pasó' sobre las casas marcadas con sangre. El NT la reinterpreta completamente alrededor de la muerte de Jesús.",
  body: `La Pascua (en hebreo "Pesaj") celebraba la liberación de Israel de Egipto. El nombre viene del verbo "pasar sobre" — la descripción de lo que hizo el ángel de la muerte al ver la sangre en los postes: pasó de largo. Éxodo 12 describe los detalles: cordero de un año sin defecto, sangre en los postes, comer de pie listo para partir.

Israel celebró la Pascua cada año como memorial vivo — no como recuerdo histórico abstracto sino como re-actuación: "en cada generación, cada persona está obligada a verse a sí misma como si hubiera salido de Egipto." La Pascua convertía la historia en experiencia presente.

Jesús eligió la semana de Pascua para su última semana en Jerusalén. En la noche de la Pascua celebra la última cena con sus discípulos y resignifica los elementos: el pan es su cuerpo, la copa es "mi sangre del nuevo pacto." Pablo lo dice explícitamente en 1 Corintios 5:7: "Cristo nuestra Pascua ya fue sacrificado."`,
  verses: ["Éxodo 12:1-28", "Lucas 22:14-20", "1 Corintios 5:7", "Juan 1:29"],
},

"piedad": {
  term: "Piedad",
  type: "Concepto bíblico",
  short: "Del griego 'eusebeia' — devoción práctica, la vida orientada correctamente hacia Dios. No es sentimentalismo religioso sino una orientación de vida concreta.",
  body: `"Piedad" traduce el griego "eusebeia" — literalmente "buena reverencia" o "buen temor." En el mundo griego se usaba para describir la actitud correcta hacia los dioses, los padres y la ciudad — el respeto que estructura la vida bien vivida.

Las cartas pastorales (1 y 2 Timoteo, Tito) usan "eusebeia" frecuentemente para describir el tipo de vida que el evangelio produce. 1 Timoteo 6:6 dice: "la piedad es gran ganancia cuando va acompañada de contentamiento." No como fórmula de prosperidad — sino como descripción de lo que tiene valor real: una vida bien orientada más la capacidad de estar satisfecho con lo que uno tiene.

2 Timoteo 3:5 alerta contra personas que tienen "apariencia de piedad pero niegan la eficacia de ella" — que parecen devotas externamente pero sin que esa devoción tenga consecuencias en cómo viven. Pablo contrasta la piedad real (que produce carácter y acción) con la piedad de fachada (que es solo forma cultural).`,
  verses: ["1 Timoteo 4:7-8", "1 Timoteo 6:6", "2 Timoteo 3:5", "Tito 1:1"],
},

"sufrimiento": {
  term: "Sufrimiento",
  type: "Concepto bíblico",
  short: "El NT no explica por qué existe el sufrimiento — describe cómo habitarlo. Pablo y Pedro tienen una teología del sufrimiento diferente a cualquier filosofía antigua.",
  body: `El sufrimiento en la Biblia no tiene una sola explicación. Job no pecó y sufrió. Jesús tampoco pecó y sufrió. Pablo sufrió constantemente mientras servía fielmente. La conexión mecánica entre pecado y sufrimiento que intentan establecer los amigos de Job es rechazada explícitamente por Dios al final del libro.

Lo que el NT ofrece no es explicación sino compañía y propósito. Romanos 8:17 conecta sufrimiento y gloria: "somos coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados." 2 Corintios 1:3-4 añade una dimensión práctica: "el Dios de toda consolación, que nos consuela en todas nuestras tribulaciones, para que podamos nosotros consolar a los que están en cualquier tribulación."

1 Pedro 2:21 va más lejos: "Cristo padeció por nosotros, dejándonos ejemplo para que sigáis sus pisadas." No que el sufrimiento sea bueno en sí mismo — sino que hay un camino a través de él que el propio Jesús recorrió primero. La Biblia no romantiza el sufrimiento; lo toma en serio y lo habita.`,
  verses: ["Romanos 8:17-18", "2 Corintios 1:3-4", "1 Pedro 2:21", "Filipenses 3:10"],
},

"libro de la vida": {
  term: "Libro de la vida",
  type: "Imagen bíblica",
  short: "Una imagen que recorre el AT y el NT — el registro de quienes pertenecen al pueblo de Dios, mencionado en Éxodo, los Salmos, Daniel y el Apocalipsis.",
  body: `La imagen del libro de la vida aparece por primera vez cuando Moisés intercede por Israel después del pecado del becerro de oro: "Te ruego que perdones ahora su pecado, y si no, bórrame ahora de tu libro que has escrito" (Éxodo 32:32). El libro es el registro de quienes pertenecen al pueblo — ser borrado es perder esa pertenencia.

El Salmo 69:28 pide que los enemigos sean "borrados del libro de los vivientes y no sean escritos entre los justos." Daniel 12:1 promete que "en aquel tiempo será rescatado tu pueblo, todos los que se hallen escritos en el libro." La imagen era conocida en el judaísmo del siglo I.

El Apocalipsis lo usa extensamente. El libro está "en manos del Cordero" (5:1). En el juicio final (20:12-15), "los libros fueron abiertos, y otro libro fue abierto, el cual es el libro de la vida." Pablo en Filipenses 4:3 habla de colaboradoras "cuyos nombres están en el libro de la vida" — usándolo como descripción natural de quiénes son sus compañeras de misión.`,
  verses: ["Éxodo 32:32", "Filipenses 4:3", "Apocalipsis 20:12-15", "Lucas 10:20"],
},

"pilato": {
  term: "Pilato",
  type: "Personaje histórico",
  short: "Poncio Pilato — gobernador romano de Judea entre el 26 y el 36 d.C. El funcionario que formalmente ordenó la crucifixión de Jesús.",
  body: `Poncio Pilato era el prefecto (gobernador) romano de Judea, cargo que ocupó aproximadamente del 26 al 36 d.C. Su nombre aparece en una inscripción de piedra encontrada en Cesarea en 1961 — una de las pocas confirmaciones arqueológicas directas de un personaje del NT.

Fuentes externas al NT (Josefo y Filón de Alejandría) lo describen como alguien que despreciaba a los judíos y cuya crueldad provocó varias protestas. Sin embargo, los evangelios lo muestran en el juicio de Jesús intentando varios veces soltarlo. Según Lucas 13:1, en otra ocasión "mezcló la sangre" de galileos con sus propios sacrificios — es decir, los mató durante actos religiosos.

La declaración que Pilato inscribió sobre la cruz — "Jesús de Nazaret, Rey de los Judíos" en hebreo, griego y latín — fue una decisión deliberada que irritó a los líderes religiosos (pidieron que dijera "se dijo que soy"). Pilato respondió: "Lo que he escrito, he escrito." Juan 19:22. Cualquiera que fuera su motivación, la inscripción quedó.`,
  verses: ["Juan 18:28-38", "Juan 19:19-22", "Lucas 23:1-25", "Marcos 15:1-15"],
},

"gracia y paz": {
  term: "Gracia y paz",
  type: "Término litúrgico",
  short: "El saludo que abre casi todas las cartas de Pablo — una combinación del saludo griego ('charis'/gracia) y el saludo judío ('shalom'/paz) que carga de significado teológico la fórmula más ordinaria.",
  body: `Las cartas del mundo grecorromano abrían con una fórmula estándar: nombre del remitente, nombre del destinatario, y "chaire" — el saludo griego que significa algo como "alégrate" o "salud." Los judíos saludaban con "shalom" — paz.

Pablo casi siempre reemplaza "chaire" por "charis" — gracia. Un cambio de una sola letra que carga de significado la fórmula. Y añade "shalom" en griego: "eirene." El resultado es una fórmula teológica densa en donde debería haber una convención social vacía: "Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo."

El orden importa: primero gracia, luego paz. En Pablo, la gracia es siempre el punto de partida — el favor inmerecido de Dios. La paz es la consecuencia — el shalom que resulta de haber recibido la gracia. No al revés: no se produce paz para ganar gracia. La gracia produce la paz.`,
  verses: ["Romanos 1:7", "Gálatas 1:3", "1 Corintios 1:3", "Efesios 1:2"],
},

};

// Quita acentos para comparación insensible: "mesías" → "mesias"
function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function getDictEntry(key: string): DictEntry | null {
  const k = key.toLowerCase();
  const kn = stripAccents(k); // versión sin acentos para búsqueda

  // 1. Búsqueda exacta
  if (DICT[k]) return DICT[k];
  // 2. Búsqueda sin acentos (mesías → mesias, apóstol → apostol)
  const exactNorm = Object.keys(DICT).find(dk => stripAccents(dk) === kn);
  if (exactNorm) return DICT[exactNorm];
  // 3. Plural en 's' → singular (profetas → profeta, discípulos → discípulo)
  if (kn.endsWith("s")) {
    const singular = kn.slice(0, -1);
    const found = Object.keys(DICT).find(dk => stripAccents(dk) === singular);
    if (found) return DICT[found];
  }
  // 4. Plural en 'es' → singular (ángeles → ángel, apóstoles → apóstol)
  if (kn.endsWith("es")) {
    const singular = kn.slice(0, -2);
    const found = Object.keys(DICT).find(dk => stripAccents(dk) === singular);
    if (found) return DICT[found];
  }
  return null;
}
