# Rsu Portal

A web-based application that allows students to fill and submit applications while enabling administrators to review, approve, or decline the submissions.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roles](#roles)
  - [Student](#student)
  - [Admin](#admin)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Introduction

The **Rsu Portal** is a centralized system designed for managing student applications. Students can log in to their profiles to fill and submit applications, while administrators can manage these submissions by approving or declining them.

This project simplifies the application submission and review process, ensuring a smooth and efficient workflow for both students and administrators.

---

## Features

- **Student Login**: Secure login for students to access their profiles.
- **Admin Login**: Secure login for administrators to manage applications.
- **Application Form**: Students can fill out and submit applications.
- **Application Management**: Admins can view, approve, or decline applications.
- **Dashboard**: Role-specific dashboards for students and admins.
- **Responsive Design**: Accessible on both desktop and mobile devices.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) or any other database you're using.

### Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/student-portal.git

# Navigate to the project directory
cd student-portal

# Install dependencies
pnpm install

# Set up the database
# (e.g., start MongoDB or set up your preferred database)

# Start the development server
pnpm run dev
