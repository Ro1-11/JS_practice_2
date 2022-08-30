
//Write a function using switch case to find the grade of a student based on marks obtained

function grade(marks)
{
  var x=marks
  switch(true)
  {
     case (x >= 90 && x <= 100):
      console.log(`Your marks is ${marks} and your grade is S Grade`)
      break
     case (x >= 80 && x < 90):
      console.log(`Your marks is ${marks} and your grade is A Grade`)
      break
     case (x >= 70 && x < 80):
      console.log(`Your marks is ${marks} and your grade is B Grade`)
      break
     case (x >= 60 && x < 70):
      console.log(`Your marks is ${marks} and your grade is C Grade`)
      break
     case (x >= 50 && x < 60):
      console.log(`Your marks is ${marks} and your grade is D Grade`)
      break
     case (x >= 40 && x < 50):
      console.log(`Your marks is ${marks} and your grade is E Grade`)
      break
     case (x >= 0 && x < 40):
      console.log("Student has failed")
      break
     default:
       console.log("Invalid Marks") 
  }
}
//pass the marks value in grade function
grade(60)