import axios from 'axios';

type HandleFn = () => any;

interface Body {
  data: object;
  config?: object;
  handleStart?: HandleFn;
  handleFinish?: HandleFn;
}

const axiosFetch = (url: string) =>
  axios
    .get(url)
    .then(res => {
      if (res.statusText !== 'OK') {
        throw Error(res.statusText);
      }
      return res.data;
    })
    .catch(err => err.message);

export const axiosPost = (url: string, body: Body) => {
  if (body.handleStart) body.handleStart();

  axios
    .post(url, body.data, body.config)
    .then(() => {
      if (body.handleFinish) body.handleFinish();
    })
    .catch(err => {
      console.log(err);
      return err.message;
    });
};

export const axiosDelete = (url: string, handleFinish: HandleFn) => {
  axios
    .delete(url)
    .then(() => {
      handleFinish();
    })
    .catch(err => {
      console.log(err);
      // handleFinish();
    });
};

export default axiosFetch;
