1. what operations would you do with a list of elements? List them!

    - pop (remove last element of array)
    - push (add a new element to the end of the array)
    - shift (removes first element and shifts every other element one index lower)
    - unshift (adds a new element to the beginng and "unshifts" older elements)
    - length
    - delete
    - splice (add new elements to the array)
    - concat (creates a new array by merging existing arrays)
    - slice (slices out a piece of an array and creates a new array and puts it into it)
    - indexOf (index of place where elements first occurs in array )
    - join (chains all elements of one array through a comma or a given seperator)
    - forEach (Method performs a passed function on every element of an array)
    - isArray (checks if the given object is an array)

    many more:
    https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/of

2. why do you think is this true ```typeof [] ==  "object"```? What makes an object an object in classical programming?

    - every array is an object, there is no datatype "array"
    - An object has identity (each object is a distinct individual). An object has state (it has various properties, which might change). An object has behavior (it can do things and can have things done to it).