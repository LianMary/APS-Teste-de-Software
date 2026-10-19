function autenticar(usuarios, email, senha) {
  const usuario = usuarios.find((u) => u.email === email);
  return Boolean(usuario) && usuario.senha === senha && usuario.ativo === true;
}

function forcaSenha(senha) {
    if (senha.length < 8) return 'fraca';
    const tipos = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].filter((r) =>
    r.test(senha)
    ).length;
    return tipos >= 3 ? 'forte' : 'media';
}

function podeLogar(usuario) {
    return usuario.status === 'ativo' && usuario.falhas < 3;
}

function calcularFrete(distanciaKm) {
    if (!(distanciaKm > 0)) throw new Error('Distância inválida');
    if (distanciaKm <= 3) return 5;
    return 5 + (distanciaKm - 3) * 1.5;
}

const DESCONTOS = new Map([
  ['PRIMEIRA10', 0.1],
  ['VIP20', 0.2],
]);
 
function aplicarCupom(valor, cupom) {
    if (!cupom) return valor;
    if (!DESCONTOS.has(cupom)) throw new Error('Cupom inválido');
    return Number((valor * (1 - DESCONTOS.get(cupom))).toFixed(2));
}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };