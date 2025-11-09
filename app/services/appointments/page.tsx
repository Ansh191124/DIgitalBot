"use client";
import Link from "next/link";

export default function AppointmentsPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Appointments Service</h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Easily schedule, manage, and track your appointments with clients or patients.
      </p>

      <Link
        href="/signup?service=appointment"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition-all"
      >
        Sign Up for Appointment
      </Link>
    </div>
  );
}






