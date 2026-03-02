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
