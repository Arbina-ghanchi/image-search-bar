import {
  Container,
  Imagecontainer,
  Mainbox,
  Searchbarinput,
  SimpleButton,
} from "./home.styled";
import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_KEY;
console.log("hhh", API);
export function Home() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${API}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, [img]);

  return (
    <>
      <Container>
        <Mainbox>
          <Searchbarinput
            type="search"
            placeholder="Search Image.."
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></Searchbarinput>

          <SimpleButton>submit</SimpleButton>
        </Mainbox>
        <Imagecontainer>   
        {res.map((output) => {
          return (
            <>
              <img
                key={output.id}
                src={output.urls.small}
                alt="val.alt_description"
              ></img>
            </>
            
          );
        })}
        </Imagecontainer>
      </Container>
    </>
  );
}
