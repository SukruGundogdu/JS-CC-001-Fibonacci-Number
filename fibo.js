function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 
  
document.write("Fibonacci(7): "+fibonacci(7)+"<br>"); 
document.write("Fibonacci(12): "+fibonacci(12)+"<br>"); 