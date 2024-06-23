import React from "react";
import Underline from "./underline";

export default function executive() {
  return (
    <section className="w-full">
      <Underline title="Our Executives" />
      <article className="flex flex-col justify-center items-center">
        <div data-name="patron" className="p-4 pb-6">
          <article>
            <div className="avatar">
              <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3 className="font-bold text-center text-xl text-white">Patron</h3>
            <p className="text-white text-center">Miss Audury Asante</p>
          </article>
        </div>
        <div
          data-name="executive"
          className="flex justify-between items-center gap-3 w-full max-w-[315px] md:max-w-[636px] px-5 md:px-0 md:mx-auto flex-wrap"
        >
          <Avatar title="president" name="Jeffery Mensah" />
          <Avatar title="Vice President" name="Getrude Asante" />
          <Avatar title="Treasure" name="Philipa yeboah" />
          <Avatar title="Web Master" name="Boaz Amakye Adjei" />
          <Avatar title="Treasure" name="Philipa yeboah" />
        </div>
      </article>
    </section>
  );
}
type Props = {
  img?: string;
  title: string;
  name: string;
};

function Avatar({ img, title, name }: Props) {
  return (
    <article className="md:w-[200px] flex flex-col justify-center items-center">
      <div className="avatar">
        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h3 className="font-bold text-center text-xl text-white">{title}</h3>
      <p className="text-white text-center">{name}</p>
    </article>
  );
}
