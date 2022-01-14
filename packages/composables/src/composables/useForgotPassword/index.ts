import {
  Context,
  useForgotPasswordFactory,
  UseForgotPasswordFactoryParams
} from '@vue-storefront/core';
import type { PasswordRecoveryModelDto } from '@vue-storefront/nopcommerce-api';

const factoryParams: UseForgotPasswordFactoryParams<any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetPassword: async (context: Context, { email, customQuery }) => {
    const response: PasswordRecoveryModelDto = await context.$nopcommerce.api.customerPasswordRecoverySendPost({
      passwordRecoveryModelDto: {
        email: email
      }
    });
    return response;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNewPassword: async (context: Context, { tokenValue, newPassword, customQuery }) => {
    console.log('Mocked: setNewPassword');
    return {};
  }
};

export const useForgotPassword = useForgotPasswordFactory<any>(factoryParams);
