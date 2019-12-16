1. What datatypes do exist in the programming language JavaScript?  List them!

    important:
    - String (series of characters)
    - Number (with or without decimals)
    - Boolean (true or false)
    - Array (series of strings/numbers)
    - Object (contains string with description)
    - Function
    
    - Undefined (without a value)
    - Null (value of 0)
    - BigInt (for numbers larger than 2^53)
    - Symbol (be used as an identifers for object properties, every symbol is unique, for describing)

2. What does coersion mean? Give me an example!

    - process of converting a value from one type to another (string to number, object to boolean etc.)

        - to string: explicit: String(123) // implicit: 123 + ''

                all primitive values are converted naturally as expected:
                String(123)                   // '123'
                String(-12.3)                 // '-12.3'
                String(null)                  // 'null'
                String(undefined)             // 'undefined'
                String(true)                  // 'true'
                String(false)                 // 'false'

        - to boolean: explicit: Boolean(2) // implicit: 2 || 'hello' // 2 && 'hello'
                
                any values other than those are converted to true:
                Boolean('')           // false
                Boolean(0)            // false     
                Boolean(-0)           // false
                Boolean(NaN)          // false
                Boolean(null)         // false
                Boolean(undefined)    // false
                Boolean(false)        // false

        - to number: explicit: Number('123') // implicit: 4 > '5'

                Number('123')   // explicit
                +'123'          // implicit
                123 != '456'    // implicit
                4 > '5'         // implicit
                5/null          // implicit
                true | 0        // implicit

                converting primitive values to numbers:

                Number(null)                   // 0
                Number(undefined)              // NaN
                Number(true)                   // 1
                Number(false)                  // 0
                Number(" 12 ")                 // 12
                Number("-12.34")               // -12.34
                Number("\n")                   // 0
                Number(" 12s ")                // NaN
                Number(123)                    // 123

        https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

        comparison different?
        comparison same again?