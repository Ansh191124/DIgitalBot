'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PageBackground } from '@/components/page-background'

interface SignupFormProps {
  initialService?: string
}

type ServiceKey = 'lead-analysis' | 'appointment' | ''

export function SignupForm({ initialService }: SignupFormProps) {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedService, setSelectedService] = useState<ServiceKey>('')

  // Initialize service from server-provided search param
  useEffect(() => {
    if (!initialService) {
      setSelectedService('')
      return
    }

    if (initialService === 'lead') {
      setSelectedService('lead-analysis')
    } else if (initialService === 'appointment') {
      setSelectedService('appointment')
    } else if (initialService === 'lead-analysis') {
      setSelectedService('lead-analysis')
    } else {
      setSelectedService('')
    }
  }, [initialService])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
    if (!form.password) newErrors.password = 'Password is required'
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!selectedService) newErrors.service = 'Invalid service selected'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)

    try {
      await axios.post('https://digital-api-tef8.onrender.com/api/auth/register', {
        ...form,
        selectedService,
      })

      alert('Registration successful! Please login to continue.')
      router.push('/login')
    } catch (err: any) {
      console.error(err)
      alert(err.response?.data?.error || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const getServiceInfo = () => {
    switch (selectedService) {
      case 'lead-analysis':
        return { title: 'Lead Analysis Service', gradient: 'from-orange-400 to-orange-700' }
      case 'appointment':
        return { title: 'Appointment Service', gradient: 'from-orange-500 to-orange-600' }
      default:
        return { title: 'DigitalBot Service', gradient: 'from-orange-500 to-orange-700' }
    }
  }

  const { title, gradient } = getServiceInfo()

  return (
    <div className="flex justify-center items-center min-h-screen bg-white relative overflow-hidden">
      <PageBackground />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-2xl shadow-orange-500/30 w-96 border-2 border-purple-500 relative z-10"
      >
        <h2 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
          Sign Up for {title}
        </h2>

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

        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-orange-700 transition disabled:opacity-70"
        >
          {loading ? 'Registering...' : 'Register'}
        </motion.button>
      </motion.form>
    </div>
  )
}
