import { useState } from 'react';
import axios from 'axios';
function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/login', form);
    alert(res.data.message);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;