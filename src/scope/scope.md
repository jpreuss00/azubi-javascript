1. What is the difference between declaration and definition? How does this relate to the concept of 'hoisting'. Explain!

    -   var x is a declaration because you are not defining what value it holds but you     are declaring its existence and the need for memory allocation.

        var x = 1 is both declaration and definition but are separated with x being declared in the beginning while its definition comes at the line specified (variable assignments happen inline).

        Hoisting: Javascript takes every variable and function declaration and brings it to the top (of its corresponding scope) then trickles down assigning them in order
            --> declaration at the top
            --> definition at the written line

2. Watch https://www.youtube.com/watch?v=ZoFlcv2ByBo . 

    -   cool video

3. What is hoisting again? What scopes does javascript use? List them!

    -   Hoisting: Javascript takes every variable and function declaration and brings it to the top (of its corresponding scope) then trickles down assigning them in order
            --> declaration at the top
            --> definition at the written line

    -   Globalscope: variables available in the wole script

    -   Localscope: variables only available in the certain function