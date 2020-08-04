export interface ISquare { tag: 'square', size: number }
export interface IRectangle { tag: 'rectangle', width: number, height: number }
export interface ICircle { tag: 'circle', radius: number }

export type IShape = ISquare | IRectangle | ICircle

export const calcArea = (shape: IShape): number => {
    switch (shape.tag) {
        case 'square':
            return shape.size * shape.size
        case 'rectangle':
            return shape.width * shape.height
        case 'circle':
            return Math.PI * shape.radius * shape.radius
    }
    return 0
}

const square: ISquare = { tag: 'square', size: 10 }
const rectangle: IRectangle = { tag: 'rectangle', width: 4, height: 5 }
const circle: ICircle = { tag: 'circle', radius: 10 }

console.log(
    calcArea(square), calcArea(rectangle), calcArea(circle)
)