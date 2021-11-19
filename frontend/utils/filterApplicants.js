export const getApplicantList = (searchString, applicants) => {
  const list = applicants
    .filter((applicant) => {
      return applicant.personal_details.name
        .toLowerCase()
        .includes(searchString.toLowerCase());
    })

    .sort((a, b) => b.score - a.score);

  return list;
};
