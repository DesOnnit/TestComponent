export type Method =  'GET' | 'POST';

interface Endpoint {
  method: Method;
  url: string;
}

interface TestData<T> {
  entity: string;
  endpoints: Record<string, T>;
}

const testData: TestData<Endpoint> = {
  entity: 'vtemplate',
  endpoints: {
    getVtemplates: {
      method: 'GET',
      url: 'vtemplate'
    },
    postVtemplates: {
      method: 'POST',
      url: 'vtemplate'
    }
  }
};

const { method } = testData.endpoints.getVtemplates;
