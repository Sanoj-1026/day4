//for in loop

for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const value = jsonData[key];
      console.log(key, value);
    }
  }

  //for Each loop

  Object.keys(jsonData).forEach((key) => {
    const value = jsonData[key];
    console.log(key, value);
  });

 // for of loop

  const values = Object.values(jsonData);
for (const value of values) {
  console.log(value);
}

