# Knight's Tour

[ENG - ESP]

### [ENG]

## Overview

---

There are tons of knight's tours online. But I decided to challenge myself and do something different. Solving it using a different algorithm than brute-force.

## How does it work

---

The board is defined as a 2d array, given a starting position the program, utilizing recursion, calculates all legal moves, their possible subsequents and chooses the one with the fewest. Once all elements in the array have been filled, or there aren't any possible moves, the tour stops.

## Tools used

---

This project was made with vanilla javascript, HTML and CSS.

## Why use Wanrsdoff's rule

---

Based on some personal test done prior to the start of this project, brute-force algorithms proved to be far more slow, taking in some cases more than ten minutes to found a solution on a relatively small board. And started to cause several strain on the computer with sizes of 10x10 and bigger.
Meanwhile, this algorithm, although not perfect. Is several times faster and easy on slower computers. And for me, in this case, those advantages greatly surpass the con of not always finding a viable path.

### [ESP]

## General

---

Hay muchos problemas del caballo en internet. Pero decidí desafiarme y hacer algo diferente. Utilizando otro algoritmo en lugar de resolverlo mediante fuerza bruta.

## Cómo funciona

---

El tablero es un array 2D al cual, dado una posición inicial, calcula todos los movimientos permitidos y sus posibles posiciones futuras a partir de ellos; eligiendo al que tenga la menor cantidad de estos. Una vez que todos los elementos del array han sido llenados o no hay movimientos posibles, el tour se detiene.

## Herramientas usadas

---

Este proyecto fue hecho usando vanilla javascript, HTML y CSS.

## Por qué usar la regla de Warnsdoff

---

A partir de expermientos hechos por mi mismo antes de comenzar este proyecto, los algoritmos de fuerza bruta demostraron ser mucho más lentos, tomando en algunos casos más de 10 minutos para encontrar una solución en un tablero relativamente pequeño. Y causaban problemas de rendimiento con tamaños de 10x10 o mayores.
EN su lugar, este algoritmo, aunque no es perfecto. Es varias veces más veloz y no consume tantos recursos. Para mí, en este caso particular, esas ventajas sobrepasan en gran medida la desventaja de no encontrar siempre una solución.
