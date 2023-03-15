export interface TestDataInterface<T> {
  entity: string,
  endpoints: T
}

interface EndpointsInterface<T, U=T>{
  getVtemplates: T,
  postVtemplates: U
}

interface GetVtemplatesInterface{
  method: string,
  url: string
}

interface PostVtemplatesInterface {
  method: number,
  url: string
}

const testData: TestDataInterface<EndpointsInterface<GetVtemplatesInterface, PostVtemplatesInterface>> = {
  entity: 'vtemplate',
  endpoints: {
    getVtemplates: {
      method: 'GET',
      url: 'vtemplate'
    },
    postVtemplates: {
      method: 12,
      url: 'vtemplate'
    }
  }
};

const { method } = testData.endpoints.postVtemplates;
