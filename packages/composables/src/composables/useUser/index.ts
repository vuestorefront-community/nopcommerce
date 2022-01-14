import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User, AuthenticateResponse, RegisterModelDto } from '@vue-storefront/nopcommerce-api';
import { CustomerInfoModelDto } from '@vue-storefront/nopcommerce-api/gen';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../../types';

const logIn = async (context: Context, username: string, password: string): Promise<AuthenticateResponse> => {
  const response: AuthenticateResponse = await context.$nopcommerce.api.authenticateGetTokenPost({
    authenticateCustomerRequest: {
      email: username,
      password: password
    }
  });

  return response;
};

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  load: async (context: Context) => {
    const response: CustomerInfoModelDto = await context.$nopcommerce.api.customerInfoGet();
    return response ? response : null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    await context.$nopcommerce.api.customerLogoutGet();
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: useUser.updateUser');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, { email, password, firstName, lastName }) => {
    const response: RegisterModelDto = await context.$nopcommerce.api.customerRegisterPost({
      returnUrl: '/',
      registerModelDtoBaseModelDtoRequest: {
        model: {
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName
        },
        form: {}
      }
    });

    if (response === '') {
      throw new Error('Could not register user, please check the form and try again.');
    }

    return logIn(context, email, password);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    return logIn(context, username, password);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: useUser.changePassword');
    return {};
  }
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(params);
