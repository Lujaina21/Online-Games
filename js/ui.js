export class DisplayUI {
  constructor() {}
  displayGame(game) {
    let card = ``;
    for (let i = 0; i < game.length; i++) {
      card += `<div class="col-md-3">
            <div class="card bg-transparent">
              <div class="card-body">
                <figure class="position-relative">
                  <img
                    class="card-img-top object-fit-cover h-100"
                    src="${game.thumbnail}"
                    alt="Game Image"
                  />
                </figure>

                <figcaption>
                  <div class="d-flex justify-content-between">
                    <h3 class="text-white small">${game[i].title}</h3>
                    <span class="badge p-2 bg-primary">Free</span>
                  </div>

                  <p class="text-secondary small text-center fw-bolder">
                  ${game[i].short_description}
                  </p>
                </figcaption>
              </div>

              <footer class="card-footer small hstack justify-content-between">
                <span class="badge">${game[i].genre}</span>
                <span class="badge">${game[i].platform}</span>
              </footer>
            </div>
          </div>`;
    }
    document.querySelector("#gamesRow").innerHTML = card;
  }

  displayContent(content) {
    let cardContent = `<div class="col-md-4">
              <img
                class="w-100"
                src="${content.thumbnail}"
                alt="Game Image"
              />
            </div>
            <div class="col-md-8">
              <p class="fs-3">${content.title}</p>
              <p>
                Category:
                <span class="badge text-bg-info"> ${content.genre}</span>
              </p>
              <p>
                Platform:
                <span class="badge text-bg-info">${content.platform}</span>
              </p>
              <p>
                Status:
                <span class="badge text-bg-info">${content.status}</span>
              </p>
              <p class="details-p">
              ${content.description}
              </p>
              <a
                href="${content.game_url}"
                target="_blank"
                class="btn btn-outline-warning text-white"
                >Show Game</a
              >
            </div>`;
    document.querySelector("#contentDetails").innerHTML = cardContent;
  }
}
