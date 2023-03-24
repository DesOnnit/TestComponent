export type Method = 'GET' | 'POST';

const endpoints = {
  getVtemplates: 'getVtemplates',
  postVtemplates: 'postVtemplates'
} as const;

type Endpoint = {
  method: Method;
  url: string;
};

type TestData<T extends keyof typeof endpoints> = {
  entity: string;
  endpoints: Record<T, Endpoint>;
};

const testData: TestData<keyof typeof endpoints> = {
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

const test = testData.endpoints.getVtemplates.method
