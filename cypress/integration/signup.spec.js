import SignupFactory from '../factories/SignupFactory';
import SignupPage from '../pages/SignupPage';

describe('Signup page', () => {
  // let deliver = {};

  // before(() => {
  //   cy.fixture('deliver').then((response) => {
  //     deliver = response;
  //   });
  // });

  it('should be able to register', () => {
    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    const deliver = SignupFactory.deliver();

    SignupPage.go();
    SignupPage.fillForm(deliver);
    SignupPage.submit();
    SignupPage.modalContentShouldBe(expectedMessage);
  });

  it('should not register when CPF invalid', () => {
    SignupPage.go();
    const deliver = SignupFactory.deliver();
    deliver.cpf = '647486680AA';

    SignupPage.fillForm(deliver);
    SignupPage.submit();
    SignupPage.alertMessageShouldBe('Oops! CPF inválido');
  });

  it('should not register when email is invalid', () => {
    const deliver = SignupFactory.deliver();
    deliver.email = 'papito.com.br';

    SignupPage.go();
    SignupPage.fillForm(deliver);
    SignupPage.submit();
    SignupPage.alertMessageShouldBe('Oops! Email com formato inválido.');
  });

  context('Required fields', () => {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
    ];

    before(() => {
      SignupPage.go();
      SignupPage.submit();
    });

    messages.forEach(message => {
      it(`${message.field} is required`, () => {
        SignupPage.alertMessageShouldBe(message.output);
      })
    })
  }); 

  // it('should validate required fields', () => { 
  //   SignupPage.go();
  //   SignupPage.submit();

  //   SignupPage.alertMessageShouldBe('É necessário informar o nome');
  //   SignupPage.alertMessageShouldBe('É necessário informar o CPF');
  //   SignupPage.alertMessageShouldBe('É necessário informar o e-mail');
  //   SignupPage.alertMessageShouldBe('É necessário informar o CEP');
  //   SignupPage.alertMessageShouldBe('Selecione o método de entrega');
  //   SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH');
  // });
});
