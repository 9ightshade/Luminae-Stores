import { GlobeAltIcon, IdentificationIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
function Citizenship({ data, onChange }) {
  const countries = [
    { value: "nigeria", label: "Nigeria" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "united-states", label: "United States" },
    { value: "united-kingdom", label: "United Kingdom" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-6 border-b pb-4">
        <GlobeAltIcon className="h-8 w-8 text-[#39447F] mr-3" />
        <h2 className="text-2xl font-bold text-[#39447F]">Citizenship Information</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
          >
            <IdentificationIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            Nationality
          </label>
          <select
            id="nationality"
            name="nationality"
            value={data.nationality}
            onChange={(e) => onChange('nationality', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
              transition-all duration-300"
          >
            <option value="">Select Nationality</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label
            htmlFor="countryOfResidence"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
          >
            <IdentificationIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            Country of Residence
          </label>
          <select
            id="countryOfResidence"
            name="countryOfResidence"
            value={data.countryOfResidency}
            onChange={(e) => onChange('countryOfResidency', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
              transition-all duration-300"
          >
            <option value="">Select Country of Residence</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label
            htmlFor="primaryLanguage"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
          >
            <IdentificationIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            Primary Language
          </label>
          <input
            type="text"
            id="primaryLanguage"
            name="primaryLanguage"
            value={data.primaryLanguage}
            onChange={(e) => onChange('primaryLanguage', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
              transition-all duration-300"
          />
        </div>
        
        <div>
          <label
            htmlFor="stateOfOrigin"
            className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
          >
            <IdentificationIcon className="h-5 w-5 mr-2 text-[#39447F]" />
            State of Origin
          </label>
          <input
            type="text"
            id="stateOfOrigin"
            name="stateOfOrigin"
            value={data.stateOfOrigin}
            onChange={(e) => onChange('stateOfOrigin', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F] 
              transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 italic flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        Please provide accurate citizenship information
      </div>
    </div>
  );
}

export default Citizenship;