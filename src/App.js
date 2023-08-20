import scss from "./App.module.scss";
import ProductsList from "./components/ProducstList/ProductsList";

function App() {
    return (
        <main>
            <div className={scss.container}>
                <ProductsList />
            </div>
        </main>
    );
}

export default App;
