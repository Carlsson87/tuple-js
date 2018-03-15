# Tuple
This is a tuple that can contain 2 values, because that's my most common use case.

# Usage
```js
import Tuple from 'tuple';

// Create a tuple.
const aNumberAndAString = Tuple.of(1, "One");

// Get values out of tuple.
const theNumber = Tuple.first(aNumberAndAString);
const theString = Tuple.second(aNumberAndAString);

// Mapping over the tuple.
const aStringAndANumber = Tuple.bimap(num => "" + num, str => str.length, aNumberAndAString);
const aLargerNumberAndAString = Tuple.mapFirst(num => num + num, aNumberAndAstring);
const aNumberAndALongerString = Tuple.mapSecond(str => str + str, aNumberAndAString);
```
