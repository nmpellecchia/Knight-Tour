# Knight's Tour

[ENG - ESP]

## [ENG]

## Overview

---

There are tons of knight's tours online. But I decided to challenge myself and do something different. Solving it using a different algorithm than brute-force.

## How does it work

---

The board is defined as a 2d array, given a starting position the program, utilizing recursion, calculates all legal moves, their possible subsequents and chooses the one with the fewest. Once all elements in the array have been filled, or there aren't any possible moves, the tour stops.

## Tools used

---

This project was made with vanilla javascript, HTML and CSS as a way to reinforce the basics.

## Why use Wanrsdoff's rule

---

Based on some personal test done prior to the start of this project, brute-force algorithms proved to be far more slow, taking in some cases more than ten minutes to found a solution on a relatively small board. And started to cause several strain on the computer with sizes of 10x10 and bigger.
Meanwhile, this algorithm, although not perfect. Is several times faster and easy on slower computers. And for me, in this case, those advantages greatly surpass the con of not always finding a viable path.
