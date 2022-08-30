
/*Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/

function prime(start,end)
{
    
    for(i=start;i<=end;i++)
    {

        let checker=0
        for (j=2;j<i;j++)
        {
            if (i%j===0)
            {
                checker=1
                break
            }      
        }
        if (checker===0)
        {
            let fact=1
            for(let k=1;k<=i;k++)
           {
              fact=fact*k
           }
              
            console.log(`${i}:${fact}`)
        }
    }
     
}
prime(5,107)

// let i=97
// let checker=0
//  for (j=2;j<i;j++)
//  {
//     if (i%j===0)
//     {
//         checker=1
//         break
//     }
    
//  }
//  if (checker===0)
//  {
//     console.log(i)
//  }
        