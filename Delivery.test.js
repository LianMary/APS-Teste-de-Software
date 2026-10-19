const {
  autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom} = require('./Delivery'); 
const usuarios = [
  { email: 'ana@delivery.com',   senha: 'Ana12345',   ativo: true },
  { email: 'bruno@delivery.com', senha: 'Bruno#2024', ativo: false }
];

describe('F1 - Autenticar usuários', () => {
  test('CT-01: credenciais válidas autentica o usuário.', () => {
   expect(autenticar(usuarios, 'ana@delivery.com', 'Ana12345',true)).toBe(true);
  });

  test('CT-02: Senha incorreta com e-mail válido.', () => {
    expect(autenticar(usuarios, 'ana@delivery.com' ,'senhaincorreta', true)).toBe(false);
  });

  test('CT-03: E-mail não existe na base de dados.' , () => {
    expect(autenticar(usuarios, 'niguem@delivery.com', 'senhaDeNiguemOuAlguem' )).toBe(false);
  });

  test('CT-04: Conta inativa com senha correta' , () =>{
    expect(autenticar(usuarios, 'bruno@delivert.com', 'Bruno#2024', false)).toBe(false);
  });

});

describe('F2 - Forçar senha', () => {
  
  test('CT-05: Senha muito curta. ', () => {
    expect(forcaSenha('Ab1')).toBe('fraca');
  });

  test('CT-06: Senha média. 8 caracteres, 1 tipo de caractere', () => {
    expect(forcaSenha('12345678')).toBe('media');
  });

  test('CT-07: Senha média. 8 caracteres, 2 tipo de caractere ', () => {
    expect(forcaSenha('Abcdefgh')).toBe('media');
  });

  test('CT-08: Senha forte 8 caracteres, 4 tipos de caracteres ', () => {
  expect(forcaSenha('Abcdef1!')).toBe('forte');
  });

});

describe( 'F3 - Pode Logar ', () => {
  test( 'CT-09: Ativo sem falhas, pode logar. ' , () => {
    expect(podeLogar({status: 'ativo', falhas : 0})).toBe(true);
  });

  test( 'CT-10: Ativo com duas falhas (limite), pode logar. ' , () => {
    expect(podeLogar({status: 'ativo', falhas: 2})).toBe(true);
  });

  test( 'CT-11: Ativo com 3 falhas - Bloqueado.' , () => {
    expect(podeLogar({status: 'ativo', falhas: 3})).toBe(false);
  });

  test( 'CT-12: Sttus Bloqueado, não pode logar' , () => {
    expect(podeLogar({status: 'bloqueado', falhas: 0})).toBe(false);
  });
});

describe( 'F4 - Calcular Frete ', () => {
  
  test( 'CT-13: Distância curta - 2km - custa 5. ' , () => {
    expect(calcularFrete(2)).toBe(5);
  });

  test( 'CT-14: Fronteira de 3km - custa 5.' , () => {
    expect(calcularFrete(3)).toBe(5);
  });

  test( 'CT-15: Acima da fronteira ' , () => {
    expect(calcularFrete(5)).toBe(8);
  });

  test('CT-16: distância negativa lança Distância inválida', () => {
    expect(() => calcularFrete(-2)).toThrow('Distância inválida');
  });

})

describe( 'F5 - Aplicar Cupom ', () => {
 
  test('CT-17: sem cupom mantém o valor original', () => {
    expect(aplicarCupom(80, null)).toBe(80);
  });
 
  test('CT-18: PRIMEIRA10 aplica 10% de desconto', () => {
    expect(aplicarCupom(100, 'PRIMEIRA10')).toBe(90);
  });
 
  test('CT-19: VIP20 aplica 20% de desconto', () => {
    expect(aplicarCupom(50, 'VIP20')).toBe(40);
  });
 
  test('CT-20: cupom desconhecido lança Cupom inválido', () => {
    expect(() => aplicarCupom(80, 'CUPOM123')).toThrow('Cupom inválido');
  });
});
