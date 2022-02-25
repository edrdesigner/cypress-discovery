const faker = require('faker');
const cpf = require('gerador-validador-cpf');

export default {
  deliver: function() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '4599000000',
      address: {
        postalcode: '04534011',
        address: 'Rua Joaquim Floriano',
        number: faker.random.number(),
        details: 'Apto 142',
        district: 'Itaim Bibi',
        city_uf: 'São Paulo/SP',
      },
      delivery_method: 'Moto',
      cnh: "cnh-digital.jpg"
    }
  }
}