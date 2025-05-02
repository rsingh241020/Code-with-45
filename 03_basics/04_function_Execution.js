/* Javascript excution AudioContext
{} -> Global Execution Context
There is 3 type of Execution 
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context


let var1 =10;
let var2 = 2;

function add(num1,num2){
let total = mum1+num2;
return total

}
let result = add(val1,val3)
let result2 = add(7,0)

Global Execution
        |
       this
Memory Phase
    val1 = undefine
    va2 = undefine
    addnum -> Defination
    result1 = undefine
    result2 = undefine

    Execution phase
    val1 =10
    val2 = 2
     After this you can go on the video 25 and see their the woeking of the code execution 


     The call stack is a data structure that keeps track of function calls in your JavaScript code — like a stack of plates, the last function added is the first one removed (LIFO: Last In, First Out).



*/
