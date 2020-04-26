export const QUERY_DATA = 'queryData';

// 将查询的结果统一
// 领域名：结果数组
// 这种形式便于domain的reducer去获取
// domain 的reducer 不再通过action.type来匹配，而是根据约定的action属性
const handleQueryResult = (data, schema) => {
  if (schema) {
    let kvObj = {};
    let ids = [];
    if (Array.isArray(data)) {
      data.forEach((item) => {
        ids.push(item[schema.id]);
        kvObj[item[schema.id]] = item;
      });
    } else {
      ids.push(data[schema.id]);
      kvObj[data[schema.id]] = data;
    }
    return {
      [schema.domainName]: kvObj
    };
  } else {
    return data;
  }
};

export default (store) => (next) => async (action) => {
  const queryAction = action[QUERY_DATA];
  if (!queryAction) {
    return next(action);
  }

  // 将action的其他参数传入之后的中间件
  const withAction = (data) => {
    let finalAction = { ...data, ...action };
    delete finalAction[QUERY_DATA];
    return finalAction;
  };

  const { reducers, api, apiParams, schema } = queryAction;
  const { reducerRequest, reducerSuccess, reducerFailure } = reducers;
  next(withAction(reducerRequest()));
  try {
    const res = await api(apiParams);
    const queryResult = handleQueryResult(res, schema);
    // 成功时，在action中添加queryResult特殊属性，便于reducer根据action中的属性来做通用处理
    next(withAction(reducerSuccess(queryResult)));
  } catch (err) {
    // 失败时，在action中添加error属性，这样app的reducer判断存在error则自动调用reducer将异常写入app state
    next(withAction(reducerFailure(err.toString())));
  }
};
