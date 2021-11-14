import React, { useState, useEffect } from "react";
export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  //state for loading
  const [loading, setLoading] = useState(true);

  //states for searching keywords.
  const [jdSearchKeyword, setJdSearchKeyword] = useState("");
  const [candidateSearchKeyword, setCandidateSearchKeyword] = useState("");

  //states for JDs, Candidates & selected JD
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [selectedJd, setSelectedJd] = useState(-1);

  const store = {
    jdSearch: [jdSearchKeyword, setJdSearchKeyword],
    candidateSearch: [candidateSearchKeyword, setCandidateSearchKeyword],
    jd: [jobDescriptions, setJobDescriptions],
    candidates: [candidates, setCandidates],
    selectedJd: [selectedJd, setSelectedJd],
    loading: [loading, setLoading],
  };

  useEffect(async () => {
    //Get initial data
    const jdResponse = await fetch("api/jobs");
    const candidateResponse = await fetch("api/applicants");

    //Set Initial Data
    setJobDescriptions(await jdResponse.json());
    setCandidates(await candidateResponse.json());

    //Stop showing loader
    setLoading(false);
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
