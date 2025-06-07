import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      price: 10,
      category: "Food",
    },
    {
      id: 2,
      description: "Meat",
      price: 30,
      category: "Food",
    },
    {
      id: 3,
      description: "Chicken",
      price: 15,
      category: "Food",
    },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
