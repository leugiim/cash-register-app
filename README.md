# Technical Challenge by Miguel Rodríguez

This application is the frontend part for a cash register where the user can create products and discounts. Given a list of products, the app generates a ticket detailing the items bought and any applied discounts. It serves as a handy tool for managing sales transactions.

## Related

- The backend repository is: [https://github.com/leugiim/cash-register-api](https://github.com/leugiim/cash-register-api)

## Requirements

- Node version: 20.9.0
- Svelte version: 4.2.7
- Sveltekit version: 2.5.0

## How to run the application

**Install Dependencies:** Execute the following command to download all dependencies:

```bash
npm install
```

**Start the Application:** Use the following command to start the application:

```bash
npm run dev
```

## Description

**Products Registered**
| Product Code | Name | Price |  
|--|--|--|
| GR1 | Green Tea | 3.11€ |
| SR1 | Strawberries | 5.00 € |
| CF1 | Coffee | 11.23 € |

**Special conditions**

- The CEO is a big fan of buy-one-get-one-free offers and green tea.
  He wants us to add a rule to do this.

- The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases.
  If you buy 3 or more strawberries, the price should drop to 4.50€.

- The VP of Engineering is a coffee addict.
  If you buy 3 or more coffees, the price of all coffees should drop to 2/3 of the original price.

Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

**Test data**
| Basket | Total price expected |  
|--|--|
| GR1,GR1 | 3.11€ |
| SR1,SR1,GR1,SR1 | 13.61€ |
| GR1,CF1,SR1,CF1,CF1 | 30.57€ |
