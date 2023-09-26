import { Article } from "../../../src/entities/Article"

const defaultArticle = {
  title: "Test Article",
  subtitle: "TEST TEST TEST TEST",
  img: "https://avatars.mds.yandex.net/i?id=adc64029498563f182d145261c4c1ef3b1e92be6-9069209-images-thumbs&n=13",
  views: 5204,
  createdAt: "26.02.2022",
  userId: "1",
  type: ["IT"],
  blocks: [],
}

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8000/articles",
      headers: { Authorization: "auth" },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body)
}

export const deleteArticle = (articleId: string) => {
  cy.log(articleId)
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "auth" },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      deleteArticle(articleId: string): Chainable<void>
    }
  }
}
