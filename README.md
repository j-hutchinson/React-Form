## Scripts

To run this application in development mode, follow these two steps

```
    npm i
    npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the unit tests

```
    npm test
```

Launches the test runner in the interactive watch mode.

## Considerations

#### How you would change the configuration of a certain page?
- If a page required updating, you would update the applicable `Panel` component.
- Each page has its own `Panel` component.

#### How you would add new pages?
- Firstly, add another value to the FormState enum and add the value to the formItems array in types.ts (in the correct order)
- This will automatically add the new page to the FormTabs component responsible for rendering each tab.
- Finally, in FormBody component add the new page item to the componentMapper responsible for rendering the correct component

#### How you would implement going back a page?
- Add a back button to the applicable pages (ie not the first UserPanel component).
- Pass in a prop to each component `PreviousPanel` which updates the store with the new page.
- This solution allows FormBody component to be responsible for the previous & next store updates and allowing the developer to only update 1 component if the order was to change.
