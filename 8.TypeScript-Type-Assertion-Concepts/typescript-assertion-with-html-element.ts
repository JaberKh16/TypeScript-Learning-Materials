/*
    TypeScript Assertion With HTMLElement
    =====================================
    
    const someElement = document.querySelector('img'); // infers => HTMLImageElement | null

    const someElement = document.getElementsById('#someId'); // infers => Element | null

    const someElement = document.querySelector('img')!; // infers => HTMLImageElement  # negating null with !
    const someElement = document.querySelector('img') as HTMLImageElement; // infers => HTMLImageElement 


    const someElement = <HTMLImageElement>document.getElementsById('#someId'); // infers =>  HTMLImageElement
*/

// TypeScript infers => const img: HTMLImageElement | null
// HTMLImageElement is more specific but it is also null type
const img = document.querySelector("img");

// TypeScript infer => const someElement: Element | null
const someElement = document.getElementById("someid");

// Issue a problem thus it is HTMLImageElement | null so null force a issue
// to fix it use as HTMLImageElement
// const imgElement = document.querySelector("img");
const imgElement = document.querySelector("img") as HTMLImageElement;
const newimgElement = <HTMLImageElement>document.getElementById("#someId"); // infers as HTMLImageElement
imgElement.src = "http://imag/32332";
