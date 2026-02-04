export default function LoginPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Gatherly にログイン</h1>
      <p>幹事のためのイベント管理ツール</p>

      <a href="/login">
        <button>ログイン画面へgo!</button>
      </a>


      <br />

      <input placeholder="メールアドレス" />
      <br /><br />
      <input type="password" placeholder="パスワード" />
      <br /><br />
      <button>ログイン</button>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        ※ 今は見た目だけです
      </p>
    </main>
  );
}
