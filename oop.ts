import inquirer from "inquirer";
type ansType={
    input:string

}
class Person{
    personality:string="mystery"

    person(){
        this.personality="mystery"
        
    }


    askQuestion=async()=>{
        let answer:ansType = await inquirer.prompt([
            {
              type: 'input',
              message: '',
              name: 'input'
            }
          ])

        if(answer.input == "1"){
            this.personality="Extrovert"
        }
        else if (answer.input == "2"){
            this.personality="Introvert"
        }
        else{
            this.personality
        }
    }
   
}
class Student extends Person{
    name:string
    constructor(name:string){
        super()
        this.name=name
    }
    getName(){
        return this.name
    }
    setName(value:string){
        return this.name=value
    }
    showStatus(){
        return " "+this.name+",your personality is "+this.personality+" "
    }
}

const person1=new Person()
const std1=new Student("areeb")
person1.askQuestion()
std1.showStatus()