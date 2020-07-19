
export class StringIterable implements Iterable<String> {
    constructor(private strings: string[] = [], private currentIndex: number = 0) { }
    [Symbol.iterator](): Iterator<string> {
        const that = this;
        let currentIndex = that.currentIndex
        let length = this.strings.length

        const iterator: Iterator<string> = {
            next(): { value, done } {
                const value = currentIndex < length ? that.strings[currentIndex++] : undefined
                const done = value == undefined
                return { value, done }
            }
        }
        return iterator
    }
}

for(let str of new StringIterable(['hello', 'world', '!!']))
    console.log(str)