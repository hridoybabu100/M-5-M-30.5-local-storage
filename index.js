const addNumberToLs = () => {

    const numbers = Math.ceil(Math.random()*100);
    console.log(numbers);
    localStorage.setItem("This is a number", numbers)
    
}


const getNumberfromLs = () => {
    const numbers = localStorage.getItem("numbers");
    console.log("This is a save Number is", numbers);
    
}

// objected
// eikhne mianly object ke directly local e pathanu jabena tai json string e converted kore nite hbe.
 const objectLOS = () => {
    const status = { name: "Hridoy Akanda", status: "Student", Age: 22};
    const stringJSON = JSON.stringify(status);
    localStorage.setItem("This s status person", stringJSON)
 }

 // Aarray
 const arrayLOs = () => {
    const furniture = ["product name", "Asbapatra", "new Barnaded"]
    localStorage.setItem("Furniture", furniture);
 }

