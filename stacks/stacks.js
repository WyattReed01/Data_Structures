class Plate {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    pop() {
        let top = this.top
        if (this.length === 1) {
            this.top = null
            this.bottom = null
        } else {
            this.top = this.top.next
        }
        this.length--
        return top
    }

    push(data) {
        const plate = new Plate(data)

        if (!this.top) {
            this.top = plate
            this.bottom = plate
        } else {
            let temp = this.top
            this.top = plate
            this.top.next = temp
        }
        this.length++
        return this
    }

    peek() {
        if (this.top) {
            return this.top;
        } else {
            return 'no plates'
        }
    }
}

const stack = new Stack()
stack.push("First plate")
stack.push('Second Plate')
stack.push('Third Plate')
stack.pop()
stack.pop()
stack.pop()

console.log(stack.peek())