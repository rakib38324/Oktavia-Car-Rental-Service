import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transparent & Flexible Pricing
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            No hidden costs. Choose the rental plan that matches your trip
            length and enjoy free delivery, unlimited mileage (T&Cs apply), and
            24/7 support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Daily Plan */}
          <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-900 text-center">
              Daily Plan
            </h4>
            <p className="mt-4 text-center">
              <span className="line-through text-gray-400 text-lg mr-2">
                RM120
              </span>
              <span className="text-4xl font-bold text-indigo-700">RM95+</span>
              <span className="text-sm text-gray-500">/day</span>
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Perfect for short trips
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Free airport delivery
                & pickup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Unlimited
                short-distance km
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> 24/7 roadside
                assistance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Insurance included
              </li>
            </ul>
            <a
              href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
              className="mt-8 block w-full text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Book Daily
            </a>
          </div>

          {/* Weekly Plan */}
          <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                Best Choice
              </span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 text-center">
              Weekly Plan
            </h4>
            <p className="mt-4 text-center">
              <span className="text-4xl font-bold text-indigo-700">
                Save 20%
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Ideal for longer stays
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Lower daily rate
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Priority vehicle
                allocation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Flexible
                pickup/dropoff
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Insurance included
              </li>
            </ul>
            <a
              href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
              className="mt-8 block w-full text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Book Weekly
            </a>
          </div>

          {/* Corporate Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-gray-900 text-center">
              Corporate Plan
            </h4>
            <p className="mt-4 text-center">
              <span className="text-4xl font-bold text-indigo-700">
                Custom Rates
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Best for companies & events
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Invoice & contract
                support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Multiple-vehicle
                booking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Dedicated account
                manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Flexible payment terms
              </li>
            </ul>
            <a
              href="http://www.wasap.my/601120579875/OktaviaCarRentalKuching&Samarahan"
              className="mt-8 block w-full text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
