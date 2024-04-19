import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function SignUpForm({ onSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(name, email, password, isAdmin);
    setName('');
    setEmail('');
    setPassword('');
    setIsAdmin(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          Admin:
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

function IngredientsForm({ onAddIngredient }){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIngredient(name, description);
    setName('');
    setDescription('');
  };

  return <form onSubmit={handleSubmit}>
    <h2>Recipes Form</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Ingredient</button>
  </form>
}


function RecipesForm({ onAddRecipe }){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [ingredients, setingredients] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(name, description, ingredients);
    setName('');
    setDescription('');
    set
  };

  return <form onSubmit={handleSubmit}>
    <h2>Recipes Form</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Ingredient</button>
  </form>
}

function LogInForm({ onLogIn }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(email, password);
    setemail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <div>
        <label>email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

function App() {
  const handleSignUp = async(name, email, password, Admin) => {
    try {
      const res = await axios({
        url: "http://localhost:5600/auth/signUp",
        method: "post",
        data: {
          name: name,
          email: email,
          password : password, 
          Admin: Admin
        },
      });
      window.alert(res.data.msg);
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
    console.log('Signing up with:', email, password);
  };


  const handleAddIngredient = async(name, description) => {
    try {
      const res = await axios({
        url: "http://localhost:5600/auth/signUp",
        method: "post",
        data: {
          name: name,
          description: description
        },
      });
      window.alert(res.data.msg);
    } catch (e) {
      window.alert("ERROR");
      console.error(e);
    }
  };

  const handleLogIn = (email, password) => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div>
      <SignUpForm onSignUp={handleSignUp} />
      <LogInForm onLogIn={handleLogIn} />
      <IngredientsForm onAddIngredient={handleAddIngredient} />


    </div>
  );
}

export default App;
