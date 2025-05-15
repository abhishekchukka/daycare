import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SubsidyInformation = () => {
  // Properly type the ref as HTMLDivElement
  const feeStructureRef = useRef<HTMLDivElement>(null);

  const scrollToFeeStructure = (e: React.MouseEvent) => {
    e.preventDefault();
    // TypeScript will now understand that current is either null or HTMLDivElement
    feeStructureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Your Guide to the Alberta Subsidies
              </h1>
              <div className="w-16 h-1 bg-purple-400 mb-6"></div>
              <p className="text-lg font-medium text-gray-600 mb-6">
                Learn about the provincial childcare subsidy amounts available
                to families in Alberta.
              </p>
              <div className="mb-8 text-gray-700">
                <p className="mb-4">
                  Effective April 1st 2025, childcare subsidies for children up
                  to kindergarten age attending daycare during regular school
                  hours and children enrolled in licensed preschool programs are
                  discontinued.
                </p>
                <p>
                  Families with children attending licensed daycare programs (up
                  to kindergarten age) during regular school hours will
                  transition to a new universal monthly fee structure.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={scrollToFeeStructure}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold text-sm border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  NEW FEE STRUCTURE
                </button>
                <Link
                  href="https://www.himama.com/online_registration/apply/little-soldiers-family-daycare-inc"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  REGISTER FOR LSFD
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 min-w-[300px] max-w-lg">
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src="/contact.webp"
                  alt="Caregiver helping child with activity"
                  fill
                  className="rounded-2xl shadow-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Structure Section */}
      <div ref={feeStructureRef} className="bg-purple-100 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            New Childcare Fee Structure
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
            Families with children up to kindergarten age attending full-time
            licensed daycare programs during regular school hours will pay a
            flat monthly parent fee instead of applying for a subsidy.
          </p>

          {/* Fee Table */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 bg-purple-50 border border-purple-100 text-purple-700">
                      Full-Time Care (100+ hours per month):
                    </th>
                    <th className="text-left py-4 px-6 bg-purple-50 border border-purple-100 text-purple-700">
                      Part-Time Care (under 100 hours per month):
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-6 border border-purple-100">
                      $326.25/month
                    </td>
                    <td className="py-4 px-6 border border-purple-100">
                      $230.00/month
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Verify Your Eligibility:
            </h3>
            <p className="mb-6 text-gray-700">
              To check your eligibility and for more details on financial
              support, please visit the provincial government website.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.canada.ca/en/early-learning-child-care-agreement/agreements-provinces-territories/alberta-2021.html"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold text-sm border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                CONFIRM YOUR ELIGIBILITY
              </Link>
              <Link
                href="https://www.himama.com/online_registration/apply/little-soldiers-family-daycare-inc"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                NEED HELP APPLYING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsidyInformation;
