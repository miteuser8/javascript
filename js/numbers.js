function checkPrime()
{
   var num=getUserInput();
    flag=true;
    if(num < 2){
        flag= false;
    }
    for(var i = 2; i <= Math.sqrt(num); i++)
        {
            if(num%i==0)
                flag=false;
                break;
            }
     
               if(flag){
                   
            showResult("Number:" +num+ " is prime");}
        else{
            showResult("Number:" +num+ " is not prime");
            }
                            
            }
        
    function factorial()
{
    num=getUserInput();
    var res=1;
    for(var i = 2; i <= num; i++)
        {
            res*=i;
        }
    showResult("factorial of "+num+" is :" +res);
    
    }
function factor()
{
   var num=getUserInput()
    var output=" ";
    for(var i=1; i<num; i++)
        if(num%i==0)
            {
                output +=i+" ";
                
            }
    showResult("factor of:" +num+ " is :"+output);
            }
    
    

function fibonacci()
{
    var num=getUserInput();
    var output="";
    if(num==1){
        output +="0";
    }else if(num==2)
        {
            output += "0 1";
        }else{
            var a=0, b=1;
            output += "0 1";
            for(var i = 3; i <= num; i++){
                c= a + b;
                output += " "+c;
                a = b;
                b = c;
            }
        }
      showResult("fibonacci of " +num+ " is :"+output);
}
function reverse()
{
     var num=getUserInput();
    var rev=0;
    var r;
    while(num!=0)
        {
            r=num%10;
            rev=(rev*10)+r;
            num=Math.floor(num/10);
            }
    
     showResult("reverse is :"+rev);
    
}
function palindrome()
{
   var num1=getUserInput();
    var rev=0;
var num2=num1;
    while(num1!=0)
        {
   r= Math.floor(num1%10);
            rev=rev*10+r;
      num1=Math.floor(num1/10);
        }
           
            if(num2==rev)
              
        
      showResult("its a palindrome"); 
              
    else
          showResult("its not a palindrome"); 
        
}

function sumsingledigit()
{
    var num=getUserInput();
   var sum=num;
    while(num>9)
        {
            sum= Math.floor(num/10)+num%10;
            num=sum;
           
        }
     showResult("sumofdigit is :"+sum); 
}
function sumdigit()
{
    var num=getUserInput();
    var sum=0;
    while(num!=0)
        {
            sum+=num%10;
        num=Math.floor(num/10);
        }
     showResult("sumofdigit is :"+sum); 
}



function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>"
    return num;
}