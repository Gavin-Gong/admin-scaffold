import mock from "mockjs"

export  default {
  "GET /api/table/query": () => {
    return mock.mock({
      success: true,
      code: 0,
      "data|30-100": [
        { 
          id: "@guid",
          name: "@cname",
          age: "@integer(16,80)",
          createdAt: "@datetime",
          imageUrl: "@image",
          title: "@title(2,10)",
          desc: "@title(10,50)",
        },
      ]
    })
  }
}