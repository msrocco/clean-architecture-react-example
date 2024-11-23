# Project Structure

This document outlines the folder structure of the project, organized according to **clean architecture principles**. Each folder is responsible for a specific aspect of the application, ensuring clear separation of concerns and maintainability.

## `src/` - Main Source Folder

Contains all the application code.

---

### **Core Layer (`core/`)**

This layer contains the core business logic and essential functionality of the application.

#### `domain/` - Domain Layer

Contains the core business concepts, such as contracts, entities, and services.

- **`contracts/`**  
  Defines interfaces and types for methods.

  - `product.contracts.ts` - Example contract for product operations.

- **`entities/`**  
  Represents data models or business entities.

  - `product.ts` - Example entity: Product model.

- **`services/`**  
  Contains business logic services where domain logic is implemented.
  - `product.service.ts` - Example service for product business logic.

#### `data/` - Data Layer

Handles the communication between external sources and the domain layer.

- **`interfaces/`**  
  Defines communication contracts for API clients and adapters.

  - `http-client.interface.ts` - Interface for HTTP client requests.
  - `product.interface.ts` - Interface for Product-related API requests.

- **`adapters/`**  
  Contains implementations of adapters that convert data from external sources into domain objects.
  - `product.adapters.ts` - Adapter implementation for interacting with external systems.

#### `infra/` - Infrastructure Layer

Provides concrete implementations for external systems, such as HTTP clients.

- **`http/`**  
  Contains HTTP client-related code, including specific configurations for external API requests.

  - `axios-client/axios-client.http.ts` - HTTP client implementation using `axios`. Configures request interceptors, default headers, and base URL for API communication.

---

### **Repositories Layer (`repositories/`)**

Abstraction layer for data access, consuming adapters to interact with data sources.

- **`product/`** - Product Repository
  - `get.repository.ts` - Repository that fetches product data from external sources.

---

### **Use Cases Layer (`usecases/`)**

Coordinates business logic and orchestrates interactions between services.

- **`product-view/`** - Product View Use Case
  - `product-view.card.tsx` - React component to display product cards.
  - `product-view.controller.ts` - Controller managing the product-view use case flow.
  - `product-view.dependencies.tsx` - Dependencies for the product-view use case (e.g., injected services).
  - `product-view.integration.spec.ts` - Integration tests for the product-view use case.

---

### **UI Layer (`ui/`)**

Contains all components related to the user interface, such as styling, layouts, and views.

#### `product/` - Product UI Components

UI components related to the display of product data.

- `ProductCard.tsx` - Card component for displaying product information.
- `ProductList.tsx` - List component for displaying a collection of products.

#### `shared/` - Shared UI Components

Reusable components that can be used throughout the application.

- `Header.tsx` - Header component.
- `Footer.tsx` - Footer component.
- `Modal.tsx` - Modal component for displaying content in an overlay.

---

### **Reusable UI Components (`components/`)**

Contains general-purpose UI components that can be shared across multiple views or sections.

- `Button.tsx` - Reusable button component.
- `Card.tsx` - Reusable card component for displaying content.

---

### **Shared Layer (`shared/`)**

Contains reusable components, hooks, and logic shared across different parts of the application. These may include UI components and business logic utilities.

#### `context/` - Global Contexts and State Management

- `create-generic-context.util.ts` - Utility function for creating generic contexts, reusable across the application.
- `app-context.tsx` - Global application context to manage global state.

#### `hooks/` - Reusable Custom Hooks

- `use-local-storage.hook.ts` - Custom hook for managing localStorage data.
- `use-window-size.hook.ts` - Hook for getting the window size.
- `use-fetch.hook.ts` - Custom hook for fetching data from APIs.

#### `utils/` - Utility Functions

- `date-formatter.util.ts` - Utility function to format dates into a specified string format.
- `string-validator.util.ts` - Function to validate string inputs (e.g., checking if a string is a valid email address).
- `array-helpers.util.ts` - Helper functions for working with arrays.

#### `constants/` - Global Constants

- `error-messages.ts` - Contains common error messages used across the app, centralizing string management for errors.

---

### **Utilities Layer (`utils/`)**

Contains low-level utility functions and helpers for tasks such as data formatting, validation, or other common logic that is not specific to UI or business logic.

- `date-formatter.util.ts` - Utility function to format dates into a specified string format.
- `string-validator.util.ts` - Function to validate string inputs (e.g., checking if a string is a valid email address).

---

## Folder Overview

- **`core/`**: Contains domain-specific logic and data interactions.
- **`repositories/`**: Manages data access through the use of adapters.
- **`usecases/`**: Implements specific use cases, including controllers, components, and business logic.
- **`components/`**: Reusable UI components shared across the application.
- **`ui/`**: UI components and layouts specifically designed for the user interface.
- **`shared/`**: Reusable components, hooks, utilities, and context shared across the application.
- **`utils/`**: Utility functions and helper methods, such as data formatting, validation, or other common logic that doesn't directly involve UI components.

This structure promotes a **clean separation of concerns**, making each component modular, testable, and easy to maintain.
