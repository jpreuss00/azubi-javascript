1. write a function in three different programming languages that returns the sum of two numbers, which have been given to the function as an argument.

    -   java:

        public static int function(int number1, int number2){
            return number1 + number2;
        }

    -   javascript:

        function function(var number1, var number2){
            return number1 + number2;
        }

    -   python

        def function(number1, number2):
            sum = number1 + number2;
            return;

2. what is similar in all three implementations? what is different?

    -   similar: def. of args, return

    -   different: def. of function

3. explain variable shadowing. Give me an example!

    -   A variable only exists within its containing function/method/class, and those will override any      variables which belong to a wider scope.

        var currencySymbol = "$";

        function showMoney(amount) {
        var currencySymbol = "€";
        document.write(currencySymbol + amount);
        }

        showMoney("100");​

    -   the var currencySymbol will contain a '€' sign, because the '$' sign is in a wider scope 