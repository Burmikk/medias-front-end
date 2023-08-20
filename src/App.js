import scss from "./App.module.scss";
import ProductsList from "./components/ProducstList/ProductsList";
import Receipt from "./components/Receipt/Receipt";

function App() {
    return (
        <main>
            <div className={scss.container}>
                <ProductsList />
                <Receipt />
            </div>
        </main>
    );
}

export default App;
