import MATHDATA from "./data/MATH"

export const getOrder = (gradeLevel) => {
  switch(gradeLevel){
    case "Kindergarten":
      return 1
    case "1st Grade":
      return 2
    case "2nd Grade":
      return 3
    case "3rd Grade":
      return 4
    case "4th Grade":
      return 5
    case "5th Grade":
      return 6
    case "6th Grade":
      return 7
    case "7th Grade":
      return 8
    case "8th Grade":
      return 9
    case "9th Grade":
      return 10
    case "10th Grade":
      return 11
    case "11th Grade":
      return 12
    case "12th Grade":
      return 13        
    default: 
      return 0  
  }
}

export const getGrade = (level) => {
  switch(level){
    case "1":
      return "Kindergarten"
    case "2":
      return "1st Grade"
    case "3":
      return "2nd Grade"
    case "4":
      return "3rd Grade"
    case "5":
      return "4th Grade"
    case "6":
      return "5th Grade"
    case "7":
      return "6th Grade"
    case "8":
      return "7th Grade"
    case "9":
      return "8th Grade"
    case "10":
      return "9th Grade"
    case "11":
      return "10th Grade"
    case "12":
      return "11th Grade"
    case "13":
      return "12th Grade"        
    default: 
      return 0  
  }
}

export const getSubjectData = (subject) => {
  switch(subject){
    case "math":
      return MATHDATA
  }
}