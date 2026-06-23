# Biblia Simple

App para leer la Biblia sin perderse ni rendirse.

## El problema que resuelve

- Las genealogías parecen listas de nombres sin sentido
- Las palabras técnicas (fariseos, pacto, expiación) no tienen contexto
- No hay guía para saber por dónde empezar

## La solución

- **Contexto histórico** por capítulo — qué estaba pasando en el mundo cuando se escribió
- **Diccionario interactivo** — toca cualquier palabra subrayada para ver su explicación completa
- **Genealogías narrativas** — árboles que explican qué está argumentando el autor con esa lista
- **Ruta guiada de 40 días** — un camino pensado para principiantes
- **Portada personalizable** — el usuario elige la imagen que representa su fe

## Texto bíblico

Reina-Valera 1909 (dominio público) via [bible.helloao.org](https://bible.helloao.org) — sin API key, sin costo.

## Videos

[Proyecto Biblia](https://proyectobiblia.com) en español — canal oficial de Bible Project en español.

## Stack

- Next.js 14 + TypeScript
- Sin base de datos
- Sin backend
- Sin dependencias de CSS
- localStorage para progreso y preferencias
- Deploy en Vercel (gratis)

## Deploy en Vercel desde cero

```bash
# 1. Clonar o descomprimir el proyecto
cd biblia-simple

# 2. Instalar dependencias
npm install

# 3. Correr localmente
npm run dev

# 4. Deploy
npx vercel
```

O conectar el repositorio de GitHub a Vercel para deploy automático en cada push.

## Contenido incluido

### Contextos por capítulo (40+)
Génesis 1-22, Éxodo 1-20, Levítico 1, Números 1 y 13,
Marcos 1-4 y 8-16, Juan 1-3 y 11, Lucas 1 y 15,
Hechos 1-2, Romanos 1-3 y 8, Salmos 1, 22 y 23, Mateo 1 y 5

### Genealogías (5)
- De Adán a Noé (Génesis 5)
- De Abraham a Jesús (Mateo 1)
- La tabla de las naciones (Génesis 10)
- De Sem a Abraham (Génesis 11)
- El censo de las tribus (Números 1)

### Diccionario (30+ términos)
Reino de Dios, Mesías, Tabernáculo, Templo, Sacrificio, Expiación,
Sinagoga, Ley, Profeta, Saduceos, Fariseos, Apóstol, Bautismo, Fe,
Pecado, Gracia, Arrepentimiento, Escribas, Espíritu inmundo,
Publicanos, Pecadores, Blasfemia, Imagen de Dios, Pacto, Redención,
Evangelio, Justificación, El Verbo, Pastor, Abraham, Moisés

## Licencia

MIT — libre para usar, modificar y distribuir.
