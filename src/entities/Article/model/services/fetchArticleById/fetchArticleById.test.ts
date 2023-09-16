import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk"

import { fetchArticleById } from "./fetchArticleById"

const data = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: ["IT"],
  blocks: [
    {
      id: "1",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста.",
      ],
    },
    {
      id: "2",
      type: "CODE",
      code: '<body>\n    <p id="hello"></p>\n  </body>',
    },
  ],
}

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk("1")

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(data)
  })

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk("2")

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
  })
})
