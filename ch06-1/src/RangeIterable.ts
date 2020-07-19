export class RangeIterable {
    constructor(public from: number, public to: number) { }
    // Symbol.iterator 메소드를 구현함
    [Symbol.iterator]() {
        const that = this;
        let currentValue = that.from
        return {
            next() {
                const value = currentValue < that.to ? currentValue++ : undefined
                const done = value == undefined
                return { value, done }
            }
        }
    }
}

for (let n of new RangeIterable(1, 10 + 1))
    console.log(n)