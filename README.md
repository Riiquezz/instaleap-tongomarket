# TongoMart Instaleap Integration
This project demonstrates the integration of TongoMart's e-commerce platform with the Instaleap logistics platform. The integration involves checking delivery availability, creating orders, and processing billing information.

# Project Overview
TongoMart, a supermarket in Uganda, has signed a contract with Instaleap to improve their logistics and delivery operations. This project implements the following key features:

1. Checking Delivery Availability: Users can check available delivery time slots.
2. Order Creation: Users can select a time slot and create an order.
3. Billing Process: Users can process billing information after an order is created.

# Features
- UI Introduction Screen: A starting screen with a button to begin checking delivery availability.
- Availability Check: Initially mocks time slots, then proceeds with a real API request.
- Order Creation: Creates an order using the selected time slot and displays the order details.
- Billing: Allows users to process billing information, initially mocking the response, then sending real data to the Instaleap API.

# Installation
## Clone the repository:

```git clone https://github.com/yourusername/tongomart-instaleap-integration.git```

## Navigate to the project directory:

```cd tongomart-instaleap-integration```

## Install dependencies:

```npm install```

## Start the development server:

```npm start```

# Usage
## Check Availability:

- Start the application.
- Click "Check Availability" to view mocked delivery time slots.
- Select a time slot to proceed to the order creation screen.

## Create an Order:

- After selecting a time slot, click "Create Order" to create an order using the selected slot.
- The order details will be displayed after creation.

## Proceed to Billing:

- Click "Proceed to Billing" to enter the billing process.
- Click "Process Billing" to complete the billing step.

# API Integration
This project integrates with the Instaleap API for the following operations:

- Checking Availability: /jobs/availability/v2
- Creating an Order: /jobs
- Processing Billing: /jobs/{jobId}/payment_info

All API requests use a temporary API key provided by Instaleap

# Technical Details
- React: The project is built using React and manages state with React hooks.
- Axios: Axios is used for making API requests to the Instaleap platform.
- Mocking: The project initially uses mocked data for time slots and order creation, transitioning to real API requests after the first interaction.

# Troubleshooting
If you encounter issues with the API requests or the integration:

- Ensure that the API key is valid and correctly included in the headers.
- Verify that all required fields in the API payload are correctly populated with valid data.
- Check the browser console for any error messages and investigate accordingly.