class Person {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Bus {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        if(!this.first){
            return null
        }
        return this.first
    }

    enqueue(data){
        const person = new Person(data)
        if(!this.first){
            this.first = person
            this.last = person
        }else{
            this.last.next = person
            this.last = person
        }
        this.length++
        return this
    }
    
    dequeue(){
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.length--
        return this.first
    }
}

const b = new Bus()

b.enqueue("First in Line")
b.enqueue("2nd in Line")
console.log(b)