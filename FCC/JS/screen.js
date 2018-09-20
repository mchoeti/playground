let vereine = {
    GAK: 1,
    AustriaSalzburg: 2,
    Sturm: 3
  };
  
  // Nun löschen wir den Stadtverein mit einem einfachen 
  delete vereine.Sturm;
  
  // Ausgabe der richtigen Vereine
  console.log(vereine);
  