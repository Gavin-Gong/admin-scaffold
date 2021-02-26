import mock from "mockjs"

export default {
  'POST /api/user/login': () => {
    return mock.mock({
      success: true,
      token: "@uuid",
      code: 0
    })
  }
}