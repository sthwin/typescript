import { IValueProvider } from '../interfaces'

export class StringComposer implements IValueProvider<string> {
    constructor(private _value: string = '') { }
    value(): string {
        return this._value
    }
}