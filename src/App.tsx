import { useState } from "react";

const shoes = [
  {
    marginLeft: "ml-[0%]",
    bgColor: "bg-red-700",
    shoeName: "Jordan 1 red",
    img: "/images/red-nike.png",
  },
  {
    marginLeft: "ml-[-100%]",
    bgColor: "bg-blue-700",
    shoeName: "Jordan 1 blue",
    img: "/images/blue-nike.png",
  },
  {
    marginLeft: "ml-[-200%]",
    bgColor: "bg-green-700",
    shoeName: "Jordan 1 green",
    img: "/images/green-nike.png",
  },
];

function App() {
  const [currentShoe, setCurrentShoe] = useState(0);

  console.log(currentShoe);

  const handleNextShoe = () => {
    const newCurrentShoe = currentShoe + 1;
    if (newCurrentShoe > shoes.length - 1) setCurrentShoe(0);
    else setCurrentShoe(currentShoe + 1);
  };

  const handlePrevShoe = () => {
    const newCurrentShoe = currentShoe - 1;
    if (newCurrentShoe < 0) setCurrentShoe(shoes.length - 1);
    else setCurrentShoe(currentShoe - 1);
  };

  const handleShowShoe = (index: number) => {
    setCurrentShoe(index);
    console.log("Me ejecuto");
  };

  return (
    <main
      className={`h-screen overflow-hidden font-tomorrow text-white relative uppercase transition-colors duration-500 ${shoes[currentShoe].bgColor}`}
    >
      {/* <!-- Header --> */}
      <header className="flex justify-between items-center px-8 py-4">
        <img src="/images/logo-nike.png" alt="" />

        <nav>
          <ul className="flex gap-8">
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Customize</a>
            </li>
          </ul>
        </nav>

        <div className="text-2xl flex gap-4">
          <button>
            <i className="bx bx-user-circle"></i>
          </button>
          <button>
            <i className="bx bx-shopping-bag"></i>
          </button>
        </div>
      </header>

      {/* <!-- texto fondo NIKE --> */}
      <div className="absolute max-w-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:[background:_radial-gradient(rgba(255,255,255,0.5)_0%,_transparent_70%)] after:w-[150%] after:aspect-square after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:rounded-full">
        <img className="relative z-10" src="/images/nike.png" alt="" />
      </div>

      {/* <!-- Slider de las J1 --> */}
      <div
        className={`flex absolute left-0 top-0 w-[300%] h-full [&>div>img]:max-w-[400px] [&>div]:w-1/3 [&>div]:relative [&>div>img]:absolute [&>div>img]:w-full [&>div>img]:left-1/2 [&>div>img]:-translate-x-1/2 [&>div>img]:top-1/2 [&>div>img]:-translate-y-1/2 slider transition-[margin-left_0.5s_ease-in-out] duration-500 ${shoes[currentShoe].marginLeft}`}
      >
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className={`slide-shoe ${
              currentShoe === index && "animate-shoeMovement"
            }`}
          >
            <img src={shoe.img} alt="" />
          </div>
        ))}
      </div>

      {/* <!-- Información zapato parte izquierda --> */}
      <section className="absolute bottom-4 left-8 grid gap-8">
        <div
          className="grid gap-8 visible-text animate-visible"
          key={currentShoe}
        >
          <h3 className="text-3xl shoe-name">Jordan 1 red</h3>

          <ul className="text-sm grid gap-1 [&>li]:grid [&>li]:gap-1">
            <li>
              <h5>Release Date</h5>
              <span>2016-10-06</span>
            </li>
            <li>
              <h5>Color way</h5>
              <span>Sail/starfish-black</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h4 className="font-semibold">Select size (us)</h4>
          <ul className="grid gap-2 grid-cols-5 [&>li>button]:w-12 [&>li>button]:aspect-square [&>li>button]:border [&>li>button]:border-white [&>li>button:hover]:bg-white [&>li>button:hover]:text-black [&>li>button]:transition-colors">
            <li>
              <button>8</button>
            </li>
            <li>
              <button>8.5</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>9.5</button>
            </li>
            <li>
              <button>10</button>
            </li>
            <li>
              <button>10.5</button>
            </li>
            <li>
              <button>11</button>
            </li>
            <li>
              <button>11.5</button>
            </li>
            <li>
              <button>12</button>
            </li>
            <li>
              <button>12.5</button>
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h4 className="font-semibold">Select color</h4>
          <ul className="flex gap-3 [&>li>button]:w-12 [&>li>button]:aspect-square [&>li>button]:border [&>li>button]:border-black [&>li>button]:rounded-full [&>li>button:hover]:border-2 [&>li>button:hover]:border-white [&>li>button]:transition-all">
            {shoes.map((shoe, index) => (
              <li key={index}>
                <button
                  onClick={() => handleShowShoe(index)}
                  className={`${shoe.bgColor} btn-color`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <!-- Información zapato parte derecha --> */}
      <section className="absolute bottom-4 right-8 max-w-[300px] normal-case grid gap-6">
        <p>
          The quality is excellent, packed reliably, and the color is a dream.
          The USS store is excellent. Thank you!!! We strive to earn and keep
          your trust.
        </p>
        <div className="[&>button]:w-12 [&>button]:aspect-square [&>button]:border [&>button]:rounded-full flex gap-4 text-2xl [&>button]:transition-colors [&>button:hover]:bg-white [&>button:hover]:text-black [&>button]:flex [&>button]:justify-center [&>button]:items-center">
          <button onClick={handlePrevShoe}>
            <i className="bx bx-left-arrow-alt btn-prev"></i>
          </button>
          <button onClick={handleNextShoe}>
            <i className="bx bx-right-arrow-alt btn-next"></i>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
