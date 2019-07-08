class Human {
  constructor() {
    this.gender = 'Masculino'
  }
}

class Danilo extends Human {
  constructor() {
    super()
    this.name = 'Danilo'
    this.age = 31
  }

  surname = 'Nogueira'

  // ES6
  printName() {
    return this.name
  }
  printAge() {
    return this.age
  }
  printGender() {
    return this.gender
  }

  // ES7
  printSurname = () => {
    return this.surname
  }
}

export default Danilo
