

    for (let i = 2; i <= 100; i++) 
      if (primaryNumber(i)) document.write("<h3>" + i + ", </h3>");
  
  
  function primaryNumber(i) {
    for (let factor = 2; factor < i; factor++)
      if (i % factor === 0)
        return false; 
    
    return true; 
  }