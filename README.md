# Hospital API

This project is a backend API for managing hospital operations, including patient registration, report management, and doctor authentication.

## Features
- Patient and doctor registration
- Report creation and retrieval
- Authentication for doctors
- Data persistence using MongoDB Atlas

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/Athar-Nawaid/Hospital-API.git
```

### Install Dependencies
Navigate to the project directory and run:
```bash
npm install
```

### Start the Server
To start the server, use the following command:
```bash
node index.js
```

## Routes

### Patient Routes

- **Register a Patient:**
  ```http
  POST /patients/register
  ```
  **Description:** Register a new patient.

- **Create Patient Reports:**
  ```http
  POST /patients/:id/create_reports
  ```
  **Description:** Create a report for a specific patient using their ID.

- **Get All Reports for a Patient:**
  ```http
  GET /patients/:id/all_reports
  ```
  **Description:** Retrieve all reports for a specific patient.

- **Get Reports by Status:**
  ```http
  GET /patients/:status
  ```
  **Description:** Retrieve reports based on their status.

### Doctor Routes

- **Register a Doctor:**
  ```http
  POST /doctors/register
  ```
  **Description:** Register a new doctor.

- **Doctor Login:**
  ```http
  POST /doctors/login
  ```
  **Description:** Authenticate a doctor and log them in.

## Data Persistence
Data is stored securely in **MongoDB Atlas** using **Mongoose**, ensuring scalable and efficient data management.

## Technologies Used
- **Node.js** for server-side runtime
- **Express.js** for routing and middleware
- **MongoDB Atlas** for data storage
- **Mongoose** for MongoDB object modeling

```

## License
This project is licensed under the MIT License.