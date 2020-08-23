import { checkPassword } from './../checkPassword';
[
    { password: '123456' },
    { password: '12345' },
    {},
    { pa: '123456' }
].forEach((target, index) => {
    const [value, failureReason] = checkPassword(target)
    if (failureReason)
        console.log(index, 'validation fial.', JSON.stringify(failureReason))
    else
        console.log(index, 'validation ok.', JSON.stringify(value))
})
