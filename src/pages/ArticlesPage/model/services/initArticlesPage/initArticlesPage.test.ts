import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk"

import { initArticlesPage } from "./initArticlesPage"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

jest.mock("../fetchArticlesList/fetchArticlesList")

describe("initArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    })

    const searchParams = new URLSearchParams()

    const params = {
      sort: "views",
      order: "desc",
      type: "IT",
      search: "",
    }

    Object.entries(params).forEach(([name, value]) => {
      if (value !== undefined) {
        searchParams.set(name, value)
      }
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(8)
    expect(fetchArticlesList).toBeCalledWith({ replace: false })
  })
  test("success with all undefined url params", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    })

    const searchParams = new URLSearchParams()

    const params = {
      sort: undefined,
      order: undefined,
      type: undefined,
      search: undefined,
    }

    Object.entries(params).forEach(([name, value]) => {
      if (value !== undefined) {
        searchParams.set(name, value)
      }
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toBeCalledWith({ replace: false })
  })
  test("success with some undefined url params", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    })

    const searchParams = new URLSearchParams()

    const params = {
      sort: undefined,
      order: undefined,
      type: "IT",
      search: "",
    }

    Object.entries(params).forEach(([name, value]) => {
      if (value !== undefined) {
        searchParams.set(name, value)
      }
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(6)
    expect(fetchArticlesList).toBeCalledWith({ replace: false })
  })
  test("initArticlesPage not called, state initialized", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    })

    await thunk.callThunk(new URLSearchParams())

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
