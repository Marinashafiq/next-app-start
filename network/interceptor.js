export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    console.log(request)
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
   console.log(response)
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    console.log(error)
  }
  return Promise.reject({ ...error });
};
