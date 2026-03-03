# React Exercises

## Setup

1. `cd Exercises/exercises-app`
2. `npm i`
3. `npm start`

---

## Exercise 1: Components, Props, and Layout

**Goal:** Learn how to create functional components, pass data via props, render dynamic content, and compose components using a layout pattern.

### Steps

1. **Create the Homepage component**
   - Open `src/components/Homepage/Homepage.jsx`
   - Create a functional component called `Homepage` that accepts `props` as a parameter
   - Export the component using a default export

2. **Create the Navbar component**
   - Create a new file `src/components/Navbar/Navbar.jsx`
   - Create a functional component called `Navbar`
   - Add placeholder content (e.g., site title or navigation links)
   - Export the component using a default export

3. **Create the Footer component**
   - Create a new file `src/components/Footer/Footer.jsx`
   - Create a functional component called `Footer`
   - Add placeholder content (e.g., copyright text)
   - Export the component using a default export

4. **Create the Layout component**
   - Open `src/components/Layout.jsx`
   - Create a functional component called `Layout` that accepts `children` as a prop
   - Import and render the `<Navbar />` at the top
   - Render `{children}` in the middle
   - Import and render the `<Footer />` at the bottom

5. **Import mock data**
   - Open `src/App.jsx`
   - Import the user data from `./mockUser.json`

6. **Compose the app**
   - In `App.jsx`, import the `Layout` and `Homepage` components
   - Wrap `<Homepage />` inside `<Layout>` as a child
   - Pass the imported user object as a prop to Homepage (e.g., `user={mockUser}`)

7. **Display a welcome message**
   - In `Homepage.jsx`, use the props to display a personalized greeting
   - Example output: "Greetings, John"

### Hints

- To import JSON: `import mockUser from './mockUser.json'`
- Access props in the component: `props.user.firstName`
- You can destructure props: `function Homepage({ user })`
- The `children` prop is a special React prop that contains nested elements

### Expected Result

When you run the app, you should see:

- A Navbar at the top
- A welcome message displaying the user's first name from the mock data
- A Footer at the bottom

---

## Exercise 2: State and Form Handling

**Goal:** Learn how to manage component state with `useState`, handle form inputs with `onChange`, and process form submissions with `onSubmit`.

### Steps

1. **Create the ContactForm component**
   - Create a new file `src/components/ContactForm/ContactForm.jsx`
   - Import `useState` from React
   - Create a functional component called `ContactForm`
   - Export the component using a default export

2. **Set up state for form fields**
   - Inside `ContactForm`, create state variables for:
     - `name` (string, initially empty)
     - `email` (string, initially empty)
     - `message` (string, initially empty)
   - Example: `const [name, setName] = useState('')`

3. **Build the form JSX**
   - Return a `<form>` element containing:
     - A text input for name with a label
     - An email input for email with a label
     - A textarea for message with a label
     - A submit button

4. **Connect inputs to state with onChange**
   - Add a `value` attribute to each input, bound to its corresponding state variable
   - Add an `onChange` handler to each input that updates the state

5. **Handle form submission**
   - Create a `handleSubmit` function that:
     - Accepts the event as a parameter
     - Calls `e.preventDefault()` to stop the page from refreshing
     - Logs the form data to the console: `{ name, email, message }`
     - Optionally clears the form by resetting all state values to empty strings
   - Attach this function to the form's `onSubmit` attribute

6. **Add the form to your app**
   - In `App.jsx`, import the `ContactForm` component
   - Render `<ContactForm />` inside the `<Layout>` component (below or instead of Homepage)

7. **Test your form**
   - Fill out all fields and click submit
   - Check the browser console to see the logged form data
   - Verify that the form clears after submission (if you implemented that)

### Hints

- Import useState: `import { useState } from 'react'`
- Controlled inputs require both `value` and `onChange`
- Always call `e.preventDefault()` in form submit handlers to prevent page reload
- You can create a single state object instead of separate variables:
  ```jsx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  ```

### Expected Result

When you run the app, you should see:

- A form with name, email, and message fields
- Typing in any field updates the displayed value in real-time
- Clicking submit logs the form data to the console and optionally clears the form

### Bonus Challenges

1. **Add validation** - Show an error message if any field is empty when submitting
2. **Display submitted data** - Instead of just logging, display the submitted data on the page
3. **Add a "submissions" list** - Store multiple submissions in an array and display them all
