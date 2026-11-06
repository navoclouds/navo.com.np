import React from "react";
import SolutionsCarousel from "./SolutionsCarousel";
import { Solution, solutions } from "../Solutions/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurSolutions() {
  return (
    <section
      className="bg-radial from-blue-50/80 to-white"
      aria-labelledby="home-products"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2
            id="home-products"
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            <span className="text-brand-blue">Software Solutions</span> for
            Businesses
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto sm:text-base">
            Explore software solutions, including web applications, desktop
            software, mobile apps, business management systems, and AI-powered
            applications designed to solve real-world challenges.
          </p>
        </div>

        {/* carousel */}
        <div className="w-full max-w-5xl pt-8 mx-auto">
          <SolutionsCarousel>
            {solutions?.map((elem: Solution, index: number) => {
              return (
                <div key={elem.id} id={elem.id} className="group p-2">
                  <div className="w-full flex flex-wrap items-center bg-white shadow-md rounded-xl">
                    <div className="relative w-full md:w-1/2 rounded-t-xl sm:rounded-t-none sm:rounded-l-xl shadow-sm h-80 md:h-100 flex justify-center items-center overflow-hidden">
                      {/* Blurred background */}
                      <Image
                        src={elem.cover}
                        alt={`Background Blur Image for ${elem.title}`}
                        width={100}
                        height={100}
                        className="object-cover object-center w-full z-0 h-full blur-lg scale-110 absolute"
                        aria-hidden="true"
                      />

                      {/* Original image */}
                      <Image
                        src={elem.cover}
                        alt={elem.title}
                        width={400}
                        height={400}
                        className="object-contain transition-all group-hover:scale-105 relative object-center w-full h-full z-10"
                      />
                    </div>
                    <div className="w-full p-5 md:w-1/2 gap-4 flex flex-col">
                      {/* name */}
                      <b className="text-brand-navy">{elem.name}</b>
                      <h3
                        className={`text-2xl font-bold text-slate-800 transition-all duration-300 ${index % 2 === 0 ? "group-hover:text-brand-pink" : "group-hover:text-brand-blue"}`}
                      >
                        {elem.title}
                      </h3>
                      <div
                        className="flex flex-col gap-4 text-slate-500 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: `${elem.description}`,
                        }}
                      ></div>
                      <div className="w-full flex py-2 flex-wrap items-center gap-8">
                        {elem.links.map(
                          (
                            button: { link: string; text: string },
                            i: number,
                          ) => {
                            return (
                              <Link
                                href={button.link}
                                key={i}
                                className={`text-sm w-fit cursor-pointer bg-black text-white transition-all duration-300 px-5 py-2.5 rounded-xl ${index % 2 == 0 ? "hover:bg-brand-pink" : "hover:bg-brand-blue"}`}
                              >
                                {button.text}
                              </Link>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </SolutionsCarousel>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/business-solutions"
            className="group inline-flex items-center gap-3 font-semibold text-black transition-transform duration-300 hover:scale-105 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <span>Explore Business Solutions</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-brand-blue">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
