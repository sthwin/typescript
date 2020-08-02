const create = <T>(type: { new(...args): T }, ...args): T => new type(...args)

class Point { constructor(public x: number, public y: number) { } }
[
    create(Date),
    create(Point, 0, 0)
].forEach(s => console.log(s))