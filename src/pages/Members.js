import { useMemo } from 'react'

import Table from '../components/Table'
import mockMembers from '../mock/members.json'

const Members = () => {
  const fields = ['ID', 'First Name', 'Last Name', 'Team Name']

  const data = useMemo(() => {
    return mockMembers.map((mm) => ({
      id: mm.id,
      firstName: mm.first_name,
      lastName: mm.last_name,
      teamName: mm.team.name
    }))
  }, [])

  return (
    <div className="page-container">
      <h1 className="page-title">Members</h1>
      <Table fields={fields} data={data} />
    </div>
  )
}

export default Members
