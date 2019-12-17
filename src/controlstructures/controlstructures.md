1. what control structures do you know?

    - if
    - while
    - do while
    - for
    - switch (When [i] gets evaluated, its value is checked against each of the case labels. These case labels appear in the switch statement and, if the value for the case matches [i], continues the execution at that point. If none of the case labels match, execution continues at the default label (or skips the switch statement entirely, if none is present.)

    switch(i) {
    case 1:
    case 2:
    case 3:
        // …
        break;
    case 4:
        // …
        break;
    default:
        // …
        break;
    }

    - with (The with statement is used to extend the scope chain for a block)

    var area;
    var r = 10;

    with (Math) {
        a = PI*r*r;       // == a = Math.PI*r*r
        x = r*cos(PI);    // == a = r*Math.cos(Math.PI);
        y = r*sin(PI/2);  // == a = r*Math.sin(Math.PI/2);
    }
    

2. given a loop that prints number from 1 to 5. Implement this with a for loop and a while loop.

    - 
        for (var i = 1; i < 6; i++){
            console.log (i);
        }

        var i = 0
        while (i < 5){
            i++;
            console.log(i)
        }

3. What is a fall-through in context of a switch statement?

    - passing a condition, if the execution is not doable
        - needs a 'break;' at the end of the condition