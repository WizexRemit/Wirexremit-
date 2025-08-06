import Header from "../components/Header";
import AuthForm from "../components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary text-secondary dark:text-white transition-colors duration-200">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary/10 via-white to-white dark:from-primary/20 dark:via-secondary/95 dark:to-secondary shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Send Money Anywhere, Anytime</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
                Fast, secure, low-cost international transfers built for people and businesses. Multi-currency wallet, local receiving details, and simple payouts.
              </p>
              <div className="flex gap-4">
                <a href="#auth" className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:opacity-95">Get Started</a>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white">How it works</button>
              </div>
            </div>

            {/* Balance Card */}
            <div className="w-full md:w-96 bg-white dark:bg-[#0f1720] rounded-xl p-5 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">Total Balance</div>
                  <div className="text-2xl font-semibold mt-1">₦ 120,450.00 <span className="text-sm text-gray-400 ml-2">(~$148)</span></div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Primary</div>
                  <div className="text-sm text-gray-500">NGN Wallet</div>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-primary text-white py-2 rounded-lg">Send</button>
                <button className="flex-1 border border-gray-200 dark:border-gray-700 py-2 rounded-lg text-secondary dark:text-white">Receive</button>
              </div>

              <div className="mt-5 text-sm text-gray-500 dark:text-gray-300">
                Recent
                <ul className="mt-3 space-y-2">
                  <li className="flex justify-between">
                    <span>Pay Rent — Ola</span>
                    <span className="text-gray-600 dark:text-gray-400">₦ 45,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Salary — Sept</span>
                    <span className="text-gray-600 dark:text-gray-400">₦ 80,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Auth form */}
        <section id="auth" className="mt-10">
          <AuthForm />
        </section>

        {/* Features / Why Wizex */}
        <section className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-white dark:bg-[#071127] shadow-sm">
            <h3 className="font-semibold mb-2">Low Fees</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Transparent pricing with no hidden charges.</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-[#071127] shadow-sm">
            <h3 className="font-semibold mb-2">Fast Transfers</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Local payout rails for quicker delivery.</p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-[#071127] shadow-sm">
            <h3 className="font-semibold mb-2">Multi-currency</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Hold balances in multiple currencies.</p>
          </div>
        </section>

        {/* Footer-ish small */}
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Wizex Remit — Built for fast global transfers.
        </footer>
      </main>
    </div>
  );
}
