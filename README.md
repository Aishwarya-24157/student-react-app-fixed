# Student React Application

This project demonstrates passing student information from a parent component to a child component using React **props**.

## Information displayed
- Student name
- Student course
- Faculty name

## Requirements
- Node.js (version 18 or later recommended)
- npm

## Run the application

1. Extract the ZIP file.
2. Open a terminal in the `student-react-app` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Where to edit the details

Open `src/main.jsx` and change the values passed to the `Student` component:

```jsx
<Student
  studentName="Ananya Sharma"
  studentCourse="B.Sc. Computer Science"
  facultyName="Dr. R. Kumar"
/>
```

The child component receives these values through its `props` parameter in `src/Student.jsx`.
