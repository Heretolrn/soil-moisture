import Underline from "./underline";

export default function Achivement() {
  return (
    <section className="w-full">
      <Underline title="Achivements" />

      <article className="flex justify-center gap-3 flex-wrap ">
        <Card />
        <Card />
        <Card />
      </article>
    </section>
  );
}

function Card() {
  return (
    <div className=" w-[80%] min-w[220px] bg-white rounded-[10px] shadow-lg p-4 mb-2  max-w-[375px]">
      <h2 className="font-bold text-2xl text-black text-center mb-2">
        Trained Personnels
      </h2>
      <div className="flex gap-2 mb-2">
        <div className="">
          <div className="bg-black w-7 h-7  rounded-full"></div>
        </div>
        <div>
          <h3 className="font-bold">Beginner Training</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem
            laudantium quos .
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        <div className="">
          <div className="bg-black w-7 h-7  rounded-full"></div>
        </div>
        <div>
          <h3 className="font-bold">Intermediate Training</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem
            laudantium quos .
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="btn bg-range w-[90%] mx-auto text-white">
          Learn more
        </button>
      </div>
    </div>
  );
}
