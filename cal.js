var buttons = document.getElementsByClassName('button');
var expression = document.getElementById('expression');
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++)
{
    
    buttons[i].addEventListener('click',function()
    {
        //console.log(buttons[i]);
        var value = this.getAttribute('data-value');
    if(value=='+')
    {
        
        if(operand1 !=null && operator!=null && display.innerText==="")
         {
            operator = '+';
         }
         else{
        operand1= display.innerText;
        operator='+';
         }
        display.innerText="";
        if(operand1!== "")
        {
            expression.innerText= operand1+operator;
        }

    }
    else if(value== '-')
    {
        if(operand1 !=null && operator!=null && display.innerText==="")
         {
            operator = '-';
         }
         else{
        operand1= display.innerText;
        operator='-';
         }
        display.innerText="";
        if(operand1!== "")
        {
            expression.innerText= operand1+operator;
        }
    }
    else if(value== '*')
    {
         if(operand1 !=null && operator!=null && display.innerText==="")
         {
            operator = '*';
         }
         else{
        operand1= display.innerText;
        operator='*';
         }
        display.innerText="";
        if(operand1!== "")
        {
            expression.innerText= operand1+operator;
        }
        
    }
    else if(value== '/')
    {
        if(operand1 !=null && operator!=null && display.innerText==="")
         {
            operator = '/';
         }
         else{
        operand1= display.innerText;
        operator='/';
         }
        display.innerText="";
        if(operand1!== "")
        {
            expression.innerText= operand1+operator;
        }
    }
    else if(value== '%')
    {
        if(operand1 !=null && operator!=null && display.innerText==="")
         {
            operator = '%';
         }
         else{
        operand1= display.innerText;
        operator='*';
         }
        display.innerText="";
        if(operand1!== "")
        {
            expression.innerText= operand1+operator;
        }
    }
    else if(value== '+/-')
    {    
         if(operator==null)
         {
         operand1= display.innerText;
         operand1 = -operand1;
         display.innerText= operand1;
         expression.innerText= operand1;
         }
    }
    else if(value== 'AC')
    {
        operand1 = null;
        operand2 = null;
        operator = null;
        display.innerText="";
        expression.innerText="";
    }
    
    else if(value== '=')
    {
          operand2 = display.innerText;
          if(operand1!=null && operator !=null && operand2 !== "")
          {
            var string = operand1 + operator + operand2;
            var ans= eval(string);
           
            display.innerText=ans;
            expression.innerText=ans;
           
           
          }
          else{
            console.log("ans");
          }

    }
    else{
        
         
         display.innerText+=value;
         expression.innerText+=value;
    }
    });
}