import { DH_NOT_SUITABLE_GENERATOR } from "constants";

function* generator() {
    console.log('generator started...')
    let value = 1
    while(value < 4)
        yield value++
    console.log('generator finished...')
}

for(let n of generator())
    console.log(n)