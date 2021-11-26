<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  <img src="https://www.nopcommerce.com/Themes/OfficialSite/Content/images/logo.png" height="80px"/>
</div>

## Vue Storefront 2 integration with nopCommerce

This project is a nopCommerce integration for Vue Storefront 2.
This integration is developed by the superheroes from [Majako](https://www.majako.net) ❤️
<div align="center">
<img src="https://www.majako.se/assets/Majako.svg" height="80px"/>
</div>
<hr />

# Boilerplate for Vue Storefront 2 eCommerce integration

This is a template, to use it you must rename the project changing the `{YOUR INTEGRATION NAME}` to the name of the integration you are developing. The name must be in lowercase and without any special characters.

```sh
grep -rl 'nopcommerce' ./ | xargs sed -i '' 's/nopcommerce/{YOUR INTEGRATION NAME}/g'
```

---

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## How to start if you want to try out the integration

```
yarn global add @vue-storefront/cli
```

```
vsf init <project_name> && cd <project_name> && yarn && yarn dev
```

## How to start if you want to contribute?

Want to contribute? Ping us on `nopcommerce` channel on [our Discord](https://discord.vuestorefront.io)!

### Requirements:

- NodeJS v14 or later

### Steps

1. Fork the repo
2. Clone your fork of the repo
   ```
   example:
   git clone https://github.com/vuestorefront/nopcommerce.git
   cd nopcommerce
   ```
3. Run `yarn` to install dependencies
4. Build dependencies `yarn build:api-client && yarn build:composables`
5. Run `yarn dev:theme` to run theme. You can find other commands in `package.json`

- If you need HMR on Api Client/Composables run `yarn dev:api-client` or `yarn dev:composables` on a separate terminal window.

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [nopcommerce integration Documentation](https://docs.vuestorefront.io/nopcommerce)
- [Community Chat](https://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on `nopcommerce` channel on [our Discord](discord.vuestorefront.io).

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
