import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Spells", "Weapons", "Items", "Plot points", "Lore"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">THE GOLDEN HOLE TAVERN</div>
      </div>
      <div className="row">
        <div className="col">
          <li className="list-group-item">Magia</li>
        </div>
        <div className="col">
          <li className="list-group-item">An item</li>
        </div>
        <div className="col">
          <li className="list-group-item">An item</li>
        </div>
        <div className="col">
          <li className="list-group-item">An item</li>
        </div>
        <div className="col">
          <li className="list-group-item">An item</li>
        </div>
        <div className="col">
          <li className="list-group-item">An item</li>
        </div>
      </div>
    </div>
  );
}

export default App;
