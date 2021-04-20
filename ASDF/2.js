function hablar () {
    console.log(this);
}

const dormir = () => {
    console.log(this);
}

const persona = {
    hablar: hablar,
    nombre: 'Roberto',
    dormir: dormir,
}

persona.hablar();
persona.hablar.call({nombre: 'Gabriel'});
hablar();
console.log(this);
persona.dormir();
persona.dormir.call(persona);
