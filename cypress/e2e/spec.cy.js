import endpoints from '../../cypress/endpoint.js'

describe('Automation Test API', () => {
  
  it('endpoint get', () => {
    cy.request("GET", `${endpoints.users}/2`).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.data.id).to.equal(2)
        expect(response.body.data.email).to.equal("janet.weaver@reqres.in")
        expect(response.body.data.first_name).to.equal("Janet")
        expect(response.body.data.last_name).to.equal("Weaver")
        expect(response.body.data.avatar).to.equal("https://reqres.in/img/faces/2-image.jpg")
    })
  })

  it('endpoint post', () => {
    cy.request({ method: 'POST', url:  `${endpoints.users}`, body: { name: "Lelouch", job: "Leader QA" } }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal("Lelouch")
        expect(response.body.job).to.equal("Leader QA")
    });
  })

})