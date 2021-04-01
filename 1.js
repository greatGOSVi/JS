function person () {
    const decirThis = () => {
        console.log(this);
    }
    console.log('antes de forEach', this);
    [1, 2, 3].forEach(decirThis);
}

person.call({text: 'hola'});