# TypeScript Function Overloading Subtlety

This repository demonstrates a subtle bug related to TypeScript's type system and function overloading. The bug doesn't cause a runtime error but highlights a potential pitfall when dealing with function signatures.

## Bug Description

The code contains two functions, `add` and `subtract`. While they seem simple, they can lead to unexpected behavior if not handled carefully within a larger codebase, especially concerning type inference and potential for unexpected overload resolution.   The provided `bug.ts` file illustrates the base scenario. The solution in `bugSolution.ts` is straightforward and doesn't introduce significant complexity.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).  Observe the output.  Then compare to the solution.