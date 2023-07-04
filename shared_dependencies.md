Shared Dependencies:

1. Exported Variables:
   - `user`: Represents the authenticated user.
   - `project`: Represents the current project.
   - `serviceKey`: Represents the service key associated with a project.
   - `apiKey`: Represents the API key generated within a project.

2. Data Schemas:
   - `User`: Schema for user data.
   - `Project`: Schema for project data.
   - `ServiceKey`: Schema for service key data.
   - `ApiKey`: Schema for API key data.
   - `Message`: Schema for message data.

3. ID Names of DOM Elements:
   - `loginForm`: Form for user login.
   - `signupForm`: Form for user signup.
   - `projectForm`: Form for creating a new project.
   - `serviceKeyForm`: Form for creating a new service key.
   - `apiKeyForm`: Form for generating a new API key.
   - `messageList`: List of messages for a project.

4. Message Names:
   - `USER_AUTHENTICATED`: Emitted when a user is authenticated.
   - `PROJECT_CREATED`: Emitted when a new project is created.
   - `SERVICE_KEY_CREATED`: Emitted when a new service key is created.
   - `API_KEY_GENERATED`: Emitted when a new API key is generated.
   - `MESSAGE_TRACKED`: Emitted when a message is tracked.

5. Function Names:
   - `authenticateUser`: Authenticates a user.
   - `createProject`: Creates a new project.
   - `createServiceKey`: Creates a new service key.
   - `generateApiKey`: Generates a new API key.
   - `trackMessage`: Tracks a message.