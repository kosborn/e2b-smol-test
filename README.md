# Project Manager Application

The "Project Manager" application is a feature-rich platform designed to streamline project management and communication for teams and individuals. Built using SvelteKit, Postgres with Prisma ORM, and TypeScript, this application provides a seamless user experience with a robust tech stack.

## Features

1. **User Authentication**: Users can securely authenticate themselves using a cookie named "user" that matches their unique user ID. This ensures personalized access to their projects and associated data.

2. **Service Keys Management**: Users have the ability to create new service keys. Service keys act as authentication credentials for integrating with external services or APIs, enabling secure and reliable communication.

3. **Project Creation**: Users can create new projects within the "Project Manager" application. Each project is associated with a single service key ID, facilitating seamless integration with external services or APIs.

4. **API Key Generation**: Within each project, users can generate new API keys. These API keys serve as unique identifiers and access tokens for interacting with the project's associated services and APIs.

5. **Message Tracking**: The application tracks messages exchanged between projects, API keys, and service keys. Messages are stored in the database and linked to their respective entities, such as projects, API keys, and service keys. This feature enables comprehensive tracking and analysis of communication within the application.

## Tech Stack

- Front-end Framework: SvelteKit
- Database: Postgres
- ORM: Prisma
- Programming Language: TypeScript

The combination of SvelteKit's efficient rendering, Prisma's powerful ORM capabilities, and TypeScript's strong typing ensures a high-performance, maintainable, and scalable application.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Visit `http://localhost:5000` to view the application

Please note that the above information is based on the given specifications and my knowledge cutoff is in September 2021. It's always recommended to consult the official documentation and relevant resources for the latest updates and best practices when working with these technologies.