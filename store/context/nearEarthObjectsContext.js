import { createContext, useState, useEffect } from "react";
import { UseNasaNearEarthObjects } from "../../hooks/useNasaNearEarthObjects";
import { getNearEarthObjectDetails } from "../../utils/getNearEarthObjectDetails";
import { getFormattedDate } from "../../utils/getFormattedDate";

export const NearEarthObjectsContext = createContext({
  apiResponse: [],
});

export const NearEarthObjectsContextProvider = ({ children }) => {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    getFormattedDate(todaysDate)
  );
  const [apiResponseData, setApiResponseData] = useState([]);

  const { data } = UseNasaNearEarthObjects(formattedDate);
  const apiResponse = getNearEarthObjectDetails({ data, formattedDate });

  useEffect(() => {
    setFormattedDate(getFormattedDate(todaysDate));
  }, [todaysDate]);

  useEffect(() => {
    setApiResponseData(apiResponse);
  }, [apiResponse.length]);

  console.log("in context =====>", apiResponseData);

  const contextValue = {
    apiResponse: apiResponseData,
  };

  return (
    <NearEarthObjectsContext.Provider value={contextValue}>
      {children}
    </NearEarthObjectsContext.Provider>
  );
};

export default NearEarthObjectsContextProvider;
