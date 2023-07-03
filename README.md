# Digital Cow Hut Backend

### Assignment Name: Online Cow Selling Backend for Eid Ul Adha

You have been assigned the task of building the backend for an Online Cow Selling platform in preparation for Eid Ul Adha. The main focus of this assignment is to implement error handling, CRUD operations, pagination and filtering, transactions (including a simple transaction without a payment gateway), and additional routes as necessary.

### Technology Stack:

- Use TypeScript as the programming language.
- Use Express.js as the web framework.
- Use Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB.

### Live Link: https://digital-cow-hat.onrender.com/

### Application Routes:

#### User --->

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/648ed26ea097704619e54ea3 (Single GET)
- api/v1/users/648ed26ea097704619e54ea3 (PATCH)
- api/v1/users/648ed26ea097704619e54ea3 (DELETE)

#### Cows --->

- api/v1/cows (POST)
- api/v1/cows/all (GET ALL)
- api/v1/cows/648ed470a097704619e54eab (Single GET)
- api/v1/cows/648ed470a097704619e54eab (PATCH)
- api/v1/cows/648ed470a097704619e54eab (DELETE)

### Pagination and Filtering routes of Cows --->

- api/v1/cows/?page=1&limit=2
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha

#### Orders --->

- api/v1/orders (POST)

```json
{
  "cow": "648ed470a097704619e54eab",
  "buyer": "648ed26ea097704619e54ea3"
}
```

- api/v1/orders (GET)
- api/v1/orders/648ed42aa097704619e54ea9 (Single GET)
# l2b1a4-cow-hut-admin-auth-Robiulalam76
