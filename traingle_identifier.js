

//function to check whether a triangle is equilateral,isosceles or scalene

function triangle(a,b,c)
{
 if (a===b & b===c)
 {
  return "Traingle is Equilateral Trainlge"
 }
 else if (a===b || b===c || a===c)
 {
    return "Traingle is Isosceles Trainlge"
 }
 else 
 {
    return "Traingle is Scalene Trainlge"
 }
}
//pass three sides or angles of a traingle in triangle function
console.log(triangle(2,3,5))