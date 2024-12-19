import { DisplayUI } from "./ui.js";

export class Details {
  constructor(id) {
    this.DisplayUI = new DisplayUI();
    document.querySelector("#btnClose").addEventListener("click", () => {
      document.querySelector("nav").classList.replace("d-none", "d-block");
      document.querySelector(".games").classList.replace("d-none", "d-block");
      document.querySelector(".details").classList.replace("d-block", "d-none");
    });
    this.contentDetails(id);
  }

  async contentDetails(gameID) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f2d2bb44a8msh24381b34e44763ap1cb63djsnf376ed2df28b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const url = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`,
        options
      );

      if (!url.ok) {
        throw new Error(`Error! Status: ${url.status}`);
      }
      const response = await url.json();
      console.log("Game details response: ", response);
      this.DisplayUI.displayContent(response);
    } catch (error) {
      console.error("Error fetching game details: ", error);
    }
  }
}
