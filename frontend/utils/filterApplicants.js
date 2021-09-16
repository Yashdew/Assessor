export const getApplicantList = (searchString, applicants) => {
  const list = applicants.filter((applicant) => {
    return (
      applicant.name.toLowerCase().includes(searchString.toLowerCase()) ||
      applicant.college.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  return list;
};
