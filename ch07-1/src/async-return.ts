const asyncReturn = async() => {
	return [1, 2, 3]
}

asyncReturn().then(
	value => console.log(value)
)

const asyncException = async() => {
	throw new Error ('error')
}

asyncException()
	.catch(err => console.log('err:', err.message))


const awaitException = async() => {
	return await Promise.reject(new Error('error'))
}

awaitException()
	.catch(err => console.log('err:', err.message))