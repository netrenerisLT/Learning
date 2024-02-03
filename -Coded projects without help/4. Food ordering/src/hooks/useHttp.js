import { useEffect, useState } from "react";

async function sendHTTPrequest(url, config) {
  const response = await fetch(url, config);

  const respData = await response.json();

  if (!response.ok) {
    throw new Error(respData.message || "Something went wrong");
  }

  return respData;
}

export default function useHTTP(url, config) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const respData = sendHTTPrequest(url, config);
        setData(respData);
      } catch (error) {
        setError(error.message || "Something wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
