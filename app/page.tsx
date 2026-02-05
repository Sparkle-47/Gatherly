export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="flex bg-gray-50 items-center shadow-lg justify-between px-10 py-6">
        <div className="text-2xl font-bold text-cyan-500">
          トリマト
        </div>

        <a
          href="/login"
          className="px-5 py-2 rounded-md border-2 border-cyan-500 text-cyan-500 hover:bg-blue-50"
        >
          ログイン
        </a>
      </header>

      {/* メイン */}
      <main className="flex flex-col items-center justify-center text-cyan-500 text-center mt-16 px-4">
        <h1 className="text-5xl font-bold tracking-tight">
          あつまろ、トリマト。
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          気軽に「あつまろ。」と言える便利さをあなたに
        </p>

        
        <a
          href="/signup"
          className="mt-10 px-8 py-4 rounded-md border-2 border-cyan-500 bg-cyan-500 text-white text-lg font-semibold shadow-xl hover:bg-cyan-600"
        >
          会員登録
        </a>

        <a
          href="/login"
          className="mt-10 px-8 py-4 rounded-md border-2 bg-white-600 text-cyan-500 text-lg font-semibold shadow-xl hover:bg-gray-200"
        >
          ログイン
        </a>

        

      </main>
    </div>
  );
}
