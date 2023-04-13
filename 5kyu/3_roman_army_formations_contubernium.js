// -- ************ --- //
// --- [2023-04-13] --- //
// --- ************ --- //

// Roman Army Formations: Contubernium
// Description:
// Preface

// This is the first of (hopefully) a series of kata's about military units in the Roman Army. This kata concerns the Contubernium, which is the basic military unit. Only infantry units are in scope.
// Task
// "Given the formation of one or more Contubernium units, render those units as string."
// Input

//     formation: a '-' delimited string containing the formation type, size of unit, and amount of units. For instance, 'A-8-1' is the standard Contubernium unit standing at attention.
//         formation type: char 'A' or 'M'
//             'A': standing at (A)ttention
//             'M': (M)arching
//         size: an even positive number representing the amount of soldiers in a single military unit
//         count: a positive number representing the amount of military units

// Output

//     return a '\n' delimited string, with rows of equal size, representing the units positioned conform the specified formation. Characters used in the output:
//         '.': ground
//         '/': stride (during march)
//         '\': location of a soldier
//         '´': identifies a legionary
//         '¨': identifies a decanus

// Input Constraints

//     size will always be even (because of pair forming when marching)
//     50 tests with 2 <= size <= 10 and 1 <= count <= 2
//     50 tests with 2 <= size <= 10 and 3 <= count <= 6
//     50 tests with 10 <= size <= 20 and 1 <= count <= 2
//     50 tests with 10 <= size <= 20 and 10 <= count <= 20
//     50 tests with 45 <= size <= 50 and 45 <= count <= 50

// Specification
// Soldiers

//     legionary: the standard soldier
//     decanus: the ranking officer of a Contubernium
//     all soldiers are always rendered by 2 tiles:
//         left: their identifier
//         right: their location (and body)

// ---------------------
// soldiers
// ---------------------

// ´\  legionary
// ¨\  decanus

// Contubernium
//     the Contubernium is the basic military unit
//     it usually consists of 7 legionaries and 1 decanus (size = 8), together they are the contubernales

// Formations
//     both formations described below are in 2D perspective. The main direction is ↙.
//     for both formations, render a rectangle big enough to contain the formation while allowing a padding of 1 ground tile in all directions (up, down, left, right)
//     there are sample tests for each of the examples described below

// standing at Attention
//     within one unit:
//         legionaries are standing horizontally next to eachother with 1 tile beteen them
//         the decanus stands across (↙) the middle legionary with 1 tile between them
//     between units:
//         there are 3 tiles between the right-most legionary of a unit and the left-most legionary of the next unit

// ---------------------
// standing at attention
// ---------------------

// A-2-1   A-2-2
// ......  ..........
// ...´\.  ...´\..´\.
// ......  ..........
// .¨\...  .¨\..¨\...
// ......  ..........

// A-4-1      A-4-2
// ........   ................
// .´\´\´\.   .´\´\´\..´\´\´\.
// ........   ................
// .¨\.....   .¨\......¨\.....
// ........   ................

// A-8-1             A-8-2
// ................  ................................
// .´\´\´\´\´\´\´\.  .´\´\´\´\´\´\´\..´\´\´\´\´\´\´\.
// ................  ................................
// .....¨\.........  .....¨\..............¨\.........
// ................  ................................

// Marching
//     within one unit:
//         legionaries are walking in pairs, with 1 tile between each member of pair
//         the decanus forms a pair with one of the legionaries, and takes left position from our point of view
//         each pair walks in a straight line (↙) behind the pair in front of them
//         legionaries that don't have another person within 2 tiles to the right, have their stride visible
//     between units:
//         there is 1 tile between the last pair of a unit and the first pair of the next unit

// ---------------------
// marching
// ---------------------

// M-2-1    M-2-2
//          .........
//          ...¨\´\/.
// .......  .........
// .¨\´\/.  .¨\´\/...
// .......  .........

// M-4-1     M-4-2
//           ...........
//           .....´\´\/.
//           ....¨\´\/..
// ........  ...........
// ..´\´\/.  ..´\´\/....
// .¨\´\/..  .¨\´\/.....
// ........  ...........

// M-8-1       M-8-2
//             ...............
//             .........´\´\/.
//             ........´\´\/..
//             .......´\´\/...
//             ......¨\´\/....
// ..........  ...............
// ....´\´\/.  ....´\´\/......
// ...´\´\/..  ...´\´\/.......
// ..´\´\/...  ..´\´\/........
// .¨\´\/....  .¨\´\/.........
// ..........  ...............
