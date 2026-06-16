//

  async function test() {
    console.log("C");
  
     await Promise.resolve();
  
    console.log("D");
  }
  
  test()

  console.log("E")