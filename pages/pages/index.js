export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-secondary text-secondary dark:text-white flex flex-col items-center justify-center p-6">
      <img src="/wizexremit-logo.svg" alt="Wizex Remit Logo" className="h-16 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Send Money Anywhere, Anytime</h1>
      <p className="mb-8 text-center max-w-lg">
        Fast, secure, and global transfers — built for the modern world.
      </p>
      <div className="flex gap-4">
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">Sign Up</button>
        <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white">Login</button>
      </div>
    </main>
  )
}
