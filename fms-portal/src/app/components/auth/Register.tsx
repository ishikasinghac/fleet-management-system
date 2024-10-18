import { UserType } from '@/lib/constants';
import { useAppDispatch } from '@/lib/hooks/hooks';
import { registerUser } from '@/lib/redux/slices/auth/RegisterUserSlice';
import { RegisterUserRequest } from '@/lib/types/userTypes';
import React, { useState } from 'react';

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userType, setUserType] = useState<UserType>(UserType.USER);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    const requestData: RegisterUserRequest = {
      username: name,
      email: email,
      password: password,
      usertype: userType,
    }

    dispatch(registerUser({ requestData }));
  };

  const handleSelectChange = (e: any) => {
    setUserType(e.target.value);
  };



  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Register</h2>

        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="userType" style={styles.label}>User Type</label>
          <select
            id="userType"
            value={userType}
            onChange={handleSelectChange}
            style={styles.select}
            required
          >
            <option value="" disabled>Select user type</option>
            <option value={UserType.DRIVER}>Driver</option>
            <option value={UserType.USER}>User</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '50vh',
    backgroundColor: '#f0f0f0',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    appearance: 'none', // For modern look across browsers
  },
};

export default RegisterPage;

