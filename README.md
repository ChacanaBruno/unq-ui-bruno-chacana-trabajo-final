# Palabras Encadenadas

Juego de palabras encadenadas hecho con React y Vite. El objetivo es formar la cadena
más larga posible de palabras válidas antes de que se agote el tiempo.

## Cómo se juega

- Se ingresan palabras que forman una cadena.
- La primera palabra puede ser cualquiera.
- A partir de la segunda, cada palabra tiene que:
  - existir en el diccionario español (se valida contra una API),
  - no haber sido usada antes en la partida,
  - empezar con la última letra de la palabra válida anterior.
- Cada letra de una palabra válida suma 1 punto.
- Cada turno dura 15 segundos. El contador se reinicia con cada palabra válida y,
  cuando llega a 0, la partida termina.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite levanta el proyecto en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Características

- Validación de palabras contra la API del diccionario.
- Puntaje y cantidad de palabras en tiempo real.
- Aviso del motivo cuando una palabra no es válida (no existe, ya usada, no encadena).
- Pantalla de fin de partida con el puntaje final.
- Diseño responsive.
- Se puede volver a jugar sin recargar la página.
- Leaderboard local con los 10 mejores puntajes (guardado en el navegador).
