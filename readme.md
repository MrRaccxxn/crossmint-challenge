<!-- Designed for ETHGlobal hackathon 02.2023-->
<div id="header" align="center">
  <img src="https://crossmint.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F417d76e9-184b-42f5-87dd-f50da23b0359%2Fcrossmint-logo-green.svg?table=block&id=99693d4b-5468-4200-84e8-e60a9dc00d0a&spaceId=d0f95547-f516-4746-9a98-cfb9535377c4&userId=&cache=v2" width="80"/>
</div>
  <h1 align="center">Crossmint Challenge</h1>

## Endpoints

| Method   | URL                                      | Description                                                      |
| -------- | ---------------------------------------- | ---------------------------------------------------------------- |
| `POST`   | `/polyanets`                             | Add Polyanet in the position assigned.                           |
| `DELETE` | `/polyanets`                             | Delete Polyanet from position.                                   |
| `POST`   | `/polyanets/draw-x`                      | Draw an X mark in the challenge 1 map.                           |
| `POST`   | `/polyanets/clean`                       | Clean the X mark in the challenge 1 map.                         |
| `POST`   | `/soloons`                               | Add Soloon in the position assigned.                             |
| `DELETE` | `/soloons`                               | Delete Soloon from position.                                     |
| `POST`   | `/comeths`                               | Add Cometh in the position assigned.                             |
| `DELETE` | `/comeths`                               | Delete Cometh from position.                                     |
| `POST`   | `/challenge/2`                           | Draw "Crossmint Logo" in the map goal provided by the challenge. |


## How to use test the api

**Step #1** - Clone the project

```bash
$ git clone https://github.com/MrRaccxxn/crossmint-challenge
```

**Step #2**

- Install dependencies: `npm i` OR `yarn`

**Step #3**

- Don't forget to set your env variables in a .env file (You can take the description from the `.env.example` file)

**Step #4**

- To start the server, run: `npm run dev` OR `yarn start`
Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.)


## Authors

| Name            | Link                                   |
| --------------- | -------------------------------------- |
| Ayrton Paredes | https://github.com/MrRaccxxn |

## License

[![GitLicense](https://img.shields.io/badge/License-MIT-lime.svg)](https://github.com/MrRaccxxn/desci-dao/blob/sandradev/LICENCE)
