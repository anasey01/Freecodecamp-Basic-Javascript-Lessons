/*
    Return the factorial of a number.
    The factorial of a number (n) is the product of n and all the positive
    Intergers lower than n.

    Example - Factorial of 5! - 5 * 4 * 3 * 2 * 1 = 120 || 1 * 2 * 3 * 4 * 5;
              Factorial of 0! = 1;
*/

const factorialize = (num) =>   {
    // Acting as a place holder starting at the value of num.
   var result = num;
    // I need an if statement to check the base case if num is 0 or 1;
    if (num == 0 || num == 1){
        return console.log(1);
    }
    //Using a while loop, in the case of 5 being the num; the loop should run as long as 5 is greater than 1
    // meaning as long as num is greater than 1;
   while (num > 1){
       //As long as the condtion evaluates to true, decrease num by one.
        num--;
        //Here the placeholder of result equals - current value of result (5 in this case) * num (4)
        //The loop continues to go back as long as it evaluates to true.
        // and then breaks off when it evaluates to false.
        result = result * num;
   } 
   return console.log(result);
}

factorialize(0);
factorialize(1);
factorialize(5);
factorialize(10);
factorialize(20);
