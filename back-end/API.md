# API

---

## Sign up

### Request

| Key          | Value                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Endpoint     | http://localhost:3100/api/user/signup                                                                                                |
| Method       | POST                                                                                                                                 |
| Body         | {<br/>&nbsp;&nbsp;"username":"Dimitrina",<br/>&nbsp;&nbsp;"email":"dimitrina@mail.com",<br/>&nbsp;&nbsp;"password": "12345678"<br/>} |
| Constraints: |                                                                                                                                      |
| 1. username  | string, required, 3-40 characters long                                                                                               |
| 2. email     | string, email, required                                                                                                              |
| 3. password  | string, required, 8 characters min length                                                                                            |

### Response

| Key                                    | Value  |
| -------------------------------------- | ------ |
| Response-type                          | JSON   |
| Object                                 |        |
| status                                 | string |
| token                                  | string |
| data                                   | object |
| &nbsp;&nbsp;&nbsp;user                 | object |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\_id     | string |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role     | string |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;username | string |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email    | string |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\_\_v    | number |
