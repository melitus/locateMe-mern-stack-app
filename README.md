# 🚀  Project Boilerplate

The new trainline desktop web app which uses:

- React
- Redux
- Redux-observable (Rxjs)
- Jest
- Express
- ESlint
- Webpack
- Storybook-ui

## Setup the project for development

    git clone https://github.com/jabdul/package-boilerplate.git
    npm install

## Start the project for development

Concurrently start everything (watch:client, watch:server, start:server)

    npm start

or open three terminals and run one command in each

    npm run dev:watch-client
    npm run dev:watch-server
    npm run dev:start-server

then open <http://YOUR_COMPUTER_NAME.local:3001> for testing on your local machine or on device.

If for some reason a computer name isn't available, <http://localhost:3001> also works.

## Run as production

- TBD

## Repo layout

    ├── build               Compiled app code and assets (not staged in repo)
    ├── certs
    ├── config
    ├── dev-certs
    ├── jest                Test runner configs
    ├── src
    │   ├── client          Client app (React)
    │   ├── server          Server app (API, server side rendering)
    │   └── shared          Shared code
    └── webpack             Webpack configs, utilities and dev server


### Branch naming

All branches should be named in line with their Acunote project ID and ticket number resulting in a listing that looks something like:

	AGT-123
	UIH-124

### Commit messages

Commit messages should make sense to people other than yourself.

Commits should also reference the project name and ticket number as follows:

	`DWEB-123: Add title to header`

## Code Styleguide

#### General
##### Internationalization

All locale specific language strings should be stored in:
	locales/en-gb_lang.json

All lcale specific configuration values should be stored in:
	locales/en-gb_config.json

##### Function definitions

Function definitions should be fat arrow unless this is impossible for an edge case scoping reason

##### Import style

Imports should all ES6 style.

##### Order of imports
1. External libraries
2. Internal libraries
3. Project file

##### File naming

- Pascal Case

##### Function naming
- Function names should all be camel case
- Add a dollar suffix if the function returns an observable

##### Avoid classes to encourage functional programming

Apart from stateful React components and errors, obviously and a few very weird edge cases.

#### Server

TBD

##### Microservices interfaces
- All microservices need to have fixture mocks to make it easier to cope with the inevitable changes in the API shapes

#### Server communication

All endpoints should be accessible through the main api object.

More documentation needed

```
api.getUser$()
```

or if the API gets too large and ends up needing namespacing

```
api.user.getThing$()
```

#### Redux

TBD

#### React

##### Component folders
Folders should be structured as follows:

	/Modal
    	Modal.container.tsx // Contains the connect wrapper
    	Modal.stories.tsx
    	Modal.styles.tsx
    	Modal.tsx
      README.md


##### Connected component strategy

TBD

##### Event handler functions

TBD

##### Styling

All through Aphrodite, and where possible use the predefined styles in `ct-components/lib/styles`.

Use `rem` units instead of `px` assuming a `14px` base font size.

#### CSS

TBD
