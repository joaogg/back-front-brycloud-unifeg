# Frontend ReactJS de Geração de Assinatura de Diploma Digital.

Este exemplo apresenta os passos necessários para a geração de assinatura de Diploma Digital utilizando certificado digital instalado em nuvem, no BRy KMS.


### Backend

Este exemplo frontend é compatível com os backends:

* [CSharp](https://gitlab.com/brytecnologia-team/integracao/api-diploma-digital/csharp/geracao-de-diploma-digital-com-certificado-na-nuvem-kms)
* [Java](https://gitlab.com/brytecnologia-team/integracao/api-diploma-digital/java/gera-o-de-diploma-digital-com-certificado-na-nuvem-kms/back-end)
* [Node](https://gitlab.com/brytecnologia-team/integracao/api-diploma-digital/javascript/geracao-assinatura-diploma-extensao/back-end)
* [PHP](https://gitlab.com/brytecnologia-team/integracao/api-diploma-digital/php/geracao-diploma-kms/backend)
* [Python](https://gitlab.com/brytecnologia-team/integracao/api-diploma-digital/python/geracao-diploma-kms-backend)

### Tech

O exemplo utiliza das bibliotecas JavaScript abaixo:
* [ReactJS] - A JavaScript library for building user interfaces!
* [Axios] - Promise based HTTP client for the browser and node.js.

## Adquirir um certificado digital

É muito comum no início da integração não se conhecer os elementos mínimos necessários para consumo dos serviços.

Para assinar digitalmente um documento, é necessário, antes de tudo, possuir um certificado digital, que é a identidade eletrônica de uma pessoa ou empresa.

O certificado, na prática, consiste em um arquivo contendo os dados referentes à pessoa ou empresa, protegidos por criptografia altamente complexa e com prazo de validade pré-determinado.

Os elementos que protegem as informações do arquivo são duas chaves de criptografia, uma pública e a outra privada. Sendo estes elementos obrigatórios para a execução deste exemplo.

**Entendido isso, como faço para obter meu certificado digital?**

[Obtenha agora](https://certificado.bry.com.br/certificate-issue-selection) um Certificado Digital Corporativo de baixo custo para testes de integração.

Entenda mais sobre o [Certificado Corporativo](https://www.bry.com.br/blog/certificado-digital-corporativo/).  

### Uso

Para execução da aplicação de exemplo, importe o projeto em sua IDE de preferência e instale as dependências. 
Utilizamos o ReactJS versão 16.10 para desenvolvimento e o [Npm] versão 6.13 ou o [Yarn] versão 1.22 para instalação das dependências e execução da aplicação.

##### Comandos:

**Instalar as dependências utilizando o comando abaixo:**

    - npm install

  ou

    - yarn

**Executar programa:**

    - npm start

  ou

    - yarn start

   [Node]: <https://nodejs.org/en/>
   [ReactJS]: <https://reactjs.org/>
   [Axios]: <https://github.com/axios/axios>
   [Yarn]: <https://yarnpkg.com/>
   [Npm]: <https://www.npmjs.com/>
