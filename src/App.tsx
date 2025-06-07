import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      price: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Meat",
      price: 30,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Chicken",
      price: 15,
      category: "Groceries",
    },
    {
      id: 4,
      description: "Phone Charger",
      price: 60,
      category: "Utilities",
    },
    {
      id: 5,
      description: "iPhone",
      price: 1200,
      category: "Entertainment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
