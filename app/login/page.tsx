export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl text-cyan-500 font-bold mb-4">ログイン</h1>

        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-gray-500 placeholder-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-cyan-100 outline-none"
          placeholder="メールアドレス"
        />

        <input
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-gray-500 placeholder-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-cyan-100 outline-none"
          placeholder="パスワード"
        />

        <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600">
          ログイン
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          アカウントをお持ちでない方は
          <a href="/signup" className="text-cyan-500 ml-1 underline">
            サインアップ
          </a>
        </p>
      </div>
    </main>
  );
}