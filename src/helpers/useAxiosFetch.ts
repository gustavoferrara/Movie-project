import axios from 'axios';
import { useState } from 'react';

type HandleFn = () => any;
type HanldeFn2 = (param: any) => any;

interface Body {
  data: object;
  config?: object;
  handleStart?: HandleFn;
  handleFinish?: HandleFn;
}

const AxiosFetch = (url: string, handleFinish?: HanldeFn2) => {
  const [isLoading, setIsLoading] = useState(false);

  axios
    .get(url)
    .then(res => {
      if (res.statusText !== 'OK') {
        throw Error(res.statusText);
      }
      // handleFinish(res.data);
      // console.log(res);
      setIsLoading(true);
      console.log('ran');
      return res.data;
    })
    .catch(err => err.message);
};

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

export default AxiosFetch;
