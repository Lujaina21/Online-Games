import { Details } from "./details.js";
import { DisplayUI } from "./ui.js";
export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.DisplayUI = new DisplayUI();
  }

  async getGames(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f2d2bb44a8msh24381b34e44763ap1cb63djsnf376ed2df28b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const response = await api.json();
      this.DisplayUI.displayGame(response);
      this.event();
    } catch (error) {
      console.log(error);
    }
  }

  event() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        let id = card.dataset.id;
        console.log("Card clicked, gameID:", id);
        this.showDetails(id);
      });
    });
  }

  showDetails(gameID) {
    new Details(gameID);
    document.querySelector("nav").classList.add("d-none");
    document.querySelector(".games").classList.replace("d-block", "d-none");
    document.querySelector(".details").classList.replace("d-none", "d-block");
  }
}
