
 export const handleScroll = async (e,fetchNextPage) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop >element.clientHeight-1.5 && element.scrollHeight - element.scrollTop <element.clientHeight+1.5 ) {

    await fetchNextPage();
      
    }
  };