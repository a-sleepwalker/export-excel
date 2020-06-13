import {AxiosPromise} from 'axios';
import xhr from '../xhr';

export default function () {
  return xhr.get('/');
}

export function download<T>(url: string, params = {}): AxiosPromise<T> {
  return xhr.get(url, {params, responseType: 'blob'});
}
