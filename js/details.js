import { DisplayUI } from "./ui.js";
export class Details {
  constructor(id) {
    this.DisplayUI = new DisplayUI();

    document.querySelector("#btnClose").addEventListener("click", () => {
      document.querySelector(".home").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.apiDetails(id);
  }

  async apiDetails(gameID) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f2d2bb44a8msh24381b34e44763ap1cb63djsnf376ed2df28b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`,
      options
    );
    const response = await api.json();
    console.log(response);

    this.DisplayUI.displayContent(response);
  }
}
