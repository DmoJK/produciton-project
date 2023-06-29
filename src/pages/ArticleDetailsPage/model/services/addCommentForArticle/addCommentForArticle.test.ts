import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk"
import { addCommentForArticle } from "./addCommentForArticle"

/*
User: {
    id: string
    username: string
    avatar?: string
}
text: string
article: {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}


return 
id: string
    user: User
    text: string
*/

const Comment = {
  id: "1",
  text: "Hello",
  user: { id: "1", username: "User1" },
}

describe("addCommentForArticle", () => {
  test("success addCommentForArticle", async () => {
    // const thunk = new TestAsyncThunk(addCommentForArticle)
    // thunk.api.post.mockReturnValue(Promise.resolve({ data: Comment }))
    // const result = await thunk.callThunk("Hello")
    // expect(thunk.getState).toHaveBeenCalledTimes(1)
    // // expect(thunk.dispatch).toHaveBeenCalledWith(
    // //   userActions.setAuthData(userValue)
    // // )
    // // expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    // // expect(thunk.api.post).toHaveBeenCalled()
    // expect(result.meta.requestStatus).toBe("rejected")
    // expect(result.payload).toEqual(Comment)
    // // expect(result.payload).toBe("no data")
  })

  test("login error", async () => {
    // const thunk = new TestAsyncThunk(loginByUsername)
    // thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    // const result = await thunk.callThunk({ username: "123", password: "123" })
    // expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // expect(thunk.api.post).toHaveBeenCalled()
    // expect(result.meta.requestStatus).toBe("rejected")
    // expect(result.payload).toBe("error")
  })
})
