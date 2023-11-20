import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Questions from "../components/Questions/Questions";
import Characters from "../components/Characters/Characters";

const index = () => {
  const [characters, setCharacters] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setCharacters(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {/* <Questions /> */}
      <Characters characters={characters} />
      <Footer />
    </div>
  );
};

export default index;
