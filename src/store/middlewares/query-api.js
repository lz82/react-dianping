export const QUERY_DATA = 'queryData';

const handleQueryResult = (schema, data) => {
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

  const { reducers, api, schema } = queryAction;
  const { reducerRequest, reducerSuccess, reducerFailure } = reducers;
  next(withAction(reducerRequest()));
  try {
    const res = await api();
    const queryResult = handleQueryResult(schema, res);
    next(withAction(reducerSuccess(queryResult)));
  } catch (err) {
    next(withAction(reducerFailure(err.toString())));
  }
};
