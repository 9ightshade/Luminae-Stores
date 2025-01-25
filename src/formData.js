const formData = [
  {
    id: 1,
    label: 'Course',
    fields: [
      { name: 'programmeTitle', required: true, label: 'Program Title', type: 'select', options: ["Post Graduate Diploma in Business (PGDBA)", "Masters in Business Administration (MBA)", "Master of Sciences (M.Sc)", "Doctorate in Business Administration (DBA)"] },
      { name: 'courseTitle', required: true, label: 'List Of Courses', type: 'select', options: ["Accounting", "Management", "Marketing", "Finance", "ICT Management", "Supply Chain and Logistics Management", "Procurement and Contract Management", "Healthcare and Hospital Management", "Human Resource Management"] }
    ]
  },

  {

    id: 2,
    label: 'Personal Information',
    fields: [
      { name: 'title', label: 'Title', required: true, type: 'select', options: ['Dr', 'Mrs', 'Miss', 'Prof', 'Mr'] },
      { name: 'firstName', label: 'First Name', required: true, type: 'text' },
      { name: 'middleName', label: 'Middle Name', required: true, type: 'text' },
      { name: 'lastName', label: 'Last Name', required: true, type: 'text' },
      { name: 'email', label: 'Email', required: true, type: 'email' },
      { name: 'sex', label: 'Sex', required: true, type: 'select', options: ['male', 'female'] },
      { name: 'maritalStatus', label: 'Marital Status', type: 'select', required: true, options: ['single', 'married'] },
      { name: 'dateOfBirth', label: 'Date of Birth', required: true, type: 'date' },
      { name: 'address', label: 'Address', required: true, type: 'text' },
      { name: 'religion', label: 'Religion', required: true, type: 'select', options: ['Christianity', 'Muslim', 'Others'] },
      { name: 'phone', label: 'Phone', required: true, type: 'tel' },
      { name: 'physicalChallenge', label: 'Physical Challenge', required: true, type: 'text' },
      { name: 'photo', label: 'Upload Photo', required: true, type: 'file' },
    ]
  },

  {
    id: 3,
    label: 'Emergency Contact',
    fields: [
      { name: 'nameOfNextOfKin', required: true, label: 'Name', type: 'text' },
      { name: 'relationshipWithNextOfKin', required: true, label: 'Relationship', type: 'text' },
      { name: 'telephoneNumberOfNextOfKin', required: true, label: 'Number', type: 'tel' },
      { name: 'emailOfNextOfKin', required: true, label: 'Email', type: 'email' },
      { name: 'addressOfNextOfKin', required: true, label: 'Address', type: 'text' },
    ]
  },

  {
    id: 4,
    label: 'Citizenship',
    fields: [
      { name: 'nationality', required: true, label: 'Nationality', type: 'select', options:['Nigeria', 'Ghana', 'South Africa', 'Lybia'] },
      { name: 'countryOfResidence', required: true, label: 'Country of Residence', type: 'select', options: ['USA', 'Canada', 'UK', 'Australia', "Nigeria"] },
      { name: 'primaryLangugae', required: true, label: 'Primary Language', type: 'text' },
      { name: 'stateOfOrigin', required: true, label: 'State Of Origin', type: 'text', },

    ]
  },

  {
    id: 5,
    label: 'Work Experience',
    fields: [
      { name: 'postQualificationExperienceYears', required: true, label: 'Post Qualification Experience', type: 'number' },
      { name: 'managerialExperienceYears', required: true, label: 'Managerial Experience', type: 'number' },
    ]
  },
  {
    id: 6,
    label: 'RSUBS Programme Qualification',
    fields: [
      { name: 'highestQualification', required: true, label: 'Highest Qualification', type: 'select', options:["Master's Degree", "Bachelor's Degree", "HND"] },
      { name: 'classOfDegree', required: true, label: 'Class Of Degree', type: 'select', options:["First Class", "2nd Class Upper", "2nd Class Lower","3rd Class"] },
      { name: 'factorsMotivatingMBA', required: true, label: 'Factors Motivating MBA', type: 'text', },
      { name: 'factorsHinderingMBA', required: true, label: 'Factors Hindering MBA', type: 'text', },
    ]
  },


  {
    id: 7,
    label: 'Qualifications',
    fields: [
      { name: 'institutionName', required: true, label: 'Institution Name', type: 'text' },
      { name: 'institutionType', required: true, label: 'Institution Type', type: 'select', options:['University', 'College', 'Polytechnique'] },
      { name: 'certificateAwarded', required: true, label: 'Certificate Awarded', type: 'text', },
      { name: 'startDate', required: true, label: 'Start Date', type: 'date', },
      { name: 'endDate', required: true, label: 'End Date', type: 'date', },
    ]
  },


  {
    id: 8,
    label: 'Program Financing',
    fields: [
      { name: 'fundingMethod', required: true, label: 'Funding   Method: How Do You Intend To Pay for this Program?', type: 'select', options:['Individual Sponsorship', 'Schoolarship', 'Guidance Sponsorship'] },
    ]
  },


  {
    id: 9,
    label: 'Attachment',
    fields: [
      { name: 'degreeCertificate', required: true, label: 'Degree Certificate', type: 'file' },
      { name: 'curriculumVitae', required: true, label: 'Curiculum Vitae', type: 'file' },
      { name: 'evidenceOfAbilityToPay', required: true, label: 'Evidence of Ability To Pay', type: 'file' },
      { name: 'oLevelResult', required: true, label: 'O level Result', type: 'file' },
      { name: 'nyscExemptionLetter', required: true, label: 'Nysc Exemption Letter', type: 'file' },
    ]
  },
];

export default formData;