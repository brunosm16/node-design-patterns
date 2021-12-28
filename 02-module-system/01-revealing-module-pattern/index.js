const myModule = (() => {
    const privateObj = {}

    const privateAttr = 'private attr'

    const exported = {
        publicObj: {
            id: '__public__obj'
        },
        publicAttr: 'public attr'
    }

    return exported
})()

console.log(myModule)
console.log(`\n\nExpect undefined : \n`)
console.log(myModule.privateObj)
console.log(myModule.privateAttr)
console.log(`\n\nDon't expect undefined : \n\n`)
console.log(myModule.publicObj)
console.log(myModule.publicAttr)