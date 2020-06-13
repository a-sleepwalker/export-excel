export * from './core';
import {download} from '@/api';

export function noop() {
}

export async function downloadFile(url: string, params = {}) {
  try {
    const {data, headers} = await download<Blob>(url, params);
    const header = headers['content-disposition'];
    const regExp = /filename=(?<fileName>\w+\.\w+(;|$))/;
    const {fileName} = regExp.exec(header)?.groups || {};
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const objectURL = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objectURL;
    a.download = fileName;
    a.click();
    a.remove();
    URL.revokeObjectURL(objectURL);
  } catch (e) {
    console.error(e);
  }
}
