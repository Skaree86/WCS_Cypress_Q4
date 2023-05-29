describe("template spec", () => {
  it("get photos", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/photos").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.length(5000);
        expect(response).to.have.property("headers");
      }
    );
  });

  it("get users", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.length(10);
      }
    );
  });

  it("create a new post", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        expect(response.status).to.equal(201);
        expect(response).to.have.property("headers");
      }
    );
  });
});
