import { DocumentPlusIcon } from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
function Attachment({ data, onChange }) {
  const attachmentTypes = [
    { 
      id: "degreeCertificate", 
      label: "Degree Certificate",
      name: "degreeCertificate"
    },
    { 
      id: "curriculumVitae", 
      label: "Curriculum Vitae",
      name: "curriculumVitae"
    },
    { 
      id: "evidenceOfAbilityToPay", 
      label: "Evidence of Ability To Pay",
      name: "evidenceOfAbilityToPay"
    },
    { 
      id: "oLevelResult", 
      label: "O Level Result",
      name: "oLevelResult"
    },
    { 
      id: "nyscExemptionLetter", 
      label: "NYSC Exemption Letter",
      name: "nyscExemptionLetter"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-6 border-b pb-4">
        <DocumentPlusIcon className="h-8 w-8 text-[#39447F] mr-3" />
        <h2 className="text-2xl font-bold text-[#39447F]">Document Attachments</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {attachmentTypes.map((attachment) => (
          <div key={attachment.id}>
            <label
              htmlFor={attachment.id}
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <DocumentPlusIcon className="h-5 w-5 mr-2 text-[#39447F]" />
              {attachment.label}
            </label>
            <input
              type="file"
              id={attachment.id}
              name={attachment.name}
              onChange={(e) => onChange(attachment.name, e.target.files[0])}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-[#39447F]/10 file:text-[#39447F]
                hover:file:bg-[#39447F]/20
                focus:ring-2 focus:ring-[#39447F]/50 focus:border-[#39447F]
                transition-all duration-300"
            />
          </div>
        ))}
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
        Please upload all required documents carefully
      </div>
    </div>
  );
}

export default Attachment;