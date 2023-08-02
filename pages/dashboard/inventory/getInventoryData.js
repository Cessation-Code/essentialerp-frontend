export async function getInventoryItems() {
    try {
      // get expense items
      await fetch("https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/product/", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      ).then(response => response.json()).then(data => {
        // save it to state
        setInventoryItems(data.products)
        console.log(data)
      });
    } catch (error) {
      console.log(error);
    }
  }