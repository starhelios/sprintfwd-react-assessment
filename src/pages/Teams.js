import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import Table from '../components/Table'
import mockTeams from '../mock/teams.json'

const Teams = () => {
  const navigate = useNavigate()
  const fields = ['ID', 'Name', 'Members Cnt']

  const selectTeam = (item) => {
    navigate(`/teams/${item.id}`)
  }

  const data = useMemo(() => {
    return mockTeams.map((mt) => ({
      id: mt.id,
      name: mt.name,
      membersCnt: mt.member_count
    }))
  }, [])

  return (
    <div className="page-container">
      <h1 className="page-title">Teams</h1>
      <Table fields={fields} data={data} onRowClick={selectTeam} />
    </div>
  )
}

export default Teams
