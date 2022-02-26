<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  <img src="https://www.nopcommerce.com/Themes/OfficialSite/Content/images/logo.png" height="80px"/>
</div>

---------

# #TechForUkraine

<table>
  <tr>
    <td style="width:40%;">
       <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
    </td>
    <td>
      <h2><strong>Ongoing tensions on Ukrainian territory close the space for civil society.</strong></h2>
      <h3>How can you support Ukrainian civil society?</h3>
      All the help is valid, and if you are not able to help locally, by giving shelter to a fellow Ukraine, there are some ways that you can help also:
      <ul>
        <li>
          Support the Ukraine Armed forces directly by sending funding to the open special accounts.<br />
          <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi" target="_blank">NBU Opens Special Account to Raise Funds for Ukraine’s Armed Forces</a>
        </li>
        <li>
          Help the ICRC (Red Cross) with donations.<br />
          <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian Red Cross Society</a>
        </li>
        <li>
          Donate to the United Help Ukraine.<br />
          <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
        </li>
        <li>
          Donate to Voices of Children<br />
          <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
        </li>
    </td>
  </tr>
</table>

---------

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
