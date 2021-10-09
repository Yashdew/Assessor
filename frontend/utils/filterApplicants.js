export const getApplicantList = (searchString, applicants) => {
  const list = applicants.filter((applicant) => {
    return applicant.personal_details.name
      .toLowerCase()
      .includes(searchString.toLowerCase());
    // ||applicant.education[0].toLowerCase().includes(searchString.toLowerCase())
  });

  return list;
};
