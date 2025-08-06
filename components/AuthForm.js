// components/AuthForm.js
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function AuthForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [message, setMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage('Check your email to confirm your account.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        router.push('/dashboard')
      }
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-[#071127] rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4">
        {mode === 'signup' ? 'Create an account' : 'Sign in'}
      </h3>

      {message && <div className="mb-4 text-sm text-red-500">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-transparent"
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-transparent"
        />
        <button disabled={loading} className="w-full bg-purple-600 text-white py-2 rounded-md">
          {loading ? 'Please wait...' : (mode === 'signup' ? 'Sign up' : 'Sign in')}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
        <button
          type="button"
          onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
          className="ml-2 text-purple-600 font-medium"
        >
          {mode === 'signup' ? 'Sign in' : 'Create one'}
        </button>
      </div>
    </div>
  )
}
