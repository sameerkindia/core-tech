class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
    }
    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
    }

    keys(){
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }

        return keysArray
    }
}

// const myHashTable = new HashTable(50)
// myHashTable.set('grapes', 10000)
// myHashTable.set('apples', 45)
// myHashTable.set('mangos', 5)
// myHashTable.get('grapes')
// console.log(myHashTable.keys())



function firstRecurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }

    return undefined
}

firstRecurringCharacter([2,5,1,2,2,3,4,5,6,1])

function firstRecurringCharacter2(input){
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    // console.log(map)
    return undefined
}

console.log(firstRecurringCharacter2([2,5,1,2,2,3,4,5,6,1]))