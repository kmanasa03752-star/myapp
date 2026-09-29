function App() {
  return (
    <div>
      <nav>
        <h2>MyApp</h2>
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </nav>

      <h1>Contact Form</h1>

      <form>
        <input type="text" placeholder="Enter your name" />
        <br /><br />

        <input type="email" placeholder="Enter your email" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;