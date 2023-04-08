import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Table from '../components/Table'
import mockMembers from '../mock/members.json'
import mockTeams from '../mock/teams.json'

const TeamDetail = () => {
  const { teamId } = useParams()
  const fields = ['ID', 'First Name', 'Last Name']

  const team = useMemo(() => {
    return mockTeams.find((mt) => mt.id === Number(teamId))
  }, [teamId])

  const members = useMemo(() => {
    return mockMembers.filter((mm) => mm.team.id === Number(teamId))
  }, [teamId])

  const data = useMemo(() => {
    if (members) {
      return members.map((mm) => ({
        id: mm.id,
        firstName: mm.first_name,
        lastName: mm.last_name
      }))
    }
    return []
  }, [members])

  return (
    <div className="page-container">
      <h1 className="page-title">{team?.name}</h1>
      <Table fields={fields} data={data} />
    </div>
  )
}

export default TeamDetail
