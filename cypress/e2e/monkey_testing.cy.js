describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and survives monkeys", function () {
    cy.visit("https://losestudiantes.com");
    cy.wait(1000);
    randomClick(10);
  });
});
function randomClick(monkeysLeft) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
    cy.get("a").then(($links) => {
      var randomLink = $links.get(getRandomInt(0, $links.length));
      if (!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({ force: true });
        monkeysLeft = monkeysLeft - 1;
      }
      cy.wait(1000);
      randomClick(monkeysLeft);
    });
  }
}


function randomEvent(eventsLeft) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var eventsLeft = eventsLeft;
  if (eventsLeft > 0) {
    cy.get('a, input[type="text"], select, button').then(($elements) => {
      var randomElement = $elements.get(getRandomInt(0, $elements.length));
      if (!Cypress.dom.isHidden(randomElement)) {
        var tagName = randomElement.tagName.toLowerCase();
        switch (tagName) {
          case "a":
            cy.wrap(randomElement).click({ force: true });
            break;
          case "input":
            cy.wrap(randomElement).type("Random Text");
            break;
          case "select":
            cy.wrap(randomElement).select("Option 1");
            break;
          case "button":
            cy.wrap(randomElement).click({ force: true });
            break;
          default:
            // Do nothing for unsupported elements
            break;
        }
        eventsLeft--;
      }
      cy.wait(1000);
      randomEvent(eventsLeft);
    });
  }
}
