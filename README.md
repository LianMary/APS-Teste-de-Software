# APS · Teste de Software · 

Trabalho prático da disciplina de **Teste de Software**, usando **JavaScript** e **Jest**.

O projeto simula regras de negócio de um sistema de delivery (login, senha, frete e cupons) e valida cada uma delas com testes automatizados.

## Funções implementadas

Todas ficam em `delivery.js`:

| Função | O que faz |
|---|---|
| `autenticar(usuarios, email, senha)` | Retorna `true` só se o e-mail existe, a senha confere e a conta está ativa. |
| `forcaSenha(senha)` | Classifica a senha como `'fraca'`, `'media'` ou `'forte'` conforme o tamanho e os tipos de caractere (minúscula, maiúscula, dígito, símbolo). |
| `podeLogar(usuario)` | Retorna `true` apenas se o status é `'ativo'` e há menos de 3 falhas de login. |
| `calcularFrete(distanciaKm)` | Frete de R$ 5,00 até 3 km, mais R$ 1,50 por km excedente. Lança erro para distância menor ou igual a zero. |
| `aplicarCupom(valor, cupom)` | Aplica `PRIMEIRA10` (10%) ou `VIP20` (20%). Sem cupom, mantém o valor. Cupom desconhecido lança erro. |

## Testes

O arquivo `delivery.test.js` contém **20 casos de teste (CT-01 a CT-20)**, divididos entre as 5 funções, com atenção especial aos valores de fronteira (2 e 3 falhas de login, 2 e 3 km de distância).

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clonar o repositório
git clone <URL-DO-REPOSITORIO>
cd <NOME-DA-PASTA>

# 2. Instalar as dependências
npm install

# 3. Rodar os testes
npm test

# 4. Rodar com relatório de cobertura
npx jest --coverage
```

Resultado esperado: **20 testes passando** e **100% de cobertura**.

## Estrutura do projeto

```
.
├── delivery.js         # implementação das 5 funções
├── delivery.test.js    # 20 testes automatizados com Jest
├── package.json
└── README.md
```

## Tecnologias

- JavaScript (Node.js)
- Jest

## Participantes

| Nome | RA | GitHub |
|---|---|---|
| Nome do integrante | [@LianMary](https://github.com/LianMary) |

**Disciplina:** Teste de Software
**Instituição:** Centro Universitário Fametro - Unifametro 
