//NUMBERS

/*var a = 20 * 5
console.log(a)
console.log('======================================')

var charly = (((16-2) * 2) / 4)
console.log(charly)
console.log('======================================')
a * charly*/


//STRINGS =========================================================================

/*var myName = 'Dustin Robert Sattler'
myName.toUpperCase()

var d = 'Dustin'
console.log(d)
console.log('================================')
console.log(d.toUpperCase())
console.log('================================')
console.log(d.toLowerCase())
console.log('================================')

var s = 'Sattler'
console.log(s)
console.log('================================')

console.log(d + s)
console.log('================================')*/

//ARRAYS =========================================================================

//var users = ["Matt", "cam", "Barbara", "Bryant", "Joseph"]

//console.log(users)

/*var colors = ['red', 'blue', 'green', 'orange']
console.log(colors)
colors.push('black')
console.log(colors)
colors.pop()
console.log(colors)
colors.splice(1,1)
console.log(colors)
colors.length*/


/*//ARRAYS Practice

//declare a variable w/5 different music artist
var artist = ['NF', 'Eminem', 'Marshmello', 'Nelly', 'Slushii']

//print the variable
console.log(artist)

//print the 4th artist on the Array with a console.log 
console.log(artist[3])

//Add another artist to Array for a total of 6 artist then print the array
artist.push('Avicii')
console.log(artist)

//remove the 4th artist on the list ant then print the list
artist.splice(3,1)
console.log(artist)

//print the array in reverse
artist.reverse()
console.log(artist)*/

//OBJECTS ====================================================================

/*var student = {
  id: 22,
  name: 'Dustin',
  lastName: 'Sattler',
  Grade: function(grade){
    //console.log('his grade is ' + grade)

    return 'his grade is ' + grade
  },
  classes: ["math", "english", "gym", "history"]
}

console.log(student)
console.log('=======================================')
console.log(student.lastName)
console.log('=======================================')
console.log(student.Grade(96))
console.log('=======================================')
console.log(student.id)
console.log('=======================================')
console.log(student.classes.push('art'))
console.log('=======================================')
console.log(student)*/

//Objects Practice

//declare a variable named student with and object inside that has properties name, age, occupation then print the variable
/*var student = {
  name: 'Dustin Sattler',
  age: 30,
  occupation: 'Cyber Security Analyst',
}

console.log(student)
console.log('======================================')

//add a property with your birthdate as a string and must be like this, object['key'], then print the variable student
student['birthdate'] = 'September 20th'

console.log(student)
console.log('======================================')

//add an array with all your education, but using .key and inside the array you must have other objects with the information of each of the schools you went to like the name, years in school, and graduationDate and then print the variable student

student.education = [
  {
  name: 'FSCJ',
  year: 2019,
  graduationDate: 'Did not graduate',
  },
  {
  name: 'New Horizons Computer Learning',
  year: 2018,
  graduationDate: 2018,
}
]

console.log(student)
console.log('======================================')

//then print one of the schools name

console.log(student.education[1])
console.log('======================================')*/