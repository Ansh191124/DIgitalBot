'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const params = useSearchParams();
  const router = useRouter();
  const rawService = params.get('service'); // 'lead' or 'appointment'

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Map frontend service to backend service string
  const selectedService = rawService === 'lead' ? 'lead-analysis' : rawService === 'appointment' ? 'appointment' : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!selectedService) newErrors.service = 'Invalid service selected';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:4000/api/auth/register', {
        ...form,
        selectedService,
      });

      // Show success message and redirect to login
      alert('Registration successful! Please login to continue.');
      
      // Redirect to login page
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false)
    }
  };

  const getServiceInfo = () => {
    switch (selectedService) {
      case 'lead-analysis':
        return { title: 'Lead Analysis Service', gradient: 'from-blue-500 to-purple-600' };
      case 'appointment':
        return { title: 'Appointment Service', gradient: 'from-green-500 to-teal-600' };
      default:
        return { title: 'DigitalBot Service', gradient: 'from-indigo-500 to-purple-600' };
    }
  };

  const { title, gradient } = getServiceInfo();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
          Sign Up for {title}
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`border p-2 w-full rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        {errors.service && <p className="text-sm text-red-500 mb-4">{errors.service}</p>}

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition disabled:opacity-70"
        >
          {loading ? 'Registering...' : 'Register'}
        </motion.button>
      </motion.form>
    </div>
  );
}
