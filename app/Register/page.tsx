"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Number {
  _id: string;
  number: string;
}

export default function Signup(): JSX.Element {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    chosenNumber: "",
  });

  const [numbers, setNumbers] = useState<Number[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch available numbers on mount
  useEffect(() => {
    const fetchNumbers = async () => {
      try {
  const base = (typeof window !== 'undefined') ? window.location.origin : (process.env.NEXT_PUBLIC_API_URL || 'https://digital-api-tef8.onrender.com');
  const res = await axios.get(`https://digital-api-tef8.onrender.com`);
        setNumbers(res.data);
      } catch (err: any) {
        console.error("Error fetching numbers:", err.response?.data || err.message);
      }
    };
    fetchNumbers();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNumberSelect = (number: string) => {
    setForm({ ...form, chosenNumber: number });
    setShowPopup(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!form.name || !form.email || !form.password || !form.chosenNumber) {
      setMessage("⚠️ Please fill all fields and select a number.");
      setLoading(false);
      return;
    }

    try {
  const base = (typeof window !== 'undefined') ? window.location.origin : (process.env.NEXT_PUBLIC_API_URL || 'https://digital-api-tef8.onrender.com');
  await axios.post(`${base}/api/auth/register`, form);
      setMessage("✅ Signup successful! Redirecting to login...");
      setForm({ name: "", email: "", password: "", chosenNumber: "" });

      // ✅ Redirect to login after short delay
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "❌ Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Sign up to get access to your call dashboard</p>
        </div>

        {message && (
          <div
            className={`px-4 py-3 rounded-lg mb-6 text-center text-sm ${
              message.startsWith("✅")
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          {/* Number selection */}
          <div className="flex items-center justify-between">
            <input
              type="text"
              readOnly
              value={form.chosenNumber || ""}
              placeholder="Choose Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="ml-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Choose
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white w-80 p-6 rounded-3xl shadow-2xl transform transition-transform duration-300 scale-95 animate-popIn">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
              Select Number
            </h3>

            <div className="max-h-64 overflow-y-auto space-y-3">
              {numbers.length > 0 ? (
                numbers.map((num) => (
                  <button
                    key={num._id}
                    onClick={() => handleNumberSelect(num.number)}
                    className="w-full flex items-center justify-center border border-gray-300 rounded-xl px-3 py-3 bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-200 font-medium text-gray-700"
                  >
                    {num.number}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center">No numbers available</p>
              )}
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
