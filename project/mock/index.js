import mockjs from 'mockjs';
const userList = mockjs.mock({
  'data|100': [
    {
      name: '@cname', // 表示生成不同的中文名
      ename: '@name', // 表示英文名
      'id|+1': 1,
      avatar: mockjs.avatar,
      time: '@time',
      date: '@date',
    },
  ],
});

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: ({ body }) => {
      // body -> 请求体
      // page pageSize total
      return {
        code: 200,
        msg: 'success',
        data: userList,
      };
    },
  },
];
