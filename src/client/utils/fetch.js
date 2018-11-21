import fetch from 'isomorphic-fetch';
import * as QueryString from 'qs';

import {
  ServerError, NetworkError, FetchResponseError, ParseError
} from './errorUtils';

const defaultArgs = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  httpsOptions: {
    rejectUnauthorized: process.env.NODE_ENV !== 'development'
  }
};

const buildQueryString = (url, params) =>
  `${url}?${QueryString.stringify(params)}`;

/* eslint-disable no-underscore-dangle */
const _fetch = (url, { method, params, headers, body, httpsOptions } = defaultArgs) => {
/* eslint-disable no-underscore-dangle */
  const reqHeaders =
    Object.assign(
      {
        Accept: 'application/json',
        'Content-Type': 'application/json', // application/x-www-form-urlencoded
        'Accept-Charset': 'utf-8',
        'Accept-Encoding': 'gzip, deflate',
      },
      headers || {}
    );

  const finalUrl = params ? buildQueryString(url, params) : url;
  console.log('finalUrl:', finalUrl, method, params, headers, body, httpsOptions);
  return fetch(
    // URL
    finalUrl,

    // OPTIONS
    Object.assign(
      {
        method: method || 'GET',
        mode: 'cors',
        cache: 'default',
        headers: reqHeaders,
        credentials: 'same-origin'
      },
      // process.env.BROWSER !== true ? {
      //   agent: new https.Agent(Object.assign(defaultArgs.httpsOptions, httpsOptions)),
      // } : null,
      body
        ? { body: JSON.stringify(body) }
        : {}
    )
  )
  .catch(
    (err) => {
      console.log('Errorresponse:', err);
      return Promise.reject(new NetworkError(err && err.message));
    }

  )
  .then(
    (response) => {
      console.log('response:', response);
      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (!contentType) {
          return Promise.reject(
            new FetchResponseError('Response OK: Missing Content-Type header in response.')
          );
        } else if (!contentType.match(new RegExp(reqHeaders.Accept))) {
          return Promise.reject(
            new FetchResponseError('The response Content-Type does not match the Accept header.')
          );
        }
        return Promise.resolve(response);
      }
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.match('json')) {
        return response.json().then((data: any) => Promise.reject(data));
      }
      return response.text()
        .then((data: string) => Promise.reject(data))
        .catch(() =>
          Promise.reject(
            new ServerError('An unknown server error occured', response.status)
          )
        );
    }
  );
};

export const fetchJSON = (url, args) => (
  _fetch(url, args)
    .then(res => (res.json())
      .catch(() => (
        Promise.reject(new ParseError())
      ))
    )
);

export const fetchJSON$ = (url, args) => fetchJSON(url, args);

export const get$ = (url, args) => (
  fetchJSON$(url, {
    ...args,
    method: 'GET',
    httpsOptions: {}
  })
);

export const post$ = (url, args) => {
  console.log('POST:', url, args);
  return fetchJSON$(url, {
    ...args,
    method: 'POST',
    httpsOptions: {}
  });
};

export const put$ = (url, args) => (
  fetchJSON$(url, {
    ...args,
    method: 'PUT',
    httpsOptions: {}
  })
);

export const remove$ = (url, args) => (
  fetchJSON$(url, {
    ...args,
    method: 'DELETE',
    httpsOptions: {}
  })
);
