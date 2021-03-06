<h1 align="center">
  <img alt="BeTheHero" title="BeTheHero" src="./assets/logo.svg" width="300px" />
</h1>

<h3 align="center">
  O <strong>Be The Hero</strong> é um projeto resultado da Semana Omnistack 11. Essa aplicação foi construida utilizando NodeJS. O <strong>Be The Hero</strong> trata-se de uma aplicação cujo o objetivo é para que ONG's possam cadastrar casos para que pessoas possam viar a se solidariazar com o caso e ajudar contribuindo.
</h3>

---

<div align="center"><a href="https://insomnia.rest/run/?label=Be%20The%20Hero&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fbe-the-hero%2Fmaster%2Fbackend%2Finsomnia%2Fexport.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></div>

## Conteúdo

- [Sessão](#sessão)
  - [Criando Sessão](#criando-sessão)
- [ONG](#ong)
  - [Listando](#listando-ongs)
  - [Incluindo](#incluindo-ong)
- [Perfil](#perfil)
  - [Listando](#listando-perfil)
- [Incidentes](#incidentes)
  - [Listando](#listando-incidentes)
  - [Incluindo](#incluindo-incidente)
  - [Deletando](#deletando-incidente)

---

# Sessão

## **Criando** Sessão

Iniciando Sessão

* **URL**

  `/sessions`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

  ```json
  {
    "id": "123,
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "name": "ONG_NAME",
    }
    ```

---

# ONG

## **Listando** ONG's

Listando todas ONG's

* **URL**

  `/ongs`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

    **Optional:**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 1,
        "name": "ONG NAME",
        "email": "contact@ong.com",
        "whatsapp": "9999-9999",
        "city": "Rio de Janeiro",
        "uf": "RJ"
      }
    ]
    ```

---

## **Incluindo** ONG

Cadastrando ONG.

* **URL**

  `/ongs`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
      "id": 1,
      "name": "ONG NAME",
      "email": "contact@ong.com",
      "whatsapp": "9999-9999",
      "city": "Rio de Janeiro",
      "uf": "RJ"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "123123",
    }
    ```

# Perfil

## **Listando** Perfil

Listando casos da ONG.

* **URL**

  `/profile`

* **Method:**

  `GET`

* **HEADER**

  `Authorization - ID`

* **URL Params**

   **Required:**

    None

    **Optional:**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 2,
        "title": "Case 1",
        "description": "Case detail",
        "value": 120,
        "ong_id": "123123"
      }
    ]
    ```

---

# Incidentes

## **Listando** Incidentes

Listando todos incidentes.

* **URL**

  `/incidents`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

    **Optional:**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": 2,
        "title": "Case 1",
        "description": "Case detail",
        "value": 120,
        "ong_id": "123123",
        "name": "ONG_NAME",
        "email": "contact@ong.com",
        "whatsapp": "9999-9999",
        "city": "Rio de Janeiro",
        "uf": "RJ"
      }
    ]
    ```

---

## **Incluindo** Incidente

CIncluindo Incidente.

* **URL**

  `/incidents`

* **Method:**

  `POST`

* **HEADER**

  `Authorization - ID`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
     "title": "Case 1",
     "description": "Case detail",
     "value": 120
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "1",
    }
    ```

---

## **Deletando** Incidente

Deletando Incidente.

* **URL**

  `/incidents/:id`

* **Method:**

  `DELETE`

* **HEADER**

  `Authorization - ID`

* **URL Params**

   **Required:**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** No body returned for response

---

## Tecnologias

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [ESLint(Standard)](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## Autor

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/tavareshenrique/be-the-hero/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
  </tr>
</table>

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](https://github.com/tavareshenrique/be-the-hero/blob/master/backend/LICENSE.md) para obter detalhes.
