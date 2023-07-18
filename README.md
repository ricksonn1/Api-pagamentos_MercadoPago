## Funções Usuarios

- [X] Buscar Usuarios

- [X] Buscar somente um Usuario

- [X] Cadastrar Usuario

- [X] Atualiza os dados de um Usuario

- [X] Deleta um Usuario somente se o saldo do usuario estiver zerado.

| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/usuarios |	Retorna todos os usuarios cadastrados |
| GET |	/usuario/:id |	Retorna um usuario específico pelo ID |
| POST |	/usuario |	Cadastra um novo usuario |
| PUT |	/usuarios/:id |	Atualiza as informações de um usuario existente |
| DELETE |	/usuario/:id |	Exclui um usuario existente pelo ID, somente se o usuario estiver com saldo zerado |
#

## Funções Forma de Pagamento

- [X] Comunicação com banco em tempo real (webhook)

- [X] Gerar um QR Code/pix de pagamento para adicionar creditos

- [X] Atualiza os `CREDITOS` do Usuario ao o pagamento ser Efetuado via PIX.


| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/pagamentos/pix |	Retorna todos os pix cadastrados |

#

## Funções Produtos

- [ ] Cadastro de Produtos

- [ ] Realizar compra de Produtos com creditos
- [ ] 
- [ ]  Autenticação JWT (Json Web Token)
- [ ]  
- [ ]  Realização de vendas e atualização de créditos

- [ ]  Verificações de erros



