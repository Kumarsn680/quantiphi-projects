import "./App.css";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import Viewarticle from "./Viewarticle";
const articles = [
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
  {
    title: "hello world",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus placeat dolorum blanditiis! Laboriosam veritatis ipsa aperiam ullam molestias nesciunt sit sunt, autem natus velit dolor!",
    author: "Terry",
  },
];

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
            <div className="flex gap-x-4 items-center">
              <p>Hi {user.name}</p>
              <button
                className="border p-2 bg-gray-200"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
            <div className="grid grid-cols-3">
              {articles.map((article) => (
                <Viewarticle
                  title={article.title}
                  text={article.text}
                  author={article.author}
                />
              ))}
            </div>
          </>
        ) : (
          <button
            className="border p-2 bg-gray-200"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </div>
    </>
  );
}

export default App;
