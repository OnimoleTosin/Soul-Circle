import React from "react";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { groups } from '@/Data/Dummydata';

export default function CommunitySection() {
  return (
    <>
      <section className="bg-cover bg-center text-white py-20 px-4 relative" style={{ backgroundImage: `url('/assets/img1.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FDFDFD]">
            Never experience loneliness again.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#FDFDFD]">
            Join our community of over 300,000 members and enrich your life with activities,
            interest groups, social connections, companionship and more.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#3566A0] hover:bg-blue-600 text-white text-base px-6 py-3 rounded-lg transition">
            Call a friend <FaArrowRight className="text-lg" />
          </button>
        </div>
      </section>


      <section className="text-center px-4 md:px-32 py-8 bg-[#FAFAFA]">
        <h2 className="text-2xl font-bold mb-2 text-[#645674]">Popular Groups To Join</h2>
        <p className="text-[#333333] mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
          pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={group.image}
                  alt={group.name}
                  width={50}
                  height={70}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-md mb-1">{group.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{group.members} members</p>

              <div className="flex justify-center -space-x-2 mb-2">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`/assets/groups/${i}.png`}
                    alt="friend"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-4">20 friends are members</p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                Join
              </button>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          See more groups &rarr;
        </button>
      </section>
    </>
  );
}
