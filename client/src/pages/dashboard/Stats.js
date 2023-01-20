import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading, ChartsContainer } from '../../components/index.js';

const Stats = () => {
  const {showStats, isLoading, monthlyApplications} = useAppContext()
  useEffect(()=>{
    showStats()
    // eslint-disable-next-line
  },[])

  if(isLoading){
    <Loading center />
  }

  return (
    <>
    <StatsContainer/>
    {monthlyApplications.length>0 && <ChartsContainer />}
    </>
  )
}
export default Stats