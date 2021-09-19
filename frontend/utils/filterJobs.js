export const getJobList = (searchString, jobs) => {
  const list = jobs.filter(({ company, position }) => {
    return (
      company.toLowerCase().includes(searchString.toLowerCase()) ||
      position.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  return list;
};
