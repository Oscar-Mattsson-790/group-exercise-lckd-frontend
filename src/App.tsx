import "./App.scss";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/interval-app/"}>
      <Routes>
        <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
