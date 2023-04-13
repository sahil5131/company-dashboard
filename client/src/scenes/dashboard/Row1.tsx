import DashboardBox from '@/components/DashboardBox'
import { useGetkpisQuery } from '@/state/api'
import React from 'react'

type Props = {}

const Row1=(props: Props) => {
  const { data } = useGetkpisQuery()
  return (
    <>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}


export default Row1