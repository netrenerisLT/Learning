import { useEffect, useState, useCallback } from "react";

async function sendHTTPrequest(url, config) {
  const response = await fetch(url, config);

  const respData = await response.json();

  if (!response.ok) {
    throw new Error(respData.message || "Something went wrong");
  }

  return respData;
}

export default function useHTTP(url, config, initialDAta) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialDAta);

  function clearData() {
    setData(initialDAta);
  }

  const sendRequest = useCallback(
    async function sendRequest(orderData) {
      setIsLoading(true);
      try {
        const respData = await sendHTTPrequest(url, {
          ...config,
          body: orderData,
        });
        setData(respData);
      } catch (error) {
        setError(error.message || "Something wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
