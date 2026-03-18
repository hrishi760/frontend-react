import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import StudentDashboard from '../components/StudentDashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import Courses from '../components/courses';

describe('All Components Render Test', () => {

  test('renders Login component', () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('renders Register component', () => {
    render(<Register />);
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  test('renders Student Dashboard', () => {
    render(<StudentDashboard />);
    expect(screen.getByText(/student/i)).toBeInTheDocument();
  });

  test('renders Teacher Dashboard', () => {
    render(<TeacherDashboard />);
    expect(screen.getByText(/teacher/i)).toBeInTheDocument();
  });

  test('renders Courses component', () => {
    render(<Courses />);
    expect(screen.getByText(/course/i)).toBeInTheDocument();
  });

});
