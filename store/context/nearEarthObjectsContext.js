import { createContext, useState, useEffect } from "react";
import { UseNasaNearEarthObjects } from "../../hooks/useNasaNearEarthObjects";
import { getNearEarthObjectDetails } from "../../utils/getNearEarthObjectDetails";
import { getFormattedDate } from "../../utils/getFormattedDate";

export const NearEarthObjectsContext = createContext({
  apiResponse: [],
});

export const NearEarthObjectsContextProvider = ({ children }) => {
  const todaysDate = new Date();
  const [formattedDate, setFormattedDate] = useState(
    getFormattedDate(todaysDate)
  );
  const [apiResponse, setApiResponse] = useState([]);

  const { data } = UseNasaNearEarthObjects(formattedDate);
  const response = getNearEarthObjectDetails({ data, formattedDate });

  useEffect(() => {
    setFormattedDate(getFormattedDate(todaysDate));
  }, [todaysDate]);

  useEffect(() => {
    setApiResponse(response);
  }, [response.length]);

  console.log("in context =====>", apiResponse);

  const contextValue = {
    apiResponse,
  };

  return (
    <NearEarthObjectsContext.Provider value={contextValue}>
      {children}
    </NearEarthObjectsContext.Provider>
  );
};

export default NearEarthObjectsContextProvider;
