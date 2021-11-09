import fs from 'fs';
import {
  AuthenticateApi,
  BackInStockSubscriptionApi,
  BlogApi,
  BoardsApi,
  CatalogApi,
  CheckoutApi,
  CommonApi,
  CountryApi,
  CustomerApi,
  DownloadApi,
  NewsApi,
  NewsletterApi,
  OrderApi,
  PollApi,
  PrivateMessagesApi,
  ProductApi,
  ProfileApi,
  ReturnRequestApi,
  ScheduleTaskApi,
  ShoppingCartApi,
  TopicApi,
  UrlRecordApi,
  VendorApi,
  WishlistApi
} from '../../gen/api';

const getAllApiFunction = (toCheck): string[] => {
  const props: string[] = [];
  let obj = toCheck;
  do {
    props.push(...Object.getOwnPropertyNames(obj));
  } while ((obj = Object.getPrototypeOf(obj)));

  return props.sort().filter((e, i, arr) => {
    if (e !== arr[i + 1] && typeof toCheck[e] === 'function' && e.startsWith('api')) return true;
  });
};

function getFunctionParamNames(func) {
  let str = func.toString();

  str = str
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/(.)*/g, '')
    .replace(/{[\s\S]*}/, '')
    .replace(/=>/g, '')
    .trim();

  const start = str.indexOf('(') + 1;
  const end = str.length - 1;

  const result = str.substring(start, end).split(', ');

  const params = [];

  result.forEach((element) => {
    element = element.replace(/=[\s\S]*/g, '').trim();
    if (element.length > 0) params.push(element);
  });

  return params.filter((value) => {
    return value !== 'options';
  });
}

const getProperName = (name) => {
  const startRegex = new RegExp('^apiFrontend');
  const newName = name.replace(startRegex, '');
  return newName.charAt(0).toLowerCase() + newName.slice(1);
};

const cleanUpFolder = (path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
  fs.mkdir(path, () => {});
};
const cleanUpFile = (path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
};
const createFolder = (path) => {
  fs.mkdir(path, () => {});
};

const createFile = (path, data) => {
  fs.writeFile(path, data, () => {});
};
function generateWrappedApi(apiClass): string[] {
  const functionNames = getAllApiFunction(apiClass);

  createFolder(`../api-client/src/api/${apiClass.constructor.name}`);

  const functionTemplate = (functionName, apiFunctionName) => {
    const params = getFunctionParamNames(apiClass[apiFunctionName]);
    const paramsString = params.map((param) => 'params.' + param).join(',');

    const template = `
    import { Context } from './../../types/Context';
    import { getClientInstance } from '../../helpers/apiClient';
    import { ${apiClass.constructor.name} } from '../../../gen';

    export default async function ${functionName}(context: Context, params) {
      try{
        const clientInstance = await getClientInstance(context);
        const api = new ${apiClass.constructor.name}(null, context.config.api.url, clientInstance);

        const response = await api.${apiFunctionName}(${paramsString});  
        return response.data;
      } catch(ex){
        console.error('${functionName} error:',ex);
      }
    }
    `;
    return template;
  };

  const indexTemplate = (functionName) => `export { default as ${functionName} } from './${apiClass.constructor.name}/${functionName}';\r\n`;

  const indexStream = fs.createWriteStream('../api-client/src/api/index.ts', {
    flags: 'a'
  });

  const properfunctionNames = functionNames.map((functionName) => {
    const name = getProperName(functionName);
    createFile(`../api-client/src/api/${apiClass.constructor.name}/${name}.ts`, functionTemplate(name, functionName));

    indexStream.write(indexTemplate(name));
    return name;
  }, {});

  indexStream.end();

  return properfunctionNames;
}

const generateapiMethodsInterfact = (nameArray: string[][]) => {
  cleanUpFile('../api-client/src/types/Api.ts');
  const apiMethodsTemplate = (functionName) => `\t${functionName}: (context: Context, params) => any;\r\n`;
  const apiMethodsStream = fs.createWriteStream('../api-client/src/types/Api.ts', {
    flags: 'a'
  });
  apiMethodsStream.write(`
  import { Context } from './';
  export interface NopCommerceApiMethods {\r\n`);
  nameArray.map((names: string[]) => {
    names.map((name) => {
      apiMethodsStream.write(apiMethodsTemplate(name));
    });
  });
  apiMethodsStream.write('}');
  apiMethodsStream.end();
};

const generate: () => void = () => {
  cleanUpFolder('../api-client/src/api');
  const authenticateApiFunctionNames = generateWrappedApi(new AuthenticateApi());
  const backInStockSubscriptionApiFunctionNames = generateWrappedApi(new BackInStockSubscriptionApi());
  const blogApiFunctionNames = generateWrappedApi(new BlogApi());
  const boardsApiFunctionNames = generateWrappedApi(new BoardsApi());
  const checkoutApiFunctionNames = generateWrappedApi(new CheckoutApi());
  const commonApiFunctionNames = generateWrappedApi(new CommonApi());
  const countryApiFunctionNames = generateWrappedApi(new CountryApi());
  const customerApiFunctionNames = generateWrappedApi(new CustomerApi());
  const catalogApiFunctionNames = generateWrappedApi(new CatalogApi());
  const downloadApiApiFunctionNames = generateWrappedApi(new DownloadApi());
  const newsletterApiFunctionNames = generateWrappedApi(new NewsletterApi());
  const newsApiFunctionNames = generateWrappedApi(new NewsApi());
  const orderApiFunctionNames = generateWrappedApi(new OrderApi());
  const pollApiFunctionNames = generateWrappedApi(new PollApi());
  const privateMessagesApiFunctionNames = generateWrappedApi(new PrivateMessagesApi());
  const productApiFunctionNames = generateWrappedApi(new ProductApi());
  const profileApiFunctionNames = generateWrappedApi(new ProfileApi());
  const returnRequestApiFunctionNames = generateWrappedApi(new ReturnRequestApi());
  const scheduleTaskApiFunctionNames = generateWrappedApi(new ScheduleTaskApi());
  const shoppingCartApiFunctionNames = generateWrappedApi(new ShoppingCartApi());
  const topicApiFunctionNames = generateWrappedApi(new TopicApi());
  const urlRecordApiFunctionNames = generateWrappedApi(new UrlRecordApi());
  const vendorApiFunctionNames = generateWrappedApi(new VendorApi());
  const wishlistApiFunctionNames = generateWrappedApi(new WishlistApi());

  generateapiMethodsInterfact([
    authenticateApiFunctionNames,
    backInStockSubscriptionApiFunctionNames,
    blogApiFunctionNames,
    boardsApiFunctionNames,
    checkoutApiFunctionNames,
    commonApiFunctionNames,
    countryApiFunctionNames,
    customerApiFunctionNames,
    catalogApiFunctionNames,
    downloadApiApiFunctionNames,
    newsletterApiFunctionNames,
    newsApiFunctionNames,
    orderApiFunctionNames,
    pollApiFunctionNames,
    privateMessagesApiFunctionNames,
    productApiFunctionNames,
    profileApiFunctionNames,
    returnRequestApiFunctionNames,
    scheduleTaskApiFunctionNames,
    shoppingCartApiFunctionNames,
    topicApiFunctionNames,
    urlRecordApiFunctionNames,
    vendorApiFunctionNames,
    wishlistApiFunctionNames
  ]);
};
export default generate;
