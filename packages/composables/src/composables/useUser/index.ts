import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import type { User } from '@vue-storefront/nopcommerce-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams
} from '../../types';

const logIn = async (context: Context, username: string, password: string): Promise<User> => {
  const tokenResponse = await context.$nopcommerce.api.authenticateGetTokenPost({
    authenticateCustomerRequest: {
      email: username,
      password: password
    }
  });

  const user: User = {
    token: (tokenResponse) ? tokenResponse.token : null
  };

  return user;
};

const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  load: async (context: Context) => {
    return await context.$nopcommerce.config.state.getCurrentCustomer();
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
    const response = await context.$nopcommerce.api.customerRegisterPost({
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
