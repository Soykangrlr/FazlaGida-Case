
 export const handleScroll = async (e,fetchNextPage) => {
    const element = e.target;
    // Scroll yüksekline göre query çalışacak
    if (element.scrollHeight - element.scrollTop >element.clientHeight-1.5 && element.scrollHeight - element.scrollTop <element.clientHeight+1.5 ) {

    await fetchNextPage();
      
    }
  };