 const reportGenerate = async () => {
    setLoading(true);
    try {
      const response = await axiosConfig.get(
        `/captureweight/viewallgarbagereportdata?startDate=${startDate}&endDate=${endDate}&nagarpalikaId=${selectednagarPalikas}`,
        { responseType: "blob" } // Set the responseType to 'blob' to receive binary data
      );

      // Create a blob from the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${Date.now()}.xlsx`);
      document.body.appendChild(link);
      link.click();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
