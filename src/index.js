// @flow
/**
 * It's a tuple.
 */

export type Tuple<A,B> = {| +_1: A, +_2: B |};

// Create a tuple.
const of = <A,B>(a: A, b: B): Tuple<A,B> => ({ _1: a, _2: b });

// Get the first value from a tuple.
const first = <A,B>(tuple: Tuple<A,B>): A => tuple._1;

// Get the second value from a tuple.
const second = <A,B>(tuple: Tuple<A,B>): B => tuple._2;

// Map both values in a tuple.
const bimap = <A,B,C,D>(f: (a: A) => C, g: (b: B) => D, tuple: Tuple<A,B>): Tuple<C,D> => of(f(tuple._1), g(tuple._2));

// Map over the first value.
const mapFirst = <A,B,C>(f: (a: A) => C, tuple: Tuple<A,B>): Tuple<C,B> => of(f(tuple._1), tuple._2);

// Map over the second value.
const mapSecond = <A,B,C>(f: (b: B) => C, tuple: Tuple<A,B>): Tuple<A,C> => of(tuple._1, f(tuple._2));

export default { of, first, second, bimap, mapFirst, mapSecond };
