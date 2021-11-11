export const getApplicantList = (searchString, applicants) => {
  const list = applicants
    .filter((applicant) => {
      return applicant.personal_details.name
        .toLowerCase()
        .includes(searchString.toLowerCase());
    })
    //Backend is not ready yet, sort randomly on JD select
    .sort(() => 0.5 - Math.random());

  return list;
};
