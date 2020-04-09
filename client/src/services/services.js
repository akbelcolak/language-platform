export const Gender = [
    { id: "-" },
    { id: "xy", name: "male" },
    { id: "xx", name: "female" }
  ];
  
  export function getGender() {
    return Gender.filter(g => g);
  };


  export const location = [
    { id: "-" },
    { id: "0", name: "Brussels" },
    { id: "1", name: "Flamish-Brabant" },
    { id: "2", name: "Antwerp" },
    { id: "3", name: "Limburg" },
    { id: "4", name: "Luik(Liege)" },
    { id: "5", name: "West-Flanders" }
  ];

 

  export const nativeLanguage = [
    { id: "0", name: "Dutch" },
    { id: "1", name: "French" },
    { id: "2", name: "German" },
    { id: "3", name: "English" }
  ];

  

  export const languageToLearn = [
    { id: "-" },
    { id: "0", name: "Dutch" },
    { id: "1", name: "French" },
    { id: "2", name: "German" },
    { id: "3", name: "English" }
  ];
  
  export function getLanguageToLearn() {
    return languageToLearn.filter(g => g);
  };

  export const skill = [
    { id: "0", name: "IT" },
    { id: "1", name: "Health" },
    { id: "2", name: "Law" },
    { id: "3", name: "Sports" },
    { id: "4", name: "Journalism" },
    { id: "5", name: "Education" },
    { id: "6", name: "Literature" }
  ];

  export function getSkill() {
    return skill.filter(g => g);
  };