# React Shopping Cart

This project is a web application that provides a catalog of products, a shopping cart feature, and a thank you page. Users can browse the catalog, add items to the cart, update or remove items from the cart, and view a thank you page after completing their purchase.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features
- Browse a catalog of products.
- Add products to the shopping cart.
- Update the quantity of products in the cart.
- Remove products from the cart.
- Persist cart items in local storage.
- Display toast notifications for cart actions.
- Navigate between catalog, cart, and thank you pages.

## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-shopping-cart.git
    cd react-shopping-cart
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Browse the catalog of products on the homepage.
2. Add products to the cart by specifying the quantity and clicking the "Add to Cart" button.
3. View the cart by clicking on the "Carrinho" link in the navigation bar.
4. Update the quantity of products or remove them from the cart.
5. After finalizing the purchase, view the thank you page.

## Components

### `App.js`
The main component that handles the state and logic for the shopping cart and routing.

### `Catalog.js`
A page component that displays the product catalog and allows users to add items to the cart.

### `Cart.js`
A page component that displays the shopping cart and allows users to update or remove items.

### `ThankYouPage.js`
A page component that displays a thank you message after a purchase is completed.

### `ToastContainer`
A component from `react-toastify` that displays toast notifications for cart actions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.
