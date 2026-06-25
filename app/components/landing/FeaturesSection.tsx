import React from "react";
import { MessageSquareText, Gem, Clock } from "lucide-react";

const features = [
  {
    title: "Detailed Consultation",
    description: "Extensive discussion with you to understand your need.",
    icon: <MessageSquareText size={28} />,
  },
  {
    title: "Premium Materials",
    description: "We source the best materials from reputable suppliers.",
    icon: <Gem size={28} />,
  },
  {
    title: "On-time Delivery",
    description: "On time, every time your project delivered as promised.",
    icon: <Clock size={28} />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Icon box */}
              <div className="p-3 bg-gray-100 border border-gray-200 text-gray-600 transition-colors duration-300 group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 shrink-0">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-900 mb-2 uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

// import React from "react";
// import Image from "next/image";

// const features = [
//   {
//     title: "Detailed Consultation",
//     description: "Extensive discussion with you to understand your need.",
//     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80",
//   },
//   {
//     title: "Premium Materials",
//     description: "We source the best materials from reputable suppliers.",
//     image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80",
//   },
//   {
//     title: "On-time Delivery",
//     description: "On time, every time your project delivered as promised.",
//     image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=300&q=80",
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="py-20 px-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
//             >
//               {/* Image box */}
//               <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-yellow-500">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Title & Description */}
//               <div className="flex flex-col">
//                 <h3 className="text-sm font-bold tracking-[0.2em] text-gray-900 mb-3 uppercase">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
