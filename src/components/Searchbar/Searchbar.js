import * as Modules from "../../components/Imports/Index";

function Searchbar(props) {
  const [partnersTypeData, setPartnersTypeData] = Modules.React.useState(props.data);
  const [value, setValue] = Modules.React.useState();

  const searchFilterFunction = (text) => {
    //console.log(JSON.stringify(props));
    setValue(text);
    //console.log(JSON.stringify(partnersTypeData))
    const newData = partnersTypeData.filter((row) => {
      return row.code.toLowerCase().includes(text.toLowerCase());
    });
    setPartnersTypeData(newData); 
    //console.log(JSON.stringify(partnersTypeData)); 
  };

  return (
    <Modules.SearchBar
      placeholder="Rechercher Un Type Partenaire"
      value={value}
      onChange={(newValue) => searchFilterFunction(newValue)}
      style={{border: "2px solid black"}}
    />
  );
}

export default Searchbar;
