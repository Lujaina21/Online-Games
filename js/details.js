import { DisplayUI } from "./ui.js";

export class Details {
  constructor(id) {
    this.DisplayUI = new DisplayUI();
    document.querySelector("#btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.replace("d-none", "d-block"); // Show the games section
      document.querySelector(".details").classList.replace("d-block", "d-none"); // Hide the details section
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
      const detailsAPI = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`,
        options
      );

      if (!detailsAPI.ok) {
        throw new Error(`Error! Status: ${detailsAPI.status}`);
      }
      const response = await detailsAPI.json();
      console.log("Game details response: ", response);
      this.DisplayUI.displayContent(response);
    } catch (error) {
      console.error("Error fetching game details: ", error);
    }
  }
}
