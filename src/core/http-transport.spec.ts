import { expect } from 'chai';

import HTTPTransport from './http-transport';
import { ApiURL } from 'helpers/const';

let apiInstance: HTTPTransport;

describe('HTTPTransport test cases', () => {
  before(() => {
    apiInstance = new HTTPTransport(ApiURL.base);
  });

  it('should return right base url', () => {
    expect(apiInstance.baseUrl).to.eq(`https://ya-praktikum.tech/api/v2`);
  });

  it('should method get return right type ', () => {
    expect(apiInstance.get(`/path`) instanceof Promise).to.eq(true);
  });

  it('should method post return right type ', () => {
    expect(apiInstance.post(`/path`) instanceof Promise).to.eq(true);
  });

  it('should method put return right type ', () => {
    expect(apiInstance.post(`/path`) instanceof Promise).to.eq(true);
  });

  it('should method delete return right type ', () => {
    expect(apiInstance.post(`/path`) instanceof Promise).to.eq(true);
  });
});
