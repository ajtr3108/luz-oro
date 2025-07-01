import { useEffect } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function SubirCatalogo() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then(async (productos) => {
        const db = getFirestore();
        const productosRef = collection(db, "productos");
        for (const producto of productos) {
          await addDoc(productosRef, producto);
        }
        alert("Productos subidos a Firebase");
      });
  }, []);

  return <button onClick={() => {}}>Subir productos a Firebase</button>;
}

export default SubirCatalogo;