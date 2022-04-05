import React, { useEffect, useState } from "react";
import modules from "./SuppliedDesserts.module.css";
import Card from '../UI/Card';
import DessertElement from './DessertElement/DessertElement';

const SuppliedDesserts = () => {

  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    const fetchDesserts = async () => {

      const response = await fetch("https://dessert-app-6b663-default-rtdb.europe-west1.firebasedatabase.app/desserts.json");

      if (!response.ok) {
        throw new Error("something went wrong.");
      }
      const responseData = await response.json();

      const loadedDesserts = [];

      for (let key in responseData) {
        loadedDesserts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price

        });
      }


      setDesserts(loadedDesserts);
      setIsLoading(false);
    };


    fetchDesserts().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });

  }, []);

  if (isLoading) {

    return <p className={modules.dessertIsLoading}>Loading...</p>
  }

  if (error) {
    return <p className={modules.dessertIsLoading}>{error}</p>

  }

  const dessertList = desserts.map(sweet => {
    return <DessertElement
      key={sweet.id}
      id={sweet.id}
      name={sweet.name}
      description={sweet.description}
      price={sweet.price}
    />
  });


  return (
    <section className={modules.desserts}>
      <Card>
        <ul>{dessertList}</ul>
      </Card>
    </section>


  )
};

export default SuppliedDesserts;
